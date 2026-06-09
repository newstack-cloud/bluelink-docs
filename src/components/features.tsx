import { CloudIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { BlocksIcon, CodeIcon, ToolCaseIcon, LinkIcon } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        name: 'Links, Not Plumbing',
        description: (
            <>
                Define your resources and declare how they connect.
                Bluelink derives the networking, permissions and IAM around them
                following industry best practices, so you never hand-write the plumbing
                that other IaC tools require you to maintain.
            </>
        ),
        icon: LinkIcon,
    },
    {
        name: 'Build Your Own Primitives',
        description: (
            <>
                Alongside the usual providers, transformers let you and other
                plugin authors define high level building blocks on top of raw cloud resources,
                like <a href="https://celerityframework.io" className="text-blue-600 dark:text-blue-400">Celerity&apos;s</a> portable multi-cloud primitives.
                <br />
                <br />
                Your team composes meaningful components instead of wiring providers
                together by hand.
            </>
        ),
        icon: BlocksIcon,
    },
    {
        name: 'Tooling That Keeps Up',
        description: (
            <>
                Bluelink ships with a delightful CLI and an editor
                language server that understand your providers and transformers,
                giving you autocomplete, validation and documentation as you write.
                The tooling stays in step with the plugins your project actually uses.
            </>
        ),
        icon: ToolCaseIcon,
    },
]

export default function Features() {
    return (
        <div className="pt-24 pb-32 sm:pt-32 sm:pb-48">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400" id="features">removing burdens</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
                        How Bluelink works
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
                                    <feature.icon aria-hidden="true" className="size-5 flex-none text-blue-600 dark:text-blue-400" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="mt-20 flex items-center justify-center gap-x-6">
                    <Link
                        href="/docs/bluelink/overview"
                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500"
                    >
                        Read the overview
                    </Link>
                </div>
            </div>
        </div>
    )
}
