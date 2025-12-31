import Link from "next/link"
import { notFound } from "next/navigation"

const entries: Record<
  string,
  {
    title: string
    content: string[]
    related?: string[]
  }
> = {
  attention: {
    title: "Attention",
    content: [
      "Attention has become the primary currency of the digital age. Social platforms optimize for engagement metrics—time spent, clicks, shares—treating human attention as a resource to be extracted rather than a faculty to be respected.",
      "The attention economy emerged from advertising models that monetize eyeballs. But attention is not merely a commodity. It is the fundamental mechanism through which we understand the world, form relationships, and construct meaning.",
      'Herbert Simon noted that "a wealth of information creates a poverty of attention." As information abundance increases, attention becomes the constraining resource. The question is not merely how to capture attention, but how to design systems that honor its finite and precious nature.',
      "Deep attention—sustained, focused engagement with complex material—differs from the hyper attention encouraged by contemporary media. Reading, in particular, requires deep attention. It is a learned cognitive capacity that must be cultivated and protected.",
    ],
    related: ["reading", "slow-web"],
  },
  "digital-gardens": {
    title: "Digital Gardens",
    content: [
      "Digital gardens represent an alternative to the chronological, performative nature of social media and traditional blogs. Rather than presenting a stream of time-stamped posts, they offer interconnected, evolving notes that grow over time.",
      "The metaphor of gardening captures the iterative, non-linear process of tending to ideas. Notes are planted, pruned, and cultivated. Some flourish, others remain dormant, and connections emerge organically through repeated attention.",
      'This stands in contrast to the "stream" metaphor that dominates contemporary platforms. Streams flow in one direction, from new to old, privileging novelty over depth. Gardens, by contrast, are spatial rather than temporal. They invite exploration rather than consumption.',
      "Digital gardens embrace imperfection. They contain works-in-progress, half-formed thoughts, and experimental ideas. This makes them generative spaces for thinking rather than polished venues for broadcasting.",
    ],
    related: ["hypertext", "commonplace-books"],
  },
  reading: {
    title: "Reading",
    content: [
      "Reading is not a natural act. It is a learned cultural technology that rewires the brain, creating new neural pathways for processing written language. Deep reading—the kind required for complex texts—involves sustained attention and active interpretation.",
      "Maryanne Wolf distinguishes between different modes of reading. Deep reading engages analytical, inferential, and empathetic processes. It requires time and cognitive effort. Skimming and scanning, by contrast, prioritize efficiency over comprehension.",
      "The medium shapes the mode. Print encourages linear, sustained reading. Digital interfaces encourage scanning and fragmentation. The codex book provides haptic feedback, spatial memory, and freedom from distraction. Screen reading often competes with notifications, hyperlinks, and multitasking.",
      "Typography plays a crucial role in reading comfort. Serif fonts, generous margins, appropriate line length (45-75 characters), and sufficient line height all contribute to legibility. Kindle and quality print books share these characteristics.",
    ],
    related: ["attention", "typography"],
  },
  typography: {
    title: "Typography",
    content: [
      "Typography is the craft of arranging type to make written language legible, readable, and appealing. It is an invisible art—when done well, readers notice only the content, not the form.",
      "Legibility refers to how easily individual characters can be distinguished. Readability concerns how comfortably text can be read over extended periods. Both depend on typeface choice, size, spacing, and layout.",
      "Serif typefaces like Charter, Georgia, and Iowan Old Style were designed for extended reading. Their serifs guide the eye along lines of text. Sans-serif fonts like Inter and Helvetica work well for UI elements and headings.",
      "Classic typographic principles remain relevant: set body text between 16-21px, maintain line lengths of 45-75 characters, use line height between 1.4-1.6, and establish clear visual hierarchy through size and weight rather than color.",
    ],
    related: ["reading"],
  },
  "slow-web": {
    title: "Slow Web",
    content: [
      "The Slow Web movement advocates for intentional, contemplative design rather than engagement-maximizing interfaces. It draws inspiration from the Slow Food movement, prioritizing quality of experience over speed of consumption.",
      "Slow Web principles include: no infinite scroll, no autoplay, no algorithmic feeds, no notification badges. These design patterns respect users' attention and agency rather than exploiting psychological vulnerabilities.",
      "This does not mean slow-loading or inefficient. Rather, it means designing for deliberate use rather than compulsive behavior. Static sites, RSS feeds, and email newsletters exemplify Slow Web principles.",
      "The goal is sustainability—for both users and creators. Sustainable attention means preserving cognitive capacity for deep work. Sustainable publishing means creating durable, maintainable content rather than chasing viral trends.",
    ],
    related: ["attention", "digital-gardens"],
  },
  hypertext: {
    title: "Hypertext",
    content: [
      "Hypertext refers to text that contains links to other texts. Ted Nelson coined the term in 1963 to describe non-sequential writing—documents connected by associative links rather than linear narratives.",
      "The Web realizes a simplified version of Nelson's vision. HTML hyperlinks allow documents to reference each other, creating a distributed network of information. But the Web's implementation differs from Nelson's original Xanadu project in crucial ways.",
      "Nelson envisioned bidirectional links, version tracking, and micropayments for quoted material. The Web uses unidirectional links that break when targets move. This creates link rot and makes attribution difficult.",
      "Despite these limitations, hypertext enables new forms of reading and writing. It supports non-linear exploration, contextual depth, and emergent organization. Digital gardens and wikis embrace these possibilities.",
    ],
    related: ["digital-gardens"],
  },
  "commonplace-books": {
    title: "Commonplace Books",
    content: [
      "Commonplace books were personal compilations of quotations, observations, and reflections maintained by readers from antiquity through the Enlightenment. They served as external memory systems and tools for thought.",
      "The practice involved copying passages from books, organizing them by topic, and adding personal commentary. John Locke developed an indexing system for commonplace books that influenced later information management techniques.",
      "Commonplace books were generative rather than merely archival. The act of copying encouraged close reading and retention. Reviewing accumulated notes sparked new connections and insights.",
      "Digital note-taking systems like Zettelkasten and networked thought tools like Obsidian revive commonplace book practices. They emphasize personal knowledge management, cross-referencing, and emergent structure.",
    ],
    related: ["digital-gardens", "writing"],
  },
  writing: {
    title: "Writing",
    content: [
      "Writing is thinking made visible. The act of translating thought into language forces clarity, reveals gaps in understanding, and generates new ideas through the process of articulation.",
      "Different tools shape different writing practices. Pen and paper encourage deliberate composition. Word processors enable revision. Plain text and Markdown prioritize portability and longevity over formatting.",
      "Writing in public—even in low-stakes venues like personal websites—changes the writing process. It introduces an imagined reader, which encourages clarity and completeness. But it can also induce self-censorship.",
      "The distinction between drafts and published work has blurred online. Digital gardens embrace works-in-progress. Version control systems track evolution. The writing is never quite finished, only iteratively refined.",
    ],
    related: ["commonplace-books", "digital-gardens"],
  },
}

export default function EntryPage({ params }: { params: { slug: string } }) {
  const entry = entries[params.slug]

  if (!entry) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <article>
        <div className="mb-4">
          <Link
            href="/index"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden="true">←</span>
            Back to index
          </Link>
        </div>

        <h1 className="text-4xl font-normal leading-tight text-balance mb-12">{entry.title}</h1>

        <div className="prose prose-lg leading-relaxed space-y-6">
          {entry.content.map((paragraph, index) => (
            <p key={index} className="text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {entry.related && entry.related.length > 0 && (
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="font-sans text-sm uppercase tracking-wide text-muted-foreground mb-4">Related Entries</h2>
            <div className="flex flex-wrap gap-3">
              {entry.related.map((relatedSlug) => (
                <Link
                  key={relatedSlug}
                  href={`/entry/${relatedSlug}`}
                  className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors border border-border px-3 py-1.5"
                >
                  {entries[relatedSlug]?.title || relatedSlug}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
