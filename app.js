const DEFAULT_ARTICLES = [
  {
    id: "edge-ai-laptops",
    title: "The Quiet Shift to Local-First AI on Everyday Laptops",
    category: "AI & Future",
    author: "Aarav Mehta",
    date: "Nov 25, 2026",
    readTime: 6,
    likes: 184,
    featured: true,
    palette: ["#4f46e5", "#06b6d4"],
    tags: ["Edge AI", "Privacy", "WebGPU", "Performance"],
    excerpt:
      "Quantized models and browser-native WebGPU acceleration are moving smart workflows off remote cloud clusters and directly onto user devices.",
    body: [
      "For nearly a decade, intelligent software meant one architectural rule: send every prompt, image, and document to a distant data center and wait for a response. That assumption is rapidly eroding as quantized small language models achieve remarkable fluency inside standard laptop memory footprints.",
      "With unified memory hardware and mature WebGPU pipelines, developers are shipping assistants that summarize transcripts, organize research notes, and autocomplete code with zero network latency. Even more importantly, sensitive customer data never leaves the local machine.",
      "This shift does not replace frontier cloud reasoning—large-scale synthesis still benefits from massive compute. Instead, it introduces a hybrid tier: instant, zero-cost local inference for 80% of daily tasks, paired with selective cloud escalation when deep multi-step planning is required."
    ]
  },
  {
    id: "dark-ui-typography",
    title: "Designing Calm Dark Interfaces That Respect Human Eyes",
    category: "Design",
    author: "Sana Qureshi",
    date: "Nov 23, 2026",
    readTime: 4,
    likes: 142,
    featured: false,
    palette: ["#7c3aed", "#ec4899"],
    tags: ["UI Design", "Typography", "Accessibility"],
    excerpt:
      "Why pure #000000 backgrounds often fail readers—and how subtle slate elevation and warm off-white text transform long-form readability.",
    body: [
      "Many early dark themes made a classic mistake: placing stark white text on pure black pixels. High-contrast halation makes letterforms shimmer for millions of readers, turning a five-minute article into visual fatigue.",
      "Modern editorial interfaces avoid pure extremes. Deep navy-slate canvases around #090D16 paired with softened #F1F5F9 ink preserve crispness while cutting glare. Elevation is communicated through delicate translucent borders rather than heavy drop shadows.",
      "Pairing a geometric sans-serif for navigation and metadata with an expressive serif for headlines gives dark newsrooms warmth and editorial authority."
    ]
  },
  {
    id: "grid-battery-boom",
    title: "Grid-Scale Batteries Cross a Tipping Point in Urban Energy",
    category: "Technology",
    author: "Liam Chen",
    date: "Nov 21, 2026",
    readTime: 5,
    likes: 97,
    featured: false,
    palette: ["#059669", "#22d3ee"],
    tags: ["Clean Tech", "Energy", "Infrastructure"],
    excerpt:
      "Sodium-ion and iron-air storage banks are stabilizing evening peak demand across metropolitan grids faster than legacy peaker plants.",
    body: [
      "Solar and wind generation solved the cost problem of daytime electricity, yet grid operators long struggled with the evening ramp when households turn on cooling and appliances simultaneously.",
      "New utility-scale battery parks—combining fast-response lithium-iron-phosphate cells with multi-day iron-air reserves—now absorb midday surplus and dispatch power within milliseconds of demand spikes.",
      "Municipal utilities report fewer voltage brownouts and lower wholesale volatility, proving storage is no longer an experimental add-on but core urban infrastructure."
    ]
  },
  {
    id: "creator-media-bundles",
    title: "Inside the Rise of Small, Independent Tech Newsrooms",
    category: "Business",
    author: "Nadia Kapoor",
    date: "Nov 19, 2026",
    readTime: 7,
    likes: 118,
    featured: false,
    palette: ["#d97706", "#ef4444"],
    tags: ["Media", "Bootstrapping", "Newsletters"],
    excerpt:
      "How three-person editorial teams are outperforming sprawling media conglomerates through focused beats and loyal subscriber communities.",
    body: [
      "Legacy media sites often chase viral traffic with bloated ad stacks and generic clickbait. Meanwhile, nimble independent publications have quietly built profitable businesses around trust and depth.",
      "By focusing on specific verticals—developer tooling, climate hardware, or consumer privacy—small newsrooms deliver signal over noise. Readers gladly pay for clarity when every paragraph respects their time.",
      "The playbook is refreshingly simple: fast static pages, direct email dispatches, and transparent reporting without algorithmic guesswork."
    ]
  },
  {
    id: "slow-web-craft",
    title: "Why Vanilla Web Standards Feel Like a Superpower Again",
    category: "Technology",
    author: "Tariq Al-Mansoor",
    date: "Nov 17, 2026",
    readTime: 3,
    likes: 215,
    featured: false,
    palette: ["#2563eb", "#38bdf8"],
    tags: ["HTML", "CSS", "JavaScript", "Web Craft"],
    excerpt:
      "CSS Grid, container queries, native dialogs, and ES modules let small teams ship blistering-fast web experiences with zero build overhead.",
    body: [
      "Open a modern browser and inspect what ships natively today: CSS custom properties, subgrid layouts, smooth view transitions, and rich hardware-accelerated animations.",
      "For content-driven sites, blogs, and editorial hubs, skipping multi-megabyte JavaScript bundles results in instant first paint and effortless long-term maintenance.",
      "Frameworks remain valuable for complex state-heavy dashboards, yet rediscovering the simplicity of clean HTML, CSS, and focused JavaScript makes building for the web joyful again."
    ]
  },
  {
    id: "digital-third-places",
    title: "Searching for Calm Digital Third Places in an Always-On Era",
    category: "Culture",
    author: "Elena Rostova",
    date: "Nov 15, 2026",
    readTime: 5,
    likes: 163,
    featured: false,
    palette: ["#9333ea", "#6366f1"],
    tags: ["Digital Culture", "Community", "Focus"],
    excerpt:
      "Readers are trading endless algorithmic feeds for curated reading clubs, niche forums, and chronological blogs that end when you finish reading.",
    body: [
      "Infinite scroll was engineered to eliminate stopping cues. After years of endless feeds, people are actively seeking spaces online that have clear edges—a start, a middle, and a peaceful finish.",
      "Weekly reading circles, RSS readers, and topic-focused communities bring back the feeling of a neighborhood coffee shop where conversations happen at human speed.",
      "The healthiest corners of the internet in 2026 are not the loudest ones; they are the ones designed to leave you wiser and calmer than when you arrived."
    ]
  }
];

