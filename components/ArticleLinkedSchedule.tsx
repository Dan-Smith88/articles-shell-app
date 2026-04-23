"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  formatScheduleDate,
  getScheduleTypeClasses,
  getScheduleTypeLabel,
  getStoredScheduleItems,
  sortScheduleItems,
  type ScheduleItem,
} from "@/lib/schedule";

type Props = {
  articleId: string;
};

export default function ArticleLinkedSchedule({ articleId }: Props) {
  const [items, setItems] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    setItems(getStoredScheduleItems());
  }, []);

  const linkedItems = useMemo(() => {
    return sortScheduleItems(
      items.filter((item) => item.linkedArticleId === articleId)
    ).slice(0, 5);
  }, [articleId, items]);

  return (
    <section className="rounded-3xl border border-[#d8cfc1] bg-[#f5efe6] p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
            Schedule
          </p>
          <h2 className="mt-1 text-xl font-semibold text-[#1f2a3a]">
            Linked study items
          </h2>
        </div>

        <Link
          href={`/schedule?articleId=${articleId}`}
          className="rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
        >
          Add item
        </Link>
      </div>

      {linkedItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#d8cfc1] bg-[#efe8de] p-4 text-sm text-[#6b6258]">
          No schedule items are linked yet. Add a study session, meeting, exam,
          or deadline for this article.
        </div>
      ) : (
        <div className="space-y-3">
          {linkedItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[#ddd3c6] bg-[#efe8de] p-4"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-[#1f2a3a]">
                  {item.title}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${getScheduleTypeClasses(
                    item.type
                  )}`}
                >
                  {getScheduleTypeLabel(item.type)}
                </span>
              </div>

              <p className="text-sm text-[#5e6670]">{formatScheduleDate(item)}</p>

              {item.notes ? (
                <p className="mt-2 text-sm leading-6 text-[#4e5864]">
                  {item.notes}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}