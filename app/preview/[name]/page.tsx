import { notFound } from "next/navigation"
import * as React from "react"

/**
 * Component preview page — renders a single component in isolation.
 *
 * Used by the PreviewFrame component to embed live previews in docs via iframe.
 * Add your components to the PREVIEWS map below.
 */

// Import your component demos here
// import { ButtonDemo } from "@/components/examples/button-demo"
// import { CardDemo } from "@/components/examples/card-demo"

const PREVIEWS: Record<string, React.ComponentType> = {
  // Add entries as you create components:
  // button: ButtonDemo,
  // card: CardDemo,
}

export default async function PreviewPage(props: {
  params: Promise<{ name: string }>
}) {
  const { name } = await props.params
  const Preview = PREVIEWS[name]

  if (!Preview) notFound()

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <Preview />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(PREVIEWS).map((name) => ({ name }))
}
