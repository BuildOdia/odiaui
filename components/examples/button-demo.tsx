"use client"

import { RollingButton } from "@/registry/new-york/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <RollingButton>Default</RollingButton>
      <RollingButton variant="secondary">Secondary</RollingButton>
      <RollingButton variant="outline">Outline</RollingButton>
      <RollingButton variant="ghost">Ghost</RollingButton>
    </div>
  )
}

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <RollingButton size="lg">Large</RollingButton>
      <RollingButton>Default</RollingButton>
      <RollingButton size="sm">Small</RollingButton>
    </div>
  )
}