const STORAGE_KEYS = {
  CUSTOM_POSTS: "pulsechronicle_custom_posts_v1",
  LIKED_IDS: "pulsechronicle_liked_ids_v1",
  BOOKMARKED_IDS: "pulsechronicle_bookmarked_ids_v1"
};

const state = {
  articles: [],
  activeCategory: "All",
  searchQuery: "",
  sortBy: "latest",
  onlyBookmarks: false,
  likedIds: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.LIKED_IDS) || "[]")),
  bookmarkedIds: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKED_IDS) || "[]"))
};

// DOM references
const heroCard = document.getElementById("heroCard");
const heroSection = document.getElementById("heroSection");
const articlesGrid = document.getElementById("articlesGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const bookmarksFilterBtn = document.getElementById("bookmarksFilterBtn");
const bookmarkCount = document.getElementById("bookmarkCount");
const categoryPills = document.getElementById("categoryPills");
const mainNav = document.getElementById("mainNav");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const readerModal = document.getElementById("readerModal");
const readerContent = document.getElementById("readerContent");
const readingProgressFill = document.getElementById("readingProgressFill");
const publishModal = document.getElementById("publishModal");
const publishForm = document.getElementById("publishForm");
const newsletterForm = document.getElementById("newsletterForm");
const toastEl = document.getElementById("toast");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function generateArtworkSvg(article) {
  const [c1, c2] = article.palette || ["#6366f1", "#22d3ee"];
  const safeId = article.id.replace(/[^a-zA-Z0-9_-]/g, "");
  return `
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="grad-${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" stop-opacity="0.92" />
          <stop offset="100%" stop-color="${c2}" stop-opacity="0.85" />
        </linearGradient>
        <radialGradient id="glow-${safeId}" cx="75%" cy="25%" r="60%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.28" />
          <stop offset="100%" stop-color="#090d16" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill="#0d1424" />
      <rect width="640" height="360" fill="url(#grad-${safeId})" opacity="0.45" />
      <circle cx="490" cy="95" r="145" fill="url(#glow-${safeId})" />
      <circle cx="130" cy="290" r="120" fill="${c2}" opacity="0.22" />
      <path d="M0 265 Q 170 190 340 250 T 640 215 L 640 360 L 0 360 Z" fill="#090d16" opacity="0.45" />
      <g stroke="rgba(255,255,255,0.16)" stroke-width="1" fill="none">
        <circle cx="480" cy="175" r="78" />
        <circle cx="480" cy="175" r="118" stroke-dasharray="6 8" />
        <line x1="60" y1="70" x2="210" y2="70" />
        <line x1="60" y1="90" x2="155" y2="90" />
      </g>
    </svg>
  `;
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 2800);
}

