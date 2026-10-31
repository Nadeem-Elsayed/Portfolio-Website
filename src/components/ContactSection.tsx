import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="space-y-6 pt-6">
      <div className="bento-card rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-x-0 -top-24 h-48 bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>05 // Connect</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Opportunities.
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I am available starting <strong className="text-white">Winter 2025/2026</strong> for{' '}
            <strong className="text-cyan-300">4, 8, 12, or 16-month</strong> Software Engineering co-op terms.
            Whether you have an open position or want to discuss systems and computer vision, let's connect.
          </p>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy {PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            {/* Direct Mail Link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Send Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* Resume */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500 text-xs font-mono transition"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume PDF</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Nadeem Elsayed</span>
            <span>•</span>
            <span>McMaster Software Engineering</span>
          </div>
          <div>
            <span>Built with Vite, React, TypeScript, and Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
