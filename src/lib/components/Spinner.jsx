import React from 'react';
import { clsx } from 'clsx';

const Spinner = ({ size = "md", color = "primary", label, className = "" }) => {
  const sizes = {
    xs: "w-3.5 h-3.5",
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colors = {
    primary: "text-[#E31B23]",
    white: "text-white",
    slate: "text-slate-400",
    current: "text-current"
  };

  return (
    <div className={clsx("inline-flex flex-col items-center gap-2", className)}>
      <svg
        className={clsx("animate-spin", sizes[size], colors[color])}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {label && <span className="text-xs text-slate-500 font-medium">{label}</span>}
    </div>
  );
};

export default Spinner;
