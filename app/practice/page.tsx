import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const practiceModes = [
  {
    title: "Quiz",
    description:
      "Answer multiple-choice questions by article or across several articles.",
    href: "/quiz",
  },
  {
    title: "Flashcards",
    description:
      "Review quick front-and-back prompts for recall and doctrinal reinforcement.",
    href: "/flashcards",
  },
  {
    title: "Oral Drill",
    description:
      "Practice speaking responses out loud so your answers sound clear and natural.",
    href: "/oral-drill",
  },
  {
    title: "Fill in the Blank",
    description:
      "Use short recall prompts to force active memory instead of passive reading.",
    href: "/fill-in-blank",
  },
];

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-[#e9e4db] text-[#1f2a3a]">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />

        <div className="min-w-0 flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <Header
              title="Practice"
              subtitle="Choose a study mode without turning the sidebar into a phone book."
            />

            <section className="mt-8 rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-6 md:p-8">
              <div className="mb-6 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                  Practice Modes
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#1f2a3a]">
                  Pick how you want to study
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5d6570]">
                  Use these as global mode pages. From an article page, you can
                  still deep-link into one of these modes for article-specific review.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {practiceModes.map((mode) => (
                  <Link
                    key={mode.title}
                    href={mode.href}
                    className="group rounded-3xl border border-[#d8cfc1] bg-[#efe8de] p-6 transition hover:-translate-y-0.5 hover:border-[#bca98c] hover:bg-[#f1e8dc]"
                  >
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-[#1f2a3a]">
                        {mode.title}
                      </h3>
                      <span className="rounded-full border border-[#d8cfc1] bg-[#ebe3d7] px-3 py-1 text-xs font-semibold text-[#6b6258]">
                        Open
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-[#4e5864]">
                      {mode.description}
                    </p>

                    <div className="mt-5 text-sm font-semibold text-[#8b6a3e] transition group-hover:translate-x-0.5">
                      Launch →
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}