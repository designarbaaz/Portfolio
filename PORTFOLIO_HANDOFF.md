# 🚀 Md Arbaaz — UX Designer Portfolio Specification & Agent Handoff

> **Complete Project Architecture, Design System Tokens, and Codebase Reference**  
> *Transfer document for AI agents, developers, and collaborators.*

---

## 📌 1. Project Overview & Live Links

- **Owner**: Md Arbaaz (Senior UX / Product Designer with 6+ years experience at Repindia)
- **Live Production URL**: [https://designarbaaz.github.io/Portfolio/](https://designarbaaz.github.io/Portfolio/)
- **GitHub Repository**: [https://github.com/designarbaaz/Portfolio](https://github.com/designarbaaz/Portfolio)
- **Local Development Host**: `http://localhost:8080/`
- **Active Workspace Directory**: `/Users/designarbaz/.gemini/antigravity/scratch/arbaaz-portfolio`
- **Deployment Platform**: GitHub Pages (auto-builds on push to branch `main`, root `/`)

---

## 🎨 2. Visual Identity & Design System

### A. Color Palette (`styles.css`)
```css
--clr-klein: #4100F5;       /* Klein Blue (Primary Accent) */
--clr-citric: #CDF564;      /* Acid Citric Lime (Canvas Theme) */
--clr-aquamarine: #9BF0E1;  /* Fresh Aquamarine */
--clr-fuchsia: #F037A5;     /* Hot Fuchsia */
--clr-tangerine: #FF4632;   /* Bold Tangerine Red */
--clr-black: #191414;       /* Rich Charcoal Black */

--bg-primary: #CDF564;      /* Citric Lime Body Canvas */
--bg-surface: #FFFFFF;      /* Clean White Surface */
--bg-subtle: #E3F897;       /* Soft Citric Tint */
--text-main: #191414;       /* Primary High-contrast Text */
--text-muted: #383333;      /* Muted Dark Body Copy */
```

### B. Typography
- **Font Family**: `'Bricolage Grotesque', sans-serif` (Imported via Google Fonts)
  - `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap`
- **Scale**:
  - Hero Headline: `clamp(2.8rem, 5.2vw, 4.8rem)`, weight `500`, letter-spacing `-0.045em`
  - Section Headings: `clamp(2rem, 3.8vw, 3.2rem)`, weight `500`
  - Body Text: `1.05rem` - `1.1rem`, line-height `1.6` - `1.7`
  - Numerical Stats: `700` weight, **normal font-style** (no italics)
- **Typography Rule**: Consistent **Bricolage Grotesque** across all headings, body, buttons, tags, and inline SVG text logos.

### C. Architectural Rules
1. **100% Borderless Philosophy**:
   - Zero hard stroke borders (`border: none;`) across cards, badges, and buttons.
   - Elevation and separation created using ambient soft shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`) and background color contrast.
2. **Grid Containment**:
   - Grid tracks use `min-width: 0;` and `align-items: stretch;` to prevent child aspect-ratios from overflowing adjacent text columns.

---

## 🧩 3. Key Sections & Functional Components

### 1. Floating Header (`.navbar`)
- Borderless floating pill bar (`background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(16px)`).
- `Arbaaz®` typography logo.
- `• Open to work` live status badge with pulsating green beacon dot.
- Live clock ticker (`#clockTime`) showing current local time updated every 10 seconds via JavaScript.
- Smooth jump navigation links (`Work`, `Expertise`, `About`) and `Let's Talk` contact button.

### 2. First-Fold Hero Section (`#hero`)
- **Full-Bleed 100vh Background Video**:
  - `bg-blend.mp4` running inside `.hero-bg-graphic video` with `autoplay loop muted playsinline poster="hero-bg.jpg"`.
  - `object-fit: cover` with pointer-events disabled.
- **Asymmetrical 2-Column Grid**:
  - **Left**: Headline with inline 3D avatar portrait (`avatar.jpg`) right after `Hey.`, stacked inline skill tags `[UX] [UI] [✦]`, and a high-contrast black pill CTA button with hover arrow interaction.
  - **Right**: Bio statement ("Senior Product Designer with 6+ years of experience...").
- **Boxless Brand Marquee (`.hero-brands-container`)**:
  - Positioned inside the first fold below the headline.
  - 14 real & client brand SVGs (`Hero Homes`, `Kajaria`, `Duroflex`, `Instax Fujifilm`, `Padmini Mechatronics`, `RepIndia`, `Nexus`, etc.).
  - 36px fixed gap, seamless dual-group loop with infinite CSS translate animation.
- **Stats Banner (`.stats-banner`)**:
  - 4 key metrics: `40+` Enterprise Projects, `20+` Market Leaders, `1,000+` Design Iterations, `6+` Years Experience.
  - Wrapped in `.stat-value-wrap` with `align-items: baseline` so the `+` sign sits on the exact same baseline and font size.
  - JavaScript `IntersectionObserver` animates numbers counting up when scrolled into view.

### 3. Featured Case Studies (`#work`)
- **Hero Realty Luxury Property Showcase (`#case-hero`)**:
  - Media: Mockup image `hero_realty.jpg` styled with `.hero-realty-img` (`object-position: 18% center;`).
  - Metadata: Single clean pill `[ Real Estate ]`.
  - Metrics: Soft inset capsule (`rgba(25, 20, 20, 0.035)`) containing `+25% User Retention` and `10x Session Duration` separated by a soft hairline divider.
  - Trigger: "Read Full Case Study" opens interactive detailed modal reader.
- **Kajaria Ceramics Catalog & AR Visualizer (`#case-kajaria`)**:
  - Media: Autoplaying looping video `thumbnail-final.mp4` with `poster="kajaria.jpg"`.
  - Metadata: Single clean pill `[ E-Commerce & AR ]`.
  - Metrics: Soft inset capsule containing `−30% Bounce Rate` and `+65% Scroll Depth`.
  - Layout: Alternating reversed 2-column layout (`.case-card.reverse`).

### 4. Interactive Case Study Modal (`#caseModal`)
- Triggered by `openModal(id)` in `script.js`.
- Renders deep UX case studies: Executive Overview, Usability Friction Points, Strategic Design Interventions, and Key Metrics.
- Automatically supports embedded video walkthroughs when `data.video` is present.
- Closeable via `ESC` key, backdrop click, or close button.

### 5. Strategic Design Pillars (`#expertise`)
- Contrast dark block (`background: #191414; color: #FFFFFF;`).
- 3 Pillar Cards:
  - `01` Research & Audits (Accent Blue)
  - `02` Systems & Scale (Accent Fuchsia)
  - `03` Prototyping & Flows (Accent Citric)
- Typography: Standardized to bold `700` normal style (no italics).

### 6. About & Experience Timeline (`#about`)
- Left: Bio copy + Core Competency skill chips.
- Right: Detailed experience timeline card (Repindia, Hero Realty, Kajaria Ceramics).

### 7. Contact & Footer (`#contact`)
- Floating contact card with email CTA (`designarbaaz@gmail.com`), social links (LinkedIn, Behance), and copyright.

---

## 📁 4. Project Directory & Assets

```
arbaaz-portfolio/
├── index.html               # Main semantic HTML structure
├── styles.css               # Complete responsive CSS design system (~1,370 lines)
├── script.js                # Modals, live clock, count-up animations (~220 lines)
├── .gitignore               # System artifacts ignore
├── PORTFOLIO_HANDOFF.md     # This comprehensive handover document
│
├── 🎥 Video Assets
│   ├── bg-blend.mp4         # Hero section animated background video (~2.2MB)
│   └── thumbnail-final.mp4  # Kajaria case study video mockup (~4.1MB)
│
├── 🖼️ Image Assets
│   ├── avatar.jpg           # 3D character portrait avatar
│   ├── hero-bg.jpg          # High-res hero background poster
│   ├── hero_realty.jpg      # Hero Realty case study mockup
│   └── kajaria.jpg          # Kajaria ceramics interface mockup
```

---

## ⚙️ 5. Development & Deployment Commands

### Run Local Development Server
```bash
cd /Users/designarbaz/.gemini/antigravity/scratch/arbaaz-portfolio
python3 -m http.server 8080
# Access in browser at http://localhost:8080/
```

### Push Updates to Live GitHub Pages Site
```bash
cd /Users/designarbaz/.gemini/antigravity/scratch/arbaaz-portfolio
git add .
git commit -m "Your descriptive commit message"
git push origin main
# Site automatically rebuilds at https://designarbaaz.github.io/Portfolio/
```
