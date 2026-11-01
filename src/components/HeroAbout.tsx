import React from 'react';
import {
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { PERSONAL_INFO, ACADEMIC_HONORS, JUDGING_SPOTLIGHT } from '../data/portfolioData';

export const HeroAbout: React.FC = () => {
  return (
    <section id="about" className="space-y-6 pt-6">
      {/* Availability Status Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold">{PERSONAL_INFO.availability.badge}</span>
          <span className="text-emerald-500/80">•</span>
          <span>{PERSONAL_INFO.availability.termLength}</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>

      {/* Main Hero Bento Card with Profile Picture */}
      <div className="bento-card rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 relative z-10">
          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>01 // About & Background</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
              .
            </h1>

            <p className="text-lg text-slate-200 font-medium">
              Software Engineering Student at <strong className="text-white font-semibold">McMaster University</strong>
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-xs sm:text-sm text-cyan-300/90 font-mono bg-cyan-950/40 border border-cyan-800/40 px-3.5 py-2 rounded-xl inline-block">
              {PERSONAL_INFO.availability.summary}
            </p>

            {/* Action Links & External Icons */}
            <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Profile Picture Frame */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 opacity-70 blur-md group-hover:opacity-100 transition duration-500" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-1 bg-slate-950 border border-cyan-400/40 shadow-2xl">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-full bg-slate-900 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Active Co-op Availability Dot */}
            <div
              className="absolute bottom-1 right-2 p-1.5 bg-slate-950 border border-slate-800 rounded-full shadow-lg"
              title="Available for Co-op"
            >
              <span className="block w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Academic Credentials & Honors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Degree */}
        <div className="bento-card rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              Education
            </span>
            <h4 className="text-sm font-bold text-white mt-1">McMaster University</h4>
            <p className="text-xs text-slate-300 mt-0.5">B.Eng Software Engineering</p>
          </div>
          <span className="text-[11px] font-mono text-cyan-400 mt-3 pt-3 border-t border-slate-800">
            {PERSONAL_INFO.expectedGraduation}
          </span>
        </div>

        {/* Honors 1, 2, 3 */}
        {ACADEMIC_HONORS.map((honor, idx) => (
          <div key={idx} className="bento-card rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block">
                {honor.highlight}
              </span>
              <h4 className="text-sm font-bold text-white mt-1">{honor.title}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{honor.detail}</p>
            </div>
            <span className="text-[11px] font-mono text-slate-500 mt-3 pt-3 border-t border-slate-800">
              {honor.organization}
            </span>
          </div>
        ))}
      </div>

      {/* Detailed MEC Programming Judge Spotlight Bento */}
      <div className="bento-card rounded-2xl p-6 sm:p-7 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2 py-0.5 rounded">
                  Leadership & Code Evaluation
                </span>
                <span className="text-xs font-mono text-slate-500">{JUDGING_SPOTLIGHT.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                {JUDGING_SPOTLIGHT.role} — {JUDGING_SPOTLIGHT.organization}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              {JUDGING_SPOTLIGHT.participantsCount}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400">
              {JUDGING_SPOTLIGHT.candidatesEvaluated}
            </span>
          </div>
        </div>

        <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {JUDGING_SPOTLIGHT.details.map((point, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
