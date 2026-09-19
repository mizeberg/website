import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ChevronRight, CheckCircle2, Circle, Clock } from 'lucide-react';

/* ─── Privacy Section ─── */
export function PrivacySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="privacy" ref={ref} className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container-wide"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">PRIVACY & DATA</p>
        <h2 className="section-heading mb-4">
          YOUR CONTEXT.<br /><span className="text-accent">YOUR CONTROL.</span>
        </h2>
        <p className="text-secondary mb-10 max-w-2xl leading-relaxed">
          The current application architecture uses local-first persistence. Your academic data stays on your device 
          with user-controlled settings. No cloud dependency for core functionality.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'LOCAL STORAGE', desc: 'Room database for structured data' },
            { label: 'DATASTORE', desc: 'Preferences and settings persistence' },
            { label: 'USER CONTROL', desc: 'Full control over what is stored' },
            { label: 'NO CLOUD REQUIRED', desc: 'Core features work offline' },
            { label: 'MEMORY CONTROLS', desc: 'View, edit, delete anytime' },
            { label: 'PRIVACY TOGGLES', desc: 'Granular access controls' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="surface border border-subtle rounded-xl p-5"
            >
              <p className="text-xs font-mono text-accent mb-1">{item.label}</p>
              <p className="text-sm text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Kotlin', 'Jetpack Compose', 'Room', 'DataStore', 'AlarmManager', 'StateFlow', 'MVVM'].map(tech => (
            <span key={tech} className="text-xs px-3 py-1.5 rounded-full border border-subtle font-mono">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Architecture Section ─── */
export function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentLayers = [
    { label: 'UI', sub: 'Jetpack Compose' },
    { label: 'VIEWMODELS', sub: 'State Management' },
    { label: 'DOMAIN LAYER', sub: 'Business Logic' },
    { label: 'DATA LAYER', sub: 'Repository Pattern' },
    { label: 'ROOM / DATASTORE', sub: 'Local Persistence' },
  ];

  const reminderFlow = [
    { label: 'TASKS', sub: 'User Input' },
    { label: 'ALARM MANAGER', sub: 'System Scheduling' },
  ];

  const roadmapLayers = [
    { label: 'FIREBASE SYNC', sub: 'Cloud Synchronization' },
    { label: 'SECURE AI BACKEND', sub: 'Contextual Intelligence' },
    { label: 'ROLE-BASED ACCESS', sub: 'HOD / Admin / Faculty' },
    { label: 'AUDIT TRAIL', sub: 'Activity Logging' },
  ];

  return (
    <section id="architecture" ref={ref} className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container-wide"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">TECHNICAL ARCHITECTURE</p>
        <h2 className="section-heading mb-4">
          BUILT WITH<br /><span className="text-accent">INTENT.</span>
        </h2>
        <p className="text-secondary mb-12 max-w-2xl">
          Clean MVVM architecture with clear separation of concerns. Local-first data persistence with a roadmap toward cloud synchronization.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Architecture */}
          <div className="surface border border-subtle rounded-xl p-6">
            <p className="text-xs font-mono text-accent mb-4">CURRENT ARCHITECTURE</p>
            <div className="flex flex-col items-center gap-1">
              {currentLayers.map((layer, i) => (
                <div key={layer.label} className="w-full">
                  <div className="border border-subtle rounded-lg p-3 text-center">
                    <p className="text-xs font-bold">{layer.label}</p>
                    <p className="text-[10px] text-secondary">{layer.sub}</p>
                  </div>
                  {i < currentLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown size={14} className="text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Reminders */}
          <div className="surface border border-subtle rounded-xl p-6">
            <p className="text-xs font-mono text-accent mb-4">REMINDERS</p>
            <div className="flex flex-col items-center gap-1">
              {reminderFlow.map((layer, i) => (
                <div key={layer.label} className="w-full">
                  <div className="border border-subtle rounded-lg p-3 text-center">
                    <p className="text-xs font-bold">{layer.label}</p>
                    <p className="text-[10px] text-secondary">{layer.sub}</p>
                  </div>
                  {i < reminderFlow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown size={14} className="text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-subtle">
              <p className="text-[10px] text-secondary">
                AlarmManager handles task reminders and notifications at the system level.
              </p>
            </div>
          </div>

          {/* Roadmap Architecture */}
          <div className="surface border border-accent/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="text-[9px] px-2 py-0.5 rounded bg-accent/15 text-accent font-mono">ROADMAP</span>
            </div>
            <p className="text-xs font-mono text-accent mb-4">PLANNED</p>
            <div className="flex flex-col items-center gap-1">
              {roadmapLayers.map((layer, i) => (
                <div key={layer.label} className="w-full">
                  <div className="border border-dashed border-accent/30 rounded-lg p-3 text-center opacity-70">
                    <p className="text-xs font-bold">{layer.label}</p>
                    <p className="text-[10px] text-secondary">{layer.sub}</p>
                  </div>
                  {i < roadmapLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown size={14} className="text-accent opacity-40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Roadmap Section ─── */
export function RoadmapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    { status: 'available', label: 'Local-first academic assistant', desc: 'Core features with Room, DataStore, Compose' },
    { status: 'in-development', label: 'Firebase synchronization', desc: 'Cloud sync for multi-device support' },
    { status: 'planned', label: 'Secure AI backend', desc: 'Contextual intelligence with privacy controls' },
    { status: 'planned', label: 'HOD / Admin / Coordinator roles', desc: 'Role-based access for institutions' },
    { status: 'planned', label: 'Audit trails', desc: 'Activity logging and compliance' },
    { status: 'planned', label: 'Rich-text editing', desc: 'Enhanced note editing capabilities' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CheckCircle2 size={16} className="text-accent" />;
      case 'in-development': return <Clock size={16} className="text-yellow-400" />;
      default: return <Circle size={16} className="text-secondary" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available': return <span className="text-[9px] px-2 py-0.5 rounded badge-available font-mono">AVAILABLE</span>;
      case 'in-development': return <span className="text-[9px] px-2 py-0.5 rounded bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 font-mono">IN DEVELOPMENT</span>;
      default: return <span className="text-[9px] px-2 py-0.5 rounded badge-planned font-mono">PLANNED</span>;
    }
  };

  return (
    <section id="roadmap" ref={ref} className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container-wide"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">ROADMAP</p>
        <h2 className="section-heading mb-4">
          BUILT FOR WHAT<br /><span className="text-accent">COMES NEXT.</span>
        </h2>
        <p className="text-secondary mb-12 max-w-2xl">
          Acadora is designed with a clear architectural path from local-first to cloud-connected, with privacy and institutional needs in mind.
        </p>
        <div className="flex flex-col gap-4 max-w-3xl">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="surface border border-subtle rounded-xl p-5 flex items-center gap-4"
            >
              {getStatusIcon(item.status)}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-sm font-semibold">{item.label}</p>
                  {getStatusBadge(item.status)}
                </div>
                <p className="text-xs text-secondary">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Demo Workflow Section ─── */
export function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { num: '01', title: 'ONBOARD', desc: 'Set up your profile and preferences' },
    { num: '02', title: 'SET SUBJECTS', desc: 'Configure your teaching subjects' },
    { num: '03', title: 'VIEW TODAY', desc: 'See your day at a glance' },
    { num: '04', title: 'OPEN TIMETABLE', desc: 'Navigate your weekly schedule' },
    { num: '05', title: 'MARK ATTENDANCE', desc: 'Record student attendance' },
    { num: '06', title: 'CREATE TASK', desc: 'Add tasks with natural language' },
    { num: '07', title: 'ASK ASSISTANT', desc: 'Get contextual academic help' },
    { num: '08', title: 'MANAGE MEMORY', desc: 'Control what Acadora remembers' },
    { num: '09', title: 'CHANGE THEME', desc: 'Switch between dark and light' },
  ];

  return (
    <section id="demo" ref={ref} className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container-wide"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">PRODUCT FLOW</p>
        <h2 className="section-heading mb-4">
          SEE ACADORA<br /><span className="text-accent">IN ACTION.</span>
        </h2>
        <p className="text-secondary mb-12 max-w-2xl">
          A 90-second walkthrough of the core faculty experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="surface border border-subtle rounded-xl p-5 flex items-start gap-4 card-hover"
            >
              <span className="text-2xl font-bold text-accent font-grotesk opacity-60">{step.num}</span>
              <div>
                <p className="text-sm font-bold tracking-wide mb-1">{step.title}</p>
                <p className="text-xs text-secondary">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── My Space Section ─── */
export function MySpaceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const modules = [
    'PROFILE', 'MEMORY', 'NOTES', 'TASKS',
    'TIMETABLE', 'ATTENDANCE', 'STUDENTS', 'SETTINGS',
  ];

  return (
    <section ref={ref} className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container-wide"
      >
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">WORKSPACE</p>
          <h2 className="section-heading mb-4">
            ONE SPACE.<br /><span className="text-accent">EVERYTHING ACADEMIC.</span>
          </h2>
          <p className="text-secondary mb-12 max-w-2xl mx-auto">
            All your academic modules in one unified workspace.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {modules.map((mod, i) => (
            <motion.div
              key={mod}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="surface border border-subtle rounded-xl p-6 text-center card-hover"
            >
              <p className="text-xs font-bold tracking-wider">{mod}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
