export type ModeType = "quiz" | "flashcards" | "oral-drill" | "fill-in-blank";

type Article = {
  id: string;
  number: string;
  title: string;
  quiz: {
    question: string;
    choices: string[];
    answer: number;
  }[];
  flashcards: {
    front: string;
    back: string;
  }[];
  oralDrill: string[];
  fillBlank: {
    prompt: string;
    answer: string;
  }[];
};

export type QuizStudyItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  question: string;
  choices: string[];
  answer: number;
};

export type FlashcardStudyItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  front: string;
  back: string;
};

export type OralDrillStudyItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  prompt: string;
};

export type FillBlankStudyItem = {
  id: string;
  articleId: string;
  articleTitle: string;
  articleNumber: string;
  prompt: string;
  answer: string;
};

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function getQuizItems(
  articles: Article[],
  articleId?: string,
  limit?: number,
  mixed = true
): QuizStudyItem[] {
  const source = articleId
    ? articles.filter((article) => article.id === articleId)
    : articles;

  let items = source.flatMap((article, indexArticle) =>
    article.quiz.map((quiz, indexQuiz) => ({
      id: `${article.id}-quiz-${indexArticle}-${indexQuiz}`,
      articleId: article.id,
      articleTitle: article.title,
      articleNumber: article.number,
      question: quiz.question,
      choices: quiz.choices,
      answer: quiz.answer,
    }))
  );

  if (mixed && !articleId) {
    items = shuffleArray(items);
  }

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getFlashcardItems(
  articles: Article[],
  articleId?: string,
  limit?: number,
  mixed = true
): FlashcardStudyItem[] {
  const source = articleId
    ? articles.filter((article) => article.id === articleId)
    : articles;

  let items = source.flatMap((article, indexArticle) =>
    article.flashcards.map((card, indexCard) => ({
      id: `${article.id}-flash-${indexArticle}-${indexCard}`,
      articleId: article.id,
      articleTitle: article.title,
      articleNumber: article.number,
      front: card.front,
      back: card.back,
    }))
  );

  if (mixed && !articleId) {
    items = shuffleArray(items);
  }

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getOralDrillItems(
  articles: Article[],
  articleId?: string,
  limit?: number,
  mixed = true
): OralDrillStudyItem[] {
  const source = articleId
    ? articles.filter((article) => article.id === articleId)
    : articles;

  let items = source.flatMap((article, indexArticle) =>
    article.oralDrill.map((prompt, indexPrompt) => ({
      id: `${article.id}-oral-${indexArticle}-${indexPrompt}`,
      articleId: article.id,
      articleTitle: article.title,
      articleNumber: article.number,
      prompt,
    }))
  );

  if (mixed && !articleId) {
    items = shuffleArray(items);
  }

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getFillBlankItems(
  articles: Article[],
  articleId?: string,
  limit?: number,
  mixed = true
): FillBlankStudyItem[] {
  const source = articleId
    ? articles.filter((article) => article.id === articleId)
    : articles;

  let items = source.flatMap((article, indexArticle) =>
    article.fillBlank.map((item, indexItem) => ({
      id: `${article.id}-fill-${indexArticle}-${indexItem}`,
      articleId: article.id,
      articleTitle: article.title,
      articleNumber: article.number,
      prompt: item.prompt,
      answer: item.answer,
    }))
  );

  if (mixed && !articleId) {
    items = shuffleArray(items);
  }

  return typeof limit === "number" ? items.slice(0, limit) : items;
}