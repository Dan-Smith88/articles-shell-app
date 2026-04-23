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
    <main className="min-h-screen bg-[#e9e4db] px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <Header
            title="Oral Drill"
            subtitle="Practice article prompts and evaluate whether the speaking workflow feels useful."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {prompts.map((item, index) => (
              <StudyShellCard key={index} title={`${item.articleNumber} — ${item.articleTitle}`}>
                <p className="font-medium text-[#4b5563]">{item.prompt}</p>
                <textarea
                  className="mt-4 min-h-[160px] w-full rounded-2xl border border-[#cfc5b7] bg-[#ece8e1] p-4 text-[#1f2a3a] outline-none placeholder:text-[#7b8390] focus:border-[#8b6a3e]"
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