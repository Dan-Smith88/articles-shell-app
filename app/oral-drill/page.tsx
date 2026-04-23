import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyShellCard from "@/components/StudyShellCard";
import { articles } from "@/data/articles";

export default function OralDrillPage() {
  const prompts = articles.flatMap((article) =>
    article.oralDrill.slice(0, 1).map((prompt) => ({
      articleTitle: article.title,
      articleNumber: article.number,
      prompt
    }))
  );

  return (
    <main className="min-h-screen px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <Header
            title="Oral Drill"
            subtitle="Practice article prompts and evaluate whether the speaking workflow feels useful."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {prompts.map((item, index) => (
              <StudyShellCard key={index} title={`${item.articleNumber} — ${item.articleTitle}`}>
                <p className="font-medium text-white">{item.prompt}</p>
                <textarea
                  className="mt-4 min-h-[160px] w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                  placeholder="Type a practice response here..."
                />
              </StudyShellCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}