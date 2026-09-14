const articles = [
  {
    category: "chad",
    source: "Tchadinfos",
    date: "14 سبتمبر 2026",
    title: {
      ar: "انطلاق حملة لدعم التعليم في الأحياء والأسواق بنجامينا",
      fr: "Une campagne pour soutenir l’éducation dans les quartiers de N’Djamena",
      en: "Education support campaign launches across N’Djamena"
    },
    excerpt: {
      ar: "مبادرة محلية تجمع المدارس والأسر والمتطوعين لتوفير اللوازم الأساسية ومساندة التلاميذ مع بداية العام الدراسي.",
      fr: "Une initiative locale réunit écoles, familles et bénévoles pour accompagner les élèves à la rentrée.",
      en: "A local initiative brings together schools, families and volunteers to support pupils at the start of the school year."
    }
  },

  {
    category: "africa",
    source: "RFI Afrique",
    date: "14 سبتمبر 2026",
    title: {
      ar: "مبادرات شبابية جديدة تناقش فرص العمل والابتكار في أفريقيا",
      fr: "De nouvelles initiatives de jeunesse débattent de l’emploi et de l’innovation en Afrique",
      en: "Youth initiatives debate jobs and innovation across Africa"
    },
    excerpt: {
      ar: "اجتمع رواد أعمال وطلاب وخبراء لبحث حلول عملية تساعد الشباب على تحويل أفكارهم إلى مشاريع منتجة.",
      fr: "Entrepreneurs, étudiants et experts ont échangé sur des solutions concrètes pour transformer les idées en projets.",
      en: "Entrepreneurs, students and experts discussed practical ways to turn ideas into sustainable ventures."
    }
  },

  {
    category: "world",
    source: "Al Jazeera",
    date: "13 سبتمبر 2026",
    title: {
      ar: "اجتماع دولي يركز على حماية المدنيين وتعزيز المساعدات الإنسانية",
      fr: "Une réunion internationale met l’accent sur la protection des civils et l’aide humanitaire",
      en: "International meeting focuses on civilian protection and humanitarian aid"
    },
    excerpt: {
      ar: "ناقش المشاركون سبل تسريع وصول المساعدات إلى المناطق المتضررة وتنسيق الجهود بين الشركاء الدوليين.",
      fr: "Les participants ont abordé l’accélération de l’aide vers les zones touchées et la coordination internationale.",
      en: "Participants discussed speeding aid to affected areas and improving coordination among international partners."
    }
  },

  {
    category: "sports",
    source: "BBC Sport",
    date: "13 سبتمبر 2026",
    title: {
      ar: "منتخبات أفريقية تستعد لجولة حاسمة من التصفيات القارية",
      fr: "Les sélections africaines se préparent à une étape décisive des qualifications",
      en: "African teams prepare for a decisive round of continental qualifiers"
    },
    excerpt: {
      ar: "تواصل المنتخبات تحضيراتها وسط اهتمام كبير من الجماهير قبل مباريات ينتظر أن تحدد مسار المنافسة.",
      fr: "Les équipes poursuivent leur préparation avant des matchs très attendus qui pourraient décider de la compétition.",
      en: "Teams continue preparations ahead of highly anticipated matches that could shape the competition."
    }
  },

  {
    category: "chad",
    source: "Labarkouh News",
    date: "12 سبتمبر 2026",
    title: {
      ar: "ارتفاع الإقبال على المنتجات المحلية في أسواق العاصمة",
      fr: "Les produits locaux attirent davantage de clients dans les marchés de la capitale",
      en: "Local products draw more customers in the capital’s markets"
    },
    excerpt: {
      ar: "يقول تجار إن اهتمام المستهلكين بالمنتجات المحلية يتزايد مع تحسن التنوع وتوافر السلع في الأسواق.",
      fr: "Les commerçants constatent un intérêt croissant pour les produits locaux grâce à une offre plus diversifiée.",
      en: "Traders report growing interest in local goods as choice and availability improve in city markets."
    }
  },

  {
    category: "world",
    source: "Reuters",
    date: "12 سبتمبر 2026",
    title: {
      ar: "تقنيات جديدة تساعد المدن على إدارة المياه والطاقة بكفاءة أكبر",
      fr: "De nouvelles technologies aident les villes à mieux gérer l’eau et l’énergie",
      en: "New technology helps cities manage water and energy more efficiently"
    },
    excerpt: {
      ar: "تبحث مدن عدة في حلول رقمية لمراقبة الاستهلاك وتقليل الهدر وتحسين الخدمات العامة.",
      fr: "Plusieurs villes étudient des solutions numériques pour suivre la consommation et réduire le gaspillage.",
      en: "Several cities are exploring digital tools to track consumption, reduce waste and improve public services."
    }
  }
];

