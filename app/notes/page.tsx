import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyShellCard from "@/components/StudyShellCard";
import ArticleNotesEditor from "@/components/ArticleNotesEditor";
import { articles } from "@/data/articles";

type Props = {
  searchParams: Promise<{ articleId?: string }>;
};

export default async function NotesPage({ searchParams }: Props) {
  const { articleId } = await searchParams;

  const selectedArticle = articleId
    ? articles.find((article) => article.id === articleId)
    : undefined;

  const noteArticles = selectedArticle ? [selectedArticle] : articles.slice(0, 12);

  return (
    <main className="min-h-screen bg-[#e9e4db] text-[#1f2a3a]">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />

        <div className="min-w-0 flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-5xl">
            <Header
              title={selectedArticle ? `${selectedArticle.title} Notes` : "Notes"}
              subtitle={
                selectedArticle
                  ? "Write and save notes for this article."
                  : "Global notes view. Open any article note space."
              }
            />

            <div className="mt-8 space-y-6">
              {selectedArticle ? (
                <ArticleNotesEditor
                  articleId={selectedArticle.id}
                  articleTitle={selectedArticle.title}
                />
              ) : (
                noteArticles.map((article) => (
                  <StudyShellCard
                    key={article.id}
                    title={`${article.number} · ${article.title}`}
                  >
                    <p className="mb-4 text-sm leading-6 text-[#5d6570]">
                      Open this article’s notes workspace.
                    </p>

                    <a
                      href={`/notes?articleId=${article.id}`}
                      className="inline-flex rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                    >
                      Open Notes
                    </a>
                  </StudyShellCard>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}