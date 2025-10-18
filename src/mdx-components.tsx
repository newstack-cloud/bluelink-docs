import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Heading } from 'fumadocs-ui/components/heading';
import { icons } from 'lucide-react';
import type { MDXComponents } from 'mdx/types';
import { APIPage } from 'fumadocs-openapi/ui';
import { openapi } from '@/lib/open-api';
import InstallBluelink from '@/components/install-bluelink';
import DownloadBluelinkInstallerWindows from '@/components/download-bluelink-installer-windows';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...components,
    h4: ({ children, className, ...props }) => (
      <Heading
        as="h4"
        className={`mt-6 mb-6 flex scroll-m-28 flex-row items-center gap-2 ${className || ''}`}
        {...props}
      >
        {children}
      </Heading>
    ),
    FieldsHeading,
    FieldHeading,
    NonLinkableHeading,
    VersionBadge: (props) => <VersionBadge {...props} />,
    APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
    InstallBluelink,
    DownloadBluelinkInstallerWindows,
  };
}

function FieldsHeading() {
  return <p className="text-md border-b pb-3 mb-8 pt-3"><strong>FIELDS</strong></p>;
}


type FieldHeadingProps = {
  fieldName: string;
};

function FieldHeading({ fieldName }: FieldHeadingProps) {
  return <p className="text-lg font-medium mb-6">{fieldName}</p>;
}

function NonLinkableHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-lg font-medium mb-6">{children}</p>;
}

function VersionBadge({ version }: { version: string }) {
  return (
    <div className="flex flex-row gap-2 items-center py-2">
      <div className="text-sm bg-blue-100 dark:bg-blue-900 rounded-md px-2 py-1 font-medium mb-6">Version {version}</div>
    </div>
  );
}
