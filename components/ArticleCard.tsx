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
      className="block rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-slate-400">{article.number}</div>
          <h3 className="mt-2 text-xl font-semibold text-white">{article.title}</h3>
          <p className="mt-2 text-sm text-slate-400">{article.category}</p>
        </div>
        <StatusBadge status={article.status} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}