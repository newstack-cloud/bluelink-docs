import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '../components/logo';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/newstack-cloud/bluelink',
    nav: {
      title: (
        <>
          <div className="logo-container">
            <Logo width={36} />
          </div>
          Bluelink
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: 'Documentation',
        url: '/docs/bluelink',
        secondary: false,
        active: 'nested-url'
      },
      {
        text: 'Blog',
        url: '/blog',
        secondary: false,
        active: 'nested-url'
      },
      {
        text: 'Registry',
        url: 'https://registry.bluelink.dev',
        secondary: false,
        external: true,
      }
    ],
  };
}