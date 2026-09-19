import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calendar, Users, BookOpen, CheckSquare, MessageSquare, Brain,
  Clock, Folder, ChevronRight
} from 'lucide-react';

function SectionWrapper({ children, id, className = '' }: { children: React.ReactNode; id?: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id={id} ref={ref} className={`section-spacing ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="container-wide"
      >
        {children}
      </motion.div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">{children}</p>
  );
}

/* ─── Product Statement ─── */
export function ProductStatement() {
  return (
    <SectionWrapper id="product">
      <div className="max-w-4xl">
        <SectionLabel>THE IDEA</SectionLabel>
        <h2 className="section-heading mb-8">
          YOUR ACADEMIC ASSISTANT<br />
          <span className="text-accent">SHOULD UNDERSTAND</span><br />
          YOUR CONTEXT.
        </h2>
        <p className="text-lg text-secondary leading-relaxed max-w-2xl">
          Acadora is built around one simple idea: your academic assistant should understand your academic context. 
          It uses your profile, timetable, tasks, notes, attendance, students, and saved memories to provide 
          contextual assistance — grounded in your real academic workflow.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ─── Features Grid ─── */
const features = [
  {
    num: '01',
    title: 'MY DAY',
    desc: 'Time-aware dashboard showing today\'s classes, open tasks, upcoming deadlines, next class countdown, and recent notes.',
    icon: Clock,
  },
  {
    num: '02',
    title: 'MY TIMETABLE',
    desc: 'Monday–Saturday navigation with class cards, current class highlighting, past class states, and conflict-aware class creation.',
    icon: Calendar,
  },
  {
    num: '03',
    title: 'ATTENDANCE',
    desc: 'Student roster with Present, Absent, Leave marking, bulk actions, live counters, and attendance history.',
    icon: Users,
  },
  {
    num: '04',
    title: 'STUDENTS',
    desc: 'Searchable student list with profiles, attendance percentage, and attendance history tracking.',
    icon: Users,
  },
  {
    num: '05',
    title: 'MY NOTES',
    desc: 'Organized folders for lectures, meetings, research, lesson plans, personal, and ideas with autosave and memory saving.',
    icon: BookOpen,
  },
  {
    num: '06',
    title: 'MY TASKS',
    desc: 'Natural-language task creation. Say "remind me tomorrow 9am submit internal marks" and Acadora parses it.',
    icon: CheckSquare,
  },
  {
    num: '07',
    title: 'MY ASSISTANT',
    desc: 'Context-aware academic assistant working with your next class, schedule, tasks, notes, memories, and lesson planning.',
    icon: MessageSquare,
  },
  {
    num: '08',
    title: 'MY MEMORY',
    desc: 'Faculty-controlled memory. View, edit, delete, and clear memories with full privacy controls.',
    icon: Brain,
  },
];

export function FeaturesGrid() {
  return (
    <SectionWrapper id="features">
      <SectionLabel>CAPABILITIES</SectionLabel>
      <h2 className="section-heading mb-4">
        EVERYTHING FACULTY NEEDS.<br />
        <span className="text-accent">IN ONE PLACE.</span>
      </h2>
      <p className="text-secondary mb-12 max-w-2xl">
        Eight core modules designed around the faculty member's real academic workflow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface border border-subtle rounded-xl p-6 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-secondary">{f.num}</span>
                <Icon size={18} className="text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-bold tracking-wide mb-2">{f.title}</h3>
              <p className="text-xs text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

/* ─── Dashboard Section ─── */
export function DashboardSection() {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>HOME DASHBOARD</SectionLabel>
          <h2 className="section-heading mb-6">
            KNOW WHAT'S<br /><span className="text-accent">NEXT.</span>
          </h2>
          <p className="text-secondary leading-relaxed mb-8">
            Acadora's dashboard provides an at-a-glance view of the faculty member's day. 
            See today's classes, open tasks, upcoming deadlines, and your next class — all in one place.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { num: '5', label: 'CLASSES TODAY' },
              { num: '4', label: 'OPEN TASKS' },
              { num: '2', label: 'DUE THIS WEEK' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-accent font-grotesk">{s.num}</p>
                <p className="text-[10px] font-mono text-secondary mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="surface border border-subtle rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="font-mono text-xs text-accent">NEXT CLASS</p>
          </div>
          <p className="text-3xl font-bold font-grotesk mb-1">VLSI Design</p>
          <p className="text-secondary text-sm mb-4">10:30 AM • Room 204</p>
          <div className="surface border border-accent/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono text-secondary">STARTS IN</p>
              <p className="text-2xl font-bold text-accent font-grotesk">42:00</p>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-accent" style={{ width: '65%' }} />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Timetable Section ─── */
export function TimetableSection() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const classes = [
    { time: '9:00 AM', subject: 'DSP Lab', room: 'Lab 3', status: 'past' as const },
    { time: '10:30 AM', subject: 'VLSI Design', room: 'Room 204', status: 'current' as const },
    { time: '1:00 PM', subject: 'Communication Systems', room: 'Room 105', status: 'upcoming' as const },
    { time: '3:00 PM', subject: 'Faculty Meeting', room: 'Seminar Hall', status: 'upcoming' as const },
  ];

  return (
    <SectionWrapper>
      <SectionLabel>TIMETABLE</SectionLabel>
      <h2 className="section-heading mb-4">
        YOUR WEEK.<br /><span className="text-accent">AT A GLANCE.</span>
      </h2>
      <p className="text-secondary mb-8 max-w-2xl">
        Navigate your week with Monday–Saturday views. Current classes are highlighted, past classes are muted, and upcoming classes are clearly marked.
      </p>
      <div className="surface border border-subtle rounded-xl p-6">
        <div className="flex gap-2 mb-6">
          {days.map((d, i) => (
            <div key={d} className={`flex-1 text-center py-2.5 rounded-lg text-xs font-bold tracking-wider ${i === 2 ? 'bg-accent text-black' : 'border border-subtle'}`}>
              {d}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {classes.map((c, i) => (
            <div key={i} className={`rounded-lg p-4 border transition-all ${
              c.status === 'current' ? 'border-accent bg-accent/5' :
              c.status === 'past' ? 'border-subtle opacity-50' :
              'border-subtle'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="font-mono text-xs text-secondary">{c.time}</p>
                  <p className={`font-semibold ${c.status === 'current' ? 'text-accent' : ''}`}>{c.subject}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-secondary">{c.room}</p>
                  {c.status === 'current' && (
                    <span className="text-[10px] bg-accent text-black px-2 py-0.5 rounded font-bold">NOW</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Attendance Section ─── */
export function AttendanceSection() {
  const students = [
    { name: 'Student 01', status: 'present' as const },
    { name: 'Student 02', status: 'absent' as const },
    { name: 'Student 03', status: 'present' as const },
    { name: 'Student 04', status: 'leave' as const },
    { name: 'Student 05', status: 'present' as const },
    { name: 'Student 06', status: 'present' as const },
  ];

  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>ATTENDANCE</SectionLabel>
          <h2 className="section-heading mb-6">
            ATTENDANCE<br /><span className="text-accent">WITHOUT THE FRICTION.</span>
          </h2>
          <p className="text-secondary leading-relaxed mb-6">
            Mark attendance with Present, Absent, or Leave status for each student. Use bulk actions 
            for efficiency. Live counters update in real-time.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-green-500/30 rounded-lg text-xs font-medium text-green-400 press-scale">
              ALL PRESENT
            </button>
            <button className="px-4 py-2 border border-red-500/30 rounded-lg text-xs font-medium text-red-400 press-scale">
              ALL ABSENT
            </button>
          </div>
        </div>
        <div className="surface border border-subtle rounded-xl p-6">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center p-3 rounded-lg border border-green-500/20">
              <p className="text-2xl font-bold text-green-400">32</p>
              <p className="text-[10px] font-mono text-secondary">PRESENT</p>
            </div>
            <div className="text-center p-3 rounded-lg border border-red-500/20">
              <p className="text-2xl font-bold text-red-400">4</p>
              <p className="text-[10px] font-mono text-secondary">ABSENT</p>
            </div>
            <div className="text-center p-3 rounded-lg border border-yellow-500/20">
              <p className="text-2xl font-bold text-yellow-400">2</p>
              <p className="text-[10px] font-mono text-secondary">LEAVE</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {students.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg border border-subtle">
                <p className="text-sm">{s.name}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                  s.status === 'present' ? 'bg-green-500/15 text-green-400' :
                  s.status === 'absent' ? 'bg-red-500/15 text-red-400' :
                  'bg-yellow-500/15 text-yellow-400'
                }`}>
                  {s.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Notes Section ─── */
export function NotesSection() {
  const folders = ['LECTURES', 'MEETINGS', 'RESEARCH', 'LESSON PLANS', 'PERSONAL', 'IDEAS'];
  return (
    <SectionWrapper>
      <SectionLabel>NOTES</SectionLabel>
      <h2 className="section-heading mb-4">
        YOUR KNOWLEDGE.<br /><span className="text-accent">KEPT IN CONTEXT.</span>
      </h2>
      <p className="text-secondary mb-8 max-w-2xl">
        Organize notes into folders. Autosave keeps your work safe. Save important insights to memory for your assistant to reference.
      </p>
      <div className="surface border border-subtle rounded-xl p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {folders.map(f => (
            <span key={f} className="text-xs px-3 py-1.5 rounded-full border border-subtle font-mono hover:border-accent transition-colors cursor-default">
              {f}
            </span>
          ))}
        </div>
        <div className="border border-subtle rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold">VLSI Lecture Plan — Week 8</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <p className="text-[10px] text-green-400 font-mono">SAVED</p>
            </div>
          </div>
          <p className="text-xs text-secondary leading-relaxed mb-4">
            Cover MOSFET characteristics, threshold voltage calculation, and introduce CMOS inverter design...
          </p>
          <button className="text-xs text-accent font-medium flex items-center gap-1 press-scale">
            SAVE TO MEMORY <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Tasks Section ─── */
export function TasksSection() {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>TASKS</SectionLabel>
          <h2 className="section-heading mb-6">
            SAY IT.<br /><span className="text-accent">ACADORA REMEMBERS.</span>
          </h2>
          <p className="text-secondary leading-relaxed">
            Create tasks using natural language. Acadora parses your input and creates structured tasks 
            with due dates and reminders automatically.
          </p>
        </div>
        <div className="surface border border-subtle rounded-xl p-6">
          <div className="border border-accent/30 rounded-lg p-4 mb-4">
            <p className="text-[10px] font-mono text-accent mb-2">NATURAL LANGUAGE INPUT</p>
            <p className="text-sm italic">"remind me tomorrow 9am submit internal marks"</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <ChevronRight size={14} className="text-accent" />
            <p className="text-xs font-mono text-secondary">PARSED INTO:</p>
          </div>
          <div className="surface border border-subtle rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded border-2 border-accent" />
              <p className="text-sm font-bold">Submit Internal Marks</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-secondary font-mono text-[10px] mb-0.5">DUE</p>
                <p>Tomorrow — 9:00 AM</p>
              </div>
              <div>
                <p className="text-secondary font-mono text-[10px] mb-0.5">REMINDER</p>
                <p className="text-accent">Scheduled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Assistant Section ─── */
export function AssistantSection() {
  return (
    <SectionWrapper>
      <SectionLabel>AI ASSISTANT</SectionLabel>
      <h2 className="section-heading mb-4">
        ASK YOUR<br /><span className="text-accent">ACADEMIC CONTEXT.</span>
      </h2>
      <p className="text-secondary mb-8 max-w-2xl">
        A context-aware academic assistant grounded in your data. Answers are based on your authorized academic context — timetable, notes, tasks, and memories.
      </p>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="surface border border-subtle rounded-xl p-6 flex flex-col gap-4">
          <div className="border border-subtle rounded-lg p-4">
            <p className="text-[10px] font-mono text-secondary mb-1">YOU</p>
            <p className="text-sm">What is my next class?</p>
          </div>
          <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
            <p className="text-[10px] font-mono text-accent mb-1">ACADORA</p>
            <p className="text-sm">Your next class is VLSI Design at 10:30 AM in Room 204.</p>
            <div className="mt-2">
              <span className="text-[9px] px-2 py-0.5 rounded bg-accent/15 text-accent font-mono">SOURCE: MY TIMETABLE</span>
            </div>
          </div>
          <div className="border border-subtle rounded-lg p-4">
            <p className="text-[10px] font-mono text-secondary mb-1">YOU</p>
            <p className="text-sm">Find my notes about DSP.</p>
          </div>
          <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
            <p className="text-[10px] font-mono text-accent mb-1">ACADORA</p>
            <p className="text-sm">I found 3 notes related to DSP.</p>
            <div className="mt-2">
              <span className="text-[9px] px-2 py-0.5 rounded bg-accent/15 text-accent font-mono">SOURCE: MY NOTES</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="surface border border-subtle rounded-xl p-6">
            <p className="text-xs font-mono text-secondary mb-4">CAPABILITIES</p>
            <div className="flex flex-col gap-3">
              {[
                'Check next class & schedule',
                'Find notes by subject',
                'Create tasks from conversation',
                'Draft lesson plans',
                'Prepare question banks',
                'Access saved memories',
              ].map((cap, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-sm">{cap}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-subtle">
              <p className="text-xs font-mono text-accent">GROUNDED IN YOUR DATA</p>
              <p className="text-xs text-secondary mt-1">Answers are based on your authorized academic context.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Memory Section ─── */
export function MemorySection() {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>MEMORY</SectionLabel>
          <h2 className="section-heading mb-6">
            REMEMBER<br /><span className="text-accent">WHAT MATTERS.</span>
          </h2>
          <p className="text-secondary leading-relaxed mb-6">
            Faculty-controlled memory. You decide what Acadora remembers. View, edit, delete, or clear memories at any time. Full privacy controls.
          </p>
          <div className="flex flex-col gap-3">
            {['Assistant Memory', 'AI Access to Notes', 'Personalized Notifications'].map((t, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <p className="text-sm">{t}</p>
                <div className={`w-10 h-5 rounded-full relative ${i < 2 ? 'bg-accent' : 'bg-white/20'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all ${i < 2 ? 'right-0.5' : 'left-0.5'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="surface border border-subtle rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">SAVED MEMORIES</p>
            <button className="text-[10px] text-red-400 font-mono press-scale">CLEAR ALL</button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              'Currently teaching VLSI.',
              'Prefers morning lecture preparation.',
              'Research topic: 6G communication.',
              'HOD of ECE Department.',
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg border border-subtle">
                <p className="text-sm flex-1">{m}</p>
                <div className="flex gap-2">
                  <button className="text-[10px] text-accent font-mono press-scale">EDIT</button>
                  <button className="text-[10px] text-red-400 font-mono press-scale">DELETE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Personalization Section ─── */
export function PersonalizationSection() {
  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>PERSONALIZATION</SectionLabel>
        <h2 className="section-heading mb-6">
          ACADORA STARTS<br /><span className="text-accent">WITH YOU.</span>
        </h2>
        <p className="text-secondary mb-10">
          Set up your profile with your name, designation, department, and subjects. Acadora personalizes your experience from day one.
        </p>
        <div className="surface border border-subtle rounded-xl p-8 max-w-md mx-auto">
          <div className="flex flex-col gap-4">
            {[
              { label: 'NAME', value: 'Dr. Sharma' },
              { label: 'DESIGNATION', value: 'Assistant Professor' },
              { label: 'DEPARTMENT', value: 'ECE' },
              { label: 'SUBJECTS', value: 'VLSI, DSP, Communication Systems' },
            ].map(f => (
              <div key={f.label} className="text-left">
                <p className="text-[10px] font-mono text-secondary mb-1">{f.label}</p>
                <p className="text-sm font-medium border-b border-subtle pb-2">{f.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-subtle">
            <p className="text-lg font-semibold">"Good morning, <span className="text-accent">Dr. Sharma</span>."</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Design System Section ─── */
export function DesignSystemSection() {
  return (
    <SectionWrapper>
      <SectionLabel>DESIGN SYSTEM</SectionLabel>
      <h2 className="section-heading mb-8">
        KINETIC BY<br /><span className="text-accent">DESIGN.</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="surface border border-subtle rounded-xl p-6">
          <p className="text-xs font-mono text-secondary mb-3">TYPOGRAPHY</p>
          <p className="text-4xl font-bold font-grotesk mb-2">Aa</p>
          <p className="text-2xl font-bold font-grotesk tracking-tight">ACADORA</p>
          <p className="text-xs text-secondary mt-2 font-mono">SPACE GROTESK</p>
        </div>
        <div className="surface border border-subtle rounded-xl p-6">
          <p className="text-xs font-mono text-secondary mb-3">ACCENT</p>
          <div className="w-full h-16 rounded-lg mb-3" style={{ backgroundColor: '#DFE104' }} />
          <p className="font-mono text-sm font-bold">#DFE104</p>
          <p className="text-xs text-secondary mt-1">Acid Yellow</p>
        </div>
        <div className="surface border border-subtle rounded-xl p-6">
          <p className="text-xs font-mono text-secondary mb-3">PRINCIPLES</p>
          <div className="flex flex-col gap-2">
            {[
              '0dp geometry',
              '1–2dp borders',
              'Flat surfaces',
              'Press-scale interaction',
              'Animated counters',
              'Dark / Light themes',
            ].map(p => (
              <div key={p} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <p className="text-xs">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
