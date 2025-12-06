import { cn } from "@/lib/cn";
import { buttonVariants } from "./ui/button";

export default function DownloadBluelinkInstallerWindows() {
    const download64bitUrl = process.env.NEXT_PUBLIC_DOWNLOAD_BLUELINK_INSTALLER_WINDOWS_64BIT_URL;
    return (
        <div className="flex flex-row gap-4 not-prose">
            <a
                href={download64bitUrl}
                className={cn(
                    buttonVariants({
                        color: 'primary',
                        size: 'sm',
                        className: 'gap-2 px-3 py-2',
                    }),
                )}
                target="_blank"
            >
                Download installer for Windows (64-bit)
            </a>
        </div>
    )
}
