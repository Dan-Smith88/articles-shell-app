export type ScheduleItemType =
  | "study"
  | "meeting"
  | "exam"
  | "deadline"
  | "oral_drill"
  | "other";

export type ScheduleItem = {
  id: string;
  title: string;
  type: ScheduleItemType;
  date: string; // YYYY-MM-DD
  time?: string; // HH:MM
  notes?: string;
  linkedArticleId?: string;
  linkedArticleTitle?: string;
};

const STORAGE_KEY = "ordination-study-schedule";

export function getScheduleTypeLabel(type: ScheduleItemType) {
  switch (type) {
    case "study":
      return "Study Session";
    case "meeting":
      return "Meeting";
    case "exam":
      return "Exam";
    case "deadline":
      return "Deadline";
    case "oral_drill":
      return "Oral Drill";
    case "other":
      return "Other";
    default:
      return "Item";
  }
}

export function getScheduleTypeClasses(type: ScheduleItemType) {
  switch (type) {
    case "study":
      return "bg-[#e7ece8] text-[#48635c] border-[#c9d4cd]";
    case "meeting":
      return "bg-[#e8ebf1] text-[#465a78] border-[#ccd4e2]";
    case "exam":
      return "bg-[#efe1cb] text-[#8a6431] border-[#d6bf9a]";
    case "deadline":
      return "bg-[#efe0dc] text-[#8a4d3c] border-[#ddbeb5]";
    case "oral_drill":
      return "bg-[#e9e3ef] text-[#6b4f80] border-[#d3c3df]";
    case "other":
      return "bg-[#ece6dc] text-[#6f6a63] border-[#d8cfc1]";
    default:
      return "bg-[#ece6dc] text-[#6f6a63] border-[#d8cfc1]";
  }
}

export function getStoredScheduleItems(): ScheduleItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ScheduleItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveScheduleItems(items: ScheduleItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function createScheduleItemId() {
  return `sched-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function sortScheduleItems(items: ScheduleItem[]) {
  return [...items].sort((a, b) => {
    const aKey = `${a.date}T${a.time || "23:59"}`;
    const bKey = `${b.date}T${b.time || "23:59"}`;
    return aKey.localeCompare(bKey);
  });
}

export function isPastDue(item: ScheduleItem) {
  const now = new Date();
  const itemDate = new Date(`${item.date}T${item.time || "23:59"}:00`);
  return itemDate.getTime() < now.getTime();
}

export function formatScheduleDate(item: ScheduleItem) {
  const dateObj = new Date(`${item.date}T12:00:00`);
  const dateText = dateObj.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  if (!item.time) return dateText;

  const [hours, minutes] = item.time.split(":");
  const timeObj = new Date();
  timeObj.setHours(Number(hours), Number(minutes), 0, 0);

  const timeText = timeObj.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit"
  });

  return `${dateText} • ${timeText}`;
}

export function groupScheduleItems(items: ScheduleItem[]) {
  const sorted = sortScheduleItems(items);
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);

  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + 7);

  const groups = {
    today: [] as ScheduleItem[],
    thisWeek: [] as ScheduleItem[],
    later: [] as ScheduleItem[],
    pastDue: [] as ScheduleItem[]
  };

  for (const item of sorted) {
    if (isPastDue(item)) {
      groups.pastDue.push(item);
      continue;
    }

    if (item.date === todayKey) {
      groups.today.push(item);
      continue;
    }

    const itemDate = new Date(`${item.date}T12:00:00`);

    if (itemDate <= endOfWeek) {
      groups.thisWeek.push(item);
    } else {
      groups.later.push(item);
    }
  }

  return groups;
}

export function formatMonthLabel(date: Date) {
  return date.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric"
  });
}

export function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getCalendarDays(viewDate: Date) {
  const firstOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const start = new Date(firstOfMonth);
  start.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

  const lastOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const end = new Date(lastOfMonth);
  end.setDate(lastOfMonth.getDate() + (6 - lastOfMonth.getDay()));

  const days: Date[] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

export function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

export function isSameDay(a: Date, b: Date) {
  return toDateKey(a) === toDateKey(b);
}

export function getItemsForDate(items: ScheduleItem[], dateKey: string) {
  return sortScheduleItems(items).filter((item) => item.date === dateKey);
}