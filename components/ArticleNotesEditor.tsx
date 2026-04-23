"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ordination-article-notes";

type StoredNotes = Record<string, string>;

type Props = {
  articleId: string;
  articleTitle: string;
};

function getStoredNotes(): StoredNotes {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredNotes;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveStoredNotes(notes: StoredNotes) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export default function ArticleNotesEditor({
  articleId,
  articleTitle,
}: Props) {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const allNotes = getStoredNotes();
    setValue(allNotes[articleId] || "");
  }, [articleId]);

  function handleSave() {
    const allNotes = getStoredNotes();
    allNotes[articleId] = value;
    saveStoredNotes(allNotes);
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 1500);
  }

  return (
    <div className="rounded-3xl border border-[#d8cfc1] bg-[#f5efe6] p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
            Notes
          </p>
          <h2 className="mt-1 text-xl font-semibold text-[#1f2a3a]">
            {articleTitle}
          </h2>
        </div>

        <button
          onClick={handleSave}
          className="rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
        >
          {saved ? "Saved" : "Save Notes"}
        </button>
      </div>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write your notes, summary, cross references, oral prep bullets, or objections you want to answer..."
        className="min-h-[360px] w-full rounded-2xl border border-[#d8cfc1] bg-[#fffdfa] p-4 text-sm leading-6 text-[#1f2a3a] outline-none transition focus:border-[#bca98c]"
      />
    </div>
  );
}