import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import ModeLaunchCard from "@/components/ModeLaunchCard";
import ArticleLinkedSchedule from "@/components/ArticleLinkedSchedule";
import { getArticleById } from "@/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  const modeCards = [
    {
      title: "Quiz",
      description:
        "Answer multiple-choice questions focused on this article only.",
      href: `/quiz?articleId=${article.id}`,
      countLabel: `${article.quiz.length} question${
        article.quiz.length === 1 ? "" : "s"
      } available`,
    },
    {
      title: "Flashcards",
      description:
        "Review front/back prompts for quick recall and doctrinal reinforcement.",
      href: `/flashcards?articleId=${article.id}`,
      countLabel: `${article.flashcards.length} card${
        article.flashcards.length === 1 ? "" : "s"
      } available`,
    },
    {
      title: "Oral Drill",
      description:
        "Practice spoken responses and tighten how you explain the material out loud.",
      href: `/oral-drill?articleId=${article.id}`,
      countLabel: `${article.oralDrill.length} prompt${
        article.oralDrill.length === 1 ? "" : "s"
      } available`,
    },
    {
      title: "Fill in the Blank",
      description:
        "Use short recall prompts to force active memory instead of passive reading.",
      href: `/fill-in-blank?articleId=${article.id}`,
      countLabel: `${article.fillBlank.length} exercise${
        article.fillBlank.length === 1 ? "" : "s"
      } available`,
    },
    {
      title: "Notes",
      description:
        "Capture your own summary, cross references, key phrases, and oral prep bullets.",
      href: `/notes?articleId=${article.id}`,
      countLabel: "Personal notes",
    },
  ];

  return (
    <main className="min-h-screen bg-[#e9e4db] text-[#1f2a3a]">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />

        <div className="min-w-0 flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6">
              <Link
                href="/articles"
                className="text-sm font-medium text-[#7b6953] transition hover:text-[#8b6a3e]"
              >
                ← Back to Articles
              </Link>
            </div>

            <section className="rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6a3e]">
                    Ordination Study
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#1f2a3a] md:text-4xl">
                    {article.title}
                  </h1>
                  <p className="mt-3 text-sm font-medium text-[#5c6470]">
                    {article.number} · {article.category}
                  </p>
                </div>

                <StatusBadge status={article.status} />
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d8cfc1] bg-[#ebe3d7] px-3 py-1 text-xs font-semibold text-[#6b6258]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="rounded-3xl border border-[#ddd3c6] bg-[#efe8de] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                    Summary
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#3f4954]">
                    {article.summaryPlaceholder}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#6b6258]">
                    This is the landing page for the article. Keep it substantial
                    enough to orient the user, but stop before dumping every
                    study mode into one endless scroll. Right now that old page
                    was trying to be a Swiss Army knife and a filing cabinet at
                    the same time.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#ddd3c6] bg-[#efe8de] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                    Progress Snapshot
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-[#d8cfc1] bg-[#f7f2ea] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
                        Quiz
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[#1f2a3a]">
                        {article.quiz.length} questions
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#d8cfc1] bg-[#f7f2ea] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
                        Flashcards
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[#1f2a3a]">
                        {article.flashcards.length} cards
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#d8cfc1] bg-[#f7f2ea] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
                        Oral Drill + Fill Blank
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[#1f2a3a]">
                        {article.oralDrill.length + article.fillBlank.length} exercises
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      href={`/schedule?articleId=${article.id}`}
                      className="inline-flex rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                    >
                      Plan this article
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                  Study Modes
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-[#1f2a3a]">
                  Choose what you want to do next
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {modeCards.map((card) => (
                  <ModeLaunchCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    href={card.href}
                    countLabel={card.countLabel}
                  />
                ))}
              </div>
            </section>

            <div className="mt-8">
              <ArticleLinkedSchedule articleId={article.id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}