import React from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'daneshicons';

const Select = React.forwardRef(({
  label,
  error,
  hint,
  options = [],
  placeholder = "Select an option...",
  icon: Icon,
  className = "",
  size = "md",
  ...props
}, ref) => {
  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-lg",
    md: "px-4 py-2.5 text-sm rounded-xl",
    lg: "px-5 py-3 text-base rounded-xl"
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold text-slate-700 ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <Icon
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E31B23] transition-colors pointer-events-none"
            size={size === 'sm' ? 14 : 18}
          />
        )}
        <select
          ref={ref}
          className={clsx(
            "w-full bg-white border border-slate-200 outline-none transition-all duration-200 appearance-none cursor-pointer",
            "focus:ring-2 focus:ring-red-100 focus:border-[#E31B23]",
            sizes[size],
            Icon ? (size === 'sm' ? 'pl-9' : 'pl-11') : '',
            "pr-10",
            error ? 'border-red-400 bg-red-50/50' : '',
            props.disabled ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : '',
            className
          )}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown 
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" 
          size={16} 
        />
      </div>
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] text-slate-400 ml-1">{hint}</p>}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
