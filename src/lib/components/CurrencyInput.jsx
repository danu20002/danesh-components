import { useState, useCallback } from 'react';
import { clsx } from 'clsx';

const LOCALE_CONFIG = {
  'USD': { symbol: '$', code: 'USD', locale: 'en-US', minor: 2 },
  'EUR': { symbol: '€', code: 'EUR', locale: 'de-DE', minor: 2 },
  'GBP': { symbol: '£', code: 'GBP', locale: 'en-GB', minor: 2 },
  'JPY': { symbol: '¥', code: 'JPY', locale: 'ja-JP', minor: 0 },
  'INR': { symbol: '₹', code: 'INR', locale: 'en-IN', minor: 2 },
  'BRL': { symbol: 'R$', code: 'BRL', locale: 'pt-BR', minor: 2 },
  'AUD': { symbol: 'A$', code: 'AUD', locale: 'en-AU', minor: 2 },
  'CAD': { symbol: 'C$', code: 'CAD', locale: 'en-CA', minor: 2 },
  'SGD': { symbol: 'S$', code: 'SGD', locale: 'en-SG', minor: 2 },
  'KRW': { symbol: '₩', code: 'KRW', locale: 'ko-KR', minor: 0 },
};

const CurrencyInput = ({
  label,
  error,
  hint,
  currency = 'USD',
  value = '',
  onChange,
  size = 'md',
  variant = 'prefix',
  hideSymbol = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const cfg = LOCALE_CONFIG[currency] || LOCALE_CONFIG.USD;

  const formatCurrency = useCallback((raw) => {
    const digits = raw.replace(/[^\d.]/g, '');
    const parts = digits.split('.');
    const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (parts.length > 1) {
      return `${intPart}.${parts[1].slice(0, cfg.minor)}`;
    }
    return intPart;
  }, [cfg.minor]);

  const handleChange = (e) => {
    const formatted = formatCurrency(e.target.value);
    const synthetic = { target: { value: formatted, rawValue: parseFloat(formatted.replace(/,/g, '')) || 0 } };
    onChange?.(synthetic);
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2.5 text-sm rounded-xl',
    lg: 'px-5 py-3 text-base rounded-xl',
  };

  const symSizes = {
    sm: 'text-xs px-2',
    md: 'text-sm px-3',
    lg: 'text-base px-4',
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className={clsx(
          'text-xs font-semibold ml-1 flex items-center gap-1',
          focused ? 'text-[#E31B23]' : 'theme-text-secondary'
        )}>
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className={clsx(
        'relative flex items-stretch overflow-hidden',
        'border theme-border rounded-xl transition-all duration-200',
        'focus-within:ring-2 focus-within:ring-red-100 focus-within:border-[#E31B23]',
        error ? '!border-red-400' : '',
        props.disabled ? 'opacity-50' : ''
      )}>
        {(variant === 'prefix' || variant === 'both') && !hideSymbol && (
          <div className={clsx(
            'flex items-center font-bold border-r theme-border-secondary',
            'theme-text-tertiary theme-bg-secondary',
            symSizes[size]
          )}>
            {cfg.symbol}
          </div>
        )}

        <input
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          inputMode="decimal"
          placeholder={`0.00`}
          className={clsx(
            'w-full theme-bg outline-none transition-all duration-200',
            'placeholder:theme-text-tertiary',
            'font-mono tracking-wider theme-text',
            sizes[size],
            variant === 'prefix' ? 'pl-2' : 'pl-4',
            variant === 'suffix' ? 'pr-2' : 'pr-4',
          )}
          {...props}
        />

        {(variant === 'suffix' || variant === 'both') && !hideSymbol && (
          <div className={clsx(
            'flex items-center font-bold border-l theme-border-secondary',
            'theme-text-tertiary theme-bg-secondary',
            symSizes[size]
          )}>
            {cfg.symbol}
          </div>
        )}

        {hideSymbol && (
          <div className={clsx(
            'flex items-center text-[10px] font-mono',
            'theme-text-tertiary theme-bg-secondary',
            'border-l theme-border-secondary px-2'
          )}>
            {cfg.code}
          </div>
        )}
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
};

export { LOCALE_CONFIG };
export default CurrencyInput;
