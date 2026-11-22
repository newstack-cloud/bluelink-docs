import type { Metadata } from "next";

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            url: 'https://bluelink.dev',
            images: '/banner.png',
            siteName: 'Bluelink',
            ...override.openGraph,
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@newstackcloud',
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            images: '/banner.png',
            ...override.twitter,
        },
        alternates: {
            types: {
                'application/rss+xml': [
                    {
                        title: 'Bluelink Blog',
                        url: 'https://bluelink.dev/blog/rss.xml',
                    },
                ],
            },
            ...override.alternates,
        },
    };
}

// The site is a static export served from GitHub Pages at bluelink.dev.
export const baseUrl =
    process.env.NODE_ENV === 'development'
        ? new URL('http://localhost:3000')
        : new URL('https://bluelink.dev');