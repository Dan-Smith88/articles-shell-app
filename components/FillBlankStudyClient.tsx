"use client";

import { useEffect, useMemo, useState } from "react";
import StudyShellCard from "@/components/StudyShellCard";
import {
  getStoredProgress,
  markProgress,
  type StoredProgressMap,
} from "@/lib/study-progress";

type FillBlankItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  prompt: string;
  answer: string;
};

type Props = {
  items: FillBlankItem[];
};

type InputMap = Record<string, string>;

function normalizeValue(value: string) {
  return value.trim().toLowerCase();
}

export default function FillBlankStudyClient({ items }: Props) {
  const [answers, setAnswers] = useState<InputMap>({});
  const [submitted, setSubmitted] = useState<StoredProgressMap>({});

  useEffect(() => {
    setSubmitted(getStoredProgress("fill-in-blank"));
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

  function handleInput(itemId: string, value: string) {
    if (submitted[itemId]) return;

    setAnswers((prev) => ({
      ...prev,
      [itemId]: value,
    }));
  }

  function handleSubmit(item: FillBlankItem) {
    const typed = answers[item.id] || "";
    if (!typed.trim()) return;

    const isCorrect = normalizeValue(typed) === normalizeValue(item.answer);
    const updated = markProgress(
      "fill-in-blank",
      item.id,
      isCorrect ? "correct" : "incorrect"
    );
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
        const result = submitted[item.id];
        const isSubmitted = Boolean(result);
        const value = answers[item.id] || "";

        return (
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

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#223248]">
                  Your answer
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInput(item.id, e.target.value)}
                  disabled={isSubmitted}
                  className="w-full rounded-xl border border-[#d3c7b7] bg-[#efe8de] px-4 py-3 text-sm font-medium text-[#223248] outline-none transition focus:border-[#8b6a3e] disabled:opacity-70"
                  placeholder="Type your answer"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSubmit(item)}
                  disabled={isSubmitted || !value.trim()}
                  className="rounded-xl bg-[#16253a] px-4 py-2.5 text-sm font-semibold text-[#f7f1e7] transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitted ? "Submitted" : "Check Answer"}
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

              {isSubmitted ? (
                <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4 text-sm text-[#46505b]">
                  Correct answer:{" "}
                  <span className="font-semibold text-[#1f2a3a]">
                    {item.answer}
                  </span>
                </div>
              ) : null}
            </div>
          </StudyShellCard>
        );
      })}

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[#d8cfc1] bg-[#f5efe6] p-6 text-sm text-[#5a6470]">
          No fill-in-the-blank items found for that selection.
        </div>
      ) : null}
    </div>
  );
}