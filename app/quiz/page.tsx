import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudyShellCard from "@/components/StudyShellCard";
import { articles } from "@/data/articles";

export default function QuizPage() {
  const quizItems = articles.flatMap((article) =>
    article.quiz.slice(0, 1).map((quiz) => ({
      articleTitle: article.title,
      articleNumber: article.number,
      ...quiz
    }))
  );

  return (
    <main className="min-h-screen bg-[#e9e4db] px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <Header
            title="Quiz"
            subtitle="One dummy quiz item per article so you can judge the feel of the review flow."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {quizItems.map((item, index) => (
              <StudyShellCard key={index} title={`${item.articleNumber} — ${item.articleTitle}`}>
                <div className="font-semibold text-[#1f2a3a]">{item.question}</div>
                <ul className="space-y-1 pt-3 text-[#4b5563]">
                  {item.choices.map((choice, i) => (
                    <li key={i}>
                      <span className="mr-2 font-medium text-[#8b93a1]">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {choice}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 text-sm text-[#7b8390]">
                  Dummy correct answer: {String.fromCharCode(65 + item.answer)}
                </div>
              </StudyShellCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}