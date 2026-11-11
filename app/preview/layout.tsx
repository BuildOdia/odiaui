export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-svh bg-background text-foreground">{children}</div>
}
