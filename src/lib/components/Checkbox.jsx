import { clsx } from 'clsx';
import { Check } from 'daneshicons';

const Checkbox = ({ checked = false, onChange, label, description, disabled = false, className = "" }) => {
  return (
    <label className={clsx(
      "inline-flex items-start gap-3 select-none group",
      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    )}>
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && onChange?.(e.target.checked)}
          className="sr-only"
          disabled={disabled}
        />
        <div className={clsx(
          "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200",
          checked 
            ? "bg-[#E31B23] border-[#E31B23]" 
            : "border-slate-300 group-hover:border-slate-400 bg-white"
        )}>
          {checked && <Check size={14} className="text-white" strokeWidth={3} />}
        </div>
      </div>
      {(label || description) && (
        <div>
          {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
          {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
        </div>
      )}
    </label>
  );
};

export default Checkbox;
