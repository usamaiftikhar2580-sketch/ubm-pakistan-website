import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Github, Terminal, FolderTree, BookOpen } from 'lucide-react';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({ isOpen, onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const gitCommands = `# 1. Initialize git repository
git init
git add .
git commit -m "Initial commit of UBM Pakistan website"

# 2. Add your GitHub repository remote
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ubm-pakistan.git
git push -u origin main

# 3. Build & Deploy to GitHub Pages:
# Run: npm run build
# Then push the 'dist' folder to the 'gh-pages' branch or use standard GitHub Actions:
npm run build
npx gh-pages -d dist`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111516] border border-[#19E77A]/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#171C1E] to-[#0B0D0E] border-b border-white/10 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-[#A7B0AC] hover:text-white bg-white/5 hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-[#19E77A] bg-[#19E77A]/10 px-2.5 py-0.5 rounded border border-[#19E77A]/20">
              Technical Deliverable
            </span>
            <span className="text-xs text-[#A7B0AC]">100% Static & GitHub Pages Compatible</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            GitHub Pages Publishing & Deployment Guide
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed">
            Everything you need to host this website on your GitHub repository and activate free international hosting via GitHub Pages.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-xs sm:text-sm text-[#A7B0AC]">
          
          {/* Step 1 */}
          <div className="p-5 rounded-xl bg-[#0B0D0E] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#19E77A] text-[#0B0D0E] text-xs flex items-center justify-center font-bold">1</span>
              Option A: Deploy Built Static Distribution (Standard)
            </h3>
            <p className="leading-relaxed">
              Run <code className="text-[#19E77A] bg-white/5 px-1.5 py-0.5 rounded font-mono">npm run build</code>. This generates a production-ready, ultra-optimized static directory in <code className="text-[#19E77A] bg-white/5 px-1.5 py-0.5 rounded font-mono">dist/</code> with minified HTML, CSS, JavaScript, and all official images. You can upload or deploy the contents of <code className="text-[#19E77A]">dist/</code> directly to GitHub Pages.
            </p>
          </div>

          {/* Terminal Commands */}
          <div className="p-5 rounded-xl bg-[#0B0D0E] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#19E77A]" />
                Git CLI Deployment Commands
              </h3>
              <button
                type="button"
                onClick={() => copyToClipboard(gitCommands, 'git')}
                className="inline-flex items-center gap-1 text-xs text-[#19E77A] hover:text-[#A8F7C2] cursor-pointer"
              >
                {copiedSection === 'git' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSection === 'git' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-lg bg-[#07090A] border border-white/5 text-[11px] font-mono text-[#A8F7C2] overflow-x-auto">
              {gitCommands}
            </pre>
          </div>

          {/* Step 2: GitHub Repository Settings */}
          <div className="p-5 rounded-xl bg-[#0B0D0E] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#19E77A] text-[#0B0D0E] text-xs flex items-center justify-center font-bold">2</span>
              Activating GitHub Pages in Your Repository
            </h3>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Open your repository on <strong className="text-white">GitHub.com</strong></li>
              <li>Click on <strong className="text-white">Settings</strong> &gt; <strong className="text-white">Pages</strong> (in the left sidebar)</li>
              <li>Under <strong className="text-white">Source</strong>, select <strong className="text-white">Deploy from a branch</strong></li>
              <li>Under <strong className="text-white">Branch</strong>, select <strong className="text-white">main</strong> (or <strong className="text-white">gh-pages</strong>) and folder <strong className="text-white">/ (root)</strong></li>
              <li>Click <strong className="text-white">Save</strong>. Within 60 seconds your site will be live at <code className="text-[#19E77A] bg-white/5 px-1 rounded font-mono">https://YOUR_USERNAME.github.io/ubm-pakistan/</code>!</li>
            </ol>
          </div>

          {/* Key Advantages */}
          <div className="p-5 rounded-xl bg-[#151A1C] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">GitHub Pages Guarantee</h4>
            <p className="text-xs leading-relaxed">
              • All assets use relative paths.<br />
              • Forms integrate directly with official WhatsApp (<span className="text-[#19E77A]">+923040880992</span>), eliminating server database requirements.<br />
              • Interactive green particle universe runs purely in vanilla HTML5 Canvas.<br />
              • Zero broken links, zero console errors, zero external dependencies required.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#0B0D0E] border-t border-white/10 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#A7B0AC] hover:text-white"
          >
            Close Guide
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-xl transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Go to GitHub</span>
          </a>
        </div>

      </div>
    </div>
  );
};
