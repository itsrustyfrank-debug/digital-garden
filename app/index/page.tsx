import Link from "next/link"

const entries = [
  {
    slug: "attention",
    title: "Attention",
    description: "On the economics and ethics of attention in digital spaces",
  },
  {
    slug: "commonplace-books",
    title: "Commonplace Books",
    description: "Historical practice of collecting quotations and observations",
  },
  {
    slug: "digital-gardens",
    title: "Digital Gardens",
    description: "Non-chronological, evolving spaces for thinking in public",
  },
  {
    slug: "hypertext",
    title: "Hypertext",
    description: "The structure and philosophy of linked documents",
  },
  {
    slug: "reading",
    title: "Reading",
    description: "Notes on reading practices, deep reading, and literary attention",
  },
  {
    slug: "slow-web",
    title: "Slow Web",
    description: "Intentional design for contemplation rather than engagement",
  },
  {
    slug: "typography",
    title: "Typography",
    description: "The craft of arranging type for readability and meaning",
  },
  {
    slug: "writing",
    title: "Writing",
    description: "On the practice, tools, and philosophy of writing",
  },
]

export default function IndexPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <article>
        <h1 className="text-4xl font-normal leading-tight mb-12">Index</h1>

        <div className="space-y-8">
          {entries.map((entry) => (
            <div key={entry.slug} className="border-b border-border pb-6">
              <Link href={`/entry/${entry.slug}`} className="group block">
                <h2 className="text-xl font-normal mb-2 group-hover:text-muted-foreground transition-colors">
                  {entry.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{entry.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </article>
    </main>
  )
}
