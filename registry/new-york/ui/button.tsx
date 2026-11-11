"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const rollingButtonVariants = cva(
  "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-bold leading-[1.6] whitespace-nowrap select-none transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
      },
      size: {
        default: "px-6 pt-[13px] pb-[11px] text-base",
        sm: "px-4 pt-[9px] pb-[7px] text-sm",
        lg: "px-8 pt-[16px] pb-[14px] text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface RollingButtonProps
  extends Omit<React.ComponentProps<"button">, "children">,
    VariantProps<typeof rollingButtonVariants> {
  /** Button label. Must be a plain string so it can be split into letters. */
  children: string
  /** Delay between each letter, in ms. */
  stagger?: number
}

function RollingButton({
  className,
  variant,
  size,
  children,
  stagger = 20,
  ...props
}: RollingButtonProps) {
  const chars = Array.from(children)

  return (
    <button
      data-slot="rolling-button"
      aria-label={children}
      className={cn(rollingButtonVariants({ variant, size }), className)}
      {...props}
    >
      <span aria-hidden className="flex w-max overflow-hidden">
        {chars.map((char, i) => (
          <span key={i} className="relative block shrink-0 whitespace-pre">
            {/* visible letter */}
            <span
              className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * stagger}ms` }}
            >
              {char}
            </span>
            {/* incoming letter */}
            <span
              className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
              style={{ transitionDelay: `${i * stagger}ms` }}
            >
              {char}
            </span>
          </span>
        ))}
      </span>
    </button>
  )
}

export { RollingButton, rollingButtonVariants }
