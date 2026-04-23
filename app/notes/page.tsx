import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyShellCard from "@/components/StudyShellCard";
import { articles } from "@/data/articles";

export default function NotesPage() {
  const noteArticles = articles.slice(0, 12);

  return (
    <main className="min-h-screen px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <Header
            title="Notes"
            subtitle="A shell notes area. Later you can wire this up to localStorage or SQLite."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {noteArticles.map((article) => (
              <StudyShellCard key={article.id} title={`${article.number} — ${article.title}`}>
                <textarea
                  className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-400/40"
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