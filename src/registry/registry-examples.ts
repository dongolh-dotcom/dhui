import type { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'floating-label-input-demo',
    type: 'registry:example',
    title: 'Floating Label Input',
    description: 'Material UI floating label input',
    files: [
      {
        path: 'default/examples/floating-label-input-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: ['https://dhui-bay.vercel.app/r/floating-label-input.json'],
  },
  
    

  {
      "name": "stacked-card",
      "type": "registry:component",
      "title": "stacked card",
      "description": "stacked card Layout with hover animations grayscale effects",
      "dependencies": ["lucide-react"],
      "registryDependencies": ["button", "stacked", "label", "textarea", "card"],
      "files": [
        {
          "path": "default/examples/stacked-card-demo.tsx",
          "type": "registry:component"
        }
      ]
    },

    {
    name: 'wave-path-demo',
    type: 'registry:example',
    title: 'WAVEPATH',
    description: 'WAVEPATH',
    files: [
      {
        path: 'default/examples/wave-path-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: ['https://dhui-bay.vercel.app/r/stacked-card.json'],
  },

 {
    name: 'glsl-hills-demo',
    type: 'registry:example',
    title: 'glsl-hills',
    description: 'glsl-hills-demo.tsx',
    files: [
      {
        path: 'default/examples/glsl-hills-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: ['https://dhui-bay.vercel.app/r/stacked-card.json'],
  },

   {
    name: 'particle-canvas-demo',
    type: 'registry:example',
    title: 'particle-canvas-demo.tsx',
    description: 'particle-canvas-demo',
    files: [
      {
        path: 'default/examples/particle-canvas-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: ['https://dhui-bay.vercel.app/r/stacked-card.json'],
  },




];
