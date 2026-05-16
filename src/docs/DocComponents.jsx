import React, { useState, useCallback } from 'react';
import { Copy, Check, Code2, Eye, Terminal } from 'lucide-react';

// ========================================
// CodeBlock - Syntax-highlighted, copyable
// ========================================
export const CodeBlock = ({ code, language = "jsx", showLineNumbers = false, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const lines = code.trim().split('\n');

  return (
    <div className="relative group rounded-xl overflow-hidden border border-slate-700/60 shadow-lg">
      {title && (
        <div className="bg-[#1a1b2e] px-4 py-2.5 border-b border-slate-700/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 ml-2">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <div className="bg-[#0d1117] p-5 overflow-x-auto">
        <pre className="code-block" style={{ color: '#e4e4e7', fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '13px', lineHeight: '1.8' }}>
          {lines.map((line, i) => (
            <div key={i} className="flex hover:bg-white/[0.03] -mx-2 px-2 rounded">
              {showLineNumbers && (
                <span className="select-none text-slate-600 text-right mr-6 min-w-[2.5ch] tabular-nums" style={{ color: '#4b5563' }}>{i + 1}</span>
              )}
              <code>
                <HighlightLine line={line} />
              </code>
            </div>
          ))}
        </pre>
      </div>
      {!title && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm cursor-pointer"
          title="Copy code"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      )}
    </div>
  );
};

// Inline syntax highlighter that renders with direct styles
function HighlightLine({ line }) {
  const styles = {
    keyword: { color: '#c792ea', fontWeight: 500 },
    string: { color: '#a5d6a7' },
    component: { color: '#ffcb6b', fontWeight: 600 },
    prop: { color: '#82aaff' },
    bracket: { color: '#89ddff' },
    comment: { color: '#717cb4', fontStyle: 'italic' },
    value: { color: '#f78c6c' },
    tag: { color: '#ff5370' },
    text: { color: '#d4d4d8' },
    func: { color: '#82aaff' }
  };

  const tokens = [];
  let remaining = line;
  let key = 0;

  const patterns = [
    { regex: /(\/\/.*$)/, style: styles.comment },
    { regex: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/, style: styles.string },
    { regex: /(<\/?)([A-Z]\w*)/, handler: (m) => [
      { text: m[1], style: styles.bracket },
      { text: m[2], style: styles.component }
    ]},
    { regex: /(<\/?)([a-z][\w-]*)/, handler: (m) => [
      { text: m[1], style: styles.bracket },
      { text: m[2], style: styles.tag }
    ]},
    { regex: /(\s)([a-zA-Z][\w-]*)(=)/, handler: (m) => [
      { text: m[1], style: styles.text },
      { text: m[2], style: styles.prop },
      { text: m[3], style: styles.bracket }
    ]},
    { regex: /\b(import|from|export|default|const|let|var|function|return|if|else|new|true|false|null|undefined|typeof|async|await|class|extends|this|try|catch|throw|switch|case|break|continue|for|while|do|in|of)\b/, style: styles.keyword },
    { regex: /\b(\d+\.?\d*)\b/, style: styles.value },
    { regex: /([{}()[\]<>\/;:,=+\-*&|!?.])/, style: styles.bracket },
  ];

  while (remaining.length > 0) {
    let earliest = null;
    let earliestIndex = remaining.length;
    let earliestPattern = null;

    for (const p of patterns) {
      const m = remaining.match(p.regex);
      if (m && m.index < earliestIndex) {
        earliest = m;
        earliestIndex = m.index;
        earliestPattern = p;
      }
    }

    if (!earliest) {
      tokens.push(<span key={key++} style={styles.text}>{remaining}</span>);
      break;
    }

    if (earliestIndex > 0) {
      tokens.push(<span key={key++} style={styles.text}>{remaining.slice(0, earliestIndex)}</span>);
    }

    if (earliestPattern.handler) {
      earliestPattern.handler(earliest).forEach((p) => {
        tokens.push(<span key={key++} style={p.style}>{p.text}</span>);
      });
    } else {
      tokens.push(<span key={key++} style={earliestPattern.style}>{earliest[0]}</span>);
    }

    remaining = remaining.slice(earliestIndex + earliest[0].length);
  }

  return <>{tokens}</>;
}

// ========================================
// ComponentPreview - Live preview + code
// ========================================
export const ComponentPreview = ({ children, code, title, description }) => {
  const [tab, setTab] = useState('preview');

  return (
    <div className="rounded-3xl overflow-hidden theme-bg border theme-border-secondary transition-all duration-300">
      {/* Top bar with tabs */}
      <div className="px-6 py-4 border-b theme-border-secondary flex items-center justify-between theme-bg-secondary/30 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-lg transition-all cursor-pointer ${
              tab === 'preview' ? 'theme-bg-active theme-text-active' : 'theme-text-secondary hover:theme-text hover:theme-bg-hover'
            }`}
          >
            <Eye size={13} />
            Preview
          </button>
          <button
            onClick={() => setTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-lg transition-all cursor-pointer ${
              tab === 'code' ? 'theme-bg-active theme-text-active' : 'theme-text-secondary hover:theme-text hover:theme-bg-hover'
            }`}
          >
            <Code2 size={13} />
            Code
          </button>
        </div>
        {title && <span className="text-[12px] font-medium text-slate-400 hidden sm:block">{title}</span>}
      </div>

      {/* Content */}
      {tab === 'preview' ? (
        <div className="p-8 lg:p-14 theme-bg-preview flex flex-wrap items-center justify-center gap-6 min-h-[160px] dot-pattern relative">
          {children}
        </div>
      ) : (
        <div className="animate-fade-in">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

// ========================================
// PropsTable - Component API docs
// ========================================
export const PropsTable = ({ props: propsList }) => (
  <div className="overflow-x-auto rounded-2xl theme-bg border theme-border-secondary">
    <table className="w-full text-sm">
      <thead>
        <tr className="theme-bg-secondary/50 border-b theme-border-secondary">
          <th className="text-left px-6 py-4 font-black theme-text text-[10px] uppercase tracking-[0.2em]">Prop</th>
          <th className="text-left px-6 py-4 font-black theme-text text-[10px] uppercase tracking-[0.2em]">Type</th>
          <th className="text-left px-6 py-4 font-black theme-text text-[10px] uppercase tracking-[0.2em]">Default</th>
          <th className="text-left px-6 py-4 font-black theme-text text-[10px] uppercase tracking-[0.2em]">Description</th>
        </tr>
      </thead>
      <tbody>
        {propsList.map((p, i) => (
          <tr key={i} className="border-b theme-border-secondary hover:theme-bg-hover/50 transition-colors last:border-0">
            <td className="px-6 py-4">
              <code className="text-[12px] font-mono font-bold theme-text-active bg-red-500/10 px-2 py-1 rounded-md">{p.name}</code>
            </td>
            <td className="px-6 py-4">
              <code className="text-[12px] font-mono text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">{p.type}</code>
            </td>
            <td className="px-6 py-4">
              <code className="text-[12px] font-mono theme-text-tertiary">{p.default || '—'}</code>
            </td>
            <td className="px-6 py-4 theme-text-secondary text-[13px] leading-relaxed">{p.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ========================================
// SectionTitle
// ========================================
export const SectionTitle = ({ children, id }) => (
  <h3 id={id || children?.toString().toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-black theme-text mb-6 mt-16 first:mt-0 scroll-mt-24 flex items-center gap-4 group">
    <span className="w-2 h-8 bg-gradient-to-b from-[#E31B23] to-[#ff4f56] rounded-full inline-block shadow-[0_0_15px_rgba(227,27,35,0.3)]" />
    {children}
    <a href={`#${id || children?.toString().toLowerCase().replace(/\s+/g, '-')} `} className="opacity-0 group-hover:opacity-100 text-slate-300 transition-all hover:text-[#E31B23] translate-x-2">#</a>
  </h3>
);

// ========================================
// InstallBlock - terminal install command
// ========================================
export const InstallBlock = ({ command, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/60 shadow-lg">
      {label && (
        <div className="bg-[#1a1b2e] px-4 py-2 border-b border-slate-700/40 flex items-center gap-2">
          <Terminal size={12} className="text-slate-500" />
          <span className="text-[11px] font-mono text-slate-400">{label}</span>
        </div>
      )}
      <div className="bg-[#0d1117] px-5 py-4 relative group flex items-center">
        <span className="text-emerald-400 mr-3 select-none font-mono text-sm font-bold">$</span>
        <code className="text-sm font-mono flex-1" style={{ color: '#e4e4e7' }}>{command}</code>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-400 hover:text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
        >
          {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

// ========================================
// OnThisPage - Right sidebar TOC
// ========================================
export const OnThisPage = ({ sections = [] }) => {
  if (sections.length === 0) return null;

  return (
    <div className="hidden xl:block w-52 shrink-0">
      <div className="sticky top-16">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-3">On This Page</p>
        <nav className="space-y-1 border-l border-slate-200">
          {sections.map((section, i) => (
            <a
              key={i}
              href={`#${section.id}`}
              className="block pl-3 py-1 text-[12px] text-slate-500 hover:text-[#E31B23] border-l-2 border-transparent hover:border-[#E31B23] transition-all leading-relaxed"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

// ========================================
// ImportBlock - Shows the import statement
// ========================================
export const ImportBlock = ({ component, subComponents = [] }) => {
  const [copied, setCopied] = useState(false);
  const all = [component, ...subComponents].join(', ');
  const code = `import { ${all} } from '@danesh-ui/react';`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="theme-bg-secondary border theme-border-secondary rounded-2xl px-6 py-4 flex items-center justify-between group mb-10 theme-shadow-sm hover:theme-shadow-md transition-all">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg theme-bg theme-text-active">
          <Terminal size={16} />
        </div>
        <code className="text-sm font-mono" style={{ color: '#e4e4e7' }}>
          <span className="text-violet-400">import</span>
          {' { '}
          <span className="text-amber-400">{all}</span>
          {' } '}
          <span className="text-violet-400">from</span>
          {' '}
          <span className="text-emerald-400">'@danesh-ui/react'</span>
          <span className="text-blue-400">;</span>
        </code>
      </div>
      <button onClick={handleCopy} className="p-2 rounded-lg hover:theme-bg theme-text-tertiary hover:theme-text transition-all cursor-pointer">
        {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
      </button>
    </div>
  );
};

// ========================================
// NoteBlock - Info/tip/warning callout
// ========================================
export const NoteBlock = ({ type = "info", children }) => {
  const styles = {
    info: "bg-[var(--bg-note-info)] border-blue-400/30 text-blue-900 dark:text-blue-200",
    tip: "bg-[var(--bg-note-tip)] border-emerald-400/30 text-emerald-900 dark:text-emerald-200",
    warning: "bg-[var(--bg-note-warning)] border-amber-400/30 text-amber-900 dark:text-amber-200",
    danger: "bg-[var(--bg-note-danger)] border-red-400/30 text-red-900 dark:text-red-200"
  };

  const labels = { info: "ℹ️ Note", tip: "💡 Tip", warning: "⚠️ Warning", danger: "🚨 Danger" };

  return (
    <div className={`rounded-xl border p-4 text-sm ${styles[type]}`}>
      <p className="font-bold text-xs uppercase tracking-wider mb-1 opacity-70">{labels[type]}</p>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
};
