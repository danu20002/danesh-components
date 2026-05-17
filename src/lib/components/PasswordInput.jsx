import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Eye, EyeOff, Copy, Check } from 'lucide-react';

const strengthConfig = [
  { label: 'Weak', color: 'bg-red-500', text: 'text-red-500', bars: 1 },
  { label: 'Fair', color: 'bg-orange-500', text: 'text-orange-500', bars: 2 },
  { label: 'Good', color: 'bg-yellow-500', text: 'text-yellow-500', bars: 3 },
  { label: 'Strong', color: 'bg-lime-500', text: 'text-lime-500', bars: 4 },
  { label: 'Very Strong', color: 'bg-emerald-500', text: 'text-emerald-500', bars: 5 },
];

function getStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return Math.min(score, 5);
}

const PasswordInput = React.forwardRef(({
  label,
  error,
  hint,
  showStrength = false,
  allowCopy = false,
  icon: Icon,
  className = '',
  size = 'md',
  ...props
}, ref) => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const strength = props.value ? getStrength(props.value) : 0;
  const meta = strengthConfig[strength - 1] || null;

  const handleCopy = () => {
    if (!props.value) return;
    navigator.clipboard.writeText(props.value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
        {Icon && (
          <Icon
            className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary group-focus-within:text-[#E31B23] transition-colors pointer-events-none"
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18}
          />
        )}
        <input
          ref={ref}
          type={visible ? 'text' : 'password'}
          className={clsx(
            'w-full theme-bg border theme-border outline-none transition-all duration-200 pr-20',
            'focus:ring-2 focus:ring-red-100 focus:border-[#E31B23]',
            'placeholder:theme-text-tertiary',
            sizes[size],
            Icon ? (size === 'sm' ? 'pl-9' : 'pl-11') : '',
            error ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : '',
            props.disabled ? 'opacity-50 cursor-not-allowed' : '',
            className
          )}
          {...props}
        />
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {allowCopy && props.value && (
            <button
              type="button"
              onClick={handleCopy}
              className="p-1 rounded-md hover:theme-bg-hover theme-text-tertiary hover:theme-text transition-all cursor-pointer"
              tabIndex={-1}
            >
              {copied ? <Check size={size === 'sm' ? 12 : 14} className="text-emerald-500" /> : <Copy size={size === 'sm' ? 12 : 14} />}
            </button>
          )}
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="p-1 rounded-md hover:theme-bg-hover theme-text-tertiary hover:theme-text transition-all cursor-pointer"
            tabIndex={-1}
          >
            {visible ? <EyeOff size={size === 'sm' ? 12 : 14} /> : <Eye size={size === 'sm' ? 12 : 14} />}
          </button>
        </div>
      </div>
      {showStrength && props.value && (
        <div className="space-y-1">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={clsx(
                  'h-1 flex-1 rounded-full transition-all duration-300',
                  i <= strength ? meta.color : 'theme-bg-tertiary'
                )}
              />
            ))}
          </div>
          {meta && <p className={clsx('text-[11px] font-medium', meta.text)}>{meta.label}</p>}
        </div>
      )}
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
