# Nadeem Elsayed — Software Engineering Portfolio

A modern, high-performance Software Engineering portfolio website built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**, optimized for high-conversion co-op and internship recruiting at top technology companies.

## Design Highlights
- **Curated Bento Grid Hierarchy:** Structured into 5 sequential zones (About & Academic Honors, Production Experience, Flagship Projects, Technical Arsenal, and Direct Connect) to optimize recruiter scannability.
- **Brittany Chiang Cursor Spotlight:** Subtle, reactive electric blue/cyan radial spotlight that tracks cursor movement across the viewport.
- **Clean Vector Iconography:** Official SVG/Lucide icons for all external links (LinkedIn, GitHub, Resume, Email, External Link indicators). Zero emojis throughout the codebase.
- **Interactive Project Video Demos:** Integrated modal supporting both YouTube embeds and local HTML5 video playback.
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
  url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // or '/videos/ironman-demo.mp4'
  caption: 'Real-time gesture detection and Windows OS automated trigger demo'
}
```
- **Why YouTube is recommended:** Hosting unlisted/public demos on YouTube provides adaptive bitrate streaming on mobile and desktop without bloating your Git repository or incurring CDN bandwidth costs.

### 3. Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New... > Project**.
3. Import your `Portfolio_Website` repository. Vercel automatically detects the Vite framework and runs `npm run build`.
4. Click **Deploy**. Your portfolio is live with a global edge CDN and automatic HTTPS!
