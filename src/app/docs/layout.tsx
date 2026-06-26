import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    // 'tree' is required to render the sidebar navigation
    <DocsLayout tree={source.pageTree}>
      {children}
    </DocsLayout>
  );
}