import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractivePhone } from './components/PhoneMockup';
import {
  ProductStatement,
  FeaturesGrid,
  DashboardSection,
  TimetableSection,
  AttendanceSection,
  NotesSection,
  TasksSection,
  AssistantSection,
  MemorySection,
  PersonalizationSection,
  DesignSystemSection,
} from './components/FeatureSections';
import {
  PrivacySection,
  ArchitectureSection,
  RoadmapSection,
  DemoSection,
  MySpaceSection,
} from './components/Architecture';
import {
  DownloadSection,
  FinalCTA,
  Footer,
} from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen font-grotesk">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        <ProductStatement />
        
        {/* Interactive App Showcase */}
        <section id="showcase" className="section-spacing">
          <div className="container-wide">
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">INTERACTIVE PREVIEW</p>
            <h2 className="section-heading mb-4">
              EXPLORE THE<br /><span className="text-accent">APPLICATION.</span>
            </h2>
            <p className="text-secondary mb-12 max-w-2xl">
              Switch between screens to explore Acadora's core modules. This is a faithful representation of the Android application's interface.
            </p>
            <InteractivePhone />
          </div>
        </section>

        <FeaturesGrid />
        
        <DashboardSection />
        
        <TimetableSection />
        
        <AttendanceSection />
        
        <NotesSection />
        
        <TasksSection />
        
        <AssistantSection />
        
        <MemorySection />
        
        <PersonalizationSection />
        
        <MySpaceSection />
        
        <DesignSystemSection />
        
        <PrivacySection />
        
        <ArchitectureSection />
        
        <RoadmapSection />
        
        <DemoSection />
        
        <DownloadSection />
        
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
