"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "not-prose flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-card p-8",
        className
      )}
    >
      {children}
    </div>
  )
}
