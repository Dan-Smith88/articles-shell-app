import { articles, StudyStatus } from "@/data/articles";

export function getArticleById(id: string) {
  return articles.find((article) => article.id === id);
}

export function getStatusLabel(status: StudyStatus) {
  switch (status) {
    case "not_started":
      return "Not Started";
    case "in_progress":
      return "In Progress";
    case "reviewed":
      return "Reviewed";
    case "mastered":
      return "Mastered";
    default:
      return "Unknown";
  }
}

export function countByStatus(status: StudyStatus) {
  return articles.filter((article) => article.status === status).length;
}

export function totalArticles() {
  return articles.length;
}

export function categoryCounts() {
  return {
    articlesOfFaith: articles.filter((a) => a.category === "Articles of Faith").length,
    bpl: articles.filter((a) => a.category === "Biblical Principles for Living").length,
    declarations: articles.filter((a) => a.category === "Declarations on Particular Issues").length
  };
}