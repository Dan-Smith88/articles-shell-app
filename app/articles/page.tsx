import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import { groupedArticles } from "@/data/articles";

export default function ArticlesPage() {
  const sections = [
    "Articles of Faith",
    "Biblical Principles for Living",
    "Declarations on Particular Issues",
  ] as const;

  return (
    <main className="min-h-screen bg-[#e9e4db] text-[#1f2a3a]">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />

        <div className="min-w-0 flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <Header
              title="Articles"
              subtitle="Use this as the master library. Pick an article first, then choose a study mode from the article hub."
            />

            <div className="mt-8 space-y-10">
              {sections.map((section) => (
                <section
                  key={section}
                  className="rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-6 md:p-8"
                >
                  <div className="mb-5">
                    <h2 className="text-2xl font-semibold text-[#1f2a3a]">
                      {section}
                    </h2>
                    <p className="mt-2 text-sm text-[#5d6570]">
                      {groupedArticles[section].length} article
                      {groupedArticles[section].length === 1 ? "" : "s"}
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {groupedArticles[section].map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}