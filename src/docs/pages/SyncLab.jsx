import React, { useState } from 'react';
import { 
  Zap, Activity, Cpu, Shield, 
  RefreshCw, Play, Pause, 
  Layers, Command, Binary,
  Wind, Radio, Gauge, Move, Terminal, Copy, Check
} from 'lucide-react';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const SyncedButton = ({ 
  children, 
  delay = 0, 
  variant = "pulse", 
  icon: Icon,
  label = "SYSTEM NODE",
  code = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const variants = {
    pulse: "animate-sync-pulse",
    wave: "animate-wave",
    shimmer: "relative overflow-hidden"
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationDelay: `${delay}ms` }}
        className={`
          relative w-full h-16 px-6 flex items-center justify-between
          theme-bg border theme-border-secondary rounded-2xl
          transition-all duration-300 ease-out
          hover:theme-border-active hover:theme-shadow-xl
          active:scale-95 group theme-transition
          ${variants[variant]}
        `}
      >
        <div className="flex items-center gap-3">
          <div className={`
            p-2 rounded-xl transition-colors duration-300
            ${isHovered ? 'bg-[#E31B23] text-white' : 'theme-bg-secondary theme-text-tertiary'}
          `}>
            {Icon && <Icon size={20} />}
          </div>
          <span className="font-bold text-sm theme-text tracking-tight">{children}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={handleCopy}
            className={`p-1.5 rounded-lg transition-all ${copied ? 'bg-emerald-500/10 text-emerald-500' : 'opacity-0 group-hover:opacity-100 theme-bg-secondary theme-text-tertiary hover:theme-text-active'}`}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                style={{ animationDelay: `${delay + (i * 100)}ms` }}
                className={`w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse`}
              />
            ))}
          </div>
        </div>

        {variant === 'shimmer' && (
          <div 
            style={{ animationDelay: `${delay}ms` }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent -translate-x-full animate-sync-shimmer pointer-events-none" 
          />
        )}
      </button>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">
        {label} // {delay}MS OFFSET
      </span>
    </div>
  );
};

