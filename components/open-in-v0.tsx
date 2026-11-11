import { cn } from "@/lib/utils"
import { getV0Url } from "@/lib/v0"

interface OpenInV0Props {
  /** The registry component name (e.g., "button"). */
  name: string
  /** Optional custom prompt for v0. */
  prompt?: string
  className?: string
}

export function OpenInV0({ name, prompt, className }: OpenInV0Props) {
  return (
    <a
      href={getV0Url(name, prompt)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      <svg
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-auto"
        aria-hidden="true"
      >
        <path
          d="m.3 0 10 20h2.4L2.4 0H.3ZM5 0l10 20h2.3L7.1 0H5Zm22 0h-2v2h2V0Zm0 4h-2v2h2V4Zm-2 4h2v2h-2V8Zm2 4h-2v2h2v-2Zm0 4h-2v2h2v-2Zm-4 0h-2v2h2v-2Zm-4 0h-2v2h2v-2Zm-4 0h-2v2h2v-2Zm4-4h-2v2h2v-2Zm4 0h-2v2h2v-2Zm-8 0h-2v2h2v-2Zm-4 0h-2v2h2v-2Zm0-4h-2v2h2V8Zm4 0h-2v2h2V8Zm4 0h-2v2h2V8Zm-8-4h-2v2h2V4Zm4 0h-2v2h2V4Zm-4-4h-2v2h2V0Zm4 0h-2v2h2V0Zm-8 4h-2v2h2V4Zm0-4h-2v2h2V0Z"
          fill="currentColor"
        />
      </svg>
      Open in v0
    </a>
  )
}
