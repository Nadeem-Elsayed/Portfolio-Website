import React, { useState } from 'react';
import {
  ExternalLink,
  Play,
  Cpu,
  Award,
  Radio,
  Code2,
} from 'lucide-react';
import { GithubIcon } from './icons';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../data/portfolioData';
import { VideoModal } from './VideoModal';
import type { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedVideoProject, setSelectedVideoProject] = useState<Project | null>(null);

  const ironman = FEATURED_PROJECTS.find((p) => p.id === 'iron-man');
  const hostel = FEATURED_PROJECTS.find((p) => p.id === 'hostel-scheduler');
  const lumina = FEATURED_PROJECTS.find((p) => p.id === 'lumina');
  const iot = FEATURED_PROJECTS.find((p) => p.id === 'weather-network');

  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>03 // Featured Projects</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">Architecture, MLOps & Production</span>
      </div>

      {/* Main Bento Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* ========================================================= */}
        {/* HERO FLAGSHIP CARD: IronMan Gesture Control (Span 12)     */}
        {/* ========================================================= */}
        {ironman && (
          <div className="md:col-span-12 bento-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
            {/* Subtle radial corner glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-800/80 pb-5 mb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
                    {ironman.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full">
                    {ironman.metrics}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition">
                  {ironman.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-400/90 mt-1">
                  {ironman.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {ironman.videoDemo && (
                  <button
                    onClick={() => setSelectedVideoProject(ironman)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition shadow-md shadow-cyan-500/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Demo</span>
                  </button>
                )}

                {ironman.githubUrl && (
                  <a
                    href={ironman.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Architecture & Details */}
              <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>{ironman.description}</p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  {ironman.architecturePoints?.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5 font-mono">▸</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {ironman.techStack.map((tech, idx) => (
                    <span key={idx} className="tag-pill px-2.5 py-0.5 rounded-md text-[11px] font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* System Architecture Console Box */}
              <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <Cpu className="w-3.5 h-3.5" />
                    // Pipeline Specification
                  </span>
                  <span className="text-emerald-400 font-mono">Operational</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dataset:</span>
                    <span className="text-slate-200">HaGRID (500k+ frames)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Framework:</span>
                    <span className="text-slate-200">PyTorch & OpenCV</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Cloud Target:</span>
                    <span className="text-cyan-300">AWS Lambda (Docker)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Automation:</span>
                    <span className="text-slate-200">GitHub Actions CI/CD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Action Mapping:</span>
                    <span className="text-slate-200">Windows OS Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CARD 2: Hostel Operations Desktop App (Span 6)            */}
        {/* ========================================================= */}
        {hostel && (
          <div className="md:col-span-6 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2.5 py-0.5 rounded-full">
                  {hostel.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  {hostel.metrics}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                {hostel.title}
              </h4>
              <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                {hostel.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                {hostel.description}
              </p>

              <div className="mt-3 space-y-1 text-xs text-slate-400">
                {hostel.architecturePoints?.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-mono">▸</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {hostel.techStack.map((tech, idx) => (
                  <span key={idx} className="tag-pill px-2 py-0.5 rounded text-[11px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {hostel.githubUrl && (
                <a
                  href={hostel.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CARD 3: Lumina 2D Game & Physics Engine (Span 6)          */}
        {/* ========================================================= */}
        {lumina && (
          <div className="md:col-span-6 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {lumina.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  {lumina.metrics}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                {lumina.title}
              </h4>
              <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                {lumina.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                {lumina.description}
              </p>

              <div className="mt-3 space-y-1 text-xs text-slate-400">
                {lumina.architecturePoints?.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-mono">▸</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {lumina.techStack.map((tech, idx) => (
                  <span key={idx} className="tag-pill px-2 py-0.5 rounded text-[11px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {lumina.githubUrl && (
                <a
                  href={lumina.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CARD 4: IoT Sensor Data Pipeline (Span 12)                */}
        {/* ========================================================= */}
        {iot && (
          <div className="md:col-span-12 bento-card rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Radio className="w-3 h-3" />
                  {iot.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {iot.metrics}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                {iot.title}
              </h4>
              <p className="text-xs font-mono text-cyan-400/90">{iot.subtitle}</p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {iot.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {iot.techStack.map((tech, idx) => (
                  <span key={idx} className="tag-pill px-2 py-0.5 rounded text-[11px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {iot.githubUrl && (
              <a
                href={iot.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

      </div>

      {/* Additional Engineering Projects Grid */}
      <div className="bento-card rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-white">Additional Technical Projects & Tooling</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">GitHub Repositories</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {OTHER_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between transition"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h5 className="text-sm font-bold text-white tracking-tight">
                    {proj.title}
                  </h5>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-cyan-400 transition p-1"
                    aria-label={`GitHub link for ${proj.title}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-900 flex flex-wrap gap-1">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Demonstration Modal */}
      {selectedVideoProject && (
        <VideoModal
          isOpen={!!selectedVideoProject}
          onClose={() => setSelectedVideoProject(null)}
          video={selectedVideoProject.videoDemo || null}
          title={selectedVideoProject.title}
        />
      )}
    </section>
  );
};
