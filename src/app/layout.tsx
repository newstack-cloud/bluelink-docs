import '@/app/global.css';

import { baseUrl, createMetadata } from '@/lib/metadata';
import { Body } from '@/app/layout.client';
import { Provider } from '@/provider';

export const metadata = createMetadata({
  title: {
    template: '%s | Bluelink',
    default: 'Bluelink',
  },
  description: 'The documentation for Bluelink',
  metadataBase: baseUrl,
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="font-sans" suppressHydrationWarning>
      <Body>
        <Provider>{children}</Provider>
      </Body>
    </html>
  );
}