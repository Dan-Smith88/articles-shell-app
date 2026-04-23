export type StudyStatus = "not_started" | "in_progress" | "reviewed" | "mastered";

export type Article = {
  id: string;
  category: "Articles of Faith" | "Biblical Principles for Living" | "Declarations on Particular Issues";
  number: string;
  title: string;
  status: StudyStatus;
  tags: string[];
  summaryPlaceholder: string;
  flashcards: { front: string; back: string }[];
  quiz: {
    question: string;
    choices: string[];
    answer: number;
  }[];
  fillBlank: {
    prompt: string;
    answer: string;
  }[];
  oralDrill: string[];
};

export const articles: Article[] = [
  {
    id: "aof-01",
    category: "Articles of Faith",
    number: "Article 1",
    title: "The Holy Scriptures",
    status: "not_started",
    tags: ["doctrine", "core"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What main doctrine does this article address?", back: "Placeholder answer" },
      { front: "Why is this article foundational?", back: "Placeholder answer" },
      { front: "What Scripture themes might relate here?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely focuses on:",
        choices: ["Scripture", "Marriage", "Baptism", "Civil government"],
        answer: 0
      },
      {
        question: "A likely study task for this article would be:",
        choices: ["Compare key biblical texts", "Review budget planning", "Map travel routes", "Draft a sermon calendar"],
        answer: 0
      },
      {
        question: "This article probably belongs in which category?",
        choices: ["Declarations", "Articles of Faith", "Notes only", "Case studies"],
        answer: 1
      }
    ],
    fillBlank: [
      { prompt: "This article teaches the importance of ______ in the life of the church.", answer: "placeholder" },
      { prompt: "A student should be able to explain this article with clarity and ______.", answer: "confidence" }
    ],
    oralDrill: [
      "Explain what this article is likely emphasizing.",
      "Why would this topic matter in ordination prep?"
    ]
  },
  {
    id: "aof-02",
    category: "Articles of Faith",
    number: "Article 2",
    title: "The Trinity",
    status: "not_started",
    tags: ["doctrine", "theology"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is central here?", back: "Placeholder answer" },
      { front: "What misunderstandings should be avoided?", back: "Placeholder answer" },
      { front: "How would you explain this simply?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely connects with:",
        choices: ["Doctrine of God", "Church discipline", "Family worship", "Property stewardship"],
        answer: 0
      },
      {
        question: "An oral drill here would likely ask you to:",
        choices: ["Explain the doctrine clearly", "Sort church records", "Budget ministry costs", "Review membership rolls"],
        answer: 0
      },
      {
        question: "A good study method for this article would be:",
        choices: ["Comparison and explanation", "Construction planning", "Travel scheduling", "Volunteer signups"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires careful theological ______.", answer: "clarity" },
      { prompt: "A candidate should explain this doctrine with precision and ______.", answer: "confidence" }
    ],
    oralDrill: [
      "Explain this doctrine in plain English.",
      "How would you defend this doctrine biblically?"
    ]
  },
  {
    id: "aof-03",
    category: "Articles of Faith",
    number: "Article 3",
    title: "God The Father",
    status: "not_started",
    tags: ["doctrine", "theology"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What is this article about?", back: "Placeholder answer" },
      { front: "What pastoral questions could arise here?", back: "Placeholder answer" },
      { front: "What doctrines connect to this?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article is best grouped under:",
        choices: ["Doctrine of God", "Ethics", "Declarations", "Administration"],
        answer: 0
      },
      {
        question: "A likely exam skill here is:",
        choices: ["Clear explanation", "Spreadsheet design", "Graphic editing", "Travel coordination"],
        answer: 0
      },
      {
        question: "A candidate should be ready to:",
        choices: ["Describe the doctrine", "Repair a layout", "Price software", "Plan an event"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "A strong answer should reflect doctrinal ______.", answer: "accuracy" },
      { prompt: "This article would likely connect with broader themes about ______.", answer: "God" }
    ],
    oralDrill: [
      "How would you explain this article to a church member?",
      "What practical value does this doctrine have?"
    ]
  },
  {
    id: "aof-04",
    category: "Articles of Faith",
    number: "Article 4",
    title: "God The Son",
    status: "not_started",
    tags: ["christology", "doctrine"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is central here?", back: "Placeholder answer" },
      { front: "What Scriptures would likely matter?", back: "Placeholder answer" },
      { front: "How would you summarize this article?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Christology", "Church buildings", "Scheduling", "Voting procedures"],
        answer: 0
      },
      {
        question: "This topic is likely important because:",
        choices: ["It shapes core theology", "It tracks attendance", "It changes software", "It handles expenses"],
        answer: 0
      },
      {
        question: "The best prep method here would be:",
        choices: ["Study and oral explanation", "Warehouse inventory", "Calendar cleanup", "Printer setup"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires strong biblical ______.", answer: "support" },
      { prompt: "A good study response should be concise and ______.", answer: "clear" }
    ],
    oralDrill: [
      "Explain why this article is central to the faith.",
      "How would you answer a challenge related to this topic?"
    ]
  },
  {
    id: "aof-05",
    category: "Articles of Faith",
    number: "Article 5",
    title: "God the Holy Spirit",
    status: "not_started",
    tags: ["doctrine", "pneumatology"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What area of theology does this article address?", back: "Placeholder answer" },
      { front: "What practical ministry implications might this have?", back: "Placeholder answer" },
      { front: "What related doctrines should be studied?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely fits under:",
        choices: ["Doctrine", "Declarations", "Administration", "Family logistics"],
        answer: 0
      },
      {
        question: "A likely oral exam task would be:",
        choices: ["Explain and defend the doctrine", "Review building plans", "Check equipment", "Update software plugins"],
        answer: 0
      },
      {
        question: "This article would likely benefit from:",
        choices: ["Cross-references to related doctrines", "Restaurant recommendations", "Vehicle maintenance", "Travel booking"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely demands theological ______.", answer: "precision" },
      { prompt: "A candidate should connect this topic to Christian ______.", answer: "life" }
    ],
    oralDrill: [
      "How would you explain this doctrine to a new believer?",
      "What pastoral misuse of this doctrine should be avoided?"
    ]
  },
  {
    id: "aof-06",
    category: "Articles of Faith",
    number: "Article 6",
    title: "Creation",
    status: "not_started",
    tags: ["doctrine", "worldview"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What questions does this article likely raise?", back: "Placeholder answer" },
      { front: "How might this connect to worldview?", back: "Placeholder answer" },
      { front: "What Scriptures would likely be studied?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely relates to:",
        choices: ["Origins and doctrine", "Office supplies", "Volunteer lunches", "Printing costs"],
        answer: 0
      },
      {
        question: "This article likely matters because:",
        choices: ["It frames broader theology", "It tracks attendance", "It updates themes", "It schedules meetings"],
        answer: 0
      },
      {
        question: "A likely study activity would be:",
        choices: ["Doctrinal review", "Audio calibration", "Room reservation", "Travel mapping"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "A strong answer here should reflect a biblical ______.", answer: "worldview" },
      { prompt: "This article likely shapes how a student understands God and ______.", answer: "creation" }
    ],
    oralDrill: [
      "How would you explain why this article matters?",
      "What related doctrines connect to this one?"
    ]
  },
  {
    id: "aof-07",
    category: "Articles of Faith",
    number: "Article 7",
    title: "Satan",
    status: "not_started",
    tags: ["doctrine", "spiritual"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What topic is being addressed?", back: "Placeholder answer" },
      { front: "Why does this topic require care?", back: "Placeholder answer" },
      { front: "What pastoral issues might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Spiritual doctrine", "Church architecture", "Music planning", "Transportation"],
        answer: 0
      },
      {
        question: "A key study skill here is:",
        choices: ["Balanced explanation", "Route planning", "Budget tracking", "Inventory control"],
        answer: 0
      },
      {
        question: "This topic should be handled with:",
        choices: ["Biblical care", "Graphic filters", "Printer toner", "Hardware updates"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires doctrinal ______ and pastoral caution.", answer: "clarity" },
      { prompt: "A candidate should avoid sensationalism and stay ______.", answer: "biblical" }
    ],
    oralDrill: [
      "How would you teach this topic without being careless or sensational?",
      "Why does this doctrine matter pastorally?"
    ]
  },
  {
    id: "aof-08",
    category: "Articles of Faith",
    number: "Article 8",
    title: "Man",
    status: "not_started",
    tags: ["anthropology", "doctrine"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrinal category is involved?", back: "Placeholder answer" },
      { front: "How might this relate to sin and salvation?", back: "Placeholder answer" },
      { front: "What ministry questions might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely relates to:",
        choices: ["Human nature", "Facility maintenance", "Travel booking", "Cloud storage"],
        answer: 0
      },
      {
        question: "This topic matters because:",
        choices: ["It affects many doctrines", "It manages supplies", "It books rooms", "It edits graphics"],
        answer: 0
      },
      {
        question: "A good study approach would be:",
        choices: ["Connect related doctrines", "Test microphones", "Sort folders", "Update devices"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely shapes how we understand human ______.", answer: "nature" },
      { prompt: "A strong answer should connect this article to sin and ______.", answer: "salvation" }
    ],
    oralDrill: [
      "How would you explain this doctrine in relation to the gospel?",
      "Why is this topic foundational?"
    ]
  },
  {
    id: "aof-09",
    category: "Articles of Faith",
    number: "Article 9",
    title: "Sin",
    status: "not_started",
    tags: ["doctrine", "core"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What key issue is in view here?", back: "Placeholder answer" },
      { front: "Why is this doctrine central?", back: "Placeholder answer" },
      { front: "What related doctrines follow from this?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely shapes understanding of:",
        choices: ["The human problem", "Budget planning", "Project timelines", "Event setup"],
        answer: 0
      },
      {
        question: "A likely exam prompt would ask you to:",
        choices: ["Define and explain the doctrine", "Install a package", "Set display colors", "Sort mailing lists"],
        answer: 0
      },
      {
        question: "This article belongs under:",
        choices: ["Articles of Faith", "Declarations", "Meeting notes", "Reference only"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely explains the seriousness of human ______.", answer: "sin" },
      { prompt: "A candidate should explain both the doctrine and its ______.", answer: "importance" }
    ],
    oralDrill: [
      "How would you define this doctrine clearly?",
      "Why does this doctrine matter in pastoral ministry?"
    ]
  },
  {
    id: "aof-10",
    category: "Articles of Faith",
    number: "Article 10",
    title: "Human Ability and Responsibility",
    status: "not_started",
    tags: ["doctrine", "salvation"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What tension might be addressed here?", back: "Placeholder answer" },
      { front: "What related doctrines connect?", back: "Placeholder answer" },
      { front: "How would you explain this carefully?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely relates to:",
        choices: ["Human responsibility before God", "Printing logistics", "Fuel usage", "Volunteer calendars"],
        answer: 0
      },
      {
        question: "A student should prepare to:",
        choices: ["Explain doctrinal balance", "Check disk space", "Label folders", "Set themes"],
        answer: 0
      },
      {
        question: "This topic likely overlaps with:",
        choices: ["Election and salvation", "Parking assignments", "Meal planning", "Shipping costs"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "A strong answer should handle tension with theological ______.", answer: "care" },
      { prompt: "This article likely connects to later articles on ______.", answer: "salvation" }
    ],
    oralDrill: [
      "How would you explain this article without oversimplifying it?",
      "What misunderstandings might arise from this topic?"
    ]
  },
  {
    id: "aof-11",
    category: "Articles of Faith",
    number: "Article 11",
    title: "Election",
    status: "not_started",
    tags: ["doctrine", "salvation"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is central here?", back: "Placeholder answer" },
      { front: "What related doctrines should be linked?", back: "Placeholder answer" },
      { front: "How would you explain this pastorally?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely relates to:",
        choices: ["Salvation doctrine", "Church landscaping", "Device setup", "Facility budgeting"],
        answer: 0
      },
      {
        question: "A key skill for this article is:",
        choices: ["Accurate explanation", "Image cropping", "Spreadsheet cleanup", "Travel booking"],
        answer: 0
      },
      {
        question: "This topic likely requires:",
        choices: ["Biblical grounding and clarity", "Color matching", "Room reservations", "Sound checks"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires careful doctrinal ______.", answer: "precision" },
      { prompt: "A strong response should be both biblical and ______.", answer: "clear" }
    ],
    oralDrill: [
      "Explain this doctrine in a way that is clear and pastoral.",
      "How might this article relate to salvation as a whole?"
    ]
  },
  {
    id: "aof-12",
    category: "Articles of Faith",
    number: "Article 12",
    title: "Salvation",
    status: "not_started",
    tags: ["doctrine", "gospel"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "Why is this article central?", back: "Placeholder answer" },
      { front: "What doctrines connect to this?", back: "Placeholder answer" },
      { front: "What questions might come up in an oral exam?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely focuses on:",
        choices: ["The gospel and salvation", "Parking lot design", "Printer settings", "Calendar sync"],
        answer: 0
      },
      {
        question: "A strong candidate should be able to:",
        choices: ["Explain this clearly", "Install fonts", "Sort inventory", "Trim images"],
        answer: 0
      },
      {
        question: "This topic likely intersects with:",
        choices: ["Repentance and justification", "Travel planning", "Volunteer snacks", "Lighting setup"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely sits near the heart of the ______.", answer: "gospel" },
      { prompt: "A student should be able to explain this doctrine with biblical ______.", answer: "clarity" }
    ],
    oralDrill: [
      "How would you explain the main thrust of this article?",
      "Why is this article essential in ordination prep?"
    ]
  },
  {
    id: "aof-13",
    category: "Articles of Faith",
    number: "Article 13",
    title: "Repentance",
    status: "not_started",
    tags: ["doctrine", "salvation"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What practice or doctrine is central here?", back: "Placeholder answer" },
      { front: "How would you explain this to a new believer?", back: "Placeholder answer" },
      { front: "What errors might need correcting?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Repentance and response", "Expense coding", "Travel receipts", "Parking permits"],
        answer: 0
      },
      {
        question: "A likely oral question would be:",
        choices: ["Explain repentance clearly", "Fix a dashboard chart", "Review wiring", "Check permissions"],
        answer: 0
      },
      {
        question: "This topic probably connects to:",
        choices: ["Salvation and regeneration", "Inventory counts", "Meeting rooms", "Browser settings"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "A good answer should distinguish this doctrine with biblical ______.", answer: "clarity" },
      { prompt: "This article likely connects to the Christian response to the ______.", answer: "gospel" }
    ],
    oralDrill: [
      "How would you define repentance?",
      "Why does this doctrine matter pastorally?"
    ]
  },
  {
    id: "aof-14",
    category: "Articles of Faith",
    number: "Article 14",
    title: "Regeneration",
    status: "not_started",
    tags: ["doctrine", "salvation"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is in view?", back: "Placeholder answer" },
      { front: "How is this different from related doctrines?", back: "Placeholder answer" },
      { front: "What are likely exam questions?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely belongs with:",
        choices: ["Doctrines of salvation", "Media planning", "Vehicle logs", "Supply ordering"],
        answer: 0
      },
      {
        question: "A likely study challenge is:",
        choices: ["Distinguishing related doctrines", "Updating firmware", "Scheduling repairs", "Printing handouts"],
        answer: 0
      },
      {
        question: "A student should prepare to:",
        choices: ["Explain and compare doctrines", "Resize images", "Sort payments", "Check attendance"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires doctrinal ______ between related concepts.", answer: "distinction" },
      { prompt: "A strong student answer should be concise and ______.", answer: "clear" }
    ],
    oralDrill: [
      "How would you explain this doctrine simply?",
      "How is this doctrine related to salvation?"
    ]
  },
  {
    id: "aof-15",
    category: "Articles of Faith",
    number: "Article 15",
    title: "Justification",
    status: "not_started",
    tags: ["doctrine", "salvation"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is central here?", back: "Placeholder answer" },
      { front: "What comparisons would help study?", back: "Placeholder answer" },
      { front: "What pastoral issues might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely connects to:",
        choices: ["Core soteriology", "Shipping labels", "Room booking", "Printer settings"],
        answer: 0
      },
      {
        question: "A likely oral prompt is:",
        choices: ["Explain justification clearly", "Configure storage", "Review seats", "Plan meals"],
        answer: 0
      },
      {
        question: "A useful study move would be:",
        choices: ["Compare with sanctification", "Adjust monitor brightness", "Label supplies", "Check fuel usage"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "A candidate should be ready to distinguish this article from ______.", answer: "sanctification" },
      { prompt: "A strong explanation should be both accurate and ______.", answer: "pastoral" }
    ],
    oralDrill: [
      "How would you explain this doctrine to a church member?",
      "How is this different from sanctification?"
    ]
  },
  {
    id: "aof-16",
    category: "Articles of Faith",
    number: "Article 16",
    title: "Sanctification",
    status: "not_started",
    tags: ["doctrine", "growth"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What process or doctrine is in view?", back: "Placeholder answer" },
      { front: "How would you compare this to justification?", back: "Placeholder answer" },
      { front: "Why does this matter pastorally?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Christian growth", "Payroll processing", "HVAC scheduling", "Desktop backups"],
        answer: 0
      },
      {
        question: "A likely exam challenge is:",
        choices: ["Distinguishing related doctrines", "Testing Wi-Fi", "Ordering chairs", "Cleaning data"],
        answer: 0
      },
      {
        question: "A good prep method would be:",
        choices: ["Compare and explain", "Sort cables", "Print labels", "Reserve a room"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely focuses on Christian ______.", answer: "growth" },
      { prompt: "A student should connect this doctrine with the believer’s ______.", answer: "life" }
    ],
    oralDrill: [
      "How would you explain this doctrine practically?",
      "How is this doctrine different from justification?"
    ]
  },
  {
    id: "aof-17",
    category: "Articles of Faith",
    number: "Article 17",
    title: "Perseverance of the Saints",
    status: "not_started",
    tags: ["doctrine", "salvation"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is central here?", back: "Placeholder answer" },
      { front: "What pastoral questions often arise?", back: "Placeholder answer" },
      { front: "What related texts would likely matter?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely addresses:",
        choices: ["Perseverance in salvation", "Meal setup", "Volunteer mileage", "File cleanup"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask you to:",
        choices: ["Explain the doctrine clearly", "Install software", "Book lodging", "Check batteries"],
        answer: 0
      },
      {
        question: "A student should be prepared to:",
        choices: ["Handle assurance questions", "Arrange seating", "Manage receipts", "Tune audio"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely connects to assurance and spiritual ______.", answer: "perseverance" },
      { prompt: "A strong answer should be doctrinally grounded and ______.", answer: "pastoral" }
    ],
    oralDrill: [
      "How would you explain this doctrine to someone struggling with assurance?",
      "Why is this article important in pastoral ministry?"
    ]
  },
  {
    id: "aof-18",
    category: "Articles of Faith",
    number: "Article 18",
    title: "The Church",
    status: "not_started",
    tags: ["ecclesiology", "church"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What major doctrine does this article cover?", back: "Placeholder answer" },
      { front: "What practical ministry implications does it have?", back: "Placeholder answer" },
      { front: "What related articles should be linked?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article is most likely about:",
        choices: ["The church", "Transportation", "Expenses", "File storage"],
        answer: 0
      },
      {
        question: "A likely study connection would be:",
        choices: ["Mission and ordinances", "Travel and lodging", "Food and inventory", "Parking and setup"],
        answer: 0
      },
      {
        question: "A candidate should prepare to:",
        choices: ["Explain ecclesiology", "Reset passwords", "Label equipment", "Review budgets"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely lays out a doctrine of the ______.", answer: "church" },
      { prompt: "A strong student response should include theology and ______.", answer: "practice" }
    ],
    oralDrill: [
      "How would you explain the importance of the church?",
      "What practical ministry issues might this article shape?"
    ]
  },
  {
    id: "aof-19",
    category: "Articles of Faith",
    number: "Article 19",
    title: "The Evangelistic Mission of the Church",
    status: "not_started",
    tags: ["mission", "church"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What mission focus is likely central?", back: "Placeholder answer" },
      { front: "How does this connect to the church?", back: "Placeholder answer" },
      { front: "What practical questions arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Mission and evangelism", "Roof repairs", "Asset tags", "Menu planning"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["How should the church understand mission?", "How should chairs be arranged?", "How should toner be stocked?", "How should routes be mapped?"],
        answer: 0
      },
      {
        question: "This article likely overlaps with:",
        choices: ["The Church", "Parking", "Scheduling", "Storage"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses the mission of the ______.", answer: "church" },
      { prompt: "A strong answer should connect doctrine with practical ______.", answer: "ministry" }
    ],
    oralDrill: [
      "How would you explain the church’s mission?",
      "Why is this article important for ministry leadership?"
    ]
  },
  {
    id: "aof-20",
    category: "Articles of Faith",
    number: "Article 20",
    title: "Ordinances",
    status: "not_started",
    tags: ["church", "practice"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What practices are likely in view?", back: "Placeholder answer" },
      { front: "What pastoral questions might arise?", back: "Placeholder answer" },
      { front: "How does this connect to church life?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely focuses on:",
        choices: ["Church ordinances", "Facility cleaning", "Project planning", "Expense receipts"],
        answer: 0
      },
      {
        question: "A likely exam challenge is:",
        choices: ["Explaining practice and meaning", "Adjusting screen sizes", "Ordering parts", "Editing photos"],
        answer: 0
      },
      {
        question: "This article likely links with:",
        choices: ["The Church", "Travel", "Inventory", "Scheduling"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses important church ______.", answer: "practices" },
      { prompt: "A strong answer should explain both meaning and ______.", answer: "practice" }
    ],
    oralDrill: [
      "How would you explain why these practices matter?",
      "What questions might church members ask about this article?"
    ]
  },
  {
    id: "aof-21",
    category: "Articles of Faith",
    number: "Article 21",
    title: "The Lord’s Day",
    status: "not_started",
    tags: ["church", "worship"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What topic is being addressed?", back: "Placeholder answer" },
      { front: "What pastoral application might arise?", back: "Placeholder answer" },
      { front: "What related topics connect?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Worship and Christian practice", "Table setup", "Video storage", "Route mapping"],
        answer: 0
      },
      {
        question: "A strong candidate should be able to:",
        choices: ["Explain significance and practice", "Replace hardware", "Format spreadsheets", "Balance audio"],
        answer: 0
      },
      {
        question: "A likely study connection is:",
        choices: ["Worship", "Catering", "Parking", "Repairs"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely connects worship and Christian ______.", answer: "practice" },
      { prompt: "A good answer should be doctrinally sound and ______.", answer: "practical" }
    ],
    oralDrill: [
      "How would you explain the importance of this article?",
      "What practical ministry implications might arise here?"
    ]
  },
  {
    id: "aof-22",
    category: "Articles of Faith",
    number: "Article 22",
    title: "Divine Healing",
    status: "not_started",
    tags: ["doctrine", "pastoral"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What topic is central here?", back: "Placeholder answer" },
      { front: "What pastoral cautions are needed?", back: "Placeholder answer" },
      { front: "How would you explain this carefully?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely relates to:",
        choices: ["Healing and pastoral theology", "Construction supplies", "Vehicle service", "Email organization"],
        answer: 0
      },
      {
        question: "A likely oral drill would stress:",
        choices: ["Careful explanation", "Theme colors", "Page margins", "Room dimensions"],
        answer: 0
      },
      {
        question: "A candidate should approach this topic with:",
        choices: ["Biblical care", "Budget software", "Ticket labels", "Travel estimates"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires both doctrinal and pastoral ______.", answer: "wisdom" },
      { prompt: "A strong answer should avoid extremes and stay ______.", answer: "biblical" }
    ],
    oralDrill: [
      "How would you explain this topic in a careful pastoral way?",
      "What misunderstandings might arise around this doctrine?"
    ]
  },
  {
    id: "aof-23",
    category: "Articles of Faith",
    number: "Article 23",
    title: "Civil Government",
    status: "not_started",
    tags: ["society", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What sphere of life is in view?", back: "Placeholder answer" },
      { front: "What tensions might arise?", back: "Placeholder answer" },
      { front: "How does this connect to Christian living?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Government and Christian responsibility", "Sound system cables", "Storage bins", "Food delivery"],
        answer: 0
      },
      {
        question: "A likely challenge here is:",
        choices: ["Explaining tension and duty", "Editing PDFs", "Ordering markers", "Booking flights"],
        answer: 0
      },
      {
        question: "A good prep method is:",
        choices: ["Study principles and application", "Check toner", "Resize graphics", "Track mileage"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses Christian responsibility in ______.", answer: "society" },
      { prompt: "A strong answer should connect theology and public ______.", answer: "life" }
    ],
    oralDrill: [
      "How would you explain the Christian relationship to civil government?",
      "What tensions might a pastor need to address from this topic?"
    ]
  },
  {
    id: "aof-24",
    category: "Articles of Faith",
    number: "Article 24",
    title: "Resurrection",
    status: "not_started",
    tags: ["eschatology", "doctrine"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is addressed here?", back: "Placeholder answer" },
      { front: "Why does this matter pastorally?", back: "Placeholder answer" },
      { front: "What related doctrines connect?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Resurrection doctrine", "Device rotation", "Inventory tags", "Cleaning supplies"],
        answer: 0
      },
      {
        question: "A likely oral drill would be:",
        choices: ["Explain this doctrine with hope and clarity", "Review seating charts", "Check browser tabs", "Book travel rooms"],
        answer: 0
      },
      {
        question: "A candidate should prepare to connect this with:",
        choices: ["Hope and eschatology", "Catering", "Parking maps", "Newsletter graphics"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely strengthens Christian ______.", answer: "hope" },
      { prompt: "A good answer should connect doctrine with pastoral ______.", answer: "comfort" }
    ],
    oralDrill: [
      "How would you explain why this doctrine matters?",
      "What comfort does this doctrine bring?"
    ]
  },
  {
    id: "aof-25",
    category: "Articles of Faith",
    number: "Article 25",
    title: "The Second Coming of Christ",
    status: "not_started",
    tags: ["eschatology", "doctrine"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What doctrine is central here?", back: "Placeholder answer" },
      { front: "What practical implications might this have?", back: "Placeholder answer" },
      { front: "How would you explain it without speculation?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely focuses on:",
        choices: ["Eschatology", "Maintenance logs", "Travel approvals", "File backups"],
        answer: 0
      },
      {
        question: "A likely challenge is:",
        choices: ["Staying biblical and clear", "Resetting devices", "Editing images", "Labeling bins"],
        answer: 0
      },
      {
        question: "A useful prep method would be:",
        choices: ["Doctrinal study with oral explanation", "Printer cleaning", "Menu planning", "Parking assignment"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely calls for doctrinal clarity and future ______.", answer: "hope" },
      { prompt: "A strong answer should avoid speculation and stay ______.", answer: "biblical" }
    ],
    oralDrill: [
      "How would you explain this doctrine faithfully and carefully?",
      "Why does this doctrine matter for Christian living?"
    ]
  },
  {
    id: "aof-26",
    category: "Articles of Faith",
    number: "Article 26",
    title: "The Judgments",
    status: "not_started",
    tags: ["eschatology", "doctrine"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What topic is likely addressed here?", back: "Placeholder answer" },
      { front: "What pastoral questions might arise?", back: "Placeholder answer" },
      { front: "What doctrines connect?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Judgment and final things", "Storage rooms", "Expense forms", "Project deadlines"],
        answer: 0
      },
      {
        question: "A likely oral drill would require:",
        choices: ["Careful biblical explanation", "Screen resizing", "Receipt scanning", "Building access"],
        answer: 0
      },
      {
        question: "This topic should be taught with:",
        choices: ["Sobriety and clarity", "Color presets", "Printer toner", "Travel mileage"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses themes of final ______.", answer: "judgment" },
      { prompt: "A strong answer should be careful, sober, and ______.", answer: "biblical" }
    ],
    oralDrill: [
      "How would you explain this doctrine carefully?",
      "What pastoral issues could arise from this article?"
    ]
  },
  {
    id: "aof-27",
    category: "Articles of Faith",
    number: "Article 27",
    title: "The Kingdom of God",
    status: "not_started",
    tags: ["doctrine", "eschatology"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What broad theme is central here?", back: "Placeholder answer" },
      { front: "What biblical themes might connect?", back: "Placeholder answer" },
      { front: "How would you explain this in a concise way?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Kingdom theology", "Photo editing", "Supply restocking", "Parking lot flow"],
        answer: 0
      },
      {
        question: "A likely study challenge is:",
        choices: ["Tracing big biblical themes", "Updating software", "Cleaning folders", "Checking cables"],
        answer: 0
      },
      {
        question: "A useful prep method would be:",
        choices: ["Cross-link doctrine and Scripture", "Map travel routes", "Assign volunteers", "Print handouts"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses the ______ of God.", answer: "kingdom" },
      { prompt: "A strong answer should connect this topic across the broader biblical ______.", answer: "story" }
    ],
    oralDrill: [
      "How would you explain this doctrine in broad biblical terms?",
      "Why does this topic matter in theology and ministry?"
    ]
  },
  {
    id: "aof-28",
    category: "Articles of Faith",
    number: "Article 28",
    title: "The Eternal State",
    status: "not_started",
    tags: ["eschatology", "hope"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What topic is being addressed?", back: "Placeholder answer" },
      { front: "How does this affect Christian hope?", back: "Placeholder answer" },
      { front: "What related doctrines connect?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely relates to:",
        choices: ["Final hope and eternal destiny", "Project tags", "Shipping forms", "Audio cables"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask you to:",
        choices: ["Explain the doctrine with hope and clarity", "Install updates", "Review room setup", "Check labels"],
        answer: 0
      },
      {
        question: "A student should prepare to connect this article to:",
        choices: ["Christian hope", "Expense reports", "Travel cards", "Sign-up forms"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely strengthens the believer’s eternal ______.", answer: "hope" },
      { prompt: "A good answer should be biblically grounded and ______.", answer: "pastoral" }
    ],
    oralDrill: [
      "How would you explain the importance of this article?",
      "What comfort does this doctrine offer?"
    ]
  },
  {
    id: "bpl-101-1",
    category: "Biblical Principles for Living",
    number: "Article 101-1",
    title: "Worship",
    status: "not_started",
    tags: ["living", "worship"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What life topic is in view?", back: "Placeholder answer" },
      { front: "What practical application might matter?", back: "Placeholder answer" },
      { front: "How would you teach this simply?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely belongs under:",
        choices: ["Christian living", "Facility planning", "Supply orders", "Travel receipts"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["How should worship be understood?", "How should flyers be printed?", "How should bins be labeled?", "How should events be scheduled?"],
        answer: 0
      },
      {
        question: "This topic is best approached through:",
        choices: ["Principles and practice", "Hardware updates", "Driver checks", "Color settings"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely connects theology with Christian ______.", answer: "practice" },
      { prompt: "A strong answer should be practical and ______.", answer: "biblical" }
    ],
    oralDrill: [
      "How would you explain worship in a practical way?",
      "Why does this topic matter for church life?"
    ]
  },
  {
    id: "bpl-101-2",
    category: "Biblical Principles for Living",
    number: "Article 101-2",
    title: "Prayer",
    status: "not_started",
    tags: ["living", "spiritual"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What discipline is central here?", back: "Placeholder answer" },
      { front: "What questions might church members ask?", back: "Placeholder answer" },
      { front: "How does this connect to daily Christian life?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Prayer", "Travel costs", "Building repairs", "Software themes"],
        answer: 0
      },
      {
        question: "A likely study goal is:",
        choices: ["Understand principle and practice", "Resize screens", "Track mileage", "Sort cables"],
        answer: 0
      },
      {
        question: "A good oral drill would be:",
        choices: ["Explain the role of prayer", "Review the printer", "Check the locks", "Map a route"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely focuses on the Christian life of ______.", answer: "prayer" },
      { prompt: "A strong answer should connect doctrine, dependence, and ______.", answer: "practice" }
    ],
    oralDrill: [
      "How would you explain this article to a church member?",
      "Why is this topic important for spiritual life?"
    ]
  },
  {
    id: "bpl-101-3",
    category: "Biblical Principles for Living",
    number: "Article 101-3",
    title: "Spirit World",
    status: "not_started",
    tags: ["living", "spiritual"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What topic is in view here?", back: "Placeholder answer" },
      { front: "What dangers require caution?", back: "Placeholder answer" },
      { front: "How would you teach this responsibly?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely involves:",
        choices: ["Spiritual realities", "Budget spreadsheets", "Inventory bins", "Travel meals"],
        answer: 0
      },
      {
        question: "A likely oral challenge is:",
        choices: ["Explaining carefully without sensationalism", "Fixing a monitor", "Resizing graphics", "Booking flights"],
        answer: 0
      },
      {
        question: "This topic should be approached with:",
        choices: ["Biblical caution", "Color presets", "Hardware labels", "Mileage logs"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "A strong answer should be sober, biblical, and ______.", answer: "careful" },
      { prompt: "This article likely requires both theological and pastoral ______.", answer: "wisdom" }
    ],
    oralDrill: [
      "How would you address this topic in a balanced way?",
      "What pastoral dangers should be avoided?"
    ]
  },
  {
    id: "bpl-102-1",
    category: "Biblical Principles for Living",
    number: "Article 102-1",
    title: "Holiness",
    status: "not_started",
    tags: ["living", "character"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What virtue or call is central here?", back: "Placeholder answer" },
      { front: "How does this connect to sanctification?", back: "Placeholder answer" },
      { front: "What practical questions arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Christian holiness", "Trip planning", "Supply closets", "Monitor settings"],
        answer: 0
      },
      {
        question: "A strong study move would be:",
        choices: ["Connect doctrine and life", "Sort parts", "Print labels", "Reserve rooms"],
        answer: 0
      },
      {
        question: "A candidate should prepare to:",
        choices: ["Explain holy living", "Update drivers", "Clean folders", "Check batteries"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely connects doctrine with Christian ______.", answer: "living" },
      { prompt: "A strong answer should be practical, biblical, and ______.", answer: "clear" }
    ],
    oralDrill: [
      "How would you explain holiness in the Christian life?",
      "Why is this article important for discipleship?"
    ]
  },
  {
    id: "bpl-102-2",
    category: "Biblical Principles for Living",
    number: "Article 102-2",
    title: "Justice",
    status: "not_started",
    tags: ["living", "society"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What ethical theme is addressed here?", back: "Placeholder answer" },
      { front: "How might this apply in society?", back: "Placeholder answer" },
      { front: "What pastoral questions might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Justice", "Storage labels", "Payroll dates", "Room setup"],
        answer: 0
      },
      {
        question: "A likely oral drill is:",
        choices: ["Explain biblical justice", "Test the mic", "Check tire pressure", "Arrange tables"],
        answer: 0
      },
      {
        question: "A good prep method would be:",
        choices: ["Bridge ethics and theology", "Resize photos", "Sort invoices", "Clean the inbox"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses justice in relation to Christian ______.", answer: "living" },
      { prompt: "A strong answer should connect biblical truth and public ______.", answer: "life" }
    ],
    oralDrill: [
      "How would you explain this article in practical terms?",
      "What does this topic require of Christian leaders?"
    ]
  },
  {
    id: "bpl-102-3",
    category: "Biblical Principles for Living",
    number: "Article 102-3",
    title: "Mercy",
    status: "not_started",
    tags: ["living", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What Christian quality is emphasized?", back: "Placeholder answer" },
      { front: "How would you apply this pastorally?", back: "Placeholder answer" },
      { front: "What ministry situations might connect?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Mercy", "Travel requests", "Storage units", "Audio checks"],
        answer: 0
      },
      {
        question: "A likely oral prompt is:",
        choices: ["How should Christians show mercy?", "How should graphics be exported?", "How should chairs be counted?", "How should toner be ordered?"],
        answer: 0
      },
      {
        question: "A useful study angle is:",
        choices: ["Ethics and application", "Device setup", "Room reservations", "Receipt sorting"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely emphasizes Christian ______.", answer: "mercy" },
      { prompt: "A strong answer should connect truth with compassionate ______.", answer: "action" }
    ],
    oralDrill: [
      "How would you explain mercy in Christian life?",
      "What ministry implications come from this topic?"
    ]
  },
  {
    id: "bpl-102-4",
    category: "Biblical Principles for Living",
    number: "Article 102-4",
    title: "Humility",
    status: "not_started",
    tags: ["living", "character"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What Christian virtue is central?", back: "Placeholder answer" },
      { front: "How might this affect leadership?", back: "Placeholder answer" },
      { front: "Why does this matter in church life?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Humility", "Travel timing", "Project folders", "Building paint"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["How does humility shape the Christian life?", "How do you export a file?", "How do you sort inventory?", "How do you set up seating?"],
        answer: 0
      },
      {
        question: "A good prep method would be:",
        choices: ["Study virtue and leadership", "Check toner", "Review maps", "Clean equipment"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely emphasizes the virtue of ______.", answer: "humility" },
      { prompt: "A strong answer should connect personal character and Christian ______.", answer: "leadership" }
    ],
    oralDrill: [
      "How would you explain humility in Christian life?",
      "Why does humility matter in leadership?"
    ]
  },
  {
    id: "bpl-102-5",
    category: "Biblical Principles for Living",
    number: "Article 102-5",
    title: "Truth and Integrity",
    status: "not_started",
    tags: ["living", "character"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What ethical focus is central?", back: "Placeholder answer" },
      { front: "How does this affect ministry?", back: "Placeholder answer" },
      { front: "What practical examples could arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely relates to:",
        choices: ["Truthfulness and integrity", "Travel logs", "Storage shelves", "Power outlets"],
        answer: 0
      },
      {
        question: "A likely oral drill is:",
        choices: ["Explain why integrity matters", "Resize a logo", "Book a room", "Check a battery"],
        answer: 0
      },
      {
        question: "A student should prepare to connect this with:",
        choices: ["Christian witness", "Shipping labels", "Parking plans", "Printer settings"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely connects truth with Christian ______.", answer: "integrity" },
      { prompt: "A strong answer should be practical, biblical, and ______.", answer: "honest" }
    ],
    oralDrill: [
      "How would you explain the importance of truth and integrity?",
      "Why does this matter in leadership and ministry?"
    ]
  },
  {
    id: "bpl-103-1",
    category: "Biblical Principles for Living",
    number: "Article 103-1",
    title: "Humanity in God’s Image",
    status: "not_started",
    tags: ["living", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What human dignity issue is likely addressed?", back: "Placeholder answer" },
      { front: "How does this connect to ethics?", back: "Placeholder answer" },
      { front: "What ministry implications arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Human dignity", "Storage cleaning", "Meeting setup", "Travel bookings"],
        answer: 0
      },
      {
        question: "A likely oral challenge is:",
        choices: ["Explain the doctrine’s ethical implications", "Review file names", "Test speakers", "Label folders"],
        answer: 0
      },
      {
        question: "A good prep method would be:",
        choices: ["Connect doctrine and ethics", "Sort invoices", "Change a theme", "Book a hotel"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses the dignity of human ______.", answer: "life" },
      { prompt: "A strong answer should connect doctrine and Christian ______.", answer: "ethics" }
    ],
    oralDrill: [
      "How would you explain this doctrine and its ethical implications?",
      "Why is this article important in pastoral ministry?"
    ]
  },
  {
    id: "bpl-103-2",
    category: "Biblical Principles for Living",
    number: "Article 103-2",
    title: "Repentance and Restitution",
    status: "not_started",
    tags: ["living", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What practical moral issue is likely central?", back: "Placeholder answer" },
      { front: "How does this connect to repentance?", back: "Placeholder answer" },
      { front: "What pastoral situations might involve this?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Restitution and repentance", "Sound checks", "Project notes", "Fuel receipts"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["How should restitution be understood?", "How should tables be arranged?", "How should images be cropped?", "How should printers be managed?"],
        answer: 0
      },
      {
        question: "A useful study angle is:",
        choices: ["Application of repentance", "Device setup", "Storage layout", "Travel prep"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely connects repentance with practical ______.", answer: "restoration" },
      { prompt: "A strong answer should address both principle and ______.", answer: "application" }
    ],
    oralDrill: [
      "How would you explain repentance and restitution together?",
      "What pastoral questions might arise from this topic?"
    ]
  },
  {
    id: "bpl-103-3",
    category: "Biblical Principles for Living",
    number: "Article 103-3",
    title: "Sexual Holiness",
    status: "not_started",
    tags: ["living", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What ethical topic is central?", back: "Placeholder answer" },
      { front: "Why does this require careful pastoral wisdom?", back: "Placeholder answer" },
      { front: "What questions might arise in ministry?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely addresses:",
        choices: ["Sexual ethics", "Storage planning", "Device replacement", "Audio tuning"],
        answer: 0
      },
      {
        question: "A likely oral challenge is:",
        choices: ["Explaining the topic clearly and pastorally", "Updating a dashboard", "Sorting receipts", "Checking plugs"],
        answer: 0
      },
      {
        question: "A strong prep method would be:",
        choices: ["Combine truth and pastoral care", "Book lodging", "Print handouts", "Adjust settings"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires both biblical clarity and pastoral ______.", answer: "wisdom" },
      { prompt: "A strong answer should handle this topic with truth and ______.", answer: "grace" }
    ],
    oralDrill: [
      "How would you explain this topic with both conviction and care?",
      "What pastoral issues might arise from this article?"
    ]
  },
  {
    id: "bpl-103-4",
    category: "Biblical Principles for Living",
    number: "Article 103-4",
    title: "The Family",
    status: "not_started",
    tags: ["living", "family"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What life sphere is central here?", back: "Placeholder answer" },
      { front: "What practical ministry issues might connect?", back: "Placeholder answer" },
      { front: "How would you teach this helpfully?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Family life", "Printer maintenance", "Travel reimbursements", "Storage racks"],
        answer: 0
      },
      {
        question: "A likely oral prompt is:",
        choices: ["Explain biblical family principles", "Check audio levels", "Resize documents", "Review keys"],
        answer: 0
      },
      {
        question: "A useful prep angle is:",
        choices: ["Doctrine and pastoral application", "Color settings", "Flight booking", "Cleaning schedules"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses the Christian understanding of the ______.", answer: "family" },
      { prompt: "A strong answer should connect biblical principle and pastoral ______.", answer: "care" }
    ],
    oralDrill: [
      "How would you explain this article in a pastoral setting?",
      "What practical ministry questions does this topic raise?"
    ]
  },
  {
    id: "bpl-103-5",
    category: "Biblical Principles for Living",
    number: "Article 103-5",
    title: "Divorce",
    status: "not_started",
    tags: ["living", "family"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What pastoral issue is central here?", back: "Placeholder answer" },
      { front: "Why does this require care and clarity?", back: "Placeholder answer" },
      { front: "What related topics connect?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely addresses:",
        choices: ["Divorce and pastoral care", "Travel folders", "Storage units", "Theme colors"],
        answer: 0
      },
      {
        question: "A likely challenge is:",
        choices: ["Balancing truth and mercy", "Checking monitors", "Ordering paper", "Cleaning files"],
        answer: 0
      },
      {
        question: "A good prep method would be:",
        choices: ["Study doctrine and application together", "Review parking", "Sort mileage", "Test speakers"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires both doctrinal clarity and pastoral ______.", answer: "wisdom" },
      { prompt: "A strong answer should handle difficult situations with truth and ______.", answer: "care" }
    ],
    oralDrill: [
      "How would you speak about this topic pastorally and biblically?",
      "What ministry challenges might arise from this article?"
    ]
  },
  {
    id: "bpl-103-6",
    category: "Biblical Principles for Living",
    number: "Article 103-6",
    title: "Shared Life",
    status: "not_started",
    tags: ["living", "church"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What communal theme is likely central?", back: "Placeholder answer" },
      { front: "How does this affect church life?", back: "Placeholder answer" },
      { front: "What practical ministry implications follow?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Life together in the church", "Travel mileage", "Cleaning closets", "Speaker cables"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["Explain shared Christian life", "Resize logos", "Update a browser", "Sort labels"],
        answer: 0
      },
      {
        question: "A strong prep angle is:",
        choices: ["Community and discipleship", "PDF export", "Meal ordering", "Device setup"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely emphasizes Christian life ______.", answer: "together" },
      { prompt: "A strong answer should connect doctrine, fellowship, and ______.", answer: "practice" }
    ],
    oralDrill: [
      "How would you explain shared life in the church?",
      "Why does this topic matter in ministry?"
    ]
  },
  {
    id: "bpl-104-1",
    category: "Biblical Principles for Living",
    number: "Article 104-1",
    title: "Stewardship",
    status: "not_started",
    tags: ["living", "discipleship"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What practical life theme is central?", back: "Placeholder answer" },
      { front: "How does this shape discipleship?", back: "Placeholder answer" },
      { front: "What questions might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely addresses:",
        choices: ["Stewardship", "Sound mixing", "Parking lines", "File names"],
        answer: 0
      },
      {
        question: "A likely oral drill is:",
        choices: ["Explain stewardship in Christian life", "Test the display", "Order a cable", "Review a route"],
        answer: 0
      },
      {
        question: "A good prep method is:",
        choices: ["Connect doctrine to discipleship", "Resize a chart", "Book a flight", "Sort an inbox"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses Christian ______.", answer: "stewardship" },
      { prompt: "A strong answer should connect responsibility and faithful ______.", answer: "living" }
    ],
    oralDrill: [
      "How would you explain stewardship practically?",
      "Why does this matter in everyday Christian life?"
    ]
  },
  {
    id: "bpl-104-2",
    category: "Biblical Principles for Living",
    number: "Article 104-2",
    title: "Work and Rest",
    status: "not_started",
    tags: ["living", "discipleship"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What daily life pattern is central here?", back: "Placeholder answer" },
      { front: "How does this connect to discipleship?", back: "Placeholder answer" },
      { front: "What practical questions could arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely concerns:",
        choices: ["Work and rest", "Monitor brightness", "Travel envelopes", "Inventory shelves"],
        answer: 0
      },
      {
        question: "A likely oral prompt is:",
        choices: ["Explain a Christian view of work and rest", "Check battery levels", "Review room locks", "Trim a graphic"],
        answer: 0
      },
      {
        question: "A useful prep angle is:",
        choices: ["Rhythms of Christian life", "Printer setup", "Expense coding", "Meal delivery"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses work, rest, and Christian ______.", answer: "discipleship" },
      { prompt: "A strong answer should connect theology with everyday ______.", answer: "life" }
    ],
    oralDrill: [
      "How would you explain a biblical view of work and rest?",
      "Why does this matter for modern Christian life?"
    ]
  },
  {
    id: "bpl-104-3",
    category: "Biblical Principles for Living",
    number: "Article 104-3",
    title: "Civil Government",
    status: "not_started",
    tags: ["living", "society"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What sphere of life is addressed here?", back: "Placeholder answer" },
      { front: "What tensions are likely involved?", back: "Placeholder answer" },
      { front: "How might this affect public witness?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Civil life and Christian responsibility", "Storage labels", "Travel mileage", "Keyboard settings"],
        answer: 0
      },
      {
        question: "A likely oral challenge is:",
        choices: ["Balancing obedience and conviction", "Checking an outlet", "Cropping an image", "Booking a hotel"],
        answer: 0
      },
      {
        question: "A good prep method is:",
        choices: ["Connect theology and public life", "Review invoices", "Sort cables", "Clean folders"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses the Christian’s relationship to civil ______.", answer: "government" },
      { prompt: "A strong answer should connect public life and biblical ______.", answer: "conviction" }
    ],
    oralDrill: [
      "How would you explain this topic in a balanced biblical way?",
      "What ministry challenges might arise from this article?"
    ]
  },
  {
    id: "bpl-104-4",
    category: "Biblical Principles for Living",
    number: "Article 104-4",
    title: "Christian Liberty & Servanthood",
    status: "not_started",
    tags: ["living", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What tension is likely central here?", back: "Placeholder answer" },
      { front: "How do liberty and service connect?", back: "Placeholder answer" },
      { front: "What pastoral questions might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely addresses:",
        choices: ["Liberty and service", "Power cables", "Parking permits", "Supply bins"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["How should Christian liberty be understood?", "How should this app be themed?", "How should speakers be mounted?", "How should invoices be stored?"],
        answer: 0
      },
      {
        question: "A strong prep method is:",
        choices: ["Explain tension and application", "Resize a page", "Check printer ink", "Review room maps"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely connects Christian liberty with humble ______.", answer: "service" },
      { prompt: "A strong answer should be balanced, biblical, and ______.", answer: "practical" }
    ],
    oralDrill: [
      "How would you explain Christian liberty without confusion?",
      "Why must liberty be tied to servanthood?"
    ]
  },
  {
    id: "dec-151",
    category: "Declarations on Particular Issues",
    number: "Article 151",
    title: "Dedication of Children",
    status: "not_started",
    tags: ["declaration", "family"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What church practice is likely addressed?", back: "Placeholder answer" },
      { front: "What family or pastoral questions might arise?", back: "Placeholder answer" },
      { front: "How would you explain this simply?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Child dedication", "Parking strips", "Device storage", "Travel cards"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["Explain the practice and its meaning", "Check batteries", "Resize an icon", "Sort invoices"],
        answer: 0
      },
      {
        question: "A good prep approach is:",
        choices: ["Practice doctrinal and pastoral explanation", "Book a room", "Label cables", "Review receipts"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses a church practice related to ______.", answer: "children" },
      { prompt: "A strong answer should explain both meaning and ______.", answer: "practice" }
    ],
    oralDrill: [
      "How would you explain this practice to a family?",
      "What pastoral issues might come up here?"
    ]
  },
  {
    id: "dec-152",
    category: "Declarations on Particular Issues",
    number: "Article 152",
    title: "Abortion",
    status: "not_started",
    tags: ["declaration", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What ethical issue is likely in view?", back: "Placeholder answer" },
      { front: "Why does this require theological and pastoral care?", back: "Placeholder answer" },
      { front: "What ministry situations might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article most likely addresses:",
        choices: ["A life ethics issue", "Supply counts", "Travel plans", "Display settings"],
        answer: 0
      },
      {
        question: "A likely oral challenge is:",
        choices: ["Speak with conviction and compassion", "Install a widget", "Review parking", "Test a projector"],
        answer: 0
      },
      {
        question: "A strong prep method is:",
        choices: ["Combine ethics and pastoral care", "Sort mail", "Book flights", "Check lighting"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires strong ethical clarity and pastoral ______.", answer: "wisdom" },
      { prompt: "A strong answer should combine truth and ______.", answer: "compassion" }
    ],
    oralDrill: [
      "How would you explain this issue biblically and pastorally?",
      "What ministry care might be needed around this topic?"
    ]
  },
  {
    id: "dec-153",
    category: "Declarations on Particular Issues",
    number: "Article 153",
    title: "Harmful Indulgences",
    status: "not_started",
    tags: ["declaration", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What practical ethical area is likely being addressed?", back: "Placeholder answer" },
      { front: "How might this connect to discipleship?", back: "Placeholder answer" },
      { front: "What pastoral questions might arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Harmful indulgences and ethical living", "Project tags", "Room access", "Paper supplies"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["How should Christians think about harmful indulgences?", "How should files be archived?", "How should a display be mounted?", "How should receipts be scanned?"],
        answer: 0
      },
      {
        question: "A useful prep angle is:",
        choices: ["Ethics and discipleship", "Cabling and setup", "Booking and mileage", "Storage and labels"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses Christian ethics and personal ______.", answer: "conduct" },
      { prompt: "A strong answer should connect principle, warning, and ______.", answer: "discipleship" }
    ],
    oralDrill: [
      "How would you explain this topic in a practical discipleship setting?",
      "What pastoral care issues might arise from this article?"
    ]
  },
  {
    id: "dec-154",
    category: "Declarations on Particular Issues",
    number: "Article 154",
    title: "Sexual Immorality",
    status: "not_started",
    tags: ["declaration", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What moral issue is central here?", back: "Placeholder answer" },
      { front: "Why does this require pastoral care?", back: "Placeholder answer" },
      { front: "How should this be addressed wisely?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely addresses:",
        choices: ["A moral and pastoral issue", "Storage cabinets", "Travel cards", "Desktop themes"],
        answer: 0
      },
      {
        question: "A likely oral challenge is:",
        choices: ["Speak with truth and grace", "Review file permissions", "Test a microphone", "Book lodging"],
        answer: 0
      },
      {
        question: "A strong prep method is:",
        choices: ["Ethical clarity plus pastoral wisdom", "Color matching", "Parking maps", "Supply sorting"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely requires moral clarity and pastoral ______.", answer: "care" },
      { prompt: "A strong answer should combine conviction and ______.", answer: "wisdom" }
    ],
    oralDrill: [
      "How would you address this topic with both conviction and care?",
      "What ministry challenges might arise here?"
    ]
  },
  {
    id: "dec-155",
    category: "Declarations on Particular Issues",
    number: "Article 155",
    title: "Affiliations",
    status: "not_started",
    tags: ["declaration", "ethics"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What practical issue is likely central here?", back: "Placeholder answer" },
      { front: "How could this affect church life?", back: "Placeholder answer" },
      { front: "What questions might leaders face?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Affiliations and Christian responsibility", "Parking cones", "Monitor cords", "Shipping labels"],
        answer: 0
      },
      {
        question: "A likely oral drill would ask:",
        choices: ["How should Christians think about affiliations?", "How should flyers be folded?", "How should toner be tracked?", "How should cables be grouped?"],
        answer: 0
      },
      {
        question: "A strong prep method is:",
        choices: ["Think through principles and application", "Book a room", "Sort a folder", "Resize an image"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses affiliations and Christian ______.", answer: "responsibility" },
      { prompt: "A good answer should connect discernment with biblical ______.", answer: "principles" }
    ],
    oralDrill: [
      "How would you explain this issue to a church member?",
      "What pastoral or membership issues might arise here?"
    ]
  },
  {
    id: "dec-156",
    category: "Declarations on Particular Issues",
    number: "Article 156",
    title: "Immigration",
    status: "not_started",
    tags: ["declaration", "society"],
    summaryPlaceholder: "Summary placeholder for future content.",
    flashcards: [
      { front: "What public or ethical issue is likely addressed?", back: "Placeholder answer" },
      { front: "Why does this require careful pastoral thinking?", back: "Placeholder answer" },
      { front: "What ministry implications may arise?", back: "Placeholder answer" }
    ],
    quiz: [
      {
        question: "This article likely concerns:",
        choices: ["Immigration and Christian response", "Travel reimbursement", "Storage cleaning", "Page styling"],
        answer: 0
      },
      {
        question: "A likely oral challenge is:",
        choices: ["Hold together truth, compassion, and prudence", "Update a browser", "Sort receipts", "Test speakers"],
        answer: 0
      },
      {
        question: "A useful prep method is:",
        choices: ["Study ethics, society, and pastoral care", "Review parking", "Order supplies", "Crop images"],
        answer: 0
      }
    ],
    fillBlank: [
      { prompt: "This article likely addresses immigration and Christian ______.", answer: "response" },
      { prompt: "A strong answer should be thoughtful, biblical, and ______.", answer: "pastoral" }
    ],
    oralDrill: [
      "How would you explain this issue in a biblically careful way?",
      "What ministry realities might intersect with this article?"
    ]
  }
];

export const groupedArticles = {
  "Articles of Faith": articles.filter((a) => a.category === "Articles of Faith"),
  "Biblical Principles for Living": articles.filter((a) => a.category === "Biblical Principles for Living"),
  "Declarations on Particular Issues": articles.filter((a) => a.category === "Declarations on Particular Issues")
};