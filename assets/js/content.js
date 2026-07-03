/* =========================================================================
   CONTENT & TRANSLATIONS
   -------------------------------------------------------------------------
   The only file you normally edit.

   • SITE.meta        → shared across languages (name, photo, links)
   • SITE.i18n[lang]  → translatable content, one block per language:
                        en = English, de = German,
                        zh = Traditional Chinese, ja = Japanese

   Entries render two-column: period (left) · org in bold + detail (right).

   Institution / brand names (Tohoku University, SB Intuitions, SoftBank
   Group, Feluwa Pumpen GmbH, Hochschule Trier, Westlake
   Boys High School) are kept in Latin across all languages.

   TODO:
   • CV link (meta.links) points to "#": set it to your CV PDF/URL.
   • Westlake study dates unknown — add `period` to that entry if you want them.
   ========================================================================= */

// Mentor profile links (used inside the About text).
const MENTOR = {
  kuribayashi: "https://www.isl.is.tohoku.ac.jp/front_page/members/kuribayashi_e/",
  wataoka: "https://wataoka.github.io/",
};

const SITE = {
  meta: {
    name: "Alex Berns",
    photo: "assets/img/alex-berns.jpg",
    sectionOrder: ["about", "experience", "education", "publications"],
    links: [
      { label: "GitHub",   url: "https://github.com/AlexBerns" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/alex-b-602a84178/" },
      // app.js assembles the mailto at runtime, so the full address (with "@")
      // never appears verbatim in the static source
      { label: "Email",    emailUser: "Berns.Alexander", emailDomain: "gmx.net" },
      // CV is a hover/tap menu: choose language. English CV is coming soon.
      { label: "CV", menu: [
        { label: "English", url: "CV_berns_en_2026.pdf" },
        { label: "日本語",  url: "CV_berns_jp_2026.pdf" },
      ] },
      { label: "Bio",      url: "bio.html" }, // opens the terminal-style bio page
    ],

    // Publications (shared across languages — titles/authors/venues stay English).
    // `me` is bolded in the author list; `url` (optional) makes the title a link.
    publications: [
      {
        title: "Toxicity Lost in Translation: A Toxicity-Preserving Framework for Cross-Lingual LLM Safety Benchmarking",
        authors: ["Berns", "Huy", "Pride", "Wataoka"],
        me: "Berns",
        venue: "AAAI 2027",
      },
      {
        title: "Layer-Wise Weight Statistics for Node Classification and Defense of Federated Large Language Models",
        authors: ["Berns", "Akai", "Kuribayashi"],
        me: "Berns",
        venue: "APSIPA ASC 2025",
        url: "APSIPA2025_berns.pdf",
      },
    ],
  },

  // Flag switcher: label = accessible name, flag = SVG icon. First = default.
  langs: [
    { code: "en", htmlLang: "en",      label: "English",  flag: "assets/img/flags/nz.svg" },
    { code: "ja", htmlLang: "ja",      label: "日本語",   flag: "assets/img/flags/jp.svg" },
    { code: "zh", htmlLang: "zh-Hant", label: "繁體中文", flag: "assets/img/flags/tw.svg" },
    { code: "de", htmlLang: "de",      label: "Deutsch",  flag: "assets/img/flags/de.svg" },
  ],

  i18n: {
    /* ================================ ENGLISH ============================ */
    en: {
      affiliations: [
        "Responsible AI, SB Intuitions, SoftBank",
        "Tohoku University, Japan, Ito Foundation",
      ],
      about: {
        heading: "About",
        body: [
          [
            "I conduct AI Safety research at Tohoku University, Japan, and " +
            "SB Intuitions, SoftBank, under the guidance of ",
            { t: "Minoru Kuribayashi", href: MENTOR.kuribayashi },
            " and ",
            { t: "Koki Wataoka", href: MENTOR.wataoka },
            ".",
          ],
          "Previously, I worked on Federated Learning and Machine Learning for " +
          "early anomaly detection in industrial pumps. Recently, I am working on " +
          "the mitigation of softening in machine translation of harmful text for " +
          "safety benchmarks.",
        ],
      },
      experience: {
        heading: "Experience",
        items: [
          { period: "2026 – Present", org: "SB Intuitions — SoftBank", role: "Research Intern, Responsible AI Team" },
          { period: "2019 – 2024", org: "Feluwa Pumpen GmbH", role: "Cooperative Study — Electrical Engineering" },
          { period: "2021 – 2022", org: "Trier University of Applied Sciences", role: "Mathematics Teaching Assistant" },
        ],
      },
      education: {
        heading: "Education",
        items: [
          {
            period: "2025 – Present", org: "Tohoku University",
            role: "Graduate School of Information Science", place: "Japan",
          },
          { period: "2019 – 2024", org: "Trier University of Applied Sciences", role: "Electrical & Information Engineering", place: "Germany" },
          { period: "2015 – 2019", org: "Westlake Boys High School", role: "Cambridge A-Levels", place: "New Zealand" },
        ],
      },
      publications: { heading: "Publications" },
      footer: { left: "© 2026 Alex Berns" },
      controls: { theme: "Toggle theme" },
    },

    /* ================================ GERMAN ============================= */
    de: {
      affiliations: [
        "Responsible AI, SB Intuitions, SoftBank",
        "Tohoku University, Japan, Ito Stiftung",
      ],
      about: {
        heading: "Über mich",
        body: [
          [
            "Ich forsche zu KI-Sicherheit an der Tohoku Universität (Japan) und bei " +
            "SB Intuitions, SoftBank, betreut von ",
            { t: "Minoru Kuribayashi", href: MENTOR.kuribayashi },
            " und ",
            { t: "Koki Wataoka", href: MENTOR.wataoka },
            ".",
          ],
          "Zuvor arbeitete ich an föderiertem Lernen und maschinellem Lernen zur " +
          "frühzeitigen Anomalieerkennung in Industriepumpen. Aktuell arbeite ich an " +
          "der Verringerung des Abschwächens bei der maschinellen Übersetzung " +
          "schädlicher Texte für Sicherheits-Benchmarks.",
        ],
      },
      experience: {
        heading: "Werdegang",
        items: [
          { period: "2026 – heute", org: "SB Intuitions — SoftBank", role: "Forschungspraktikant, Responsible-AI-Team" },
          { period: "2019 – 2024", org: "Feluwa Pumpen GmbH", role: "Duales Studium — Elektrotechnik" },
          { period: "2021 – 2022", org: "Hochschule Trier", role: "Mathematik-Tutor" },
        ],
      },
      education: {
        heading: "Ausbildung",
        items: [
          {
            period: "2025 – heute", org: "Tohoku University",
            role: "Graduate School of Information Science", place: "Japan",
          },
          { period: "2019 – 2024", org: "Hochschule Trier", role: "Elektro- und Informationstechnik", place: "Deutschland" },
          { period: "2015 – 2019", org: "Westlake Boys High School", role: "Cambridge A-Levels", place: "Neuseeland" },
        ],
      },
      publications: { heading: "Publikationen" },
      footer: { left: "© 2026 Alex Berns" },
      controls: { theme: "Design wechseln" },
    },

    /* ========================= TRADITIONAL CHINESE ====================== */
    zh: {
      affiliations: [
        "Responsible AI, SB Intuitions, SoftBank",
        "東北大學，日本，伊藤基金會",
      ],
      about: {
        heading: "關於",
        body: [
          [
            "於日本東北大學與 SB Intuitions（SoftBank）從事 AI 安全研究，指導者為",
            { t: "栗林稔", href: MENTOR.kuribayashi },
            "與",
            { t: "綿岡晃輝", href: MENTOR.wataoka },
            "。",
          ],
          "先前我從事聯邦學習與機器學習，應用於工業泵浦的早期異常偵測；" +
          "近期則致力於減緩機器翻譯中有害文本的軟化，以用於安全基準。",
        ],
      },
      experience: {
        heading: "工作經歷",
        items: [
          { period: "2026 – 至今", org: "SB Intuitions — SoftBank", role: "研究實習生，Responsible AI 團隊" },
          { period: "2019 – 2024", org: "Feluwa Pumpen GmbH", role: "建教合作 — 電機工程" },
          { period: "2021 – 2022", org: "Trier University of Applied Sciences", role: "數學助教" },
        ],
      },
      education: {
        heading: "學歷",
        items: [
          {
            period: "2025 – 至今", org: "東北大學",
            role: "資訊科學研究科", place: "日本",
          },
          { period: "2019 – 2024", org: "Trier University of Applied Sciences", role: "電機與資訊工程", place: "德國" },
          { period: "2015 – 2019", org: "Westlake Boys High School", role: "劍橋 A-Level", place: "紐西蘭" },
        ],
      },
      publications: { heading: "著作" },
      footer: { left: "© 2026 Alex Berns" },
      controls: { theme: "切換主題" },
    },

    /* =============================== JAPANESE =========================== */
    ja: {
      affiliations: [
        "Responsible AI, SB Intuitions, SoftBank",
        "東北大学、伊藤財団",
      ],
      about: {
        heading: "概要",
        body: [
          [
            "日本の東北大学と SB Intuitions（SoftBank）にて、",
            { t: "栗林稔", href: MENTOR.kuribayashi },
            "先生および",
            { t: "綿岡晃輝", href: MENTOR.wataoka },
            "氏の指導のもと、AIの安全性に関する研究を行っています。",
          ],
          "以前は連合学習や、産業用ポンプの早期異常検知のための機械学習に" +
          "取り組んでいました。近年は、安全性ベンチマークのために、" +
          "有害テキストの機械翻訳における軟化の軽減に取り組んでいます。",
        ],
      },
      experience: {
        heading: "職務経歴",
        items: [
          { period: "2026 – 現在", org: "SB Intuitions — SoftBank", role: "研究インターン、Responsible AI チーム" },
          { period: "2019 – 2024", org: "Feluwa Pumpen GmbH", role: "デュアルスタディ（電気工学）" },
          { period: "2021 – 2022", org: "Trier University of Applied Sciences", role: "数学ティーチングアシスタント" },
        ],
      },
      education: {
        heading: "学歴",
        items: [
          {
            period: "2025 – 現在", org: "東北大学",
            role: "情報科学研究科", place: "日本",
          },
          { period: "2019 – 2024", org: "Trier University of Applied Sciences", role: "電気情報工学", place: "ドイツ" },
          { period: "2015 – 2019", org: "Westlake Boys High School", role: "ケンブリッジ A-Level", place: "ニュージーランド" },
        ],
      },
      publications: { heading: "論文" },
      footer: { left: "© 2026 Alex Berns" },
      controls: { theme: "テーマ切替" },
    },
  },
};
