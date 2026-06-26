import type { Registry } from 'shadcn/registry';

export const ui: Registry['items'] = [
  {
    name: 'floating-label-input',
    type: 'registry:component',
    title: 'Floating Label Input',
    description: 'Material UI floating label input',
    files: [
      {
        path: 'default/ui/floating-label-input.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['@radix-ui/react-label'],
    registryDependencies: ['input'],
  },



    {
    name: 'stacked-card',
    type: 'registry:component',
    title: 'stacked card',
    description: 'stacked card Layout with hover animations grayscale effects',
    files: [
      {
        path: 'default/ui/stacked-card.tsx',
        type: 'registry:component',
      },
    ]
   
  },

 

      {
    name: 'particle-canvas-1',
    type: 'registry:component',
    title: 'particle-canvas',
    description: 'Particle Canvas you can customize this ',
    files: [
      {
        path: 'default/ui/particle-canvas-1.tsx',
        type: 'registry:component',
      },
    ]
   
  },


       {
    name: 'wave-path',
    type: 'registry:component',
    title: 'wave-path',
    description: 'wavepath ',
    files: [
      {
        path: 'default/ui/wave-path.tsx',
        type: 'registry:component',
      },
    ]
   
  },

        {
    name: 'glsl-hills',
    type: 'registry:component',
    title: 'glsl-hills',
    description: 'The component will use inline styles and accepts props fro customization. ',
    files: [
      {
        path: 'default/ui/glsl-hills.tsx',
        type: 'registry:component',
      },
    ]
   
  },


];
