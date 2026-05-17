import { useState } from 'react';
import { clsx } from 'clsx';

const FloatingInput = ({
  label,
  error,
  hint,
  icon: Icon,
  variant = 'default',
  className = '',
  size = 'md',
  value,
  onChange,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value !== undefined && value !== '';
  const isFloating = focused || hasValue;

  const sizes = {
    sm: { input: 'h-10 text-xs', label: 'text-xs', icon: 14, padding: 'pt-3 pb-1', leftPadding: 'pl-9' },
    md: { input: 'h-13 text-sm', label: 'text-sm', icon: 16, padding: 'pt-4 pb-1.5', leftPadding: 'pl-11' },
    lg: { input: 'h-15 text-base', label: 'text-base', icon: 18, padding: 'pt-5 pb-2', leftPadding: 'pl-12' },
  };

  const variants = {
    default: {
      wrapper: 'border rounded-xl theme-border focus-within:border-[#E31B23] focus-within:ring-2 focus-within:ring-red-100',
      label: 'theme-text-tertiary',
      labelFloat: 'text-[#E31B23]',
    },
    modern: {
      wrapper: 'border-0 border-b-2 rounded-none theme-border focus-within:border-[#E31B23] focus-within:ring-0',
      label: 'theme-text-tertiary',
      labelFloat: 'text-[#E31B23]',
    },
    outline: {
      wrapper: 'border-2 rounded-xl theme-border focus-within:border-[#E31B23] focus-within:shadow-[0_0_0_4px_rgba(227,27,35,0.08)]',
      label: 'theme-text-tertiary',
      labelFloat: 'text-[#E31B23]',
    },
    ghost: {
      wrapper: 'border border-transparent rounded-xl focus-within:bg-red-50/30 dark:focus-within:bg-red-950/10 focus-within:border-[#E31B23]/30',
      label: 'theme-text-tertiary',
      labelFloat: 'text-[#E31B23]',
    },
  };

  const s = sizes[size];
  const v = variants[variant];

  return (
    <div className="w-full space-y-1.5">
      <div className={clsx(
        'relative theme-bg transition-all duration-200',
        v.wrapper,
        error ? '!border-red-400 !bg-red-50/50 dark:!bg-red-950/20' : '',
        props.disabled ? 'opacity-50 pointer-events-none' : '',
        className
      )}>
        {Icon && (
          <div className={clsx(
            'absolute left-3.5 top-1/2 -translate-y-1/2 transition-all duration-200',
            isFloating ? 'text-[#E31B23]' : 'theme-text-tertiary'
          )}>
            <Icon size={s.icon} />
          </div>
        )}
        <input
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            'w-full bg-transparent border-none outline-none transition-all duration-200',
            'placeholder-transparent',
            s.padding,
            Icon ? s.leftPadding : 'pl-4',
            'pr-4',
            'theme-text',
            props.disabled ? 'cursor-not-allowed' : '',
          )}
          placeholder={label}
          {...props}
        />
        <label className={clsx(
          'absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none select-none',
          Icon && 'left-11',
          isFloating ? clsx('-translate-y-5 scale-75', s.label, v.labelFloat) : v.label,
          isFloating && variant === 'modern' && '-translate-y-5 scale-75',
          error ? '!text-red-500' : '',
        )}>
          {label}
          {props.required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
};

export default FloatingInput;
