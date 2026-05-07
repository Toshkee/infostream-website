@AGENTS.md
# Infostream Website — Next.js Rebuild Spec

## Project Overview
Rebuild the existing Infostream IT Solutions website (infostream.co.me) using modern technologies.
**Goal:** Same content, same branding, same colors — but enhanced with Next.js, modern performance, and improved UI/UX.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **i18n:** next-intl (Montenegrin / English — `mne` / `eng` switcher)
- **Icons:** Lucide React or React Icons
- **Fonts:** Keep similar sans-serif feel — use `Inter` from Google Fonts

---

## Brand & Design Tokens

### Colors
```css
/* Primary gradient (hero sections) */
--gradient-hero: linear-gradient(135deg, #00C9A7 0%, #5B4FE9 50%, #7B6FF0 100%);
/* teal → purple/violet */

/* What We Do page hero gradient */
--gradient-wwd: linear-gradient(135deg, #00BFFF 0%, #6C63FF 100%);
/* cyan → violet */

/* About Us page hero */
--gradient-about: solid teal/mint — #00C9A7 / #1ABFA5

/* Accent / CTA button color */
--color-accent: #4A8FE0; /* medium cornflower blue */

/* CTA banner background */
--color-banner: #5B8DEF;

/* Heading text */
--color-heading: #1A2340; /* dark navy */

/* Body text */
--color-body: #4A5568; /* medium gray */

/* Background */
--color-bg: #FFFFFF;
```

