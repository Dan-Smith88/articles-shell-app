"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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

export default function StudyFilters({
  basePath,
  currentArticleId,
  currentCount = "10",
  articles,
}: Props) {
  const router = useRouter();
  const [selectedArticleId, setSelectedArticleId] = useState(currentArticleId || "");
  const [selectedCount, setSelectedCount] = useState(currentCount || "10");

  function handleApply() {
    const params = new URLSearchParams();

    if (selectedArticleId) {
      params.set("articleId", selectedArticleId);
    }

    if (selectedCount) {
      params.set("count", selectedCount);
    }

    const query = params.toString();
    router.push(query ? `${basePath}?${query}` : basePath);
  }

  return (
    <section className="rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-5 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
            Study Scope
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1f2a3a]">
            Choose one article or run mixed mode
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#5a6470]">
            Leave the article blank to pull a mixed set from all articles.
          </p>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-[#223248]">
              Article
            </label>
            <select
              value={selectedArticleId}
              onChange={(e) => setSelectedArticleId(e.target.value)}
              className="w-full rounded-xl border border-[#d3c7b7] bg-[#efe8de] px-4 py-3 text-sm font-medium text-[#223248] outline-none transition focus:border-[#8b6a3e]"
            >
              <option value="">Mixed All Articles</option>
              {articles.map((article) => (
                <option key={article.id} value={article.id}>
                  {article.number} · {article.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#223248]">
            Item Count
          </label>
          <select
            value={selectedCount}
            onChange={(e) => setSelectedCount(e.target.value)}
            className="w-full rounded-xl border border-[#d3c7b7] bg-[#efe8de] px-4 py-3 text-sm font-medium text-[#223248] outline-none transition focus:border-[#8b6a3e]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="all">All</option>
          </select>
        </div>

        <div>
          <button
            onClick={handleApply}
            className="w-full rounded-xl bg-[#16253a] px-5 py-3 text-sm font-semibold text-[#f7f1e7] transition hover:opacity-95"
          >
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}