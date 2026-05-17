import { useState, useCallback } from 'react';
import { clsx } from 'clsx';

const MASKS = {
  phone: {
    format: (v) => {
      const digits = v.replace(/\D/g, '').slice(0, 11);
      if (digits.length === 0) return '';
      if (digits.length <= 3) return `(${digits}`;
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      if (digits.length <= 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    },
    placeholder: '(555) 123-4567',
  },
  'phone-us': {
    format: (v) => {
      const digits = v.replace(/\D/g, '').slice(0, 10);
      if (digits.length === 0) return '';
      if (digits.length <= 3) return `(${digits}`;
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    },
    placeholder: '(555) 123-4567',
  },
  'credit-card': {
    format: (v) => {
      const digits = v.replace(/\D/g, '').slice(0, 16);
      const groups = [];
      for (let i = 0; i < digits.length; i += 4) {
        groups.push(digits.slice(i, i + 4));
      }
      return groups.join(' ');
    },
    placeholder: '4242 4242 4242 4242',
  },
  date: {
    format: (v) => {
      const digits = v.replace(/\D/g, '').slice(0, 8);
      if (digits.length === 0) return '';
      if (digits.length <= 2) return digits;
      if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    },
    placeholder: 'MM/DD/YYYY',
  },
  ssn: {
    format: (v) => {
      const digits = v.replace(/\D/g, '').slice(0, 9);
      if (digits.length === 0) return '';
      if (digits.length <= 3) return digits;
      if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
      return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
    },
    placeholder: 'XXX-XX-XXXX',
  },
  zip: {
    format: (v) => {
      const digits = v.replace(/\D/g, '').slice(0, 9);
      if (digits.length <= 5) return digits;
      return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    },
    placeholder: '12345-6789',
  },
  time: {
    format: (v) => {
      const digits = v.replace(/\D/g, '').slice(0, 4);
      if (digits.length === 0) return '';
      if (digits.length <= 2) return digits;
      return `${digits.slice(0, 2)}:${digits.slice(2)}`;
    },
    placeholder: 'HH:MM',
  },
};

const MaskedInput = ({
  label,
  error,
  hint,
  icon: Icon,
  iconRight: IconRight,
  mask = 'phone',
  value,
  onChange,
  className = '',
  size = 'md',
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const config = MASKS[mask] || MASKS.phone;

  const handleChange = useCallback((e) => {
    const raw = e.target.value;
    const formatted = config.format(raw);
    const nativeEvent = e.nativeEvent;

    const syntheticEvent = {
      target: {
        value: formatted,
        rawValue: formatted.replace(/\D/g, ''),
      },
      nativeEvent,
      preventDefault: () => e.preventDefault(),
      stopPropagation: () => e.stopPropagation(),
    };
    onChange?.(syntheticEvent);
  }, [config, onChange]);

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2.5 text-sm rounded-xl',
    lg: 'px-5 py-3 text-base rounded-xl',
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className={clsx(
          'text-xs font-semibold flex items-center gap-1 ml-1',
          focused ? 'text-[#E31B23]' : 'theme-text-secondary'
        )}>
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <Icon
            className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary group-focus-within:text-[#E31B23] transition-colors"
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18}
          />
        )}
        <input
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={config.placeholder}
          className={clsx(
            'w-full theme-bg border theme-border outline-none transition-all duration-200',
            'focus:ring-2 focus:ring-red-100 focus:border-[#E31B23]',
            'placeholder:theme-text-tertiary',
            'font-mono tracking-wider',
            sizes[size],
            Icon ? (size === 'sm' ? 'pl-9' : 'pl-11') : '',
            IconRight ? (size === 'sm' ? 'pr-9' : 'pr-11') : '',
            error ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : '',
            props.disabled ? 'opacity-50 cursor-not-allowed' : '',
            className
          )}
          {...props}
        />
        {IconRight && (
          <IconRight
            className="absolute right-3.5 top-1/2 -translate-y-1/2 theme-text-tertiary"
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18}
          />
        )}
        {mask === 'credit-card' && value && value.replace(/\D/g, '').length > 0 && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            <CardIcon digits={value.replace(/\D/g, '')} />
          </div>
        )}
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
};

const CardIcon = ({ digits }) => {
  const first = digits[0];
  let label = 'credit';
  let color = 'text-slate-400';

  if (first === '4') { label = 'visa'; color = 'text-blue-600'; }
  else if (first === '5') { label = 'mastercard'; color = 'text-orange-500'; }
  else if (first === '3') { label = 'amex'; color = 'text-blue-500'; }
  else if (first === '6') { color = 'text-blue-600'; }

  return (
    <span className={clsx('text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded theme-bg-tertiary', color)}>
      {label}
    </span>
  );
};

export { MASKS };
export default MaskedInput;
