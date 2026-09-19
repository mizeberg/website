import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, BookOpen, CheckSquare, MessageSquare, Brain, Home, Calendar } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'HOME', icon: Home },
  { id: 'timetable', label: 'TIMETABLE', icon: Calendar },
  { id: 'attendance', label: 'ATTENDANCE', icon: Users },
  { id: 'students', label: 'STUDENTS', icon: Users },
  { id: 'notes', label: 'NOTES', icon: BookOpen },
  { id: 'tasks', label: 'TASKS', icon: CheckSquare },
  { id: 'assistant', label: 'ASSISTANT', icon: MessageSquare },
  { id: 'memory', label: 'MEMORY', icon: Brain },
];

export function InteractivePhone() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* Phone */}
      <div className="relative">
        <div className="phone-frame w-[300px] h-[600px] shadow-2xl">
          <div className="phone-notch" />
          <div className="h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="h-full p-4 pt-10"
              >
                <PhoneScreen tab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Tab selector */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-mono text-secondary mb-2 uppercase tracking-wider">Explore Screens</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all press-scale ${
                  activeTab === tab.id
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-subtle hover:border-accent/50'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PhoneScreen({ tab }: { tab: string }) {
  switch (tab) {
    case 'home': return <HomeScreen />;
    case 'timetable': return <TimetableScreen />;
    case 'attendance': return <AttendanceScreen />;
    case 'students': return <StudentsScreen />;
    case 'notes': return <NotesScreen />;
    case 'tasks': return <TasksScreen />;
    case 'assistant': return <AssistantScreen />;
    case 'memory': return <MemoryScreen />;
    default: return <HomeScreen />;
  }
}

