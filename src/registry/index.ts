import { type Registry } from 'shadcn/registry';
import { ui } from './registry-ui';
import { examples } from './registry-examples';

export const registry = {
  name: 'dongolheartui',
  homepage: 'https://dhui-bay.vercel.app',
  items: [...ui, ...examples],
} satisfies Registry;
