import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <article>
        <h1 className="text-4xl font-normal leading-tight mb-6">Entry Not Found</h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          This entry does not exist or has been moved.
        </p>
        <Link
          href="/index"
          className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
        >
          <span aria-hidden="true">←</span>
          Return to index
        </Link>
      </article>
    </main>
  )
}
