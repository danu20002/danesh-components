import { useState } from 'react';
import { Mail, Lock, User, Search, AtSign, Globe, Key, Copy, Check } from 'daneshicons';
import FloatingInput from '../../lib/components/FloatingInput';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const LabItem = ({ children, title, index, code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative theme-bg border theme-border-secondary rounded-3xl p-6 hover:theme-shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="h-28 flex items-center justify-center mb-6">
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

const FloatingLabDoc = () => {
  const [defaultItems, setDefaultItems] = useState([{ v: '', icon: User, label: 'Full Name' }, { v: '', icon: Mail, label: 'Email' }, { v: '', icon: Lock, label: 'Password' }]);
  const [modernItems, setModernItems] = useState([{ v: '', icon: AtSign, label: 'Username' }, { v: '', icon: Globe, label: 'Website' }, { v: '', icon: Key, label: 'API Key' }]);

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Design Lab
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Floating <span className="text-red-600">Lab</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          A collection of floating label input designs with smooth Material-inspired animations.
          Every component includes a <strong>one-click copy</strong> feature for instant integration.
        </p>
      </header>

      <NoteBlock type="info">
        <strong>🎯 Floating Labels:</strong> The label animates above the input when focused or filled. Variants include Default, Modern (border-bottom), Outline, and Ghost — each with full theming support.
      </NoteBlock>

      {/* === Default Variant Gallery === */}
      <SectionTitle>Default Variant</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Rounded card-style with subtle elevation and red focus ring.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {defaultItems.map((item, idx) => (
          <LabItem key={idx} title={`Default w/ ${item.icon.name || item.label}`} index={idx + 1} code={`<FloatingInput label="${item.label}" icon={${item.icon.name}} />`}>
            <div className="w-full max-w-[220px]">
              <FloatingInput label={item.label} icon={item.icon} value={item.v} onChange={e => {
                const next = [...defaultItems];
                next[idx] = { ...next[idx], v: e.target.value };
                setDefaultItems(next);
              }} />
            </div>
          </LabItem>
        ))}
      </div>

      {/* === Modern Variant Gallery === */}
      <SectionTitle>Modern Variant</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Clean border-bottom style inspired by Material Design. Minimal and elegant.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modernItems.map((item, idx) => (
          <LabItem key={idx} title={`Modern w/ ${item.icon.name || item.label}`} index={idx + 4} code={`<FloatingInput variant="modern" label="${item.label}" icon={${item.icon.name}} />`}>
            <div className="w-full max-w-[220px]">
              <FloatingInput variant="modern" label={item.label} icon={item.icon} value={item.v} onChange={e => {
                const next = [...modernItems];
                next[idx] = { ...next[idx], v: e.target.value };
                setModernItems(next);
              }} />
            </div>
          </LabItem>
        ))}
      </div>

      {/* === Outline Variant Gallery === */}
      <SectionTitle>Outline Variant</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Bold 2px border with a vibrant glow on focus. Great for high-contrast UIs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'Outline w/ Search', icon: Search, label: 'Search anything...' },
          { title: 'Outline w/ Mail', icon: Mail, label: 'Email Address' },
          { title: 'Outline w/ User', icon: User, label: 'Your Name' },
        ].map((item, idx) => (
          <LabItem key={idx} title={item.title} index={idx + 7} code={`<FloatingInput variant="outline" label="${item.label}" icon={${item.icon.name}} />`}>
            <div className="w-full max-w-[220px]">
              <FloatingInput variant="outline" label={item.label} icon={item.icon} />
            </div>
          </LabItem>
        ))}
      </div>

      {/* === Ghost Variant Gallery === */}
      <SectionTitle>Ghost Variant</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Subtle transparent style that reveals itself on interaction. Perfect for toolbars.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'Ghost w/ Search', icon: Search, label: 'Quick search...' },
          { title: 'Ghost w/ Lock', icon: Lock, label: 'Enter password' },
          { title: 'Ghost w/ Globe', icon: Globe, label: 'your-site.com' },
        ].map((item, idx) => (
          <LabItem key={idx} title={item.title} index={idx + 10} code={`<FloatingInput variant="ghost" label="${item.label}" icon={${item.icon.name}} />`}>
            <div className="w-full max-w-[220px]">
              <FloatingInput variant="ghost" label={item.label} icon={item.icon} />
            </div>
          </LabItem>
        ))}
      </div>

      {/* === Size Variants === */}
      <SectionTitle>Size Matrix</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">All three sizes (sm, md, lg) across every variant.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {['sm', 'md', 'lg'].map((sz) => (
          <LabItem key={sz} title={`${sz.toUpperCase()} Size`} index={sz === 'sm' ? 13 : sz === 'md' ? 14 : 15} code={`<FloatingInput size="${sz}" label="Floating Label" icon={User} />`}>
            <div className="w-full max-w-[200px]">
              <FloatingInput size={sz} label="Floating Label" icon={User} />
            </div>
          </LabItem>
        ))}
      </div>

      {/* === Import + Usage === */}
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        title="FloatingInput.jsx"
        code={`import { FloatingInput } from '@danesh-ui/react';
import { User, Mail, Lock } from 'daneshicons';

// Default variant
<FloatingInput label="Full Name" icon={User} />

// Modern variant (border-bottom)
<FloatingInput variant="modern" label="Email" icon={Mail} />

// Outline variant (bold border)
<FloatingInput variant="outline" label="Password" type="password" icon={Lock} />

// Ghost variant (transparent)
<FloatingInput variant="ghost" label="Search" icon={Search} />

// With validation
<FloatingInput label="Username" error="This field is required" />
<FloatingInput label="Bio" hint="Tell us about yourself" />

// Sizes
<FloatingInput size="sm" label="Small" />
<FloatingInput size="md" label="Medium" />
<FloatingInput size="lg" label="Large" />`}
      />

      <NoteBlock type="tip">
        <strong>💡 Tip:</strong> FloatingInput uses <code>{'placeholder={label}'}</code> internally for accessibility and triggers the float animation on focus or when a value is present. The label acts as both placeholder and floating element.
      </NoteBlock>
    </div>
  );
};

export default FloatingLabDoc;
