import { 
  Zap, Sparkles, Send, Download, Plus, ArrowRight, 
  Settings, Play, Check, Trash2, Heart, Star, 
  ExternalLink, Bell, Search, RefreshCw, Layers, 
  MousePointerClick, Command, Power, Rocket,
  CloudLightning, Shield, Cpu, Terminal, Copy
} from 'lucide-react';
import Button from '../../lib/components/Button';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const VaultItem = ({ children, title, index, code }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative theme-bg border theme-border-secondary rounded-3xl p-6 hover:theme-shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="h-32 flex items-center justify-center mb-4">
        {children}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">#{String(index).padStart(2, '0')}</span>
          <span className="text-xs font-bold theme-text group-hover:theme-text-active transition-colors">{title}</span>
        </div>
        <button 
          onClick={handleCopy}
          className={`p-2 rounded-lg transition-all ${copied ? 'bg-emerald-500/10 text-emerald-500' : 'theme-bg-secondary theme-text-tertiary hover:theme-text-active'}`}
          title="Copy Component Code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};

const AnimatedVault = () => {
  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Experimental Lab
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Animated <span className="text-red-600">Vault</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          A collection of 50 high-performance button designs. Every button includes a <strong>one-click copy</strong> 
          feature for instant integration and color customization.
        </p>
      </header>

      <NoteBlock type="info">
        <strong>🎨 Customization Ready:</strong> You can change the colors of any button below by simply modifying the 
        <code>bg-*</code>, <code>text-*</code>, or <code>border-*</code> classes in your code after copying. 
        All animations are color-agnostic.
      </NoteBlock>

      {/* Section 01 */}
      <SectionTitle id="motion-presets">01. Motion Presets</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        <VaultItem 
          index={1} title="The Shimmer" 
          code='<Button animation="shine" variant="primary" size="lg">Shimmer Pro</Button>'
        >
          <Button animation="shine" variant="primary" size="lg">Shimmer Pro</Button>
        </VaultItem>

        <VaultItem 
          index={2} title="3D Compression" 
          code='<button className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 border-b-4 dark:border-b-4 px-6 py-3 rounded-xl font-bold theme-text hover:border-red-500 active:border-b-0 active:translate-y-1 transition-all">Tactile 3D</button>'
        >
          <button className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 border-b-4 dark:border-b-4 px-6 py-3 rounded-xl font-bold theme-text hover:border-red-500 active:border-b-0 active:translate-y-1 transition-all">
            Tactile 3D
          </button>
        </VaultItem>

        <VaultItem 
          index={3} title="Elastic Flow" 
          code='<button className="theme-bg-secondary theme-text px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-2 hover:shadow-xl duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] border theme-border-secondary">Elastic Flow</button>'
        >
          <button className="theme-bg-secondary theme-text px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-2 hover:shadow-xl duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] border theme-border-secondary">
            Elastic Flow
          </button>
        </VaultItem>

        <VaultItem 
          index={4} title="Ripple Pulse" 
          code='<Button animation="pulse" variant="glow">Ripple Pulse</Button>'
        >
          <Button animation="pulse" variant="glow">Ripple Pulse</Button>
        </VaultItem>

        <VaultItem 
          index={5} title="Halo Glow" 
          code='<Button variant="secondary" className="hover:shadow-[0_0_20px_rgba(227,27,35,0.3)] hover:border-red-500">Halo Glow</Button>'
        >
          <Button variant="secondary" className="hover:shadow-[0_0_20px_rgba(227,27,35,0.3)] hover:border-red-500">Halo Glow</Button>
        </VaultItem>
      </div>

      {/* Section 02 */}
      <SectionTitle id="glitch-effects">02. Glitch & Special Effects</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        <VaultItem 
          index={6} title="Slide Reveal" 
          code='<button className="group relative theme-bg-tertiary theme-text px-6 py-3 rounded-xl font-bold overflow-hidden border theme-border-secondary">
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Hover Slide</span>
  <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
</button>'
        >
          <button className="group relative theme-bg-tertiary theme-text px-6 py-3 rounded-xl font-bold overflow-hidden border theme-border-secondary">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Hover Slide</span>
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </VaultItem>

        <VaultItem 
          index={7} title="Cyber Neon" 
          code='<button className="bg-slate-950 text-red-500 border border-red-500/50 px-6 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_#E31B23] transition-all">Cyber Neon</button>'
        >
          <button className="bg-slate-950 text-red-500 border border-red-500/50 px-6 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_#E31B23] transition-all">
            Cyber Neon
          </button>
        </VaultItem>

        <VaultItem 
          index={9} title="Glitch Core" 
          code='<button className="bg-black text-white px-6 py-3 rounded-none font-bold uppercase tracking-tighter hover:animate-[glitch_0.3s_infinite] border-r-4 border-b-4 border-red-600">Glitch Core</button>'
        >
          <button className="bg-black text-white px-6 py-3 rounded-none font-bold uppercase tracking-tighter hover:animate-[glitch_0.3s_infinite] border-r-4 border-b-4 border-red-600">
            Glitch Core
          </button>
        </VaultItem>

        <VaultItem 
          index={10} title="Liquid Fill" 
          code='<button className="group relative bg-transparent border-2 theme-border-active px-6 py-3 rounded-full font-bold overflow-hidden">
  <span className="relative z-10 group-hover:text-white transition-colors">Liquid Fill</span>
  <div className="absolute -inset-1 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
</button>'
        >
          <button className="group relative bg-transparent border-2 theme-border-active px-6 py-3 rounded-full font-bold overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors">Liquid Fill</span>
            <div className="absolute -inset-1 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
          </button>
        </VaultItem>
      </div>

      {/* Section 03 */}
      <SectionTitle id="action-presets">03. Action Presets</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        <VaultItem index={11} title="Arrow Slide" code='<Button animation="slide" iconRight={ArrowRight}>Proceed</Button>'>
          <Button animation="slide" iconRight={ArrowRight}>Proceed</Button>
        </VaultItem>

        <VaultItem index={13} title="Expand Icon" code='<button className="group bg-red-600 text-white px-4 py-3 rounded-xl font-bold flex items-center gap-0 hover:gap-3 transition-all overflow-hidden"><Plus size={18} /> <span className="w-0 group-hover:w-20 transition-all opacity-0 group-hover:opacity-100 whitespace-nowrap">Add Item</span></button>'>
          <button className="group bg-red-600 text-white px-4 py-3 rounded-xl font-bold flex items-center gap-0 hover:gap-3 transition-all overflow-hidden">
            <Plus size={18} /> <span className="w-0 group-hover:w-20 transition-all opacity-0 group-hover:opacity-100 whitespace-nowrap">Add Item</span>
          </button>
        </VaultItem>

        <VaultItem index={14} title="Floating Zap" code='<button className="bg-red-600 text-white p-4 rounded-full shadow-lg animate-float"><Zap size={24} fill="currentColor" /></button>'>
          <button className="bg-red-600 text-white p-4 rounded-full shadow-lg animate-float">
            <Zap size={24} fill="currentColor" />
          </button>
        </VaultItem>

        <VaultItem index={15} title="Success Morph" code='<button className="group bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all"><div className="flex items-center gap-2"><Check size={18} className="scale-0 group-hover:scale-100 transition-transform" /> Confirm</div></button>'>
          <button className="group bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all">
            <div className="flex items-center gap-2">
              <Check size={18} className="scale-0 group-hover:scale-100 transition-transform" /> Confirm
            </div>
          </button>
        </VaultItem>
      </div>

      {/* Section 04 */}
      <SectionTitle id="frame-effects">04. Border & Frame Effects</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        <VaultItem 
          index={21} title="Running Border" 
          code='<button className="relative p-[2px] rounded-xl overflow-hidden group">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
  <div className="relative theme-bg px-6 py-3 rounded-[10px] font-bold theme-text">Border Run</div>
</button>'
        >
          <button className="relative p-[2px] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <div className="relative theme-bg px-6 py-3 rounded-[10px] font-bold theme-text">Border Run</div>
          </button>
        </VaultItem>

        <VaultItem index={24} title="Corner Draw" code='<button className="relative theme-bg theme-text px-6 py-3 font-black group overflow-hidden border theme-border-secondary">
  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-600 group-hover:w-full group-hover:h-full transition-all duration-300" />
  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-600 group-hover:w-full group-hover:h-full transition-all duration-300" />
  CORNER
</button>'>
          <button className="relative theme-bg theme-text px-6 py-3 font-black group overflow-hidden border theme-border-secondary">
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-600 group-hover:w-full group-hover:h-full transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-600 group-hover:w-full group-hover:h-full transition-all duration-300" />
            CORNER
          </button>
        </VaultItem>
      </div>

      <div className="mt-20 pt-12 border-t theme-border-secondary">
        <SectionTitle id="customization">🎨 Theme-First Customization</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold theme-text">How to Change Colors</h3>
            <p className="theme-text-secondary leading-relaxed">
              Every button in the Danesh'UI library is designed to be highly customizable. While we provide 
              premium defaults (like our Signature Red), you can override any visual aspect using standard 
              Tailwind classes via the <code>className</code> prop.
            </p>
            <div className="p-6 theme-bg-secondary rounded-2xl border theme-border-secondary">
              <h4 className="text-sm font-black uppercase tracking-widest theme-text mb-4">Pro Tip</h4>
              <p className="text-sm theme-text-tertiary">
                If you use our <code>Button</code> component, simply pass a different <code>variant</code> 
                or use <code>className</code> to override the background. The animations will adapt 
                automatically to your new color palette.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold theme-text">Customization Example</h3>
            <CodeBlock 
              code={`// Overriding a Vault animation with your own brand color
<button className="bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_0_20px_#4f46e5] ...">
  Brand Button
</button>`}
              language="jsx"
            />
          </div>
        </div>
      </div>

      <footer className="mt-40 pt-12 border-t theme-border-secondary flex flex-col md:flex-row items-center justify-between theme-text-tertiary">
        <div className="flex items-center gap-8 mb-6 md:mb-0">
          <span className="text-[10px] font-black uppercase tracking-widest italic">Danesh'UI // Premium Motion Engine</span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em]">
          Engineered for Performance
        </p>
      </footer>
    </div>
  );
};

export default AnimatedVault;
