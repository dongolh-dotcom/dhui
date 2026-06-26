"use client"

import { useEffect, useRef } from 'react';

// Types
interface Particle {
  size: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  time: number;
  reset: () => void;
  step: () => void;
}

interface Dimensions {
  width: number;
  height: number;
  cx: number;
  cy: number;
}

interface ParticleCanvasProps {
  maxParticles?: number;
  particleSizeMin?: number;
  particleSizeMax?: number;
  speedScale?: number;
}

// Shader sources
const SHADERS = {
  vertex: `
    attribute vec2 a_position;
    uniform vec2 u_resolution;
    attribute vec2 a_color;
    varying vec2 v_color;
    void main(){
      gl_Position = vec4( vec2( 1, -1 ) * ( ( a_position / u_resolution ) * 2.0 - 1.0 ), 0, 1 );
      v_color = a_color;
    }
  `,
  fragment: `
    precision mediump float;
    varying vec2 v_color;
    uniform float u_tick;
    float frac = 1.0/6.0;
    void main(){
      float hue = v_color.x + u_tick;
      hue = abs(hue - floor(hue));
      vec4 color = vec4( 0, 0, 0, 1 );
      if( hue < frac ){
        color.r = 1.0;
        color.g = hue / frac;
        color.b = 0.0;
      } else if( hue < frac * 2.0 ){
        color.r = 1.0 - ( hue - frac ) / frac;
        color.g = 1.0;
        color.b = 0.0;
      } else if( hue < frac * 3.0 ){
        color.r = 0.0;
        color.g = 1.0;
        color.b = ( hue - frac * 2.0 ) / frac;
      } else if( hue < frac * 4.0 ){
        color.r = 0.0;
        color.g = 1.0 - ( hue - frac * 3.0 ) / frac;
        color.b = 1.0;
      } else if( hue < frac * 5.0 ){
        color.r = ( hue - frac * 4.0 ) / frac;
        color.g = 0.0;
        color.b = 1.0;
      } else {
        color.r = 1.0;
        color.g = 0.0;
        color.b = 1.0 - ( hue - frac * 5.0 ) / frac;
      }
      color = vec4( color.rgb * v_color.y, 1.0 );
      gl_FragColor = color;
    }
  `
};

