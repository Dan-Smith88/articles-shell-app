import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { articles } from "@/data/articles";

export default function HomePage() {
  const recentArticles = articles.slice(0, 3);

  const suggestedPaths = [
    {
      title: "Core Doctrine Track",
      description:
        "Start with the foundational Articles of Faith and move through the main theological core."
    },
    {
      title: "Salvation Sequence",
      description:
        "Study election, salvation, repentance, regeneration, justification, sanctification, and perseverance together."
    },
    {
      title: "Church & Ministry Track",
      description:
        "Focus on the church, mission, ordinances, worship, prayer, and shared life."
    },
    {
      title: "Ethics & Christian Living",
      description:
        "Review holiness, family, sexual holiness, stewardship, work and rest, liberty, and civil responsibility."
    }
  ];

  return (
    <main className="min-h-screen bg-[#e7e1d7] px-8 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex flex-1 flex-col gap-8">
          <Header
            title="Articles Study Shell"
            subtitle="A local proof-of-concept for article-based study, drills, and review without loading protected text."
          />

          <div className="grid gap-6 xl:grid-cols-[1.35fr_.85fr]">
            <section className="rounded-[30px] border border-[#d0c6b8] bg-[#f3ede3] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Prototype Overview
              </div>
              <h2 className="mt-3 text-4xl font-semibold text-[#1f2a3a]">
                Start here
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5d6570] md:text-lg">
                This version is intentionally built as a shell. It uses article titles,
                dummy study tools, and navigation structure so you can test workflow,
                layout, and overall usefulness before adding real content.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="rounded-2xl bg-[#1f2a3a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17202d]"
                >
                  Open Dashboard
                </Link>
                <Link
                  href="/articles"
                  className="rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-6 py-3 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                >
                  Browse Articles
                </Link>
              </div>
            </section>

            <section className="rounded-[30px] border border-[#d0c6b8] bg-[#f3ede3] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Demo Goals
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f2a3a]">
                What to Review
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#4b5563]">
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Navigation clarity
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Study flow usefulness
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Visual tone and credibility
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Ordination prep fit
                </li>
              </ul>
            </section>
          </div>

          <div className="grid gap-6 xl:grid-cols-4">
            <section className="rounded-[28px] border border-[#d0c6b8] bg-[#f3ede3] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Recently Opened
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f2a3a]">Recent Articles</h3>
              <div className="mt-5 space-y-3">
                {recentArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/articles/${article.id}`}
                    className="block rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]"
                  >
                    <div className="text-sm font-semibold text-[#1f2a3a]">{article.title}</div>
                    <div className="mt-1 text-xs text-[#6b7280]">{article.number}</div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#d0c6b8] bg-[#f3ede3] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Progress Snapshot
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f2a3a]">Current Status</h3>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  <div className="text-xs uppercase tracking-wide text-[#7a746c]">Total</div>
                  <div className="mt-1 text-2xl font-semibold text-[#1f2a3a]">{articles.length}</div>
                </div>
                <div className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  <div className="text-xs uppercase tracking-wide text-[#7a746c]">In Progress</div>
                  <div className="mt-1 text-2xl font-semibold text-[#1f2a3a]">0</div>
                </div>
                <div className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  <div className="text-xs uppercase tracking-wide text-[#7a746c]">Reviewed</div>
                  <div className="mt-1 text-2xl font-semibold text-[#1f2a3a]">0</div>
                </div>
                <div className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  <div className="text-xs uppercase tracking-wide text-[#7a746c]">Mastered</div>
                  <div className="mt-1 text-2xl font-semibold text-[#1f2a3a]">0</div>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-[#d0c6b8] bg-[#f3ede3] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)] xl:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Suggested Paths
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f2a3a]">Ways to Explore</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {suggestedPaths.map((path) => (
                  <div
                    key={path.title}
                    className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4 transition hover:bg-[#e4dacd]"
                  >
                    <div className="text-sm font-semibold text-[#1f2a3a]">{path.title}</div>
                    <p className="mt-2 text-sm leading-7 text-[#5d6570]">{path.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <section className="rounded-[28px] border border-[#d0c6b8] bg-[#f3ede3] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Today’s Practice
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f2a3a]">Quick Queue</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5563]">
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Review 3 flashcards
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Answer 2 quiz prompts
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Practice 1 oral drill response
                </li>
              </ul>
            </section>

            <section className="rounded-[28px] border border-[#d0c6b8] bg-[#f3ede3] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Categories
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f2a3a]">Article Groups</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5563]">
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Articles of Faith
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Biblical Principles for Living
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Declarations on Particular Issues
                </li>
              </ul>
            </section>

            <section className="rounded-[28px] border border-[#d0c6b8] bg-[#f3ede3] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Prototype Focus
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f2a3a]">What This Tests</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5563]">
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Structure without protected text
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Study mode usefulness
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Visual credibility
                </li>
                <li className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 transition hover:bg-[#e4dacd]">
                  Ordination workflow fit
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}