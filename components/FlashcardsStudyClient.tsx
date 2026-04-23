"use client";

import { useEffect, useMemo, useState } from "react";
import StudyShellCard from "@/components/StudyShellCard";
import {
  getStoredProgress,
  markProgress,
  type StoredProgressMap,
} from "@/lib/study-progress";

type FlashcardItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  front: string;
  back: string;
};

type Props = {
  items: FlashcardItem[];
};

type RevealMap = Record<string, boolean>;

export default function FlashcardsStudyClient({ items }: Props) {
  const [revealed, setRevealed] = useState<RevealMap>({});
  const [submitted, setSubmitted] = useState<StoredProgressMap>({});

  useEffect(() => {
    setSubmitted(getStoredProgress("flashcards"));
  }, []);

  const totals = useMemo(() => {
    const answeredItems = items.filter((item) => submitted[item.id]);
    const correct = answeredItems.filter(
      (item) => submitted[item.id] === "correct"
    ).length;

    return {
      reviewed: answeredItems.length,
      gotIt: correct,
      missedIt: answeredItems.length - correct,
    };
  }, [items, submitted]);

  function toggleReveal(itemId: string) {
    setRevealed((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }

  function handleMark(itemId: string, result: "correct" | "incorrect") {
    const updated = markProgress("flashcards", itemId, result);
    setSubmitted(updated);
  }

  return (
    <div className="mt-8 space-y-5">
      <section className="rounded-[2rem] border border-[#d8cfc1] bg-[#f5efe6] p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
          Review Stats
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
              Reviewed
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1f2a3a]">
              {totals.reviewed}
            </p>
          </div>

          <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
              Got It
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1f2a3a]">
              {totals.gotIt}
            </p>
          </div>

          <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6953]">
              Missed It
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1f2a3a]">
              {totals.missedIt}
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => {
          const result = submitted[item.id];
          const isSubmitted = Boolean(result);
          const isRevealed = Boolean(revealed[item.id]);

          return (
            <StudyShellCard
              key={item.id}
              title={`${index + 1}. ${item.articleNumber} · ${item.articleTitle}`}
            >
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#d8cfc1] bg-[#f7f2ea] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6a3e]">
                    Front
                  </p>
                  <p className="text-sm leading-6 text-[#1f2a3a]">{item.front}</p>
                </div>

                {isRevealed ? (
                  <div className="rounded-2xl border border-[#d8cfc1] bg-[#efe8de] p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6a3e]">
                      Back
                    </p>
                    <p className="text-sm leading-6 text-[#46505b]">{item.back}</p>
                  </div>
                ) : null}

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleReveal(item.id)}
                    className="rounded-xl border border-[#cfc3b2] bg-[#efe8de] px-4 py-2.5 text-sm font-semibold text-[#223248] transition hover:bg-[#e9e0d3]"
                  >
                    {isRevealed ? "Hide Answer" : "Reveal Answer"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMark(item.id, "correct")}
                    className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    Got It
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMark(item.id, "incorrect")}
                    className="rounded-xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    Missed It
                  </button>

                  {isSubmitted ? (
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        result === "correct"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {result === "correct" ? "Marked Got It" : "Marked Missed It"}
                    </span>
                  ) : null}
                </div>
              </div>
            </StudyShellCard>
          );
        })}
      </div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[#d8cfc1] bg-[#f5efe6] p-6 text-sm text-[#5a6470]">
          No flashcards found for that selection.
        </div>
      ) : null}
    </div>
  );
}