// Helper functions - moved outside component
function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader | null,
  fragmentShader: WebGLShader | null
): WebGLProgram | null {
  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function getCircleTriangles(x: number, y: number, r: number): number[] {
  const triangles: number[] = [];
  const segments = 6;
  const inc = (Math.PI * 2) / segments;
  let px = x + r;
  let py = y;

  for (let i = inc; i <= Math.PI * 2 + inc; i += inc) {
    const nx = x + r * Math.cos(i);
    const ny = y + r * Math.sin(i);
    triangles.push(x, y, px, py, nx, ny);
    px = nx;
    py = ny;
  }

  return triangles;
}

const ParticleCanvas = ({
  maxParticles = 1000,
  particleSizeMin = 2,
  particleSizeMax = 5,
  speedScale = 2
}: ParticleCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const tickRef = useRef(0);
  const dimensionsRef = useRef<Dimensions>({ width: 0, height: 0, cx: 0, cy: 0 });
  const animationFrameIdRef = useRef<number | null>(null);
  
  // Use ref for props to avoid re-initialization
  const propsRef = useRef({ maxParticles, particleSizeMin, particleSizeMax, speedScale });

  // Keep propsRef in sync without triggering WebGL reinit
  useEffect(() => {
    propsRef.current = { maxParticles, particleSizeMin, particleSizeMax, speedScale };
  }, [maxParticles, particleSizeMin, particleSizeMax, speedScale]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // premultipliedAlpha: false for proper transparency
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    dimensionsRef.current = { width: w, height: h, cx: w / 2, cy: h / 2 };

    // Create shaders and program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, SHADERS.vertex);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, SHADERS.fragment);
    const shaderProgram = createProgram(gl, vertexShader, fragmentShader);

    if (!shaderProgram) return;

    const attribLocs = {
      position: gl.getAttribLocation(shaderProgram, 'a_position'),
      color: gl.getAttribLocation(shaderProgram, 'a_color')
    };

    const buffers = {
      position: gl.createBuffer(),
      color: gl.createBuffer()
    };

    const uniformLocs = {
      resolution: gl.getUniformLocation(shaderProgram, 'u_resolution'),
      tick: gl.getUniformLocation(shaderProgram, 'u_tick')
    };

    const data: { triangles: number[]; colors: number[] } = { triangles: [], colors: [] };

    // Setup WebGL state
    gl.viewport(0, 0, w, h);
    gl.useProgram(shaderProgram);
    gl.clearColor(0, 0, 0, 0);

    // Enable blending for proper transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.enableVertexAttribArray(attribLocs.position);
    gl.enableVertexAttribArray(attribLocs.color);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(attribLocs.position, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(attribLocs.color, 2, gl.FLOAT, false, 0, 0);

    if (uniformLocs.resolution) {
      gl.uniform2f(uniformLocs.resolution, w, h);
    }

    // Particle factory with closure
    const createParticle = (): Particle => {
      const particle: Particle = {
        size: 0,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        time: 0,
        reset() {
          const props = propsRef.current;
          this.size = props.particleSizeMin + (props.particleSizeMax - props.particleSizeMin) * Math.random();
          this.x = dimensionsRef.current.cx;
          this.y = dimensionsRef.current.cy;
          this.vx = (Math.random() - 0.5) * 2 * props.speedScale;
          this.vy = -2 - props.speedScale * Math.random();
          this.time = 1;
        },
        step() {
          this.x += (this.vx *= 0.995);
          this.y += (this.vy += 0.05);
          this.time *= 0.99;

          const triangles = getCircleTriangles(this.x, this.y, this.size * this.time);
          const hue = this.vy / 10;

          for (let i = 0; i < triangles.length; i += 2) {
            data.triangles.push(triangles[i], triangles[i + 1]);
            data.colors.push(hue, this.time);
          }

          if (this.y - this.size > dimensionsRef.current.height) {
            this.reset();
          }
        }
      };

      particle.reset();
      return particle;
    };

    const clear = () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      data.triangles = [];
      data.colors = [];
    };

    const draw = () => {
      if (data.triangles.length === 0) return;

      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      // DYNAMIC_DRAW for data that changes every frame
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.triangles), gl.DYNAMIC_DRAW);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.colors), gl.DYNAMIC_DRAW);

      gl.drawArrays(gl.TRIANGLES, 0, data.triangles.length / 2);
    };

    const animate = () => {
      clear();
      tickRef.current++;

      const props = propsRef.current;

      // Add particles up to max
      while (particlesRef.current.length < props.maxParticles) {
        particlesRef.current.push(createParticle());
      }

      // Remove excess particles if max decreased
      if (particlesRef.current.length > props.maxParticles) {
        particlesRef.current.length = props.maxParticles;
      }

      particlesRef.current.forEach(particle => particle.step());

      if (uniformLocs.tick) {
        gl.uniform1f(uniformLocs.tick, tickRef.current / 100);
      }

      draw();
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      dimensionsRef.current.cx = e.clientX;
      dimensionsRef.current.cy = e.clientY;
    };

    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;
      canvas.width = newW;
      canvas.height = newH;
      dimensionsRef.current.width = newW;
      dimensionsRef.current.height = newH;
      gl.viewport(0, 0, newW, newH);
      if (uniformLocs.resolution) {
        gl.uniform2f(uniformLocs.resolution, newW, newH);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      // Cancel animation
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      // Remove event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Cleanup WebGL resources
      if (buffers.position) gl.deleteBuffer(buffers.position);
      if (buffers.color) gl.deleteBuffer(buffers.color);
      if (shaderProgram) gl.deleteProgram(shaderProgram);
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);

      // Clear particles
      particlesRef.current = [];
    };
  }, []); // Empty dependency array - only initialize once

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export { ParticleCanvas };