import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <article className="prose prose-lg">
        <h1 className="text-4xl font-normal leading-tight text-balance mb-8">Into the Garden</h1>

        <div className="leading-relaxed space-y-6 text-lg">
          <p>
            In the everlasting words of Joe Dirt, "Life's a garden, dig it." Welcome, traveler, to my digital garden. Come on in and stay a while. Here you will find a collection of notes, thoughts, and reference material arranged for reading and reflection rather than chronological consumption.
          </p>

          <p>
            Unlike a blog, entries here are living documents. They evolve, expand, and sometimes contract as understanding deepens. Some are polished essays, others are rough sketches. All are part of an ongoing practice of thinking through writing.
          </p>

          <p>
            There are no feeds, no comments, no analytics. The organization is intentionally simple: an alphabetical index serves as the primary navigation. Freely browse by topic, follow cross-references, or realize that it's okay to stop searching; you're right where you need to be. 
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start">
          <p className="text-lg text-foreground/80 italic mb-4">Warmly,</p>
          <div className="py-8 px-12 -ml-12">
            <Image
              src="/signature.png"
              alt="Rusty Frank signature"
              width={240}
              height={80}
              className="opacity-90 dark:hidden"
            />
            <Image
              src="/signature.png"
              alt="Rusty Frank signature"
              width={240}
              height={80}
              className="hidden dark:block signature-glow"
            />
          </div>
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
