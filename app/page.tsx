import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1">
          <Header
            title="Articles Study Shell"
            subtitle="A localhost proof-of-concept for article-based study, quizzes, flashcards, oral drills, and note-taking before adding real content."
          />

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-2xl backdrop-blur md:p-10">
            <div className="max-w-5xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Prototype Overview
              </div>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Start here
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                This version is intentionally built as a shell. It uses article titles,
                dummy study tools, and navigation structure so you can test workflow,
                layout, and overall usefulness before loading real content.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Open Dashboard
                </Link>
                <Link
                  href="/articles"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Browse Articles
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm font-semibold text-blue-300">Article Browser</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Group articles by section and open detail shells for drills, flashcards,
                  quizzes, and notes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm font-semibold text-blue-300">Study Tools</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Test the learning flow first, before putting real doctrinal material in.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm font-semibold text-blue-300">Pastor Review</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Show the structure, pacing, and usefulness of the app without distributing
                  copyrighted content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}