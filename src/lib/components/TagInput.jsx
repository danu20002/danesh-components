import React, { useState, useRef, useCallback, useEffect } from 'react';
import { clsx } from 'clsx';
import { X } from 'lucide-react';

const TagInput = React.forwardRef(({
  label,
  error,
  hint,
  tags = [],
  onChange,
  placeholder = 'Type and press Enter...',
  maxTags,
  validate,
  color = 'red',
  size = 'md',
  className = '',
  allowDuplicates = false,
  ...props
}, forwardedRef) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState(tags);
  const innerRef = useRef(null);
  const ref = forwardedRef || innerRef;

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  const emitChange = useCallback((newTags) => {
    setLocalTags(newTags);
    onChange?.(newTags);
  }, [onChange]);

  const addTag = useCallback((raw) => {
    const tag = raw.trim();
    if (!tag) return false;
    if (maxTags && localTags.length >= maxTags) return false;
    if (!allowDuplicates && localTags.includes(tag)) return false;
    if (validate && !validate(tag)) return false;
    emitChange([...localTags, tag]);
    return true;
  }, [localTags, maxTags, allowDuplicates, validate, emitChange]);

  const removeTag = useCallback((index) => {
    emitChange(localTags.filter((_, i) => i !== index));
  }, [localTags, emitChange]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (addTag(input)) setInput('');
    } else if (e.key === 'Backspace' && !input && localTags.length > 0) {
      removeTag(localTags.length - 1);
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    if (paste.includes(',') || paste.includes('\n')) {
      e.preventDefault();
      const items = paste.split(/[,\n]+/).map(s => s.trim()).filter(Boolean);
      let newTags = [...localTags];
      for (const item of items) {
        if (maxTags && newTags.length >= maxTags) break;
        if (!allowDuplicates && newTags.includes(item)) continue;
        if (validate && !validate(item)) continue;
        newTags.push(item);
      }
      emitChange(newTags);
    }
  };

  const sizeStyles = {
    sm: 'text-xs gap-1',
    md: 'text-sm gap-1.5',
    lg: 'text-base gap-2',
  };

  const tagSizes = {
    sm: 'text-[10px] px-1.5 py-0.5',
    md: 'text-xs px-2 py-1',
    lg: 'text-sm px-2.5 py-1.5',
  };

  const colorStyles = {
    red: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900',
    blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900',
    green: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-900',
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-300 dark:border-yellow-900',
    purple: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-900',
    slate: 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-950/30 dark:text-slate-300 dark:border-slate-900',
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold theme-text ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
          {maxTags && <span className="theme-text-tertiary font-normal">({localTags.length}/{maxTags})</span>}
        </label>
      )}
      <div
        className={clsx(
          'flex flex-wrap items-center theme-bg border theme-border rounded-xl px-3 py-2 transition-all duration-200',
          'focus-within:ring-2 focus-within:ring-red-100 focus-within:border-[#E31B23]',
          error ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : '',
          props.disabled ? 'opacity-50 cursor-not-allowed' : '',
          sizeStyles[size],
          className
        )}
      >
        {localTags.map((tag, i) => (
          <span
            key={i}
            className={clsx(
              'inline-flex items-center gap-1 rounded-lg border font-medium',
              tagSizes[size],
              colorStyles[color] || colorStyles.red
            )}
          >
            {tag}
            {!props.disabled && (
              <button
                type="button"
                onClick={() => removeTag(i)}
                className="cursor-pointer hover:opacity-70 transition-opacity"
              >
                <X size={size === 'sm' ? 10 : 12} />
              </button>
            )}
          </span>
        ))}
        <input
          ref={ref}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={localTags.length === 0 ? placeholder : ''}
          disabled={props.disabled || (maxTags && localTags.length >= maxTags)}
          className="flex-1 min-w-[80px] bg-transparent outline-none border-none p-0.5 text-sm theme-text placeholder:theme-text-tertiary"
          {...props}
        />
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
});

TagInput.displayName = 'TagInput';
export default TagInput;
