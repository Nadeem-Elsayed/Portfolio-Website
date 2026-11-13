# Nadeem Elsayed — Software Engineering Portfolio

A modern, high-performance Software Engineering portfolio website built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**, optimized for high-conversion co-op and internship recruiting at top technology companies.

## Design Highlights
- **Curated Bento Grid Hierarchy:** Structured into 5 sequential zones (About & Academic Honors, Production Experience, Flagship Projects, Technical Arsenal, and Direct Connect) to optimize recruiter scannability.
- **Brittany Chiang Cursor Spotlight:** Subtle, reactive electric blue/cyan radial spotlight that tracks cursor movement across the viewport.
- **Rubber Ducky Debugging Cursor:** Custom interactive duck cursor that smoothly tracks movement, tilts with velocity, and expands on mouse-click hold.
- **Underwater Kelp Parallax:** 6 distinct anchored kelp stalks separated across fainter background and vibrant foreground layers, providing natural oceanic depth.
- **Floating Ambient Bubbles:** Hardware-accelerated rising bubbles continuously ascending in the background.
- **Clean Vector Iconography:** Official SVG/Lucide icons for all external links (LinkedIn, GitHub, Resume, Email, External Link indicators). Zero emojis throughout the codebase.
- **Direct Inline Video Previews:** Zero-click 16:9 embedded demos for Flagship and award-winning projects (IronMan, Hotel-Scheduler, Lumina).
- **Zero-Friction Recruitment Accolades:** Highlighting co-op availability (starting Winter for 4 to 16 months), Dean's Honour List, Golden Key Society, Valedictorian, and detailed technical judging at the McMaster Engineering Competition.

---

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React + Custom SVG Brand Vectors
- **Deployment Target:** Vercel (`vercel.json` included)

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## Asset Attributions
The custom graphical assets used in the aquatic theme are licensed and attributed as follows:

- **Rubber Duck:** [Shutterstock Vector](https://www.shutterstock.com/image-vector/shiny-yellow-rubber-duck-front-side-2565116361)
- **Seaweed & Aquatic Plants (Kelp Collection):** [Vecteezy Vector Art](https://www.vecteezy.com/vector-art/82089589-set-of-icon-logo-seaweed-and-aquatic-plant-silhouette-collection-for-marine-nature-and-ocean-ecosystem-branding-illustration)
- **Bubble Graphics:** [MyCuteGraphics](https://www.mycutegraphics.com/graphics/bubble-images.html)

---

## Customization Guide

### 1. Resume PDF
Place your resume PDF file in the `public/` directory named `resume.pdf`:
```
public/resume.pdf
```
Clicking any **Resume** button or icon will immediately download or open this file.

### 2. Video Demos
In `src/data/portfolioData.ts`, each project can specify a `videoDemo` object:
```typescript
videoDemo: {
  type: 'youtube', // or 'local'
  url: 'https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID',
  caption: 'Project walkthrough demonstration'
}
```

### 3. Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New... > Project**.
3. Import your `Portfolio_Website` repository. Vercel automatically detects the Vite framework and runs `npm run build`.
4. Click **Deploy**. Your portfolio is live with a global edge CDN and automatic HTTPS!
