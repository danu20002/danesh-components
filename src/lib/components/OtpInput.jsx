import { useRef, useCallback, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { ShieldCheck } from 'daneshicons';

const OtpInput = ({
  length = 6,
  value = '',
  onChange,
  onComplete,
  label,
  error,
  hint,
  size = 'md',
  type = 'text',
  disabled = false,
  autoFocus = false,
  className = '',
  ...props
}) => {
  const inputRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const values = value.split('').slice(0, length);
  while (values.length < length) values.push('');

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const emitValue = useCallback((newChars) => {
    const str = newChars.join('');
    onChange?.(str);
    if (str.length === length) {
      onComplete?.(str);
    }
  }, [length, onChange, onComplete]);

  const handleChange = (idx, e) => {
    const char = e.target.value;
    if (char.length > 1) {
      const pasted = char.replace(/\D/g, '').split('').slice(0, length);
      const newVals = [...values];
      for (let i = 0; i < length; i++) {
        newVals[i] = pasted[i] || '';
      }
      emitValue(newVals);
      const nextFocus = Math.min(pasted.length, length - 1);
      inputRefs.current[nextFocus]?.focus();
      setActiveIdx(nextFocus);
      return;
    }

    if (char && !/^[0-9a-zA-Z]$/.test(char)) return;

    const newVals = [...values];
    newVals[idx] = char;
    emitValue(newVals);

    if (char && idx < length - 1) {
      inputRefs.current[idx + 1]?.focus();
      setActiveIdx(idx + 1);
    }
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === 'Backspace') {
      if (values[idx]) {
        const newVals = [...values];
        newVals[idx] = '';
        emitValue(newVals);
      } else if (idx > 0) {
        const newVals = [...values];
        newVals[idx - 1] = '';
        emitValue(newVals);
        inputRefs.current[idx - 1]?.focus();
        setActiveIdx(idx - 1);
      }
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
      setActiveIdx(idx - 1);
    } else if (e.key === 'ArrowRight' && idx < length - 1) {
      inputRefs.current[idx + 1]?.focus();
      setActiveIdx(idx + 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData('text').replace(/\D/g, '').split('').slice(0, length);
    const newVals = [...values];
    for (let i = 0; i < length; i++) {
      newVals[i] = data[i] || '';
    }
    emitValue(newVals);
    const nextFocus = Math.min(data.length, length - 1);
    inputRefs.current[nextFocus]?.focus();
    setActiveIdx(nextFocus);
  };

  const sizes = {
    sm: 'w-8 h-10 text-sm',
    md: 'w-11 h-13 text-lg',
    lg: 'w-14 h-16 text-2xl',
  };

  const gapSizes = {
    sm: 'gap-1.5',
    md: 'gap-2.5',
    lg: 'gap-3',
  };

  const setRef = (idx) => (el) => {
    inputRefs.current[idx] = el;
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold theme-text ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div
        className={clsx('flex items-center', gapSizes[size], className)}
        onPaste={handlePaste}
      >
        {values.map((char, idx) => {
          const isFocused = activeIdx === idx;
          const isFilled = char !== '';
          return (
            <input
              key={idx}
              ref={setRef(idx)}
              type={type === 'password' ? 'password' : 'text'}
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={length}
              value={char}
              onChange={(e) => handleChange(idx, e)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onFocus={() => setActiveIdx(idx)}
              onBlur={() => setActiveIdx(-1)}
              disabled={disabled}
              className={clsx(
                sizes[size],
                'text-center font-bold font-mono theme-bg border theme-border rounded-xl outline-none transition-all duration-200',
                'focus:ring-2 focus:ring-red-100 focus:border-[#E31B23] focus:shadow-[0_0_0_4px_rgba(227,27,35,0.08)]',
                isFilled && !error ? 'border-[#E31B23] bg-red-50/30 dark:bg-red-950/20' : '',
                error ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : '',
                disabled ? 'opacity-50 cursor-not-allowed' : '',
                isFocused && !isFilled ? 'animate-pulse' : ''
              )}
              {...props}
            />
          );
        })}
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1 flex items-center gap-1.5"><ShieldCheck size={11} />{hint}</p>}
    </div>
  );
};

export default OtpInput;
