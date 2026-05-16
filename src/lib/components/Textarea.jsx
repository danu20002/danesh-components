import React from 'react';
import { clsx } from 'clsx';

const Textarea = React.forwardRef(({ 
  label, 
  error, 
  hint, 
  className = "", 
  rows = 4,
  resize = "vertical",
  ...props 
}, ref) => {
  const resizeClasses = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize"
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold text-slate-700 ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200",
          "focus:ring-2 focus:ring-red-100 focus:border-[#E31B23]",
          "placeholder:text-slate-400",
          resizeClasses[resize],
          error ? 'border-red-400 bg-red-50/50' : '',
          props.disabled ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : '',
          className
        )}
        {...props}
      />
      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && <p className="text-[11px] text-slate-400 ml-1">{hint}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
export default Textarea;