const SyncLab = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const syncCode = `// Example of synchronized delay choreography
<SyncedButton delay={0} variant="shimmer" icon={Zap}>Power Grid</SyncedButton>
<SyncedButton delay={200} variant="shimmer" icon={Cpu}>Core Logic</SyncedButton>
<SyncedButton delay={400} variant="shimmer" icon={Shield}>Security Layer</SyncedButton>
<SyncedButton delay={600} variant="shimmer" icon={RefreshCw}>Buffer Sync</SyncedButton>`;

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black tracking-widest mb-4">
              <Activity size={14} className="animate-pulse" /> CLOCK_SYNCED_INTERFACE
            </div>
            <h1 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase theme-text leading-none mb-6">
              Sync <span className="text-red-600">Lab</span>
            </h1>
            <p className="theme-text-secondary font-medium text-xl leading-relaxed">
              Choreographed micro-interactions built on shared timing offsets. 
              These components are locked to a global mechanical frequency for elite UI precision.
            </p>
          </div>
          
          <div className="shrink-0 flex items-center gap-4 theme-bg p-3 rounded-2xl border theme-border-secondary theme-shadow-md">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-3 px-8 py-4 theme-bg-active theme-text-active rounded-xl font-black text-sm active:scale-95 transition-all shadow-lg shadow-red-500/10"
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
              {isPlaying ? "HALT SYSTEM" : "RESUME SYNC"}
            </button>
          </div>
        </div>
      </header>

      <NoteBlock type="tip">
        Synchronization is achieved by passing a unique <code>delay</code> prop to each node. This offset is applied to 
        the CSS <code>animation-delay</code> property, creating a sequential "wave" effect across the interface.
      </NoteBlock>

      <main className={`space-y-24 transition-all duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-40 blur-sm'}`}>
        
        {/* Section 01 */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b theme-border-secondary pb-4">
            <Layers className="text-red-600" />
            <h2 className="text-2xl font-black italic uppercase tracking-tighter theme-text">01. Sequential Cascade</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SyncedButton delay={0} variant="shimmer" icon={Zap} code='<SyncedButton delay={0} variant="shimmer" icon={Zap}>Power Grid</SyncedButton>'>Power Grid</SyncedButton>
            <SyncedButton delay={200} variant="shimmer" icon={Cpu} code='<SyncedButton delay={200} variant="shimmer" icon={Cpu}>Core Logic</SyncedButton>'>Core Logic</SyncedButton>
            <SyncedButton delay={400} variant="shimmer" icon={Shield} code='<SyncedButton delay={400} variant="shimmer" icon={Shield}>Security Layer</SyncedButton>'>Security Layer</SyncedButton>
            <SyncedButton delay={600} variant="shimmer" icon={RefreshCw} code='<SyncedButton delay={600} variant="shimmer" icon={RefreshCw}>Buffer Sync</SyncedButton>'>Buffer Sync</SyncedButton>
          </div>
          <CodeBlock code={syncCode} language="jsx" title="Sync_Choreography.jsx" />
        </section>

        {/* Section 02 */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b theme-border-secondary pb-4">
            <Wind className="text-red-600" />
            <h2 className="text-2xl font-black italic uppercase tracking-tighter theme-text">02. Rhythmic Wave</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SyncedButton delay={0} variant="wave" icon={Radio} code='<SyncedButton delay={0} variant="wave" icon={Radio}>Frequency A</SyncedButton>'>Frequency A</SyncedButton>
            <SyncedButton delay={150} variant="wave" icon={Radio} code='<SyncedButton delay={150} variant="wave" icon={Radio}>Frequency B</SyncedButton>'>Frequency B</SyncedButton>
            <SyncedButton delay={300} variant="wave" icon={Radio} code='<SyncedButton delay={300} variant="wave" icon={Radio}>Frequency C</SyncedButton>'>Frequency C</SyncedButton>
            <SyncedButton delay={450} variant="wave" icon={Radio} code='<SyncedButton delay={450} variant="wave" icon={Radio}>Frequency D</SyncedButton>'>Frequency D</SyncedButton>
          </div>
          <div className="mt-8">
            <CodeBlock 
              code={`// Vertical Wave Sync Implementation
<SyncedButton delay={0} variant="wave" icon={Radio}>Frequency A</SyncedButton>
<SyncedButton delay={150} variant="wave" icon={Radio}>Frequency B</SyncedButton>
<SyncedButton delay={300} variant="wave" icon={Radio}>Frequency C</SyncedButton>
<SyncedButton delay={450} variant="wave" icon={Radio}>Frequency D</SyncedButton>`} 
              language="jsx" 
              title="Wave_Sync.jsx" 
            />
          </div>
        </section>

        {/* Section 03 */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b theme-border-secondary pb-4">
            <Binary className="text-red-600" />
            <h2 className="text-2xl font-black italic uppercase tracking-tighter theme-text">03. Binary Pulsation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SyncedButton delay={0} variant="pulse" icon={Command} code='<SyncedButton delay={0} variant="pulse" icon={Command}>Execute 01</SyncedButton>'>Execute 01</SyncedButton>
            <SyncedButton delay={500} variant="pulse" icon={Command} code='<SyncedButton delay={500} variant="pulse" icon={Command}>Execute 02</SyncedButton>'>Execute 02</SyncedButton>
            <SyncedButton delay={0} variant="pulse" icon={Command} code='<SyncedButton delay={0} variant="pulse" icon={Command}>Execute 03</SyncedButton>'>Execute 03</SyncedButton>
            <SyncedButton delay={500} variant="pulse" icon={Command} code='<SyncedButton delay={500} variant="pulse" icon={Command}>Execute 04</SyncedButton>'>Execute 04</SyncedButton>
          </div>
          <div className="mt-8">
            <CodeBlock 
              code={`// Binary Pulsation (Shared State Sync)
<SyncedButton delay={0} variant="pulse" icon={Command}>Execute 01</SyncedButton>
<SyncedButton delay={500} variant="pulse" icon={Command}>Execute 02</SyncedButton>
<SyncedButton delay={0} variant="pulse" icon={Command}>Execute 03</SyncedButton>
<SyncedButton delay={500} variant="pulse" icon={Command}>Execute 04</SyncedButton>`} 
              language="jsx" 
              title="Binary_Sync.jsx" 
            />
          </div>
        </section>

        {/* Section 04: Mechanical Loaders */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b theme-border-secondary pb-4">
            <Gauge className="text-red-600" />
            <h2 className="text-2xl font-black italic uppercase tracking-tighter theme-text">04. Mechanical Cluster</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-10 theme-bg border theme-border-secondary rounded-[3rem] theme-shadow-lg flex flex-col gap-8 transition-transform hover:-translate-y-2">
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-[1.25rem] flex items-center justify-center shadow-2xl">
                    <Move size={24} className="animate-spin-slow" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black theme-text-tertiary uppercase tracking-widest">Load Factor</div>
                    <div className="text-2xl font-black italic text-red-600 tracking-tighter">{80 + i * 4}.4%</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <SyncedButton delay={i * 200} variant="shimmer" icon={Activity} label="LOAD_NODE_A">Sub-Process {i}A</SyncedButton>
                  <SyncedButton delay={i * 250} variant="shimmer" icon={Activity} label="LOAD_NODE_B">Sub-Process {i}B</SyncedButton>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-40 pt-12 border-t theme-border-secondary flex flex-col md:flex-row items-center justify-between theme-text-tertiary">
        <div className="flex items-center gap-8 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">Global Clock Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-widest">Frequency Locked</span>
          </div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em]">
          Danesh'UI Engine v4.0.0 // Clock Synchronized Interface
        </p>
      </footer>
    </div>
  );
};

export default SyncLab;
