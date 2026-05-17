import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import AutoSuggest from '../../lib/components/AutoSuggest';
import CounterInput from '../../lib/components/CounterInput';
import CurrencyInput from '../../lib/components/CurrencyInput';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const SmartCard = ({ children, title, index, code }) => {
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

const COUNTRIES_OPTIONS = [
  { label: 'United States', value: 'US', description: '🇺🇸 +1', shortcut: '⌘1' },
  { label: 'United Kingdom', value: 'GB', description: '🇬🇧 +44', shortcut: '⌘2' },
  { label: 'Germany', value: 'DE', description: '🇩🇪 +49', shortcut: '⌘3' },
  { label: 'France', value: 'FR', description: '🇫🇷 +33', shortcut: '⌘4' },
  { label: 'Japan', value: 'JP', description: '🇯🇵 +81', shortcut: '⌘5' },
  { label: 'Australia', value: 'AU', description: '🇦🇺 +61' },
  { label: 'Canada', value: 'CA', description: '🇨🇦 +1' },
  { label: 'Brazil', value: 'BR', description: '🇧🇷 +55' },
  { label: 'India', value: 'IN', description: '🇮🇳 +91' },
  { label: 'Singapore', value: 'SG', description: '🇸🇬 +65' },
  { label: 'South Korea', value: 'KR', description: '🇰🇷 +82' },
  { label: 'Netherlands', value: 'NL', description: '🇳🇱 +31' },
  { label: 'Switzerland', value: 'CH', description: '🇨🇭 +41' },
  { label: 'Sweden', value: 'SE', description: '🇸🇪 +46' },
  { label: 'Mexico', value: 'MX', description: '🇲🇽 +52' },
];

const PRODUCTS = [
  { label: 'MacBook Pro 16"', value: 'mbp-16', description: 'Apple M4 Max', shortcut: '⌘P' },
  { label: 'iPad Air 13"', value: 'ipad-air', description: 'M3 Chip', shortcut: '⌘I' },
  { label: 'AirPods Pro 2', value: 'airpods-pro', description: 'USB-C' },
  { label: 'Apple Watch Ultra 2', value: 'watch-ultra', description: 'Titanium' },
  { label: 'Mac Mini M4', value: 'mac-mini', description: 'Pro Chip' },
  { label: 'Studio Display', value: 'studio-display', description: '5K Retina' },
  { label: 'Magic Keyboard', value: 'magic-kb', description: 'Touch ID' },
  { label: 'Magic Mouse', value: 'magic-mouse', description: 'USB-C' },
];

const SmartInputsDoc = () => {
  const [country, setCountry] = useState('');
  const [product, setProduct] = useState('');
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState(15);

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Intelligence Suite
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Smart <span className="text-red-600">Inputs</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          Intelligent autocomplete suggestions, number counters, and currency formatters — purpose-built for e-commerce, dashboards, and data-entry applications.
        </p>
      </header>

      <NoteBlock type="info">
        <strong>🧠 AutoSuggest:</strong> Keyboard-navigable dropdown (↑↓), fuzzy filtering, highlighted matches, clear button, no-results state, loading spinner, and custom value support.
      </NoteBlock>

      {/* === AutoSuggest Gallery === */}
      <SectionTitle>Auto Suggest</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Dropdown suggestions with smart filtering, highlighted text matches, and keyboard navigation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SmartCard title="Country Picker" index={1} code={`<AutoSuggest label="Country" options={COUNTRIES} onSelect={(v) => console.log(v)} />`}>
          <div className="w-full max-w-[240px] z-10">
            <AutoSuggest
              label="Select Country"
              placeholder="Search countries..."
              options={COUNTRIES_OPTIONS}
              value={country}
              onChange={e => setCountry(e.target.value)}
              onSelect={(item) => setCountry(item?.label || '')}
            />
          </div>
        </SmartCard>

        <SmartCard title="Product Search" index={2} code={`<AutoSuggest label="Products" options={PRODUCTS} allowCustom={false} />`}>
          <div className="w-full max-w-[240px] z-10">
            <AutoSuggest
              label="Search Products"
              placeholder="Type product name..."
              options={PRODUCTS}
              value={product}
              onChange={e => setProduct(e.target.value)}
              onSelect={(item) => setProduct(item?.label || '')}
              allowCustom={false}
            />
          </div>
        </SmartCard>

        <SmartCard title="Loading State" index={3} code={`<AutoSuggest label="Search" loading options={[]} />`}>
          <div className="w-full max-w-[240px] z-10">
            <AutoSuggest label="Async Search" placeholder="Type to search..." loading value="" onChange={() => {}} />
          </div>
        </SmartCard>
      </div>

      {/* === Counter Gallery === */}
      <SectionTitle>Counter Input</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Increment/decrement number control with min/max clamping, keyboard input, and customizable step.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SmartCard title="Quantity Picker" index={4} code={`<CounterInput label="Qty" min={0} max={20} value={qty} onChange={setQty} />`}>
          <div className="w-full flex justify-center">
            <CounterInput label="Quantity" min={0} max={20} value={qty} onChange={setQty} />
          </div>
        </SmartCard>

        <SmartCard title="Rating (1-5)" index={5} code={`<CounterInput label="Rating" min={1} max={5} step={1} />`}>
          <div className="w-full flex justify-center">
            <CounterInput label="Rating (1-5)" min={1} max={5} step={1} value={3} onChange={() => {}} />
          </div>
        </SmartCard>

        <SmartCard title="With Format" index={6} code={`<CounterInput value={total} onChange={setTotal} format={(v) => v + '%'} />`}>
          <div className="w-full flex justify-center">
            <CounterInput label="Discount %" min={0} max={100} value={total} onChange={setTotal} format={(v) => `${v}%`} />
          </div>
        </SmartCard>
      </div>

      {/* === Currency Gallery === */}
      <SectionTitle>Currency Input</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Multi-currency input with automatic thousand separators, decimal precision, and currency symbol toggles.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SmartCard title="USD (Prefix $)" index={7} code={`<CurrencyInput currency="USD" label="Price" />`}>
          <div className="w-full max-w-[220px]">
            <CurrencyInput currency="USD" label="Price (USD)" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
        </SmartCard>

        <SmartCard title="EUR (Suffix €)" index={8} code={`<CurrencyInput currency="EUR" variant="suffix" label="Price" />`}>
          <div className="w-full max-w-[220px]">
            <CurrencyInput currency="EUR" variant="suffix" label="Price (EUR)" />
          </div>
        </SmartCard>

        <SmartCard title="JPY (No decimals)" index={9} code={`<CurrencyInput currency="JPY" label="Price" />`}>
          <div className="w-full max-w-[220px]">
            <CurrencyInput currency="JPY" label="Price (JPY)" />
          </div>
        </SmartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SmartCard title="GBP (Both sides)" index={10} code={`<CurrencyInput currency="GBP" variant="both" label="Amount" />`}>
          <div className="w-full max-w-[220px]">
            <CurrencyInput currency="GBP" variant="both" label="Amount (GBP)" />
          </div>
        </SmartCard>

        <SmartCard title="Code Only (Hide Symbol)" index={11} code={`<CurrencyInput currency="USD" hideSymbol label="Amount" />`}>
          <div className="w-full max-w-[220px]">
            <CurrencyInput currency="USD" hideSymbol label="Amount" />
          </div>
        </SmartCard>
      </div>

      {/* === Combined Real-world Example === */}
      <SectionTitle>Real World: Order Form</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">A fully functional mini order form combining all three smart inputs.</p>

      <div className="theme-bg border theme-border-secondary rounded-3xl p-8 lg:p-10 max-w-lg">
        <div className="space-y-5">
          <AutoSuggest
            label="Product"
            placeholder="Search products..."
            options={PRODUCTS}
            onSelect={(item) => {
              if (item?.value === 'mbp-16') setPrice(2499);
              else if (item?.value === 'ipad-air') setPrice(799);
              else if (item?.value === 'airpods-pro') setPrice(249);
              else setPrice('');
            }}
            allowCustom={false}
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <CounterInput label="Quantity" min={1} max={99} value={qty} onChange={setQty} />
            </div>
            <div className="flex-1">
              <CurrencyInput label="Unit Price" currency="USD" value={price ? String(price) : ''} onChange={e => setPrice(e.target.value)} />
            </div>
          </div>
          <div className="pt-3 border-t theme-border-secondary">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold theme-text-secondary">Total</span>
              <span className="text-2xl font-black theme-text font-mono">
                ${((parseFloat(price) || 0) * qty).toLocaleString()}.00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Usage */}
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        title="SmartInputs.jsx"
        code={`import { AutoSuggest, CounterInput, CurrencyInput } from '@danesh-ui/react';

// AutoSuggest with options
<AutoSuggest
  label="Country"
  options={[
    { label: 'United States', value: 'US' },
    { label: 'Germany', value: 'DE' },
  ]}
  onSelect={(item) => console.log(item)}
/>

// Counter with min/max/step
<CounterInput label="Quantity" min={1} max={99} value={qty} onChange={setQty} />

// Currency with formatting
<CurrencyInput currency="USD" label="Price" value={price} onChange={handlePrice} />
<CurrencyInput currency="EUR" variant="suffix" label="Price" />
<CurrencyInput currency="JPY" hideSymbol label="Amount" />`}
      />

      <NoteBlock type="tip">
        <strong>🔗 Together in Practice:</strong> The order form above uses all three components together — AutoSuggest picks the product, CounterInput controls quantity, and CurrencyInput handles pricing with automatic locale formatting.
      </NoteBlock>
    </div>
  );
};

export default SmartInputsDoc;
