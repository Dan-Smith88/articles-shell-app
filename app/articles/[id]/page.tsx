import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import StudyShellCard from "@/components/StudyShellCard";
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

  return (
    <main className="min-h-screen bg-[#e7e1d7] px-8 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex flex-1 flex-col gap-8">
          <div className="text-sm text-[#8b93a1]">
            <Link href="/articles" className="hover:text-[#1f2a3a]">
              Articles
            </Link>
            <span className="mx-2">/</span>
            <span>{article.title}</span>
          </div>

          <section className="rounded-[30px] border border-[#d0c6b8] bg-[#f3ede3] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-sm font-medium text-[#7a746c]">{article.number}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                  Ordination Study
                </div>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#1f2a3a] md:text-5xl">
                  {article.title}
                </h1>
                <p className="mt-3 text-base text-[#5d6570]">{article.category}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#d8cfc1] bg-[#ebe3d7] px-3 py-1 text-xs font-medium text-[#5d6570]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <StatusBadge status={article.status} />
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-2">
            <StudyShellCard title="Summary">
              <p>{article.summaryPlaceholder}</p>
              <p className="text-[#7b8390]">
                This is intentionally a shell. Replace later with original summary content.
              </p>
            </StudyShellCard>

            <StudyShellCard title="Flashcards">
              <ul className="space-y-3">
                {article.flashcards.map((card, index) => (
                  <li
                    key={index}
                    className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4"
                  >
                    <div className="font-semibold text-[#1f2a3a]">Front:</div>
                    <div className="mt-1 text-[#4b5563]">{card.front}</div>
                    <div className="mt-3 font-semibold text-[#1f2a3a]">Back:</div>
                    <div className="mt-1 text-[#4b5563]">{card.back}</div>
                  </li>
                ))}
              </ul>
            </StudyShellCard>

            <StudyShellCard title="Quiz">
              <ol className="space-y-4">
                {article.quiz.map((q, index) => (
                  <li
                    key={index}
                    className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4"
                  >
                    <div className="font-semibold text-[#1f2a3a]">
                      {index + 1}. {q.question}
                    </div>
                    <ul className="mt-3 space-y-1 text-[#4b5563]">
                      {q.choices.map((choice, i) => (
                        <li key={i}>
                          <span className="mr-2 font-medium text-[#8b93a1]">
                            {String.fromCharCode(65 + i)}.
                          </span>
                          {choice}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-sm text-[#7b8390]">
                      Dummy correct answer: {String.fromCharCode(65 + q.answer)}
                    </div>
                  </li>
                ))}
              </ol>
            </StudyShellCard>

            <StudyShellCard title="Fill in the Blank">
              <ul className="space-y-3">
                {article.fillBlank.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4"
                  >
                    <div className="text-[#4b5563]">{item.prompt}</div>
                    <div className="mt-2 text-sm text-[#7b8390]">
                      Dummy answer: {item.answer}
                    </div>
                  </li>
                ))}
              </ul>
            </StudyShellCard>

            <StudyShellCard title="Oral Drill">
              <ul className="space-y-3">
                {article.oralDrill.map((prompt, index) => (
                  <li
                    key={index}
                    className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4 text-[#4b5563]"
                  >
                    {prompt}
                  </li>
                ))}
              </ul>
            </StudyShellCard>

            <StudyShellCard title="Notes">
              <textarea
                className="min-h-[180px] w-full rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4 text-[#1f2a3a] outline-none placeholder:text-[#7b8390] focus:border-[#8b6a3e]"
                placeholder="Type article-specific notes here..."
              />
            </StudyShellCard>
          </div>
        </div>
      </div>
    </main>
  );
}