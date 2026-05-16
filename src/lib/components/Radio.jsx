import React from 'react';
import { clsx } from 'clsx';

const Radio = ({ options = [], value, onChange, name, direction = "vertical", disabled = false }) => {
  return (
    <div className={clsx(
      "flex gap-3",
      direction === "vertical" ? "flex-col" : "flex-row flex-wrap"
    )}>
      {options.map((option) => (
        <label
          key={option.value}
          className={clsx(
            "inline-flex items-start gap-3 select-none group",
            disabled || option.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
        >
          <div className="relative flex items-center justify-center pt-0.5">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => !disabled && !option.disabled && onChange?.(option.value)}
              className="sr-only"
              disabled={disabled || option.disabled}
            />
            <div className={clsx(
              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
              value === option.value
                ? "border-[#E31B23]"
                : "border-slate-300 group-hover:border-slate-400"
            )}>
              {value === option.value && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#E31B23] animate-scale-in" />
              )}
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-slate-700">{option.label}</span>
            {option.description && <p className="text-xs text-slate-500 mt-0.5">{option.description}</p>}
          </div>
        </label>
      ))}
    </div>
  );
};

export default Radio;
