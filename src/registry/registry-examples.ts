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
    registryDependencies: ['https://kelvinmai.io/r/floating-label-input.json'],
  },

  {
      "name": "stacked card",
      "type": "registry:component",
      "title": "stacked card",
      "description": "stacked card Layout with hover animations grayscale effects",
      "dependencies": ["lucide-react"],
      "registryDependencies": ["button", "stacked", "label", "textarea", "card"],
      "files": [
        {
          "path": "default/examples/stacked-card.tsx",
          "type": "registry:component"
        }
      ]
    }



];
