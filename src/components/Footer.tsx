import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Download, ExternalLink, ChevronRight } from 'lucide-react';

/* ─── Download Section ─── */
export function DownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="download" ref={ref} className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container-wide"
      >
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            READY TO TRY<br /><span className="text-accent">ACADORA?</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Get the latest Android release or explore the source code on GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Download Card */}
          <div className="surface border border-accent/30 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <p className="font-mono text-xs text-accent mb-2">ACADORA</p>
              <p className="text-2xl font-bold font-grotesk mb-1">LATEST ANDROID RELEASE</p>
              <p className="text-sm text-secondary mb-6">Get the APK directly from GitHub Releases.</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="surface border border-subtle rounded-lg px-4 py-2">
                  <p className="text-[10px] font-mono text-secondary">PLATFORM</p>
                  <p className="text-sm font-bold">ANDROID</p>
                </div>
                <div className="surface border border-subtle rounded-lg px-4 py-2">
                  <p className="text-[10px] font-mono text-secondary">FORMAT</p>
                  <p className="text-sm font-bold">APK</p>
                </div>
              </div>

              <a
                href="https://github.com/metheyelene/faculty-ai/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-black font-semibold rounded-lg press-scale hover:opacity-90 transition-opacity text-sm"
              >
                <Download size={16} />
                GET THE LATEST RELEASE
                <ExternalLink size={14} />
              </a>
              <p className="text-xs text-secondary mt-4 text-center">
                Release availability and version information are maintained on GitHub.
              </p>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="surface border border-subtle rounded-xl p-8">
            <p className="font-mono text-xs text-secondary mb-2">SOURCE CODE</p>
            <p className="text-2xl font-bold font-grotesk mb-1">BUILT IN THE OPEN.</p>
            <p className="text-sm text-secondary mb-6">
              Explore the full source code, contribute, or report issues.
            </p>

            <div className="surface border border-subtle rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <Github size={24} />
                <div>
                  <p className="text-sm font-bold">metheyelene/faculty-ai</p>
                  <p className="text-xs text-secondary">Public Repository</p>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/metheyelene/faculty-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-subtle rounded-lg press-scale hover:border-accent transition-colors text-sm font-semibold"
            >
              <Github size={16} />
              VIEW REPOSITORY
              <ExternalLink size={14} />
            </a>
            <div className="mt-4 text-center">
              <a
                href="https://github.com/metheyelene/faculty-ai/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent flex items-center justify-center gap-1 hover:underline"
              >
                VIEW ALL RELEASES <ChevronRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Final CTA ─── */
export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container-wide relative"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="hero-text font-grotesk mb-8">
            <span className="block">READY TO MEET</span>
            <span className="block text-accent accent-glow">YOUR ACADEMIC</span>
            <span className="block">ASSISTANT?</span>
          </h2>
          <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto">
            Explore Acadora, download the latest Android release, and inspect the source on GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/metheyelene/faculty-ai/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-accent text-black font-semibold rounded-lg press-scale hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              DOWNLOAD ACADORA
            </a>
            <a
              href="https://github.com/metheyelene/faculty-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-subtle rounded-lg press-scale hover:border-accent transition-colors text-sm tracking-wide flex items-center gap-2"
            >
              <Github size={16} />
              VIEW GITHUB
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Footer ─── */
export function Footer() {
  return (
    <footer className="border-t border-subtle py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-xl font-bold font-grotesk tracking-tight mb-2">ACADORA</p>
            <p className="text-sm text-secondary mb-4">Faculty AI — Personal Academic Assistant</p>
            <p className="text-xs text-secondary max-w-sm">
              An AI-powered academic workspace built around how faculty actually work. 
              Your timetable, students, notes, tasks, and academic context in one place.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-mono text-accent mb-3">PRODUCT</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Architecture', href: '#architecture' },
                { label: 'Roadmap', href: '#roadmap' },
                { label: 'Download', href: '#download' },
              ].map(link => (
                <a key={link.href} href={link.href} className="text-sm text-secondary hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-xs font-mono text-accent mb-3">DEVELOPER</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/metheyelene/faculty-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-accent transition-colors flex items-center gap-1"
              >
                <Github size={14} /> GitHub Repository
              </a>
              <a
                href="https://github.com/metheyelene/faculty-ai/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-accent transition-colors flex items-center gap-1"
              >
                <Download size={14} /> Releases
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} Acadora. Built for the ECE Department.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-secondary font-mono">KOTLIN</span>
            <span className="text-xs text-secondary">•</span>
            <span className="text-xs text-secondary font-mono">JETPACK COMPOSE</span>
            <span className="text-xs text-secondary">•</span>
            <span className="text-xs text-secondary font-mono">ANDROID</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