function HomeScreen() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-[10px] text-secondary font-mono">GOOD MORNING</p>
        <p className="text-base font-bold">Dr. Sharma</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[{ n: '5', l: 'CLASSES' }, { n: '4', l: 'TASKS' }, { n: '2', l: 'DUE' }].map(s => (
          <div key={s.l} className="surface rounded-lg p-2 border border-subtle text-center">
            <p className="text-lg font-bold text-accent">{s.n}</p>
            <p className="text-[8px] text-secondary">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="surface rounded-lg p-3 border border-accent/30">
        <p className="text-[9px] font-mono text-accent mb-1">NEXT CLASS</p>
        <p className="text-sm font-bold">VLSI Design</p>
        <p className="text-[10px] text-secondary">10:30 AM • Room 204</p>
        <div className="mt-2 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <p className="text-[9px] text-accent font-medium">STARTS IN 42 MIN</p>
        </div>
      </div>
      <div className="surface rounded-lg p-3 border border-subtle">
        <p className="text-[9px] font-mono text-secondary mb-2">OPEN TASKS</p>
        {['Submit Internal Marks', 'Prepare Lesson Plan', 'Upload Research Paper'].map((t, i) => (
          <div key={i} className="flex items-center gap-2 py-1">
            <div className={`w-3 h-3 rounded border ${i === 0 ? 'border-accent' : 'border-subtle'}`} />
            <p className="text-[10px]">{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimetableScreen() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const classes = [
    { time: '9:00', subject: 'DSP Lab', room: 'Lab 3', status: 'past' },
    { time: '10:30', subject: 'VLSI Design', room: 'Room 204', status: 'current' },
    { time: '1:00', subject: 'Comm. Systems', room: 'Room 105', status: 'upcoming' },
    { time: '3:00', subject: 'Faculty Meeting', room: 'Seminar Hall', status: 'upcoming' },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold">TIMETABLE</p>
      <div className="flex gap-1">
        {days.map((d, i) => (
          <div key={d} className={`flex-1 text-center py-1.5 rounded text-[9px] font-medium ${i === 2 ? 'bg-accent text-black' : 'surface border border-subtle'}`}>
            {d}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {classes.map((c, i) => (
          <div key={i} className={`surface rounded-lg p-3 border ${c.status === 'current' ? 'border-accent' : 'border-subtle'}`}>
            <div className="flex items-center justify-between">
              <p className={`text-[10px] font-mono ${c.status === 'past' ? 'text-secondary opacity-50' : ''}`}>{c.time}</p>
              {c.status === 'current' && <span className="text-[8px] bg-accent text-black px-1.5 py-0.5 rounded font-bold">NOW</span>}
            </div>
            <p className={`text-xs font-semibold mt-1 ${c.status === 'past' ? 'opacity-50' : ''}`}>{c.subject}</p>
            <p className="text-[9px] text-secondary">{c.room}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AttendanceScreen() {
  const students = [
    { id: '01', name: 'Student 01', status: 'present' },
    { id: '02', name: 'Student 02', status: 'present' },
    { id: '03', name: 'Student 03', status: 'absent' },
    { id: '04', name: 'Student 04', status: 'present' },
    { id: '05', name: 'Student 05', status: 'leave' },
    { id: '06', name: 'Student 06', status: 'present' },
  ];
  const present = students.filter(s => s.status === 'present').length;
  const absent = students.filter(s => s.status === 'absent').length;
  const leave = students.filter(s => s.status === 'leave').length;
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold">ATTENDANCE</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="surface rounded-lg p-2 border border-green-500/30 text-center">
          <p className="text-base font-bold text-green-400">{present}</p>
          <p className="text-[8px] text-secondary">PRESENT</p>
        </div>
        <div className="surface rounded-lg p-2 border border-red-500/30 text-center">
          <p className="text-base font-bold text-red-400">{absent}</p>
          <p className="text-[8px] text-secondary">ABSENT</p>
        </div>
        <div className="surface rounded-lg p-2 border border-yellow-500/30 text-center">
          <p className="text-base font-bold text-yellow-400">{leave}</p>
          <p className="text-[8px] text-secondary">LEAVE</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {students.map(s => (
          <div key={s.id} className="surface rounded-lg p-2 border border-subtle flex items-center justify-between">
            <p className="text-[10px]">{s.name}</p>
            <span className={`text-[8px] px-2 py-0.5 rounded font-bold ${
              s.status === 'present' ? 'bg-green-500/20 text-green-400' :
              s.status === 'absent' ? 'bg-red-500/20 text-red-400' :
              'bg-yellow-500/20 text-yellow-400'
            }`}>
              {s.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentsScreen() {
  const students = [
    { id: '01', name: 'Student 01', pct: 92 },
    { id: '02', name: 'Student 02', pct: 78 },
    { id: '03', name: 'Student 03', pct: 85 },
    { id: '04', name: 'Student 04', pct: 95 },
    { id: '05', name: 'Student 05', pct: 67 },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold">STUDENTS</p>
      <div className="surface rounded-lg p-2 border border-subtle">
        <p className="text-[10px] text-secondary">🔍 Search students...</p>
      </div>
      <div className="flex flex-col gap-2">
        {students.map(s => (
          <div key={s.id} className="surface rounded-lg p-3 border border-subtle">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">{s.name}</p>
              <p className={`text-xs font-bold ${s.pct >= 80 ? 'text-green-400' : s.pct >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>{s.pct}%</p>
            </div>
            <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full rounded-full ${s.pct >= 80 ? 'bg-green-400' : s.pct >= 70 ? 'bg-yellow-400' : 'bg-red-400'}`} style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesScreen() {
  const folders = ['LECTURES', 'MEETINGS', 'RESEARCH', 'IDEAS'];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold">MY NOTES</p>
      <div className="flex flex-wrap gap-1.5">
        {folders.map(f => (
          <span key={f} className="text-[8px] px-2 py-1 rounded-full border border-subtle font-mono">{f}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[
          { title: 'VLSI Lecture Plan', folder: 'LECTURES', time: '2h ago' },
          { title: 'DSP Research Notes', folder: 'RESEARCH', time: 'Yesterday' },
          { title: '6G Communication Ideas', folder: 'IDEAS', time: '3 days ago' },
        ].map((n, i) => (
          <div key={i} className="surface rounded-lg p-3 border border-subtle">
            <p className="text-xs font-semibold">{n.title}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[9px] text-secondary font-mono">{n.folder}</p>
              <p className="text-[9px] text-secondary">{n.time}</p>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <p className="text-[8px] text-green-400">SAVED</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksScreen() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold">MY TASKS</p>
      <div className="surface rounded-lg p-3 border border-accent/30">
        <p className="text-[9px] text-secondary font-mono mb-1">NATURAL LANGUAGE INPUT</p>
        <p className="text-[10px] italic">"remind me tomorrow 9am submit internal marks"</p>
      </div>
      <div className="surface rounded-lg p-3 border border-subtle">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded border border-accent" />
          <p className="text-xs font-semibold">Submit Internal Marks</p>
        </div>
        <div className="flex items-center gap-4 text-[9px] text-secondary">
          <span className="flex items-center gap-1"><Clock size={10} /> Tomorrow 9:00 AM</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { title: 'Prepare VLSI Lesson Plan', done: false },
          { title: 'Upload Research Paper', done: true },
          { title: 'Prepare Question Bank', done: false },
        ].map((t, i) => (
          <div key={i} className="surface rounded-lg p-3 border border-subtle flex items-center gap-2">
            <div className={`w-4 h-4 rounded border ${t.done ? 'bg-accent border-accent' : 'border-subtle'}`} />
            <p className={`text-[10px] ${t.done ? 'line-through text-secondary' : ''}`}>{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssistantScreen() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold">MY ASSISTANT</p>
      <div className="surface rounded-lg p-3 border border-subtle">
        <p className="text-[9px] text-secondary mb-1">YOU</p>
        <p className="text-[10px]">What is my next class?</p>
      </div>
      <div className="surface rounded-lg p-3 border border-accent/30">
        <p className="text-[9px] text-accent mb-1">ACADORA</p>
        <p className="text-[10px]">Your next class is VLSI Design at 10:30 AM in Room 204.</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-accent/10 text-accent font-mono">SOURCE: TIMETABLE</span>
        </div>
      </div>
      <div className="surface rounded-lg p-3 border border-subtle">
        <p className="text-[9px] text-secondary mb-1">YOU</p>
        <p className="text-[10px]">Find my notes about DSP.</p>
      </div>
      <div className="surface rounded-lg p-3 border border-accent/30">
        <p className="text-[9px] text-accent mb-1">ACADORA</p>
        <p className="text-[10px]">I found 3 notes related to DSP.</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-accent/10 text-accent font-mono">SOURCE: NOTES</span>
        </div>
      </div>
    </div>
  );
}

function MemoryScreen() {
  const memories = [
    'Currently teaching VLSI.',
    'Prefers morning lecture preparation.',
    'Research topic: 6G communication.',
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-bold">MY MEMORY</p>
      <div className="flex flex-col gap-2">
        {memories.map((m, i) => (
          <div key={i} className="surface rounded-lg p-3 border border-subtle flex items-center justify-between">
            <p className="text-[10px] flex-1">{m}</p>
            <button className="text-[8px] text-accent ml-2">EDIT</button>
          </div>
        ))}
      </div>
      <div className="surface rounded-lg p-3 border border-subtle">
        <p className="text-[9px] font-mono text-secondary mb-2">PRIVACY CONTROLS</p>
        {['Assistant Memory', 'AI Access to Notes', 'Personalized Notifications'].map((t, i) => (
          <div key={i} className="flex items-center justify-between py-1.5">
            <p className="text-[10px]">{t}</p>
            <div className={`w-8 h-4 rounded-full ${i < 2 ? 'bg-accent' : 'bg-white/20'} relative`}>
              <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 ${i < 2 ? 'right-0.5' : 'left-0.5'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
