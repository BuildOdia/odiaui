"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PreviewFrameProps {
  /** Component name — matches the key in the PREVIEWS map. */
  name: string
  /** Height of the preview iframe. */
  height?: number | string
  className?: string
}

/**
 * Embeds a live component preview in an iframe.
 *
 * Usage in MDX:
 * ```mdx
 * import { PreviewFrame } from "@/components/preview-frame"
 *
 * <PreviewFrame name="button" />
 * ```
 */
export function PreviewFrame({ name, height = 300, className }: PreviewFrameProps) {
  return (
    <div
      className={cn(
        "not-prose w-full overflow-hidden rounded-xl border bg-background",
        className
      )}
    >
      <iframe
        src={`/preview/${name}`}
        title={`${name} preview`}
        className="w-full border-0"
        style={{ height: typeof height === "number" ? `${height}px` : height }}
        loading="lazy"
      />
    </div>
  )
}
