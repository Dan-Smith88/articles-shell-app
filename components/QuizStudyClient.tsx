"use client";

import { useEffect, useMemo, useState } from "react";
import StudyShellCard from "@/components/StudyShellCard";
import {
  getStoredProgress,
  markProgress,
  type StoredProgressMap,
} from "@/lib/study-progress";

type QuizItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  question: string;
  choices: string[];
  answer: number;
};

type Props = {
  items: QuizItem[];
};

type SelectedMap = Record<string, number>;

export default function QuizStudyClient({ items }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedMap>({});
  const [submitted, setSubmitted] = useState<StoredProgressMap>({});

  useEffect(() => {
    setSubmitted(getStoredProgress("quiz"));
  }, []);

  const totals = useMemo(() => {
    const answeredItems = items.filter((item) => submitted[item.id]);
    const correct = answeredItems.filter(
      (item) => submitted[item.id] === "correct"
    ).length;

    return {
      answered: answeredItems.length,
      correct,
      incorrect: answeredItems.length - correct,
    };
  }, [items, submitted]);

  function handleSelect(itemId: string, choiceIndex: number) {
    if (submitted[itemId]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [itemId]: choiceIndex,
    }));
  }

  function handleSubmit(item: QuizItem) {
    const selected = selectedAnswers[item.id];
    if (typeof selected !== "number") return;

    const result = selected === item.answer ? "correct" : "incorrect";
    const updated = markProgress("quiz", item.id, result);
    setSubmitted(updated);
  }

  return (
    <div className="mt-8 space-y-5">
      <section className="rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
          Score
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
              Answered
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1f2a3a]">
              {totals.answered}
            </p>
          </div>

          <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
              Correct
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1f2a3a]">
              {totals.correct}
            </p>
          </div>

          <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
              Incorrect
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1f2a3a]">
              {totals.incorrect}
            </p>
          </div>
        </div>
      </section>

      {items.map((item, index) => {
        const selected = selectedAnswers[item.id];
        const result = submitted[item.id];
        const isSubmitted = Boolean(result);

        return (
          <StudyShellCard
            key={item.id}
            title={`${index + 1}. ${item.articleNumber} · ${item.articleTitle}`}
          >
            <div className="space-y-4">
              <p className="text-base font-semibold text-[#1f2a3a]">
                {item.question}
              </p>

              <ul className="space-y-2">
                {item.choices.map((choice, i) => {
                  const isSelected = selected === i;
                  const isCorrectChoice = item.answer === i;

                  const choiceClass = isSubmitted
                    ? isCorrectChoice
                      ? "border-green-700 bg-green-50 text-green-900"
                      : isSelected
                      ? "border-red-700 bg-red-50 text-red-900"
                      : "border-[#d8cfc1] bg-[#f7f2ea] text-[#46505b]"
                    : isSelected
                    ? "border-[#16253a] bg-[#e8edf5] text-[#16253a]"
                    : "border-[#d8cfc1] bg-[#f7f2ea] text-[#46505b] hover:border-[#bca98c]";

                  return (
                    <li key={`${item.id}-${i}`}>
                      <button
                        type="button"
                        onClick={() => handleSelect(item.id, i)}
                        disabled={isSubmitted}
                        className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${choiceClass}`}
                      >
                        <span className="font-semibold text-[#8b6a3e]">
                          {String.fromCharCode(65 + i)}.
                        </span>{" "}
                        {choice}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSubmit(item)}
                  disabled={isSubmitted || typeof selected !== "number"}
                  className="rounded-xl bg-[#16253a] px-4 py-2.5 text-sm font-semibold text-[#f7f1e7] transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitted ? "Submitted" : "Submit Answer"}
                </button>

                {isSubmitted ? (
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      result === "correct"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {result === "correct" ? "Correct" : "Incorrect"}
                  </span>
                ) : null}
              </div>
            </div>
          </StudyShellCard>
        );
      })}

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[#d8cfc1] bg-[#f5efe6] p-6 text-sm text-[#5a6470]">
          No quiz questions found for that selection.
        </div>
      ) : null}
    </div>
  );
}