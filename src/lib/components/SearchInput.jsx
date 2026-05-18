import React, { useState, useRef, useEffect, useCallback } from 'react';
import { clsx } from 'clsx';
import { Search, X, Command } from 'daneshicons';

const SearchInput = React.forwardRef(({
  label,
  error,
  hint,
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
  showShortcut = false,
  debounceMs = 0,
  className = '',
  size = 'md',
  ...props
}, forwardedRef) => {
  const [localValue, setLocalValue] = useState(value || '');
  const innerRef = useRef(null);
  const ref = forwardedRef || innerRef;
  const debounceTimer = useRef(null);

  useEffect(() => {
    setLocalValue(value || '');
  }, [value]);

  const handleChange = useCallback((e) => {
    const val = e.target.value;
    setLocalValue(val);
    if (debounceMs > 0) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        onChange?.(e);
      }, debounceMs);
    } else {
      onChange?.(e);
    }
  }, [onChange, debounceMs]);

  const handleClear = useCallback(() => {
    setLocalValue('');
    onClear?.();
    if (ref && 'current' in ref && ref.current) {
      ref.current.focus();
    }
    const synthetic = { target: { value: '' } };
    onChange?.(synthetic);
  }, [onClear, onChange, ref]);

  useEffect(() => {
    return () => clearTimeout(debounceTimer.current);
  }, []);

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2.5 text-sm rounded-xl',
    lg: 'px-5 py-3 text-base rounded-xl',
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold theme-text ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative group">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary group-focus-within:text-[#E31B23] transition-colors pointer-events-none"
          size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18}
        />
        <input
          ref={ref}
          type="search"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={clsx(
            'w-full theme-bg border theme-border outline-none transition-all duration-200',
            'focus:ring-2 focus:ring-red-100 focus:border-[#E31B23]',
            'placeholder:theme-text-tertiary',
            '[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
            sizes[size],
            localValue ? 'pr-20' : showShortcut ? 'pr-16' : 'pr-4',
            size === 'sm' ? 'pl-9' : 'pl-11',
            error ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : '',
            props.disabled ? 'opacity-50 cursor-not-allowed' : '',
            className
          )}
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {localValue && (
            <button
              type="button"
              onClick={handleClear}
              className="p-0.5 rounded-md theme-text-tertiary hover:theme-text hover:theme-bg-hover transition-all cursor-pointer"
              tabIndex={-1}
            >
              <X size={size === 'sm' ? 12 : 14} />
            </button>
          )}
          {!localValue && showShortcut && (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono theme-bg-tertiary theme-text-tertiary rounded border theme-border-secondary">
              <Command size={10} />K
            </kbd>
          )}
        </div>
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
export default SearchInput;
