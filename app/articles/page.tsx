import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import SectionBlock from "@/components/SectionBlock";
import { groupedArticles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-10">
          <Header
            title="Articles"
            subtitle="Browse the article shell by category. Each card opens a detail page with placeholder tools for summaries, drills, quizzes, flashcards, and notes."
          />

          <SectionBlock title="Articles of Faith">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {groupedArticles["Articles of Faith"].map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title="Biblical Principles for Living">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {groupedArticles["Biblical Principles for Living"].map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title="Declarations on Particular Issues">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {groupedArticles["Declarations on Particular Issues"].map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </SectionBlock>
        </div>
      </div>
    </main>
  );
}