const trustedSources = {
  chad: [
    ["Tchadinfos", "https://tchadinfos.com/"],
    ["ONAMA", "https://onama.td/"],
    ["RFI — Tchad", "https://www.rfi.fr/fr/tag/tchad/"],
    ["BBC News — Africa", "https://www.bbc.com/news/world/africa"]
  ],

  africa: [
    ["RFI Afrique", "https://www.rfi.fr/fr/afrique/"],
    ["BBC News — Africa", "https://www.bbc.com/news/world/africa"],
    ["France 24 Afrique", "https://www.france24.com/fr/afrique/"],
    ["Al Jazeera Africa", "https://www.aljazeera.com/africa/"]
  ],

  world: [
    ["Reuters", "https://www.reuters.com/world/"],
    ["BBC News — World", "https://www.bbc.com/news/world"],
    ["France 24", "https://www.france24.com/"],
    ["Al Jazeera", "https://www.aljazeera.com/"]
  ],

  sports: [
    ["BBC Sport", "https://www.bbc.com/sport"],
    ["Reuters Sports", "https://www.reuters.com/sports/"],
    ["ESPN", "https://www.espn.com/"],
    ["France 24 Sport", "https://www.france24.com/fr/sports/"]
  ]
};

const copy = {
  ar: {
    dir: "rtl",
    brand: "لاباركوه نيوز",
    skip: "الانتقال إلى المحتوى",
    breaking: "عاجل",
    ticker: "متابعة مستمرة لأبرز أخبار تشاد وأفريقيا والعالم والرياضة",
    all: "الرئيسية",
    chad: "تشاد",
    africa: "أفريقيا",
    world: "العالم",
    sports: "الرياضة",
    latest: "أحدث الأخبار",
    popular: "الأكثر قراءة",
    sources: "مصادر موثوقة حسب القسم",
    newsletter: "نشرة لاباركوه",
    newsletterCopy: "ملخص يومي لأهم الأخبار، يصل إلى بريدك الإلكتروني.",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "بريدك الإلكتروني",
    subscribe: "اشترك الآن",
    empty: "لا توجد أخبار في هذا القسم حاليًا.",
    footerCopy: "منصة أخبار مستقلة تهتم بتشاد وأفريقيا والعالم.",
    read: "اقرأ الخبر ←",
    results: "{count} خبرًا",
    success: "شكرًا! تم تسجيل بريدك الإلكتروني.",
    notify: "سيتم إشعارك عند نشر الأخبار العاجلة.",
    demo: "هذه نسخة تجريبية للخبر."
  },

  fr: {
    dir: "ltr",
    brand: "Labarkouh News",
    skip: "Aller au contenu",
    breaking: "URGENT",
    ticker: "Suivez en continu les principales informations du Tchad, de l’Afrique, du monde et du sport",
    all: "Accueil",
    chad: "Tchad",
    africa: "Afrique",
    world: "Monde",
    sports: "Sports",
    latest: "Dernières actualités",
    popular: "Les plus lus",
    sources: "Sources fiables par rubrique",
    newsletter: "La lettre Labarkouh",
    newsletterCopy: "Un résumé quotidien de l’actualité dans votre boîte e-mail.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "Votre adresse e-mail",
    subscribe: "S’abonner",
    empty: "Aucune actualité dans cette rubrique.",
    footerCopy: "Une plateforme indépendante consacrée au Tchad, à l’Afrique et au monde.",
    read: "Lire l’article →",
    results: "{count} articles",
    success: "Merci ! Votre adresse e-mail est enregistrée.",
    notify: "Vous serez averti lors des informations urgentes.",
    demo: "Ceci est une démo de l’article."
  },

  en: {
    dir: "ltr",
    brand: "Labarkouh News",
    skip: "Skip to content",
    breaking: "BREAKING",
    ticker: "Continuous coverage of leading news from Chad, Africa, the world and sport",
    all: "Home",
    chad: "Chad",
    africa: "Africa",
    world: "World",
    sports: "Sports",
    latest: "Latest news",
    popular: "Most read",
    sources: "Trusted sources by category",
    newsletter: "Labarkouh Briefing",
    newsletterCopy: "A daily summary of the biggest stories, delivered to your inbox.",
    emailLabel: "Email address",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    empty: "There are no stories in this section yet.",
    footerCopy: "An independent news platform focused on Chad, Africa and the world.",
    read: "Read article →",
    results: "{count} stories",
    success: "Thank you! Your email has been registered.",
    notify: "You will be notified when breaking news is published.",
    demo: "This is a demo article."
  }
};

