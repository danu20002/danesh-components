import { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { ChevronDown, Phone } from 'daneshicons';

const COUNTRIES = [
  { code: 'US', dial: '+1', name: 'United States', flag: '🇺🇸', pattern: '(###) ###-####' },
  { code: 'GB', dial: '+44', name: 'United Kingdom', flag: '🇬🇧', pattern: '#### ######' },
  { code: 'CA', dial: '+1', name: 'Canada', flag: '🇨🇦', pattern: '(###) ###-####' },
  { code: 'AU', dial: '+61', name: 'Australia', flag: '🇦🇺', pattern: '### ### ###' },
  { code: 'DE', dial: '+49', name: 'Germany', flag: '🇩🇪', pattern: '### ## ######' },
  { code: 'FR', dial: '+33', name: 'France', flag: '🇫🇷', pattern: '# ## ## ## ##' },
  { code: 'JP', dial: '+81', name: 'Japan', flag: '🇯🇵', pattern: '##-####-####' },
  { code: 'CN', dial: '+86', name: 'China', flag: '🇨🇳', pattern: '###-####-####' },
  { code: 'IN', dial: '+91', name: 'India', flag: '🇮🇳', pattern: '#####-#####' },
  { code: 'BR', dial: '+55', name: 'Brazil', flag: '🇧🇷', pattern: '(##) #####-####' },
  { code: 'SG', dial: '+65', name: 'Singapore', flag: '🇸🇬', pattern: '####-####' },
  { code: 'KR', dial: '+82', name: 'South Korea', flag: '🇰🇷', pattern: '##-####-####' },
  { code: 'NL', dial: '+31', name: 'Netherlands', flag: '🇳🇱', pattern: '# ########' },
  { code: 'IT', dial: '+39', name: 'Italy', flag: '🇮🇹', pattern: '### ### ####' },
  { code: 'ES', dial: '+34', name: 'Spain', flag: '🇪🇸', pattern: '### ### ###' },
  { code: 'MX', dial: '+52', name: 'Mexico', flag: '🇲🇽', pattern: '### ### ####' },
  { code: 'RU', dial: '+7', name: 'Russia', flag: '🇷🇺', pattern: '(###) ###-##-##' },
  { code: 'SE', dial: '+46', name: 'Sweden', flag: '🇸🇪', pattern: '##-### ###' },
  { code: 'CH', dial: '+41', name: 'Switzerland', flag: '🇨🇭', pattern: '## ### ## ##' },
  { code: 'HK', dial: '+852', name: 'Hong Kong', flag: '🇭🇰', pattern: '####-####' },
];

const PhoneInput = ({
  label,
  error,
  hint,
  value = '',
  onChange,
  defaultCountry = 'US',
  size = 'md',
  className = '',
  ...props
}) => {
  const [selected, setSelected] = useState(COUNTRIES.find(c => c.code === defaultCountry) || COUNTRIES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const localPhone = value;

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '');
    const synthetic = { target: { value: digits, country: selected } };
    onChange?.(synthetic);
  };

  const handleCountrySelect = (country) => {
    setSelected(country);
    setIsOpen(false);
    setSearch('');
    const synthetic = { target: { value: localPhone, country } };
    onChange?.(synthetic);
  };

  const sizes = {
    sm: { input: 'text-xs py-1.5', flag: 'w-12', icon: 14, dropdown: 'text-xs' },
    md: { input: 'text-sm py-2.5', flag: 'w-14', icon: 16, dropdown: 'text-sm' },
    lg: { input: 'text-base py-3', flag: 'w-16', icon: 18, dropdown: 'text-base' },
  };
  const s = sizes[size];

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold theme-text-secondary ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className={clsx(
        'relative flex items-stretch border theme-border rounded-xl overflow-hidden transition-all duration-200',
        'focus-within:ring-2 focus-within:ring-red-100 focus-within:border-[#E31B23]',
        error ? '!border-red-400 !bg-red-50/50 dark:!bg-red-950/20' : 'theme-bg',
        props.disabled ? 'opacity-50' : '',
        className
      )}>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              s.flag,
              'h-full flex items-center gap-1 px-2 border-r theme-border-secondary cursor-pointer',
              'hover:theme-bg-hover transition-colors'
            )}
          >
            <span className="text-base leading-none">{selected.flag}</span>
            <span className={clsx(s.dropdown, 'font-medium theme-text-secondary')}>{selected.dial}</span>
            <ChevronDown size={10} className={clsx('theme-text-tertiary transition-transform', isOpen && 'rotate-180')} />
          </button>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-1 w-72 theme-bg border theme-border rounded-xl shadow-xl z-50 animate-fade-in"
            >
              <div className="p-2 border-b theme-border-secondary">
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search countries..."
                  className="w-full px-3 py-1.5 text-xs theme-bg-tertiary border-none rounded-lg outline-none theme-text placeholder:theme-text-tertiary"
                />
              </div>
              <div className="max-h-48 overflow-y-auto p-1">
                {filtered.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className={clsx(
                      'w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 transition-all cursor-pointer',
                      selected.code === country.code
                        ? 'bg-red-50 dark:bg-red-950/20 theme-text-active'
                        : 'hover:theme-bg-hover theme-text-secondary',
                      s.dropdown
                    )}
                  >
                    <span className="text-base">{country.flag}</span>
                    <span className="font-medium flex-1">{country.name}</span>
                    <span className="theme-text-tertiary font-mono">{country.dial}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="px-3 py-4 text-center text-xs theme-text-tertiary">No countries found</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="relative flex-1">
          <Phone size={s.icon} className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-tertiary" />
          <input
            type="tel"
            value={localPhone}
            onChange={handlePhoneChange}
            placeholder={selected.pattern}
            className={clsx(
              'w-full h-full bg-transparent border-none outline-none pl-10 pr-4',
              'font-mono tracking-wider',
              s.input,
              'theme-text placeholder:theme-text-tertiary'
            )}
            {...props}
          />
        </div>
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
};

export { COUNTRIES };
export default PhoneInput;
