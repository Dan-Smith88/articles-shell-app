import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#e9e4db] px-8 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header
            title="Articles Study Shell"
            subtitle="A local proof-of-concept for article-based study, drills, and review without loading protected text."
          />

          <div className="rounded-[32px] border border-[#cfc5b7] bg-[#5a6070] p-10 text-[#f6f2ea] shadow-[0_24px_50px_rgba(0,0,0,0.12)]">
            <div className="max-w-5xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d2af73]">
                Prototype Overview
              </div>
              <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                Start here
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-9 text-[#e5ddd2]">
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
                  className="rounded-2xl border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  Browse Articles
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-[#454c5a] p-6">
                <div className="text-base font-semibold text-[#f3efe7]">Article Browser</div>
                <p className="mt-3 text-sm leading-7 text-[#d8d1c7]">
                  Group articles by section and open detail shells for drills, flashcards,
                  quizzes, and notes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-[#454c5a] p-6">
                <div className="text-base font-semibold text-[#f3efe7]">Study Tools</div>
                <p className="mt-3 text-sm leading-7 text-[#d8d1c7]">
                  Test the learning flow first before putting real doctrinal material in.
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-[#454c5a] p-6">
                <div className="text-base font-semibold text-[#f3efe7]">Pastor Review</div>
                <p className="mt-3 text-sm leading-7 text-[#d8d1c7]">
                  Show the structure and usefulness of the app without making it look like
                  an AI toy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}