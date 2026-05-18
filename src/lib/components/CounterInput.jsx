import { useState, useCallback } from 'react';
import { clsx } from 'clsx';
import { Minus, Plus } from 'daneshicons';

const CounterInput = ({
  label,
  error,
  hint,
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = 'md',
  className = '',
  format,
  ...props
}) => {
  const [localValue, setLocalValue] = useState(value);

  const clamp = useCallback((v) => Math.max(min, Math.min(max, v)), [min, max]);

  const emit = useCallback((v) => {
    const clamped = clamp(v);
    setLocalValue(clamped);
    onChange?.(clamped);
  }, [clamp, onChange]);

  const increment = () => emit(localValue + step);
  const decrement = () => emit(localValue - step);
  const handleInput = (e) => {
    const parsed = parseInt(e.target.value, 10);
    if (!isNaN(parsed)) emit(parsed);
  };

  const sizes = {
    sm: { btn: 'w-7 h-7', input: 'w-12 text-xs', text: 'text-xs', icon: 12 },
    md: { btn: 'w-9 h-9', input: 'w-16 text-sm', text: 'text-sm', icon: 14 },
    lg: { btn: 'w-11 h-11', input: 'w-20 text-base', text: 'text-base', icon: 16 },
  };
  const s = sizes[size];

  const displayValue = format ? format(localValue) : localValue;

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold theme-text-secondary ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className={clsx(
        'inline-flex items-center gap-0 border theme-border rounded-xl overflow-hidden theme-bg',
        'focus-within:ring-2 focus-within:ring-red-100 focus-within:border-[#E31B23]',
        error ? '!border-red-400 !bg-red-50/50 dark:!bg-red-950/20' : '',
        props.disabled ? 'opacity-50 pointer-events-none' : '',
        className
      )}>
        <button
          type="button"
          onClick={decrement}
          disabled={localValue <= min || props.disabled}
          className={clsx(
            s.btn,
            'flex items-center justify-center transition-all cursor-pointer',
            'theme-text-tertiary hover:text-[#E31B23] hover:bg-red-50 dark:hover:bg-red-950/20',
            'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-400',
            'border-r theme-border-secondary'
          )}
        >
          <Minus size={s.icon} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          value={displayValue}
          onChange={handleInput}
          disabled={props.disabled}
          className={clsx(
            s.input,
            'text-center font-bold font-mono bg-transparent border-none outline-none theme-text'
          )}
          {...props}
        />
        <button
          type="button"
          onClick={increment}
          disabled={localValue >= max || props.disabled}
          className={clsx(
            s.btn,
            'flex items-center justify-center transition-all cursor-pointer',
            'theme-text-tertiary hover:text-[#E31B23] hover:bg-red-50 dark:hover:bg-red-950/20',
            'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-400',
            'border-l theme-border-secondary'
          )}
        >
          <Plus size={s.icon} />
        </button>
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
};

export default CounterInput;
