import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyFilters from "@/components/StudyFilters";
import PageTopActions from "@/components/PageTopActions";
import FillBlankStudyClient from "@/components/FillBlankStudyClient";
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
            <PageTopActions />

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

            <FillBlankStudyClient items={items} />
          </div>
        </div>
      </div>
    </main>
  );
}