function loadArticles() {
  const customPosts = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_POSTS) || "[]");
  state.articles = [...customPosts, ...DEFAULT_ARTICLES];
}

function saveCustomPost(post) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_POSTS) || "[]");
  existing.unshift(post);
  localStorage.setItem(STORAGE_KEYS.CUSTOM_POSTS, JSON.stringify(existing));
}

function updateBookmarkBadge() {
  bookmarkCount.textContent = state.bookmarkedIds.size;
  bookmarksFilterBtn.classList.toggle("active", state.onlyBookmarks);
}

function getFilteredArticles() {
  const query = state.searchQuery.trim().toLowerCase();

  let list = state.articles.filter((article) => {
    if (state.onlyBookmarks && !state.bookmarkedIds.has(article.id)) {
      return false;
    }
    if (state.activeCategory !== "All" && article.category !== state.activeCategory) {
      return false;
    }
    if (query) {
      const haystack = [
        article.title,
        article.excerpt,
        article.category,
        article.author,
        ...(article.tags || [])
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    }
    return true;
  });

  if (state.sortBy === "popular") {
    list = [...list].sort((a, b) => getLikeCount(b) - getLikeCount(a));
  } else if (state.sortBy === "quick") {
    list = [...list].sort((a, b) => a.readTime - b.readTime);
  }

  return list;
}

function getLikeCount(article) {
  return article.likes + (state.likedIds.has(article.id) ? 1 : 0);
}

function renderHero() {
  const showHero = state.activeCategory === "All" && !state.searchQuery.trim() && !state.onlyBookmarks;
  heroSection.classList.toggle("hidden", !showHero);
  if (!showHero) return;

  const featured = state.articles.find((item) => item.featured) || state.articles[0];
  if (!featured) return;

  heroCard.dataset.id = featured.id;
  heroCard.innerHTML = `
    <div class="hero-body">
      <span class="eyebrow">★ FEATURED REPORT • ${escapeHtml(featured.category)}</span>
      <h1 class="hero-title">${escapeHtml(featured.title)}</h1>
      <p class="hero-excerpt">${escapeHtml(featured.excerpt)}</p>
      <div class="hero-meta">
        <span>By <strong>${escapeHtml(featured.author)}</strong></span>
        <span>•</span>
        <span>${escapeHtml(featured.date)}</span>
        <span>•</span>
        <span>${featured.readTime} min read</span>
      </div>
    </div>
    <div class="hero-visual">
      ${generateArtworkSvg(featured)}
    </div>
  `;
}

function renderArticles() {
  const filtered = getFilteredArticles();
  const isDefaultView = state.activeCategory === "All" && !state.searchQuery.trim() && !state.onlyBookmarks;
  const featuredId = (state.articles.find((a) => a.featured) || state.articles[0])?.id;

  const gridItems = isDefaultView
    ? filtered.filter((article) => article.id !== featuredId)
    : filtered;

  resultsCount.textContent = `Showing ${gridItems.length} article${gridItems.length === 1 ? "" : "s"}`;

  if (gridItems.length === 0) {
    articlesGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  articlesGrid.innerHTML = gridItems
    .map((article) => {
      const isLiked = state.likedIds.has(article.id);
      const isSaved = state.bookmarkedIds.has(article.id);
      const likeCount = getLikeCount(article);

      return `
        <article class="article-card" data-id="${escapeHtml(article.id)}">
          <div class="card-cover" data-open-id="${escapeHtml(article.id)}">
            ${generateArtworkSvg(article)}
            <span class="card-category-tag">${escapeHtml(article.category)}</span>
          </div>
          <div class="card-body">
            <div class="card-meta-top">
              <span>${escapeHtml(article.date)}</span>
              <span>${article.readTime} min read</span>
            </div>
            <h3 class="card-title" data-open-id="${escapeHtml(article.id)}">${escapeHtml(article.title)}</h3>
            <p class="card-excerpt">${escapeHtml(article.excerpt)}</p>
            <div class="card-footer">
              <div class="author-chip">
                <span class="author-avatar">${escapeHtml(getInitials(article.author))}</span>
                <span>${escapeHtml(article.author)}</span>
              </div>
              <div class="card-actions">
                <button class="action-chip ${isLiked ? "liked" : ""}" data-like-id="${escapeHtml(article.id)}" aria-label="Like article">
                  ♥ <span>${likeCount}</span>
                </button>
                <button class="action-chip ${isSaved ? "bookmarked" : ""}" data-save-id="${escapeHtml(article.id)}" aria-label="Bookmark article">
                  ${isSaved ? "★" : "☆"}
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function syncCategoryUi() {
  document.querySelectorAll("[data-category]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === state.activeCategory);
  });
}

function renderAll() {
  syncCategoryUi();
  updateBookmarkBadge();
  renderHero();
  renderArticles();
}

function openReaderModal(articleId) {
  const article = state.articles.find((item) => item.id === articleId);
  if (!article) return;

  const isLiked = state.likedIds.has(article.id);
  const isSaved = state.bookmarkedIds.has(article.id);

  readerContent.innerHTML = `
    <div class="reader-header">
      <span class="eyebrow">${escapeHtml(article.category)} • ${article.readTime} min read</span>
      <h2 class="reader-title" id="modalTitle">${escapeHtml(article.title)}</h2>
      <div class="hero-meta">
        <span>By <strong>${escapeHtml(article.author)}</strong></span>
        <span>•</span>
        <span>${escapeHtml(article.date)}</span>
        <span>•</span>
        <button class="action-chip ${isLiked ? "liked" : ""}" data-like-id="${escapeHtml(article.id)}">
          ♥ <span>${getLikeCount(article)}</span> Likes
        </button>
        <button class="action-chip ${isSaved ? "bookmarked" : ""}" data-save-id="${escapeHtml(article.id)}">
          ${isSaved ? "★ Saved" : "☆ Save"}
        </button>
      </div>
    </div>
    <div class="reader-cover">${generateArtworkSvg(article)}</div>
    <div class="reader-body">
      ${article.body.map((para) => `<p>${escapeHtml(para)}</p>`).join("")}
    </div>
    <div class="reader-tags">
      ${(article.tags || []).map((tag) => `<span class="tag-pill">#${escapeHtml(tag)}</span>`).join("")}
    </div>
  `;

  readingProgressFill.style.width = "0%";
  readerModal.classList.remove("hidden");
  readerModal.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeModals() {
  readerModal.classList.add("hidden");
  publishModal.classList.add("hidden");
  document.body.style.overflow = "";
}

function toggleLike(id) {
  if (state.likedIds.has(id)) {
    state.likedIds.delete(id);
  } else {
    state.likedIds.add(id);
  }
  localStorage.setItem(STORAGE_KEYS.LIKED_IDS, JSON.stringify([...state.likedIds]));
  renderAll();

  if (!readerModal.classList.contains("hidden")) {
    openReaderModal(id);
  }
}

function toggleBookmark(id) {
  const added = !state.bookmarkedIds.has(id);
  if (added) {
    state.bookmarkedIds.add(id);
    showToast("Saved to your reading list");
  } else {
    state.bookmarkedIds.delete(id);
    showToast("Removed from saved list");
  }
  localStorage.setItem(STORAGE_KEYS.BOOKMARKED_IDS, JSON.stringify([...state.bookmarkedIds]));
  renderAll();

  if (!readerModal.classList.contains("hidden")) {
    openReaderModal(id);
  }
}

// Event Listeners
document.addEventListener("click", (event) => {
  const categoryBtn = event.target.closest("[data-category]");
  if (categoryBtn) {
    state.activeCategory = categoryBtn.dataset.category;
    state.onlyBookmarks = false;
    mainNav.classList.remove("open");
    renderAll();
    return;
  }

  const footerCat = event.target.closest("[data-footer-cat]");
  if (footerCat) {
    event.preventDefault();
    state.activeCategory = footerCat.dataset.footerCat;
    state.onlyBookmarks = false;
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const likeBtn = event.target.closest("[data-like-id]");
  if (likeBtn) {
    event.stopPropagation();
    toggleLike(likeBtn.dataset.likeId);
    return;
  }

  const saveBtn = event.target.closest("[data-save-id]");
  if (saveBtn) {
    event.stopPropagation();
    toggleBookmark(saveBtn.dataset.saveId);
    return;
  }

  const openTrigger = event.target.closest("[data-open-id]");
  if (openTrigger) {
    openReaderModal(openTrigger.dataset.openId);
    return;
  }

  if (event.target.closest("#heroCard") && heroCard.dataset.id) {
    openReaderModal(heroCard.dataset.id);
  }
});

searchInput.addEventListener("input", (event) => {
  state.searchQuery = event.target.value;
  renderAll();
});

sortSelect.addEventListener("change", (event) => {
  state.sortBy = event.target.value;
  renderAll();
});

bookmarksFilterBtn.addEventListener("click", () => {
  state.onlyBookmarks = !state.onlyBookmarks;
  renderAll();
});

document.getElementById("resetFiltersBtn").addEventListener("click", () => {
  state.activeCategory = "All";
  state.searchQuery = "";
  state.onlyBookmarks = false;
  searchInput.value = "";
  renderAll();
});

document.getElementById("brandHome").addEventListener("click", (event) => {
  event.preventDefault();
  state.activeCategory = "All";
  state.searchQuery = "";
  state.onlyBookmarks = false;
  searchInput.value = "";
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Modal controls
document.getElementById("closeReaderBtn").addEventListener("click", closeModals);
document.getElementById("closePublishBtn").addEventListener("click", closeModals);
document.getElementById("cancelPublishBtn").addEventListener("click", closeModals);

document.getElementById("openPublishModalBtn").addEventListener("click", () => {
  publishModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

document.getElementById("footerPublishLink").addEventListener("click", (event) => {
  event.preventDefault();
  publishModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

document.getElementById("footerSavedLink").addEventListener("click", (event) => {
  event.preventDefault();
  state.onlyBookmarks = true;
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

[readerModal, publishModal].forEach((backdrop) => {
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeModals();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModals();
});

readerModal.addEventListener("scroll", () => {
  const maxScroll = readerModal.scrollHeight - readerModal.clientHeight;
  const pct = maxScroll > 0 ? Math.min(100, (readerModal.scrollTop / maxScroll) * 100) : 100;
  readingProgressFill.style.width = `${pct}%`;
});

// Publish Form
publishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("postTitle").value.trim();
  const category = document.getElementById("postCategory").value;
  const author = document.getElementById("postAuthor").value.trim();
  const excerpt = document.getElementById("postExcerpt").value.trim();
  const rawBody = document.getElementById("postBody").value.trim();

  if (!title || !author || !excerpt || !rawBody) return;

  const paragraphs = rawBody
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const wordCount = rawBody.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 180));

  const newPost = {
    id: `post-${Date.now()}`,
    title,
    category,
    author,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }),
    readTime,
    likes: 1,
    featured: false,
    palette: ["#6366f1", "#22d3ee"],
    tags: [category, "Community"],
    excerpt,
    body: paragraphs.length > 0 ? paragraphs : [rawBody]
  };

  saveCustomPost(newPost);
  loadArticles();
  state.activeCategory = "All";
  state.onlyBookmarks = false;
  publishForm.reset();
  closeModals();
  renderAll();
  showToast("Your story is live!");
});

// Newsletter Form
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("newsletterEmail");
  if (!emailInput.value.trim()) return;
  emailInput.value = "";
  showToast("Subscribed! Welcome to PulseChronicle.");
});

// Duplicate ticker items for seamless marquee loop
const tickerTrack = document.getElementById("tickerTrack");
tickerTrack.innerHTML += `<span class="ticker-dot">•</span>` + tickerTrack.innerHTML;

// Initialize
loadArticles();
renderAll();
