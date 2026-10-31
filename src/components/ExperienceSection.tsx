import React from 'react';
import { Calendar, MapPin, ChevronRight, Layers } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>02 // Experience</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">Software Development & Industry</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Hostel Operations App (Span 8) */}
        {EXPERIENCES[0] && (
          <div className="md:col-span-8 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {EXPERIENCES[0].period}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {EXPERIENCES[0].location}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {EXPERIENCES[0].role}
              </h3>
              <p className="text-xs font-mono text-cyan-300/90 mt-0.5">
                {EXPERIENCES[0].organization}
              </p>

              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {EXPERIENCES[0].bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-slate-500 mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3" /> Stack:
              </span>
              {EXPERIENCES[0].techStack.map((tech, idx) => (
                <span key={idx} className="tag-pill px-2.5 py-0.5 rounded-md text-[11px] font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* McMaster Creates (Span 4) */}
        {EXPERIENCES[1] && (
          <div className="md:col-span-4 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {EXPERIENCES[1].period}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {EXPERIENCES[1].location}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {EXPERIENCES[1].role}
              </h3>
              <p className="text-xs font-mono text-cyan-300/90 mt-0.5">
                {EXPERIENCES[1].organization}
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-300 leading-relaxed">
                {EXPERIENCES[1].bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {EXPERIENCES[1].techStack.map((tech, idx) => (
                <span key={idx} className="tag-pill px-2 py-0.5 rounded-md text-[11px] font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
