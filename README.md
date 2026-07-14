# Thiago Mohr — Portfolio & Resume

Professional portfolio website for **Thiago Mohr da Silveira**, Systems Coordinator & Tech Lead with 10+ years of experience in Financial Services and Retail.

🔗 **Live:** [thiagomohrs.github.io](https://thiagomohrs.github.io)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Dark Theme** | Custom dark UI (`#0d0d0d` base) with neon cyan accents (`#00f2ff`) |
| **GSAP Animations** | Preloader sequence, scroll-triggered reveals, animated counters, and smooth-scroll navigation |
| **Multilingual** | Full pages in English (`index.html`), Portuguese (`pt.html`), and Spanish (`es.html`) |
| **Ticker Tape** | Auto-scrolling headline bar with key highlights |
| **Timeline** | Professional journey from 2009 to present with company logos and achievements |
| **Portfolio Grid** | 6 project cards showcasing major deliverables |
| **Contact Form** | Integrated with [Formspree](https://formspree.io) for serverless form handling |
| **SEO Optimized** | Open Graph, Twitter Cards, Schema.org (Person), hreflang, sitemap, robots.txt |
| **PWA Manifest** | Installable with `manifest.json`, themed icons, standalone display |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Markup** | HTML5, Semantic Elements |
| **Styling** | Vanilla CSS (custom properties, responsive grid, media queries) |
| **Animations** | [GSAP 3.12](https://greensock.com/gsap/) — ScrollTrigger, ScrollToPlugin |
| **Icons** | [Font Awesome 6.4](https://fontawesome.com/) |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts) |
| **Form** | [Formspree](https://formspree.io) |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |

---

## 📁 Project Structure

```
thiagomohrs.github.io/
├── index.html          # English (default)
├── pt.html             # Portuguese
├── es.html             # Spanish
├── manifest.json       # PWA manifest
├── robots.txt          # Crawler directives
├── sitemap.xml         # XML sitemap with hreflang
├── css/
│   ├── style.css       # Main stylesheet (custom design)
│   └── responsive.css  # Breakpoint overrides
├── js/
│   ├── app.js          # GSAP animations, menu, counters
│   └── vendors/        # Third-party scripts
├── images/
│   ├── profile-2026.jpg
│   ├── projects/       # Project card images
│   └── logos/          # Company logos (SVG/PNG)
├── fonts/              # Self-hosted webfonts (Montserrat, FontAwesome, Ionicons)
├── pdf/                # Downloadable resume files
└── php/
    └── submit.php      # Legacy form handler
```

---

## 🚀 Local Development

No build step required — open any HTML file directly in a browser, or serve with any static server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

---

## 🌐 SEO & Metadata

- **Canonical URLs** and `hreflang` tags for all three language variants
- **Open Graph** and **Twitter Card** meta tags with profile image
- **Schema.org** structured data (`Person` type with `worksFor`, `knowsAbout`, `sameAs`)
- **Sitemap** (`sitemap.xml`) with `xhtml:link` alternates
- **Robots** (`robots.txt`) allowing full crawl

---

## 📄 License

© 2026 Thiago Mohr da Silveira. All rights reserved.
