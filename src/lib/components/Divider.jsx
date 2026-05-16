import React from 'react';
import { clsx } from 'clsx';

const Divider = ({ label, className = "", orientation = "horizontal" }) => {
  if (orientation === "vertical") {
    return <div className={clsx("w-px bg-slate-200 self-stretch", className)} />;
  }

  if (label) {
    return (
      <div className={clsx("flex items-center gap-4", className)}>
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>
    );
  }

  return <div className={clsx("h-px bg-slate-200 w-full", className)} />;
};

export default Divider;
