import React from 'react';
import { Terminal, Layers, Cloud, BookOpen } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>04 // Technical Arsenal</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">Competencies & Engineering Stack</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Languages */}
        <div className="bento-card rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Terminal className="w-4 h-4" />
              <span>Languages</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS_DATA.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition"
                >
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-500 mt-4 pt-3 border-t border-slate-800/80">
            Systems, Scripting & OOP
          </span>
        </div>

        {/* Frameworks & Libraries */}
        <div className="bento-card rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4" />
              <span>Frameworks</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS_DATA.frameworks.map((fw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition"
                >
                  {fw.name}
                </span>
              ))}
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-500 mt-4 pt-3 border-t border-slate-800/80">
            CV, ML, Web & Desktop
          </span>
        </div>

        {/* Cloud & DevOps */}
        <div className="bento-card rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Cloud className="w-4 h-4" />
              <span>Tools & Cloud</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS_DATA.toolsAndCloud.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-500 mt-4 pt-3 border-t border-slate-800/80">
            CI/CD, Containers & Infrastructure
          </span>
        </div>

        {/* Coursework */}
        <div className="bento-card rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Core Coursework</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              {SKILLS_DATA.coursework.map((course, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-mono text-[11px]">▸</span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-500 mt-4 pt-3 border-t border-slate-800/80">
            McMaster Engineering
          </span>
        </div>
      </div>
    </section>
  );
};

