import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PageTopActions from "@/components/PageTopActions";

const practiceModes = [
  {
    title: "Quiz",
    description:
      "Use placeholder multiple-choice questions in either mixed mode or article-specific mode.",
    href: "/quiz",
    details: [
      "Select one article from a dropdown",
      "Or run a mixed set across all articles",
      "Show multiple questions for a fuller proof of concept",
    ],
  },
  {
    title: "Flashcards",
    description:
      "Review placeholder front-and-back cards by article or across the full article set.",
    href: "/flashcards",
    details: [
      "Choose a single article",
      "Or study a mixed set",
      "Display multiple cards instead of a thin preview",
    ],
  },
  {
    title: "Oral Drill",
    description:
      "Practice placeholder spoken-response prompts in focused or mixed review mode.",
    href: "/oral-drill",
    details: [
      "Dropdown article selection",
      "Mixed review across all articles",
      "Multiple prompts for better workflow testing",
    ],
  },
  {
    title: "Fill in the Blank",
    description:
      "Work through placeholder recall prompts for article-specific study or mixed practice.",
    href: "/fill-in-blank",
    details: [
      "Choose one article",
      "Or pull a mixed set",
      "Use multiple placeholder items for a fuller demo",
    ],
  },
];

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-[#e9e4db] text-[#1f2a3a]">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />

        <div className="min-w-0 flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <PageTopActions />

            <Header
              title="Practice"
              subtitle="Choose a study mode, then use the dropdown to focus on one article or run a mixed set across all articles."
            />

            <section className="mt-8 rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-6 md:p-8">
              <div className="mb-8 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                  Practice Modes
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#1f2a3a]">
                  Pick how you want to study
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5d6570]">
                  Each mode supports both article-specific review and mixed review
                  across the full set. The proof of concept uses placeholder
                  prompts and dummy questions so you can test structure, flow,
                  and usability without relying on protected article text.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {practiceModes.map((mode) => (
                  <Link
                    key={mode.title}
                    href={mode.href}
                    className="group rounded-3xl border border-[#d8cfc1] bg-[#efe8de] p-6 transition hover:-translate-y-0.5 hover:border-[#bca98c] hover:bg-[#f1e8dc]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
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

                    <ul className="mt-5 space-y-2">
                      {mode.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm leading-6 text-[#5d6570]"
                        >
                          • {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 text-sm font-semibold text-[#8b6a3e] transition group-hover:translate-x-0.5">
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