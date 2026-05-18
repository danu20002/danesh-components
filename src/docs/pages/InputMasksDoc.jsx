import { useState } from 'react';
import { Phone, CreditCard, Calendar, Hash, Clock, Shield, Copy, Check, Lock, User } from 'daneshicons';
import MaskedInput from '../../lib/components/MaskedInput';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const MaskItem = ({ children, title, index, code }) => {
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

const InputMasksDoc = () => {
  const [phone, setPhone] = useState('');
  const [cc, setCc] = useState('');
  const [date, setDate] = useState('');
  const [ssn, setSsn] = useState('');
  const [zip, setZip] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Format Library
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Input <span className="text-red-600">Masks</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          Auto-formatting input masks for phone numbers, credit cards, dates, SSNs, ZIP codes, and time. 
          Type naturally, formatting happens automatically.
        </p>
      </header>

      <NoteBlock type="info">
        <strong>🎭 Smart Masking:</strong> All masks are non-destructive — the raw numeric value is always accessible via <code>event.target.rawValue</code>. Cards auto-detect Visa, Mastercard, and Amex.
      </NoteBlock>

      {/* Mask Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'Phone Number', idx: 1, mask: 'phone', icon: Phone, val: phone, setVal: setPhone },
          { title: 'Credit Card', idx: 2, mask: 'credit-card', icon: CreditCard, val: cc, setVal: setCc },
          { title: 'Date (MM/DD/YYYY)', idx: 3, mask: 'date', icon: Calendar, val: date, setVal: setDate },
          { title: 'SSN', idx: 4, mask: 'ssn', icon: Shield, val: ssn, setVal: setSsn },
          { title: 'ZIP Code', idx: 5, mask: 'zip', icon: Hash, val: zip, setVal: setZip },
          { title: 'Time (HH:MM)', idx: 6, mask: 'time', icon: Clock, val: time, setVal: setTime },
        ].map((item) => (
          <MaskItem key={item.mask} title={item.title} index={item.idx} code={`<MaskedInput mask="${item.mask}" icon={${item.icon.name}} />`}>
            <div className="w-full max-w-[220px]">
              <MaskedInput mask={item.mask} label={item.title} icon={item.icon} value={item.val} onChange={e => item.setVal(e.target.value)} />
            </div>
          </MaskItem>
        ))}
      </div>

      {/* With Icons Gallery */}
      <SectionTitle>With Left & Right Icons</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Combine masks with icons on both sides for extra context.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { mask: 'phone', label: 'Phone', icon: Phone, iconRight: Lock, title: 'Phone + Lock' },
          { mask: 'date', label: 'Date', icon: Calendar, iconRight: User, title: 'Date + User' },
          { mask: 'credit-card', label: 'Card', icon: CreditCard, iconRight: Shield, title: 'CC + Shield' },
        ].map((item, idx) => (
          <MaskItem key={idx} title={item.title} index={idx + 7} code={`<MaskedInput mask="${item.mask}" label="${item.label}" icon={${item.icon.name}} iconRight={${item.iconRight.name}} />`}>
            <div className="w-full max-w-[220px]">
              <MaskedInput mask={item.mask} label={item.label} icon={item.icon} iconRight={item.iconRight} />
            </div>
          </MaskItem>
        ))}
      </div>

      {/* Sizes */}
      <SectionTitle>Size Variants</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {['sm', 'md', 'lg'].map((sz, idx) => (
          <MaskItem key={sz} title={`${sz.toUpperCase()} Phone Input`} index={idx + 10} code={`<MaskedInput size="${sz}" mask="phone" label="Phone" />`}>
            <div className="w-full max-w-[200px]">
              <MaskedInput size={sz} mask="phone" label={`${sz.toUpperCase()} Phone`} />
            </div>
          </MaskItem>
        ))}
      </div>

      {/* Usage */}
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        title="MaskedInput.jsx"
        code={`import { MaskedInput } from '@danesh-ui/react';
import { Phone, CreditCard, Calendar } from 'daneshicons';

// Phone mask (auto-formats as you type)
<MaskedInput mask="phone" label="Phone Number" icon={Phone} />

// Credit card mask (auto-detects Visa/MC/Amex)
<MaskedInput mask="credit-card" label="Card Number" icon={CreditCard} />

// Date mask
<MaskedInput mask="date" label="Date of Birth" icon={Calendar} />

// Access raw numeric value
const handleChange = (e) => {
  console.log(e.target.value);      // "(555) 123-4567"
  console.log(e.target.rawValue);   // "5551234567"
};`}
      />

      <NoteBlock type="tip">
        <strong>🔌 Extensible:</strong> Import the <code>MASKS</code> constant from the component to see all available patterns. You can also pass <code>icon</code> and <code>iconRight</code> for dual-icon layouts.
      </NoteBlock>
    </div>
  );
};

export default InputMasksDoc;
