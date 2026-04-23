import Link from "next/link";

type ArticleOption = {
  id: string;
  title: string;
  number: string;
};

type Props = {
  basePath: string;
  currentArticleId?: string;
  currentCount?: string;
  articles: ArticleOption[];
};

const countOptions = ["5", "10", "20", "all"] as const;

export default function StudyFilters({
  basePath,
  currentArticleId,
  currentCount = "10",
  articles,
}: Props) {
  function buildHref(articleId?: string, count?: string) {
    const params = new URLSearchParams();

    if (articleId) params.set("articleId", articleId);
    if (count) params.set("count", count);

    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  }

  return (
    <section className="rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-5 md:p-6">
      <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
            Study Scope
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1f2a3a]">
            Choose an article or run mixed mode
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={buildHref(undefined, currentCount)}
              className={[
                "rounded-xl px-3 py-2 text-sm font-semibold transition",
                !currentArticleId
                  ? "bg-[#16253a] text-[#f7f1e7]"
                  : "border border-[#d3c7b7] bg-[#efe8de] text-[#223248] hover:bg-[#e9e0d3]",
              ].join(" ")}
            >
              Mixed All Articles
            </Link>

            {articles.map((article) => {
              const active = currentArticleId === article.id;

              return (
                <Link
                  key={article.id}
                  href={buildHref(article.id, currentCount)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-[#16253a] text-[#f7f1e7]"
                      : "border border-[#d3c7b7] bg-[#efe8de] text-[#223248] hover:bg-[#e9e0d3]",
                  ].join(" ")}
                >
                  {article.number}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
            Item Count
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {countOptions.map((option) => {
              const active = currentCount === option;

              return (
                <Link
                  key={option}
                  href={buildHref(currentArticleId, option)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-semibold capitalize transition",
                    active
                      ? "bg-[#8b6a3e] text-[#f7f1e7]"
                      : "border border-[#d3c7b7] bg-[#efe8de] text-[#223248] hover:bg-[#e9e0d3]",
                  ].join(" ")}
                >
                  {option}
                </Link>
              );
            })}
          </div>

          <p className="mt-4 text-sm leading-6 text-[#5a6470]">
            Pick a single article for focused review, or leave it on mixed mode
            to pull a set from across the full library.
          </p>
        </div>
      </div>
    </section>
  );
}