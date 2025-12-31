import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-4">
        <div className="flex items-center justify-between font-sans text-sm">
          <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors">
            Home
          </Link>
          <Link href="/index" className="text-foreground hover:text-muted-foreground transition-colors">
            Index
          </Link>
        </div>
      </div>
    </nav>
  )
}
