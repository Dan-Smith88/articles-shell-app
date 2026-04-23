import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyShellCard from "@/components/StudyShellCard";
import { articles } from "@/data/articles";

export default function NotesPage() {
  const noteArticles = articles.slice(0, 12);

  return (
    <main className="min-h-screen bg-[#e9e4db] px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <Header
            title="Notes"
            subtitle="A shell notes area. Later this can be saved to localStorage or SQLite."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {noteArticles.map((article) => (
              <StudyShellCard key={article.id} title={`${article.number} — ${article.title}`}>
                <textarea
                  className="min-h-[180px] w-full rounded-2xl border border-[#cfc5b7] bg-[#ece8e1] p-4 text-[#1f2a3a] outline-none placeholder:text-[#7b8390] focus:border-[#8b6a3e]"
                  placeholder={`Write notes for ${article.title}...`}
                />
              </StudyShellCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}