let language = localStorage.getItem("labarkouh-language") || "ar";
let category = "all";

const $ = (selector) => document.querySelector(selector);

function currentText() {
  return copy[language];
}

function renderArticles() {
  const filteredArticles =
    category === "all"
      ? articles
      : articles.filter((article) => article.category === category);

  const newsGrid = $("#newsGrid");

  newsGrid.innerHTML = filteredArticles
    .map((article) => {
      return `
        <article class="article-card">
          <div class="article-meta">
            <span class="source">${article.source}</span>
            <time>${article.date}</time>
          </div>

          <h3>${article.title[language]}</h3>

          <p>${article.excerpt[language]}</p>

          <a href="#" class="read-link">
            ${currentText().read}
          </a>
        </article>
      `;
    })
    .join("");

  $("#emptyState").classList.toggle(
    "hidden",
    filteredArticles.length !== 0
  );

  $("#resultsCount").textContent = currentText().results.replace(
    "{count}",
    filteredArticles.length
  );

  document.querySelectorAll(".read-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(currentText().demo);
    });
  });
}

function renderSources() {
  const labels = {
    chad: currentText().chad,
    africa: currentText().africa,
    world: currentText().world,
    sports: currentText().sports
  };

  const displayedSources =
    category === "all"
      ? Object.entries(trustedSources)
      : [[category, trustedSources[category]]];

  $("#sourcesBox").innerHTML = `
    <h2>${currentText().sources}</h2>

    ${displayedSources
      .map(([sectionName, sources]) => {
        return `
          <section class="source-group">
            <h3>${labels[sectionName]}</h3>

            <ul>
              ${sources
                .map(([name, url]) => {
                  return `
                    <li>
                      <a
                        href="${url}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>${name}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  `;
                })
                .join("")}
            </ul>
          </section>
        `;
      })
      .join("")}
  `;
}

function renderPopular() {
  $("#popularList").innerHTML = articles
    .slice(0, 4)
    .map((article) => `<li>${article.title[language]}</li>`)
    .join("");
}

function applyLanguage(newLanguage) {
  language = newLanguage;

  localStorage.setItem("labarkouh-language", language);

  const text = currentText();

  document.documentElement.lang = language;
  document.documentElement.dir = text.dir;
  document.body.dataset.dir = text.dir;

  document.title = `${text.brand} | Labarkouh News`;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {
      element.placeholder = text[element.dataset.i18nPlaceholder];
    });

  $("#brandName").textContent = text.brand;
  $("#footerBrand").textContent = text.brand;
  $("#tickerText").textContent = text.ticker;

  const ticker = document.querySelector(".ticker");

  ticker.classList.toggle("ticker-ar", language === "ar");
  ticker.classList.toggle("ticker-ltr", language !== "ar");

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.language === language
    );
  });

  renderArticles();
  renderPopular();
  renderSources();
}

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});

document.querySelectorAll(".category").forEach((button) => {
  button.addEventListener("click", () => {
    category = button.dataset.category;

    document.querySelectorAll(".category").forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderArticles();
    renderSources();
  });
});

$("#themeButton").addEventListener("click", () => {
  const darkModeEnabled = document.body.classList.toggle("dark");

  localStorage.setItem(
    "labarkouh-theme",
    darkModeEnabled ? "dark" : "light"
  );
});

$("#notificationButton").addEventListener("click", () => {
  showToast(currentText().notify);
});

$("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();

  $("#formMessage").textContent = currentText().success;

  event.currentTarget.reset();
});

if (localStorage.getItem("labarkouh-theme") === "dark") {
  document.body.classList.add("dark");
}

$("#year").textContent = new Date().getFullYear();

applyLanguage(language);
