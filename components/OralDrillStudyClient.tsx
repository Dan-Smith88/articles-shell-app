"use client";

import { useEffect, useMemo, useState } from "react";
import StudyShellCard from "@/components/StudyShellCard";
import {
  getStoredProgress,
  markProgress,
  type StoredProgressMap,
} from "@/lib/study-progress";

type OralDrillItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  prompt: string;
};

type Props = {
  items: OralDrillItem[];
};

type RevealMap = Record<string, boolean>;

export default function OralDrillStudyClient({ items }: Props) {
  const [notesOpen, setNotesOpen] = useState<RevealMap>({});
  const [submitted, setSubmitted] = useState<StoredProgressMap>({});

  useEffect(() => {
    setSubmitted(getStoredProgress("oral-drill"));
  }, []);

  const totals = useMemo(() => {
    const answeredItems = items.filter((item) => submitted[item.id]);
    const correct = answeredItems.filter(
      (item) => submitted[item.id] === "correct"
    ).length;

    return {
      reviewed: answeredItems.length,
      gotIt: correct,
      needsReview: answeredItems.length - correct,
    };
  }, [items, submitted]);

  function toggleNotes(itemId: string) {
    setNotesOpen((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }

  function handleMark(itemId: string, result: "correct" | "incorrect") {
    const updated = markProgress("oral-drill", itemId, result);
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
              Needs Review
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1f2a3a]">
              {totals.needsReview}
            </p>
          </div>
        </div>
      </section>

      {items.map((item, index) => {
        const result = submitted[item.id];
        const isSubmitted = Boolean(result);

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

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => toggleNotes(item.id)}
                  className="rounded-xl border border-[#cfc3b2] bg-[#efe8de] px-4 py-2.5 text-sm font-semibold text-[#223248] transition hover:bg-[#e9e0d3]"
                >
                  {notesOpen[item.id] ? "Hide Prep Box" : "Open Prep Box"}
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
                  Needs Review
                </button>

                {isSubmitted ? (
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      result === "correct"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {result === "correct" ? "Marked Got It" : "Marked Needs Review"}
                  </span>
                ) : null}
              </div>

              {notesOpen[item.id] ? (
                <div className="rounded-2xl border border-dashed border-[#d8cfc1] bg-[#efe8de] p-4 text-sm leading-6 text-[#5a6470]">
                  Use this space as a proof-of-concept prep area. Say your answer
                  out loud, summarize your response mentally, then self-mark it.
                </div>
              ) : null}
            </div>
          </StudyShellCard>
        );
      })}

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[#d8cfc1] bg-[#f5efe6] p-6 text-sm text-[#5a6470]">
          No oral drill prompts found for that selection.
        </div>
      ) : null}
    </div>
  );
}