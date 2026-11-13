import React from 'react';
import { Spotlight } from './components/Spotlight';
import { DuckCursor } from './components/DuckCursor';
import { BubblesBackground } from './components/BubblesBackground';
import { KelpParallax } from './components/KelpParallax';
import { Navbar } from './components/Navbar';
import { HeroAbout } from './components/HeroAbout';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Brittany Chiang Cursor Spotlight */}
      <Spotlight />

      {/* Rubber Ducky Cursor */}
      <DuckCursor />

      {/* Periodically Rising Bubbles */}
      <BubblesBackground />

      {/* Background Kelp Layer (Fainter, Behind UI) */}
      <KelpParallax layer="back" />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Structured Bento Sections (with generous bottom padding so kelp does not block content) */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-48 sm:pb-60 md:pb-72 space-y-16 relative z-10">
        <HeroAbout />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Foreground Kelp Layer (Vibrant, In Front of UI along bottom edges) */}
      <KelpParallax layer="front" />
    </div>
  );
};

export default App;