### Logo
- Wordmark: `infostream` in lowercase
- Icon: vertical bars/waveform to the left of text
- Logo colors: teal bars (#00C9A7 / green), orange-red bar (#E8523A), dark navy text
- On dark/gradient backgrounds: logo renders in white
- On white backgrounds: logo renders in full color
- **Source:** Extract SVG from existing site or recreate — ask client for original file

---

## Site Structure & Pages

### Navigation (all pages)
```
Logo (left) | Home  What We Do  Technologies  About us | mne  eng (right)
```
- Sticky/fixed navbar
- Active page underlined
- Language switcher: `mne` normal weight, `eng` bold/red when active (or vice versa)
- On gradient hero pages: navbar text is white
- On white pages: navbar text is dark

---

## Pages

### 1. Home (`/`)

**Hero Section**
- Full-width gradient background: teal → purple (left to right)
- Large bold heading: **"Enterprise IT solutions"**
- Subtext hashtags: `#followTheStream` and `#fullStackSolutions`
- Hero image: dashboard/app screenshot (mockup of an ERP/analytics app)
- Scroll indicator dots (right side, vertical)
- Smooth scroll or slide transitions between homepage sections

**What We Do — Service Sections (alternating image/text layout)**

Each service has: illustration (left or right), title, description paragraph, "Read more" teal button.

| # | Title | Description | Image side |
|---|-------|-------------|------------|
| 1 | Financial software development | We design, develop, and implement custom financial software in companies and public institutions. We integrate technology into offerings by financial services companies and institutions to improve their use and delivery to consumers. | Right (image left) |
| 2 | Registers | Financial systems are usually based on data from registers. We develop registers as a secure database record information about the entities involved in business process as a final destination of administrative procedures. We have experience in building: Register of citizens (CR), Company registers (COR), Employee registers (ER), Address register (AR) | Left (image right) |
| 3 | Digital transformation | We help companies and institutions in their need to transform their businesses from paper-based work processes to digitalised form. We develop systems for gathering paper and other unstructured information and transform it into the digital form, with centralized processing. This makes information secure and available. | Right (image left) |
| 4 | IT Infrastructure | We strive to apply technology to our partners' business needs preserving customer focus. Precisely matching different technology to the business needs is our core expertise. Through our rich experience, we crafted a suite of services and technology to be flexible and responsive. This allows us to deliver fast, impactful results to customers' digital initiatives. | Left (image right) |
| 5 | Consulting | Consulting services help our clients to evaluate their opportunities and apply the right technology that that can reshape their business and processes to deliver innovation and digital excellence. | Right (image left) |
| 6 | Cybersecurity | Did you know that the number of cyber-attacks increased by 42% in the first half of 2022? Every business uses essential data without which everyday business would be impossible. Do not allow yourself to become an easy target of cyber-attacks that will become more frequent in the future. | Left (image right) |

**CTA Banner**
- Full-width solid blue block (#5B8DEF)
- White text, centered: **"Development and implementation of quality business software solutions."**

---

### 2. What We Do (`/what-we-do`)

**Hero**
- Gradient background: cyan → violet
- White bold heading: **"What we do"**
- Hero image: mobile + tablet/laptop app mockups (analytics dashboards)

**Content**
- Detailed breakdown of all services listed above (same as homepage service sections but expanded)
- Each service links to its own subpage (e.g. `/what-we-do/financial-software`)

**Known subpages (from URL structure):**
- `/what-we-do/financial-software`
- `/what-we-do/registers`
- `/what-we-do/digital-transformation`
- `/what-we-do/it-infrastructure`
- `/what-we-do/consulting`
- `/what-we-do/cybersecurity`
- `/what-we-do/payment-systems`

Each subpage has project examples (e.g. eFirma, Parliament ERP, Ministry of Interior, Ministry of Defense DMS).

---

### 3. Technologies (`/technologies`)

**Hero**
- Gradient background: cyan → violet (same as What We Do)
- White bold heading: **"Technologies"**
- Hero image: illustrated team working with code/UI elements

**Technologies We Use Section**
- Heading: **"Technologies we use"**
- Subtext: "By matching a different technologies to business needs we get the most efficiency. We love to govern new exciting technologies and tools that motivate us to build beautiful and functional software. We leverage our deep tech expertise in Oracle, Microsoft .NET, C#, MVC, Java, Angular, Apex, to develop custom cutting-edge products."
- **Animated circular diagram** with Infostream logo in the center, tech logos orbiting around it on a circular arc with colored connector lines
- Tech logos shown: Angular, RxJS/React, GitHub, .NET, Docker, Oracle, TypeScript, and 1–2 others
- Recreate this as an SVG or canvas animation with Framer Motion rotation/orbit effect

---

### 4. About Us (`/about-us`)

**Hero**
- Solid teal/mint background (#00C9A7 or similar)
- Geometric decorative shapes (triangles/polygons) in darker teal as background detail
- White wordmark logo visible

**About Us Text Block**
- Card/panel with slight teal tint background, centered on page
- Heading: **"About us"**
- Body paragraphs:
  - "We are specialized in the development of enterprise IT solutions in the area of finance and public services."
  - "Our approach is to use a flexible and agile methodology to software development with specific and strong project management, verified by ISO standards in information security management and software engineering, development and maintenance of software."
  - "Our team of engineers and consultants, with over 15 years of experience, are capable of implementing large scale enterprise IT projects on time and on budget."
  - "We love to govern new exciting technologies and tools that motivate us to build beautiful and functional software. We leverage our deep tech expertise in Oracle, Microsoft .NET, C#, MVC, Java, Angular, Apex, to develop custom cutting-edge products."
  - "Being a reliable partner to the digital community, a responsible entity in the economic ecosystem, an initiator of positive changes and innovations remain Infostream's goals for the future."

**Core Values Section**
- Heading: **"Solutions driven by our core values:"** (with "core values:" in teal)
- Vertical timeline layout — alternating left/right, connected by dashed vertical line
- Each value has a circle icon (teal checkmark or lightbulb) in the center connecting line
- Values:
  1. 💡 **Bring new value to customer** — "We bring willingness to do what it takes to create new value for all stakeholders"
  2. ✅ **Pursue excellence** — "We embrace expertise and solutions-oriented teams. We focus on solutions, not problems."
  3. ✅ **Do things responsibly** — "We simultaneously support the success of our employees, partners and customers."
  4. ✅ **Spark innovation** — "We strive to the technological breakthroughs and innovations that customers want."

**Team Section** (seen in search results, screenshot not captured)
- URL: `/team/`
- Shows team members — recreate as a grid of cards with photo, name, title

---

## Footer

3-column layout, white background, light gray text:

**Column 1 — Brand**
- Tagline: "We love to govern new exciting technologies and tools that motivate us to build beautiful and functional software"
- Decorative illustration below (person at laptop with chart)

**Column 2 — About our work**
- Heading: "About our work"
- Links: What we do · Technologies · About us

**Column 3 — Follow Us**
- Heading: "Follow Us"
- Social icons (circular outlined buttons): LinkedIn · Facebook · Instagram
- General information: info@infostream.co.me
- Customer support: servicedesk@infostream.co.me
- Phone: +382 (0) 20 664 808

---

## i18n (Internationalisation)
- Two languages: **Montenegrin (mne)** and **English (eng)**
- Switcher in navbar top right
- Use `next-intl` library
- All content strings go in `/messages/en.json` and `/messages/me.json`

---

## Animations (Framer Motion)
- **Hero sections:** fade-in + slide-up on page load
- **Service sections:** scroll-triggered fade-in (alternating left/right slide)
- **Core values timeline:** scroll-triggered reveal per item
- **Technologies circle:** continuous slow orbit rotation of tech logos around center
- **Navbar:** smooth background transition on scroll (transparent → white with shadow)
- **Buttons:** subtle scale on hover

---

## SEO & Performance
- Use Next.js `metadata` API for per-page title/description
- `next/image` for all images (lazy loading, WebP)
- SSG (static generation) for all pages — no dynamic data needed
- Lighthouse score target: 90+ on all metrics

---

## File Structure (suggested)
```
/app
  /[locale]
    /page.tsx                  ← Home
    /what-we-do/page.tsx
    /what-we-do/[service]/page.tsx
    /technologies/page.tsx
    /about-us/page.tsx
    /team/page.tsx
/components
  /layout
    Navbar.tsx
    Footer.tsx
  /home
    Hero.tsx
    ServiceSection.tsx
    CtaBanner.tsx
  /technologies
    TechCircle.tsx
  /about
    CoreValues.tsx
    TeamGrid.tsx
  /ui
    Button.tsx
    SectionHeading.tsx
/messages
  en.json
  me.json
/public
  /images
  /logo
```

---

## Assets Needed (to gather)
- [ ] Logo SVG file (original, with transparent background)
- [ ] All illustration images from current site (financial, registers, digital transformation, IT infra, consulting, cybersecurity)
- [ ] Hero dashboard/app mockup images
- [ ] Team member photos
- [ ] Tech logo icons (Angular, .NET, Oracle, Docker, GitHub, TypeScript, RxJS)

---

## Notes
- Keep the same domain: `infostream.co.me`
- The current site is WordPress-based — the new one is purely Next.js static
- No CMS needed unless client requests it later
- Match the color of each page hero gradient to the original (teal for About, blue-purple for What We Do & Technologies, teal-to-purple for Home)