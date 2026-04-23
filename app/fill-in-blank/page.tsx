import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyShellCard from "@/components/StudyShellCard";
import StudyFilters from "@/components/StudyFilters";
import { articles } from "@/data/articles";
import { getFillBlankItems } from "@/lib/study-mode";

type Props = {
  searchParams: Promise<{ articleId?: string; count?: string }>;
};

function resolveLimit(count?: string) {
  if (!count || count === "10") return 10;
  if (count === "5") return 5;
  if (count === "20") return 20;
  if (count === "all") return undefined;
  return 10;
}

export default async function FillInBlankPage({ searchParams }: Props) {
  const { articleId, count } = await searchParams;
  const limit = resolveLimit(count);
  const selectedArticle = articleId
    ? articles.find((article) => article.id === articleId)
    : undefined;

  const items = getFillBlankItems(articles, articleId, limit, true);

  return (
    <main className="min-h-screen bg-[#e9e4db] text-[#1f2a3a]">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />

        <div className="min-w-0 flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <Header
              title="Fill in the Blank"
              subtitle={
                selectedArticle
                  ? `Multiple recall prompts from ${selectedArticle.title}.`
                  : "Mixed fill-in-the-blank prompts across all articles."
              }
            />

            <div className="mt-8">
              <StudyFilters
                basePath="/fill-in-blank"
                currentArticleId={articleId}
                currentCount={count || "10"}
                articles={articles.map((article) => ({
                  id: article.id,
                  title: article.title,
                  number: article.number,
                }))}
              />
            </div>

            <div className="mt-8 space-y-5">
              {items.map((item, index) => (
                <StudyShellCard
                  key={item.id}
                  title={`${index + 1}. ${item.articleNumber} · ${item.articleTitle}`}
                >
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-[#d8cfc1] bg-[#f7f2ea] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6a3e]">
                        Prompt
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#1f2a3a]">
                        {item.prompt}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6a3e]">
                        Answer
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#46505b]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </StudyShellCard>
              ))}

              {items.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[#d8cfc1] bg-[#f5efe6] p-6 text-sm text-[#5a6470]">
                  No fill-in-the-blank items found for that selection.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}