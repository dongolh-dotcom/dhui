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
    name: 'stacked card',
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


];
