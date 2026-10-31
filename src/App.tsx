import React from 'react';
import { Spotlight } from './components/Spotlight';
import { Navbar } from './components/Navbar';
import { HeroAbout } from './components/HeroAbout';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Brittany Chiang Cursor Spotlight */}
      <Spotlight />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Structured Bento Sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 space-y-16 relative z-10">
        <HeroAbout />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
