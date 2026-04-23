import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyShellCard from "@/components/StudyShellCard";
import { articles } from "@/data/articles";

export default function FlashcardsPage() {
  const flashcards = articles.flatMap((article) =>
    article.flashcards.slice(0, 1).map((card) => ({
      articleTitle: article.title,
      articleNumber: article.number,
      ...card
    }))
  );

  return (
    <main className="min-h-screen px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <Header
            title="Flashcards"
            subtitle="A shell page showing how article-level flashcards could look once real content is added."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {flashcards.map((card, index) => (
              <StudyShellCard key={index} title={`${card.articleNumber} — ${card.articleTitle}`}>
                <div>
                  <div className="font-semibold text-white">Front</div>
                  <p>{card.front}</p>
                </div>
                <div>
                  <div className="font-semibold text-white">Back</div>
                  <p>{card.back}</p>
                </div>
              </StudyShellCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}