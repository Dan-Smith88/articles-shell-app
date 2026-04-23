import Link from "next/link";
import { Article } from "@/data/articles";
import StatusBadge from "./StatusBadge";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link
      href={`/articles/${article.id}`}
      className="block rounded-[28px] border border-[#cfc5b7] bg-[#f7f3ec] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:bg-[#fbf8f2]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-[#7a746c]">{article.number}</div>
          <h3 className="mt-2 text-xl font-semibold text-[#1f2a3a]">{article.title}</h3>
          <p className="mt-2 text-sm text-[#6b7280]">{article.category}</p>
        </div>
        <StatusBadge status={article.status} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#ddd3c5] bg-[#efe8dc] px-3 py-1 text-xs font-medium text-[#5d6570]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}