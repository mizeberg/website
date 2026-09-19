import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#demo' },
  { label: 'Architecture', href: '#architecture' },
];

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b border-subtle'
            : ''
        }`}
        style={{
          backgroundColor: scrolled
            ? theme === 'dark' ? 'rgba(9,9,9,0.85)' : 'rgba(250,250,250,0.85)'
            : 'transparent',
        }}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="font-grotesk font-bold text-xl tracking-tight">
            ACADORA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-subtle press-scale hover:border-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="https://github.com/metheyelene/faculty-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-subtle press-scale hover:border-accent transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={16} />
            </a>
            <a
              href="https://github.com/metheyelene/faculty-ai/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-black text-sm font-semibold rounded-lg press-scale hover:opacity-90 transition-opacity"
            >
              Download
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-subtle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg border border-subtle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(9,9,9,0.98)' : 'rgba(250,250,250,0.98)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="container-wide py-8 flex flex-col gap-6">
              {[...navLinks, { label: 'Roadmap', href: '#roadmap' }].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold font-grotesk"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-subtle" />
              <a
                href="https://github.com/metheyelene/faculty-ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-lg"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="https://github.com/metheyelene/faculty-ai/releases"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 bg-accent text-black text-center font-semibold rounded-lg"
              >
                Download Acadora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
