import Link from "next/link"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <article className="prose prose-lg">
        <h1 className="text-4xl font-normal leading-tight text-balance mb-8">A Digital Garden</h1>

        <div className="leading-relaxed space-y-6 text-lg">
          <p>
            This is a personal encyclopedia—a collection of notes, thoughts, and reference material arranged for reading
            and reflection rather than chronological consumption.
          </p>

          <p>
            Unlike a blog, entries here are living documents. They evolve, expand, and sometimes contract as
            understanding deepens. Some are polished essays, others are rough sketches. All are part of an ongoing
            practice of thinking through writing.
          </p>

          <p>
            The organization is intentionally simple: an alphabetical index serves as the primary navigation. Browse by
            topic, follow cross-references, or read linearly. There are no feeds, no comments, no analytics—just text
            and the space to think.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/index"
            className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
          >
            Browse the index
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </main>
  )
}
