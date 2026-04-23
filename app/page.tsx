import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const recentArticles = [
  { title: "The Holy Scriptures", number: "Article 1", href: "/articles/article-1" },
  { title: "The Trinity", number: "Article 2", href: "/articles/article-2" },
  { title: "God the Father", number: "Article 3", href: "/articles/article-3" },
];

const suggestedPaths = [
  {
    title: "Core Doctrine Track",
    description:
      "Move through the foundational articles first and build the theological core before branching into practice categories.",
  },
  {
    title: "Salvation Sequence",
    description:
      "Group related salvation topics together so review feels connected instead of scattered.",
  },
  {
    title: "Church & Ministry Track",
    description:
      "Focus on church life, worship, ordinances, prayer, and ministry-oriented material in one pass.",
  },
  {
    title: "Ethics & Christian Living",
    description:
      "Review practical Christian living themes as one study path for applied preparation.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#e7e1d7] text-[#1f2a3a]">
      <div className="mx-auto flex max-w-[1500px]">
        <Sidebar />

        <div className="min-w-0 flex-1 px-6 py-8 md:px-10 md:py-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a3e]">
                Ordination Study
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#16253a] md:text-5xl">
                Dashboard
              </h1>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5a6470]">
                Study by article, jump into practice modes, and keep the workflow
                clean without stuffing every feature onto one page.
              </p>
            </div>

            <section className="rounded-[2rem] border border-[#cfc3b2] bg-[#f6f1e8] p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)] md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6a3e]">
                    Start Here
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#16253a] md:text-[2.2rem]">
                    Pick up where you left off
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#576170]">
                    Use the article library as the hub, then launch into quiz,
                    flashcards, oral drill, or fill-in-the-blank from there. This
                    keeps the experience focused instead of turning the app into a
                    clutter parade.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/articles"
                      className="inline-flex rounded-2xl bg-[#16253a] px-5 py-3 text-sm font-bold text-[#f7f1e7] transition hover:opacity-95"
                    >
                      Browse Articles
                    </Link>

                    <Link
                      href="/practice"
                      className="inline-flex rounded-2xl border border-[#cfc3b2] bg-[#efe7db] px-5 py-3 text-sm font-bold text-[#223248] transition hover:bg-[#e8decf]"
                    >
                      Open Practice
                    </Link>

                    <Link
                      href="/schedule"
                      className="inline-flex rounded-2xl border border-[#cfc3b2] bg-[#efe7db] px-5 py-3 text-sm font-bold text-[#223248] transition hover:bg-[#e8decf]"
                    >
                      Study Plan
                    </Link>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-[#d7cbbb] bg-[#efe7db] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8b6a3e]">
                    Focus Today
                  </p>

                  <div className="mt-4 space-y-3">
                    <Link
                      href="/flashcards?count=5"
                      className="block rounded-xl border border-[#d3c7b7] bg-[#f6f1e8] px-4 py-3 text-sm font-semibold text-[#223248] transition hover:border-[#bca98c] hover:bg-[#f1eadf]"
                    >
                      Review 5 flashcards
                    </Link>

                    <Link
                      href="/quiz?count=5"
                      className="block rounded-xl border border-[#d3c7b7] bg-[#f6f1e8] px-4 py-3 text-sm font-semibold text-[#223248] transition hover:border-[#bca98c] hover:bg-[#f1eadf]"
                    >
                      Answer 5 quiz prompts
                    </Link>

                    <Link
                      href="/oral-drill?count=5"
                      className="block rounded-xl border border-[#d3c7b7] bg-[#f6f1e8] px-4 py-3 text-sm font-semibold text-[#223248] transition hover:border-[#bca98c] hover:bg-[#f1eadf]"
                    >
                      Practice 5 oral prompts
                    </Link>

                    <Link
                      href="/fill-in-blank?count=5"
                      className="block rounded-xl border border-[#d3c7b7] bg-[#f6f1e8] px-4 py-3 text-sm font-semibold text-[#223248] transition hover:border-[#bca98c] hover:bg-[#f1eadf]"
                    >
                      Work 5 fill-in-the-blank items
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-[#cfc3b2] bg-[#f6f1e8] p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6a3e]">
                  Progress
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#16253a]">
                  Current Status
                </h3>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-[#d7cbbb] bg-[#efe7db] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b6953]">
                      Total Articles
                    </p>
                    <p className="mt-1 text-3xl font-bold text-[#16253a]">52</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#d7cbbb] bg-[#efe7db] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b6953]">
                        In Progress
                      </p>
                      <p className="mt-1 text-2xl font-bold text-[#16253a]">0</p>
                    </div>

                    <div className="rounded-xl border border-[#d7cbbb] bg-[#efe7db] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b6953]">
                        Reviewed
                      </p>
                      <p className="mt-1 text-2xl font-bold text-[#16253a]">0</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#d7cbbb] bg-[#efe7db] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b6953]">
                      Mastered
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#16253a]">0</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#cfc3b2] bg-[#f6f1e8] p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6a3e]">
                      Recent
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#16253a]">
                      Continue Review
                    </h3>
                  </div>

                  <Link
                    href="/articles"
                    className="text-sm font-bold text-[#8b6a3e] transition hover:opacity-80"
                  >
                    All articles
                  </Link>
                </div>

                <div className="mt-5 space-y-3">
                  {recentArticles.map((article) => (
                    <Link
                      key={article.number}
                      href={article.href}
                      className="block rounded-xl border border-[#d7cbbb] bg-[#efe7db] p-4 transition hover:border-[#bca98c] hover:bg-[#ece3d6]"
                    >
                      <p className="text-base font-bold text-[#16253a]">
                        {article.title}
                      </p>
                      <p className="mt-1 text-sm text-[#667180]">{article.number}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#cfc3b2] bg-[#f6f1e8] p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6a3e]">
                    Practice
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#16253a]">
                    Quick Queue
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  <Link
                    href="/flashcards?count=5"
                    className="block rounded-xl border border-[#d7cbbb] bg-[#efe7db] px-4 py-4 text-sm font-semibold text-[#223248] transition hover:border-[#bca98c] hover:bg-[#ece3d6]"
                  >
                    Review 5 flashcards
                  </Link>

                  <Link
                    href="/quiz?count=5"
                    className="block rounded-xl border border-[#d7cbbb] bg-[#efe7db] px-4 py-4 text-sm font-semibold text-[#223248] transition hover:border-[#bca98c] hover:bg-[#ece3d6]"
                  >
                    Answer 5 quiz prompts
                  </Link>

                  <Link
                    href="/oral-drill?count=5"
                    className="block rounded-xl border border-[#d7cbbb] bg-[#efe7db] px-4 py-4 text-sm font-semibold text-[#223248] transition hover:border-[#bca98c] hover:bg-[#ece3d6]"
                  >
                    Practice 5 oral prompts
                  </Link>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-[1.9rem] border border-[#cfc3b2] bg-[#f6f1e8] p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] md:p-8">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6a3e]">
                  Suggested Paths
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#16253a]">
                  Ways to Explore
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {suggestedPaths.map((path) => (
                  <div
                    key={path.title}
                    className="rounded-2xl border border-[#d7cbbb] bg-[#efe7db] p-5"
                  >
                    <p className="text-base font-bold leading-6 text-[#16253a]">
                      {path.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#5d6570]">
                      {path.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}