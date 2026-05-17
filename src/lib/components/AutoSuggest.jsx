import { useState, useRef, useEffect, useCallback } from 'react';
import { clsx } from 'clsx';
import { Search, ChevronDown, X } from 'lucide-react';

const AutoSuggest = ({
  label,
  error,
  hint,
  value,
  onChange,
  options = [],
  placeholder = 'Search or type...',
  maxSuggestions = 6,
  allowCustom = true,
  icon: Icon,
  className = '',
  size = 'md',
  onSelect,
  filterFn,
  loading = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const input = value || '';

  const defaultFilter = useCallback((item, query) => {
    const label = item.label || item;
    return label.toLowerCase().includes(query.toLowerCase());
  }, []);

  const filter = filterFn || defaultFilter;

  const filtered = options
    .filter((opt) => filter(opt, input))
    .slice(0, maxSuggestions);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleInputChange = (e) => {
    setIsOpen(true);
    setActiveIdx(-1);
    onChange?.(e);
  };

  const handleSelect = (item) => {
    const label = item.label || item;
    const val = item.value !== undefined ? item.value : label;
    setIsOpen(false);
    setActiveIdx(-1);
    onSelect?.(item);
    const synthetic = { target: { value: val } };
    onChange?.(synthetic);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIdx((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIdx((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIdx >= 0 && activeIdx < filtered.length) {
          handleSelect(filtered[activeIdx]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setActiveIdx(-1);
        break;
    }
  };

  const handleClear = () => {
    setIsOpen(false);
    setActiveIdx(-1);
    onChange?.({ target: { value: '' } });
    onSelect?.(null);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (activeIdx >= 0 && listRef.current) {
      const item = listRef.current.children[activeIdx];
      if (item) item.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2.5 text-sm rounded-xl',
    lg: 'px-5 py-3 text-base rounded-xl',
  };

  return (
    <div className="w-full space-y-1.5 relative" ref={wrapperRef}>
      {label && (
        <label className="text-xs font-semibold theme-text-secondary ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon ? (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary" size={size === 'sm' ? 14 : 18} />
        ) : (
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary" size={size === 'sm' ? 14 : 18} />
        )}
        <input
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={clsx(
            'w-full theme-bg border theme-border outline-none transition-all duration-200',
            'focus:ring-2 focus:ring-red-100 focus:border-[#E31B23]',
            'placeholder:theme-text-tertiary',
            sizes[size],
            'pl-11',
            input ? 'pr-20' : 'pr-10',
            error ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : '',
            props.disabled ? 'opacity-50 cursor-not-allowed' : '',
            className
          )}
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {input && (
            <button
              type="button"
              onClick={handleClear}
              className="p-0.5 rounded theme-text-tertiary hover:theme-text hover:theme-bg-hover transition-all cursor-pointer"
              tabIndex={-1}
            >
              <X size={size === 'sm' ? 12 : 14} />
            </button>
          )}
          <ChevronDown
            size={size === 'sm' ? 12 : 14}
            className={clsx(
              'theme-text-tertiary transition-transform duration-200',
              isOpen && filtered.length > 0 ? 'rotate-180' : ''
            )}
          />
        </div>
      </div>

      {isOpen && filtered.length > 0 && (
        <div
          ref={listRef}
          className="absolute z-50 w-full mt-1 theme-bg border theme-border rounded-xl shadow-xl overflow-hidden animate-fade-in"
        >
          {filtered.map((item, idx) => {
            const label = item.label || item;
            const desc = item.description;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={clsx(
                  'w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-3 cursor-pointer',
                  idx === activeIdx
                    ? 'bg-red-50 dark:bg-red-950/30 theme-text-active'
                    : 'theme-text-secondary hover:bg-red-50/30 dark:hover:bg-red-950/10'
                )}
              >
                <Search size={13} className="shrink-0 theme-text-tertiary" />
                <div className="flex-1 min-w-0">
                  <span className="font-medium">{highlightMatch(label, input)}</span>
                  {desc && <span className="text-[11px] theme-text-tertiary ml-2">{desc}</span>}
                </div>
                {item.shortcut && (
                  <kbd className="text-[10px] font-mono theme-text-tertiary theme-bg-tertiary px-1.5 py-0.5 rounded">
                    {item.shortcut}
                  </kbd>
                )}
              </button>
            );
          })}
        </div>
      )}

      {isOpen && !loading && filtered.length === 0 && input && (
        <div className="absolute z-50 w-full mt-1 theme-bg border theme-border rounded-xl shadow-lg p-4 text-center animate-fade-in">
          <p className="text-sm theme-text-tertiary">No results for "<span className="font-medium theme-text-secondary">{input}</span>"</p>
          {allowCustom && <p className="text-[11px] theme-text-tertiary mt-1">Press Enter to use custom value</p>}
        </div>
      )}

      {loading && (
        <div className="absolute z-50 w-full mt-1 theme-bg border theme-border rounded-xl shadow-lg p-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-slate-300 border-t-[#E31B23] rounded-full animate-spin" />
            <span className="text-sm theme-text-tertiary">Searching...</span>
          </div>
        </div>
      )}

      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
};

const highlightMatch = (text, query) => {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-[#E31B23] font-bold">{text.slice(idx, idx + query.length)}</span>
      {text.slice(idx + query.length)}
    </>
  );
};

export default AutoSuggest;
