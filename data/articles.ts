export type ArticleStatus = "Not Started" | "In Progress" | "Reviewed" | "Mastered";

export type QuizItem = {
  question: string;
  choices: string[];
  answer: number;
};

export type FlashcardItem = {
  front: string;
  back: string;
};

export type FillBlankItem = {
  prompt: string;
  answer: string;
};

export type ArticleCategory =
  | "Articles of Faith"
  | "Biblical Principles for Living"
  | "Declarations on Particular Issues";

export type Article = {
  id: string;
  number: string;
  title: string;
  category: ArticleCategory;
  status: ArticleStatus;
  tags: string[];
  summaryPlaceholder: string;
  quiz: QuizItem[];
  flashcards: FlashcardItem[];
  oralDrill: string[];
  fillBlank: FillBlankItem[];
};

function makePlaceholderQuiz(articleTitle: string): QuizItem[] {
  return [
    {
      question: `Placeholder question 1 for ${articleTitle}?`,
      choices: [
        "Placeholder answer choice A",
        "Placeholder answer choice B",
        "Placeholder answer choice C",
        "Placeholder answer choice D",
      ],
      answer: 0,
    },
    {
      question: `Placeholder question 2 for ${articleTitle}?`,
      choices: [
        "Sample option A",
        "Sample option B",
        "Sample option C",
        "Sample option D",
      ],
      answer: 1,
    },
    {
      question: `Placeholder question 3 for ${articleTitle}?`,
      choices: [
        "Draft option A",
        "Draft option B",
        "Draft option C",
        "Draft option D",
      ],
      answer: 2,
    },
    {
      question: `Placeholder question 4 for ${articleTitle}?`,
      choices: [
        "Example choice A",
        "Example choice B",
        "Example choice C",
        "Example choice D",
      ],
      answer: 3,
    },
    {
      question: `Placeholder question 5 for ${articleTitle}?`,
      choices: ["Response A", "Response B", "Response C", "Response D"],
      answer: 0,
    },
  ];
}

function makePlaceholderFlashcards(articleTitle: string): FlashcardItem[] {
  return [
    {
      front: `Placeholder flashcard front 1 for ${articleTitle}`,
      back: `Placeholder flashcard back 1 for ${articleTitle}`,
    },
    {
      front: `Placeholder flashcard front 2 for ${articleTitle}`,
      back: `Placeholder flashcard back 2 for ${articleTitle}`,
    },
    {
      front: `Placeholder flashcard front 3 for ${articleTitle}`,
      back: `Placeholder flashcard back 3 for ${articleTitle}`,
    },
    {
      front: `Placeholder flashcard front 4 for ${articleTitle}`,
      back: `Placeholder flashcard back 4 for ${articleTitle}`,
    },
    {
      front: `Placeholder flashcard front 5 for ${articleTitle}`,
      back: `Placeholder flashcard back 5 for ${articleTitle}`,
    },
  ];
}

function makePlaceholderOralDrill(articleTitle: string): string[] {
  return [
    `Placeholder oral drill prompt 1 for ${articleTitle}.`,
    `Placeholder oral drill prompt 2 for ${articleTitle}.`,
    `Placeholder oral drill prompt 3 for ${articleTitle}.`,
    `Placeholder oral drill prompt 4 for ${articleTitle}.`,
    `Placeholder oral drill prompt 5 for ${articleTitle}.`,
  ];
}

function makePlaceholderFillBlank(articleTitle: string): FillBlankItem[] {
  return [
    {
      prompt: `Placeholder sentence 1 for ${articleTitle} with a ______.`,
      answer: "placeholder",
    },
    {
      prompt: `Placeholder sentence 2 for ${articleTitle} with another ______.`,
      answer: "sample",
    },
    {
      prompt: `Placeholder sentence 3 for ${articleTitle} with a missing ______.`,
      answer: "word",
    },
    {
      prompt: `Placeholder sentence 4 for ${articleTitle} in ______ mode.`,
      answer: "study",
    },
    {
      prompt: `Placeholder sentence 5 for ${articleTitle} article ______.`,
      answer: "review",
    },
  ];
}

function makeTags(category: ArticleCategory, number: number): string[] {
  if (category === "Articles of Faith") {
    return ["Foundations", "Doctrine", `Set ${number}`];
  }

  if (category === "Biblical Principles for Living") {
    return ["Living", "Practice", `Set ${number}`];
  }

  return ["Declaration", "Application", `Set ${number}`];
}

function buildArticle(
  index: number,
  title: string,
  category: ArticleCategory,
  status: ArticleStatus = "Not Started"
): Article {
  const number = `Article ${index}`;

  return {
    id: `article-${index}`,
    number,
    title,
    category,
    status,
    tags: makeTags(category, index),
    summaryPlaceholder: `This is a placeholder summary for ${title}. It is included only to show layout, navigation, and study workflow in the proof of concept. No protected article text is used here.`,
    quiz: makePlaceholderQuiz(title),
    flashcards: makePlaceholderFlashcards(title),
    oralDrill: makePlaceholderOralDrill(title),
    fillBlank: makePlaceholderFillBlank(title),
  };
}

const articlesOfFaithTitles = [
  "The Holy Scriptures",
  "The Trinity",
  "God the Father",
  "God the Son",
  "God the Holy Spirit",
  "Creation",
  "Providence",
  "Human Nature",
  "Sin",
  "Grace",
  "Redemption",
  "Faith",
  "Repentance",
  "Justification",
  "Sanctification",
  "Perseverance",
  "The Church",
  "Baptism",
  "The Lord’s Supper",
  "Resurrection and Life",
] as const;

const biblicalPrinciplesTitles = [
  "Worship",
  "Prayer and Devotion",
  "Stewardship",
  "Family Life",
  "Truthfulness",
  "Christian Conduct",
  "Love of Neighbor",
  "Work and Calling",
  "Justice and Mercy",
  "Forgiveness",
  "Peacemaking",
  "Hospitality",
  "Contentment",
  "Wisdom",
  "Humility",
  "Service",
  "Witness",
  "Discipleship",
  "Fellowship",
  "Perseverance in Practice",
] as const;

const declarationsTitles = [
  "Marriage",
  "Sanctity of Life",
  "Religious Liberty",
  "Civil Responsibility",
  "Education",
  "Technology and Wisdom",
  "Care for the Poor",
  "Care for the Elderly",
  "Unity in the Church",
  "Discipline and Restoration",
  "Missions",
  "Final Hope",
] as const;

export const articles: Article[] = [
  ...articlesOfFaithTitles.map((title, idx) =>
    buildArticle(idx + 1, title, "Articles of Faith")
  ),
  ...biblicalPrinciplesTitles.map((title, idx) =>
    buildArticle(idx + 21, title, "Biblical Principles for Living")
  ),
  ...declarationsTitles.map((title, idx) =>
    buildArticle(idx + 41, title, "Declarations on Particular Issues")
  ),
];

export const groupedArticles: Record<ArticleCategory, Article[]> = {
  "Articles of Faith": articles.filter(
    (article) => article.category === "Articles of Faith"
  ),
  "Biblical Principles for Living": articles.filter(
    (article) => article.category === "Biblical Principles for Living"
  ),
  "Declarations on Particular Issues": articles.filter(
    (article) => article.category === "Declarations on Particular Issues"
  ),
};