"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { articles } from "@/data/articles";
import {
  createScheduleItemId,
  formatMonthLabel,
  formatScheduleDate,
  getCalendarDays,
  getItemsForDate,
  getScheduleTypeClasses,
  getScheduleTypeLabel,
  getStoredScheduleItems,
  groupScheduleItems,
  isSameDay,
  isSameMonth,
  saveScheduleItems,
  ScheduleItem,
  ScheduleItemType,
  toDateKey
} from "@/lib/schedule";

const eventTypeOptions: { value: ScheduleItemType; label: string }[] = [
  { value: "study", label: "Study Session" },
  { value: "meeting", label: "Meeting" },
  { value: "exam", label: "Exam" },
  { value: "deadline", label: "Deadline" },
  { value: "oral_drill", label: "Oral Drill" },
  { value: "other", label: "Other" }
];

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function SchedulePage() {
  const searchParams = useSearchParams();
  const prefillArticleId = searchParams.get("articleId") || "";

  const today = useMemo(() => new Date(), []);
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(today);

  const [title, setTitle] = useState("");
  const [type, setType] = useState<ScheduleItemType>("study");
  const [date, setDate] = useState(toDateKey(today));
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [linkedArticleId, setLinkedArticleId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const stored = getStoredScheduleItems();
    setItems(stored);
  }, []);

  useEffect(() => {
    if (!prefillArticleId) return;

    const article = articles.find((a) => a.id === prefillArticleId);
    if (!article) return;

    setLinkedArticleId(article.id);

    if (!title.trim()) {
      setTitle(`Study ${article.title}`);
    }
  }, [prefillArticleId, title]);

  useEffect(() => {
    saveScheduleItems(items);
  }, [items]);

  useEffect(() => {
    const parsed = new Date(`${date}T12:00:00`);
    if (!Number.isNaN(parsed.getTime())) {
      setSelectedDate(parsed);
      setViewDate(new Date(parsed.getFullYear(), parsed.getMonth(), 1));
    }
  }, [date]);

  const linkedArticle = useMemo(
    () => articles.find((a) => a.id === linkedArticleId),
    [linkedArticleId]
  );

  const grouped = useMemo(() => groupScheduleItems(items), [items]);
  const calendarDays = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const selectedDateKey = toDateKey(selectedDate);
  const selectedDateItems = useMemo(
    () => getItemsForDate(items, selectedDateKey),
    [items, selectedDateKey]
  );

  function clearForm() {
    setTitle("");
    setType("study");
    setDate(toDateKey(selectedDate));
    setTime("");
    setNotes("");
    setLinkedArticleId("");
    setErrorMessage("");
    setSuccessMessage("");
  }

  function handleAddItem(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!title.trim()) {
      setErrorMessage("Please enter a title.");
      return;
    }

    if (!date) {
      setErrorMessage("Please choose a date.");
      return;
    }

    const newItem: ScheduleItem = {
      id: createScheduleItemId(),
      title: title.trim(),
      type,
      date,
      time: time || undefined,
      notes: notes.trim() || undefined,
      linkedArticleId: linkedArticle?.id,
      linkedArticleTitle: linkedArticle?.title
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setSuccessMessage("Schedule item saved.");
    setTitle("");
    setType("study");
    setDate(toDateKey(selectedDate));
    setTime("");
    setNotes("");
    setLinkedArticleId("");
  }

  function handleDeleteItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setSuccessMessage("Schedule item deleted.");
    setErrorMessage("");
  }

  function handleCalendarDateClick(day: Date) {
    const key = toDateKey(day);
    setSelectedDate(day);
    setDate(key);
    setErrorMessage("");
    setSuccessMessage("");
  }

  function moveMonth(offset: number) {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  }

  return (
    <main className="min-h-screen bg-[#e7e1d7] px-8 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 md:flex-row">
        <Sidebar />

        <div className="flex flex-1 flex-col gap-8">
          <Header
            title="Study Plan"
            subtitle="Plan study dates, meetings, oral drills, and exam deadlines with both a calendar and agenda view."
          />

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[30px] border border-[#d0c6b8] bg-[#f3ede3] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                    Calendar
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold text-[#1f2a3a]">
                    {formatMonthLabel(viewDate)}
                  </h2>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => moveMonth(-1)}
                    className="rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewDate(new Date(today.getFullYear(), today.getMonth(), 1))}
                    className="rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => moveMonth(1)}
                    className="rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-2">
                {weekdayLabels.map((label) => (
                  <div
                    key={label}
                    className="rounded-xl px-2 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#8b6a3e]"
                  >
                    {label}
                  </div>
                ))}

                {calendarDays.map((day) => {
                  const dayKey = toDateKey(day);
                  const dayItems = getItemsForDate(items, dayKey);
                  const isSelected = isSameDay(day, selectedDate);
                  const isCurrentMonth = isSameMonth(day, viewDate);
                  const isToday = isSameDay(day, today);

                  return (
                    <button
                      key={dayKey}
                      type="button"
                      onClick={() => handleCalendarDateClick(day)}
                      className={[
                        "min-h-[110px] rounded-2xl border p-3 text-left transition",
                        isSelected
                          ? "border-[#8b6a3e] bg-[#e4dacd]"
                          : "border-[#d8cfc1] bg-[#ebe3d7] hover:bg-[#e4dacd]",
                        !isCurrentMonth ? "opacity-45" : "",
                        isToday ? "ring-1 ring-[#8b6a3e]" : ""
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#1f2a3a]">
                          {day.getDate()}
                        </span>
                        {dayItems.length > 0 ? (
                          <span className="rounded-full bg-[#1f2a3a] px-2 py-0.5 text-[10px] font-semibold text-white">
                            {dayItems.length}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-3 space-y-1">
                        {dayItems.slice(0, 2).map((item) => (
                          <div
                            key={item.id}
                            className="truncate rounded-lg bg-[#f3ede3] px-2 py-1 text-[11px] text-[#4b5563]"
                          >
                            {item.title}
                          </div>
                        ))}
                        {dayItems.length > 2 ? (
                          <div className="text-[11px] text-[#7b8390]">
                            +{dayItems.length - 2} more
                          </div>
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6a3e]">
                  Selected Date
                </div>
                <div className="mt-2 text-xl font-semibold text-[#1f2a3a]">
                  {selectedDate.toLocaleDateString(undefined, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </div>

                <div className="mt-4 space-y-3">
                  {selectedDateItems.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#d8cfc1] bg-[#f3ede3] px-4 py-4 text-sm text-[#7b8390]">
                      No items scheduled for this date.
                    </div>
                  ) : (
                    selectedDateItems.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-2xl border border-[#d8cfc1] bg-[#f3ede3] p-4"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="text-sm font-semibold text-[#1f2a3a]">
                            {item.title}
                          </div>
                          <span
                            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getScheduleTypeClasses(
                              item.type
                            )}`}
                          >
                            {getScheduleTypeLabel(item.type)}
                          </span>
                        </div>

                        <div className="mt-2 text-sm text-[#5d6570]">
                          {formatScheduleDate(item)}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>

            <section className="rounded-[30px] border border-[#d0c6b8] bg-[#f3ede3] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
                Add Item
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f2a3a]">
                New Schedule Entry
              </h2>

              <form onSubmit={handleAddItem} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#4b5563]">
                    Title
                  </label>
                  <input
                    className="w-full rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 text-[#1f2a3a] outline-none placeholder:text-[#7b8390] focus:border-[#8b6a3e]"
                    placeholder="Study Election"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#4b5563]">
                    Type
                  </label>
                  <select
                    className="w-full rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 text-[#1f2a3a] outline-none focus:border-[#8b6a3e]"
                    value={type}
                    onChange={(e) => setType(e.target.value as ScheduleItemType)}
                  >
                    {eventTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#4b5563]">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 text-[#1f2a3a] outline-none focus:border-[#8b6a3e]"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#4b5563]">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 text-[#1f2a3a] outline-none focus:border-[#8b6a3e]"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#4b5563]">
                    Linked Article
                  </label>
                  <select
                    className="w-full rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 text-[#1f2a3a] outline-none focus:border-[#8b6a3e]"
                    value={linkedArticleId}
                    onChange={(e) => setLinkedArticleId(e.target.value)}
                  >
                    <option value="">No linked article</option>
                    {articles.map((article) => (
                      <option key={article.id} value={article.id}>
                        {article.number} — {article.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#4b5563]">
                    Notes
                  </label>
                  <textarea
                    className="min-h-[120px] w-full rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] px-4 py-3 text-[#1f2a3a] outline-none placeholder:text-[#7b8390] focus:border-[#8b6a3e]"
                    placeholder="Discuss sanctification and perseverance with pastor."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                {errorMessage ? (
                  <div className="rounded-2xl border border-[#ddbeb5] bg-[#efe0dc] px-4 py-3 text-sm font-medium text-[#8a4d3c]">
                    {errorMessage}
                  </div>
                ) : null}

                {successMessage ? (
                  <div className="rounded-2xl border border-[#c9d4cd] bg-[#e7ece8] px-4 py-3 text-sm font-medium text-[#48635c]">
                    {successMessage}
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-2xl bg-[#1f2a3a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17202d]"
                  >
                    Save Item
                  </button>

                  <button
                    type="button"
                    onClick={clearForm}
                    className="rounded-2xl border border-[#c9beaf] bg-[#ebe3d7] px-6 py-3 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </section>
          </div>

          <section className="rounded-[30px] border border-[#d0c6b8] bg-[#f3ede3] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
              Agenda View
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f2a3a]">
              Upcoming
            </h2>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <ScheduleGroup title="Today" items={grouped.today} onDelete={handleDeleteItem} />
              <ScheduleGroup
                title="This Week"
                items={grouped.thisWeek}
                onDelete={handleDeleteItem}
              />
              <ScheduleGroup title="Later" items={grouped.later} onDelete={handleDeleteItem} />
              <ScheduleGroup
                title="Past Due"
                items={grouped.pastDue}
                onDelete={handleDeleteItem}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ScheduleGroup({
  title,
  items,
  onDelete
}: {
  title: string;
  items: ScheduleItem[];
  onDelete: (id: string) => void;
}) {
  return (
    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a3e]">
        {title}
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#d8cfc1] bg-[#efe9df] px-4 py-4 text-sm text-[#7b8390]">
          No items
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[#d8cfc1] bg-[#ebe3d7] p-4"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-base font-semibold text-[#1f2a3a]">
                      {item.title}
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getScheduleTypeClasses(
                        item.type
                      )}`}
                    >
                      {getScheduleTypeLabel(item.type)}
                    </span>
                  </div>

                  <div className="mt-2 text-sm text-[#5d6570]">{formatScheduleDate(item)}</div>

                  {item.linkedArticleTitle ? (
                    <div className="mt-2 text-sm text-[#5d6570]">
                      Linked article:{" "}
                      <span className="font-medium text-[#1f2a3a]">
                        {item.linkedArticleTitle}
                      </span>
                    </div>
                  ) : null}

                  {item.notes ? (
                    <div className="mt-3 text-sm leading-7 text-[#4b5563]">{item.notes}</div>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => onDelete(item.id)}
                  className="self-start rounded-2xl border border-[#c9beaf] bg-[#f3ede3] px-4 py-2 text-sm font-semibold text-[#1f2a3a] transition hover:bg-[#e4dacd]"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}