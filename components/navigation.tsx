import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-4">
        <div className="flex items-center justify-between font-sans text-sm">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors">
              Home
            </Link>
            <Link href="/index" className="text-foreground hover:text-muted-foreground transition-colors">
              Index
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
