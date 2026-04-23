import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
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
    <main className="min-h-screen px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/articles" className="hover:text-white">
              Articles
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-sm font-medium text-slate-400">{article.number}</div>
                <Header title={article.title} subtitle={article.category} />
              </div>
              <StatusBadge status={article.status} />
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <StudyShellCard title="Summary">
              <p>{article.summaryPlaceholder}</p>
              <p className="text-slate-400">
                This is intentionally a shell. Replace later with original summary content.
              </p>
            </StudyShellCard>

            <StudyShellCard title="Flashcards">
              <ul className="space-y-3">
                {article.flashcards.map((card, index) => (
                  <li key={index} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="font-semibold text-white">Front:</div>
                    <div>{card.front}</div>
                    <div className="mt-2 font-semibold text-white">Back:</div>
                    <div>{card.back}</div>
                  </li>
                ))}
              </ul>
            </StudyShellCard>

            <StudyShellCard title="Quiz">
              <ol className="space-y-4">
                {article.quiz.map((q, index) => (
                  <li key={index} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="font-semibold text-white">
                      {index + 1}. {q.question}
                    </div>
                    <ul className="mt-3 space-y-1">
                      {q.choices.map((choice, i) => (
                        <li key={i}>
                          <span className="mr-2 font-medium text-slate-400">
                            {String.fromCharCode(65 + i)}.
                          </span>
                          {choice}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-sm text-slate-400">
                      Dummy correct answer: {String.fromCharCode(65 + q.answer)}
                    </div>
                  </li>
                ))}
              </ol>
            </StudyShellCard>

            <StudyShellCard title="Fill in the Blank">
              <ul className="space-y-3">
                {article.fillBlank.map((item, index) => (
                  <li key={index} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div>{item.prompt}</div>
                    <div className="mt-2 text-sm text-slate-400">Dummy answer: {item.answer}</div>
                  </li>
                ))}
              </ul>
            </StudyShellCard>

            <StudyShellCard title="Oral Drill">
              <ul className="space-y-3">
                {article.oralDrill.map((prompt, index) => (
                  <li key={index} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    {prompt}
                  </li>
                ))}
              </ul>
            </StudyShellCard>

            <StudyShellCard title="Notes">
              <textarea
                className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                placeholder="Type article-specific notes here..."
              />
            </StudyShellCard>
          </div>
        </div>
      </div>
    </main>
  );
}