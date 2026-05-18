import { useState, useCallback } from 'react';
import {
  Home, User, Settings, Code, Copy, Check, Sun, Moon,
  Compass, Cpu, Database, Download, Folder, Info, Key,
  Layers, Shield, ShoppingCart, Sparkles, Terminal, Trash, Upload, X
} from 'daneshicons';
import { ExternalLink, GitFork, Globe } from 'daneshicons';
import Button from '../../lib/components/Button';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const iconList = [
  { icon: Home, name: 'Home' },
  { icon: User, name: 'User' },
  { icon: Settings, name: 'Settings' },
  { icon: Code, name: 'Code' },
  { icon: Copy, name: 'Copy' },
  { icon: Check, name: 'Check' },
  { icon: Sun, name: 'Sun' },
  { icon: Moon, name: 'Moon' },
  { icon: Compass, name: 'Compass' },
  { icon: Cpu, name: 'Cpu' },
  { icon: Database, name: 'Database' },
  { icon: Download, name: 'Download' },
  { icon: Folder, name: 'Folder' },
  { icon: Info, name: 'Info' },
  { icon: Key, name: 'Key' },
  { icon: Layers, name: 'Layers' },
  { icon: Shield, name: 'Shield' },
  { icon: ShoppingCart, name: 'ShoppingCart' },
  { icon: Sparkles, name: 'Sparkles' },
  { icon: Terminal, name: 'Terminal' },
  { icon: Trash, name: 'Trash' },
  { icon: Upload, name: 'Upload' },
  { icon: X, name: 'X' },
];

const DaneshIconsDoc = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("import { Home, User, Settings } from 'daneshicons';").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="space-y-12">

      {/* Introduction */}
      <section id="daneshicons">
        <SectionTitle>DaneshIcons</SectionTitle>
        <p className="theme-text-secondary leading-relaxed mb-8">
          A custom SVG icon library with <strong className="theme-text">200+ icons</strong> designed for the Danesh'UI ecosystem.
          Each icon is a simple, composable React component that accepts <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">size</code>,{' '}
          <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">color</code>, and{' '}
          <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">className</code> props —
          just like <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">daneshicons</code>.
        </p>

        <div className="theme-bg-secondary border theme-border-secondary rounded-2xl px-6 py-4 flex items-center justify-between group mb-10 theme-shadow-sm hover:theme-shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg theme-bg theme-text-active">
              <Code size={16} />
            </div>
            <code className="text-sm font-mono" style={{ color: '#e4e4e7' }}>
              <span className="text-violet-400">import</span>
              {' { '}
              <span className="text-amber-400">Home, User, Settings</span>
              {' } '}
              <span className="text-violet-400">from</span>
              {' '}
              <span className="text-emerald-400">'daneshicons'</span>
              <span className="text-blue-400">;</span>
            </code>
          </div>
          <button onClick={handleCopy} className="p-2 rounded-lg hover:theme-bg theme-text-tertiary hover:theme-text transition-all cursor-pointer">
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
          </button>
        </div>
      </section>

      {/* Quick Links */}
      <section id="quick-links">
        <SectionTitle>Quick Links</SectionTitle>
        <div className="flex flex-wrap gap-4 mb-6">
          <a href="https://github.com/danu20002" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              <GitFork size={16} />
              View on GitHub
            </Button>
          </a>
        </div>
        <a
          href="https://daneshicons.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative rounded-2xl overflow-hidden border theme-border-secondary theme-bg-secondary theme-shadow-sm hover:theme-shadow-md transition-all">
            <div className="flex items-center justify-between px-4 py-2.5 theme-bg border-b theme-border-secondary">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-2 text-xs theme-text-tertiary font-mono">
                <Globe size={12} />
                daneshicons.vercel.app
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-16" />
            </div>
            <iframe
              src="https://daneshicons.vercel.app/"
              title="DaneshIcons Preview"
              className="w-full h-[420px] md:h-[520px] bg-white"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
            <div className="absolute inset-0 top-0 cursor-pointer" />
          </div>
        </a>
      </section>

      {/* Icon Showcase */}
      <section id="icon-showcase">
        <SectionTitle>Icon Showcase</SectionTitle>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {iconList.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 p-5 rounded-xl theme-bg border theme-border hover:theme-border-secondary transition-all"
            >
              <Icon size={24} className="theme-text" />
              <span className="text-[11px] font-mono theme-text-tertiary text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>
        <p className="theme-text-tertiary text-sm mt-6 text-center">
          +200 more icons available in the library
        </p>
      </section>

      {/* Usage */}
      <section id="usage">
        <SectionTitle>Usage</SectionTitle>

        <h4 className="text-sm font-bold theme-text mb-3 mt-8">Installation</h4>
        <CodeBlock
          code="npm install daneshicons"
          language="bash"
          title="terminal"
        />

        <h4 className="text-sm font-bold theme-text mb-3 mt-8">Import and use</h4>
        <CodeBlock
          code={`import { Home, User } from 'daneshicons';

function App() {
  return <Home size={24} color="#E31B23" />;
}`}
          language="jsx"
          title="App.jsx"
        />
      </section>

      {/* Integration */}
      <section id="integration">
        <SectionTitle>Integration</SectionTitle>
        <NoteBlock type="info">
          DaneshIcons is the primary icon library throughout the Danesh'UI library.
          Both libraries share the same SVG icon API (<code className="text-[13px] font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">size</code>,{' '}
          <code className="text-[13px] font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">color</code>,{' '}
          <code className="text-[13px] font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">className</code> props),
          making it easy to mix and match icons from both sets without any compatibility issues.
        </NoteBlock>
      </section>

    </div>
  );
};

export default DaneshIconsDoc;
