import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden grid-bg pt-20">
      <div className="container-wide py-16 md:py-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-accent border border-accent/30 px-3 py-1.5 rounded-full">
            Faculty AI / Personal Academic Assistant
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="hero-text font-grotesk">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block"
            >
              YOUR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="block"
            >
              ACADEMIC
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block text-accent accent-glow"
            >
              DAY.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="block"
            >
              ORGANIZED.
            </motion.span>
          </h1>
        </motion.div>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          Acadora brings your timetable, attendance, students, notes, tasks and academic context into one intelligent workspace built for faculty.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <a
            href="https://github.com/metheyelene/faculty-ai/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-black font-semibold rounded-lg press-scale hover:opacity-90 transition-opacity text-sm tracking-wide"
          >
            DOWNLOAD ACADORA
          </a>
          <a
            href="https://github.com/metheyelene/faculty-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-subtle rounded-lg press-scale hover:border-accent transition-colors text-sm tracking-wide flex items-center gap-2"
          >
            <Github size={16} />
            VIEW ON GITHUB
          </a>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center gap-3 text-xs font-mono text-secondary"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          PUBLIC GITHUB REPOSITORY • ANDROID • KOTLIN + JETPACK COMPOSE
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-secondary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Phone mockup - desktop */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2"
      >
        <div className="animate-float">
          <PhonePreview />
        </div>
      </motion.div>
    </section>
  );
}

function PhonePreview() {
  return (
    <div className="phone-frame w-[280px] h-[560px] shadow-2xl">
      <div className="phone-notch" />
      <div className="h-full p-4 pt-10 flex flex-col gap-3 overflow-hidden">
        {/* Greeting */}
        <div className="mt-2">
          <p className="text-[10px] text-secondary font-mono">GOOD MORNING</p>
          <p className="text-sm font-semibold">Dr. Sharma</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="surface rounded-lg p-2 border border-subtle text-center">
            <p className="text-lg font-bold text-accent">5</p>
            <p className="text-[9px] text-secondary">CLASSES</p>
          </div>
          <div className="surface rounded-lg p-2 border border-subtle text-center">
            <p className="text-lg font-bold text-accent">3</p>
            <p className="text-[9px] text-secondary">TASKS</p>
          </div>
          <div className="surface rounded-lg p-2 border border-subtle text-center">
            <p className="text-lg font-bold text-accent">2</p>
            <p className="text-[9px] text-secondary">DUE</p>
          </div>
        </div>

        {/* Next class */}
        <div className="surface rounded-lg p-3 border border-accent/30 mt-1">
          <p className="text-[9px] font-mono text-accent mb-1">NEXT CLASS</p>
          <p className="text-sm font-semibold">VLSI Design</p>
          <p className="text-[10px] text-secondary">10:30 AM • Room 204</p>
          <div className="mt-2 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <p className="text-[9px] text-accent font-medium">STARTS IN 42 MIN</p>
          </div>
        </div>

        {/* Tasks */}
        <div className="surface rounded-lg p-3 border border-subtle">
          <p className="text-[9px] font-mono text-secondary mb-2">OPEN TASKS</p>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded border border-accent/50" />
              <p className="text-[10px]">Submit Internal Marks</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded border border-subtle" />
              <p className="text-[10px]">Prepare Lesson Plan</p>
            </div>
          </div>
        </div>

        {/* Timetable */}
        <div className="surface rounded-lg p-3 border border-subtle">
          <p className="text-[9px] font-mono text-secondary mb-2">TODAY'S SCHEDULE</p>
          <div className="flex flex-col gap-1">
            {['DSP Lab', 'VLSI Design', 'Communication'].map((cls, i) => (
              <div key={i} className={`flex items-center gap-2 py-1 ${i === 1 ? 'text-accent' : 'text-secondary'}`}>
                <p className="text-[9px] font-mono w-10">{['9:00', '10:30', '2:00'][i]}</p>
                <p className="text-[10px]">{cls}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
