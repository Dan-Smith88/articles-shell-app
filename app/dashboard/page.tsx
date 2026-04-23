import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { categoryCounts, countByStatus, totalArticles } from "@/lib/utils";

export default function DashboardPage() {
  const counts = categoryCounts();
  const recent = articles.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#e9e4db] px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-8">
          <Header
            title="Dashboard"
            subtitle="A structured workspace for reviewing progress, tracking categories, and evaluating the study flow."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Total Articles" value={totalArticles()} />
            <StatCard title="Not Started" value={countByStatus("not_started")} />
            <StatCard title="In Progress" value={countByStatus("in_progress")} />
            <StatCard
              title="Reviewed + Mastered"
              value={countByStatus("reviewed") + countByStatus("mastered")}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <StatCard title="Articles of Faith" value={counts.articlesOfFaith} />
            <StatCard title="Biblical Principles" value={counts.bpl} />
            <StatCard title="Declarations" value={counts.declarations} />
          </div>

          <section className="rounded-[32px] border border-[#cfc5b7] bg-[#f7f3ec] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#1f2a3a]">Recent Articles</h2>
              <div className="text-sm text-[#6b7280]">Most recent study shells</div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {recent.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}