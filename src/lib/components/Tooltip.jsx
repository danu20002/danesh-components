import React from 'react';
import { clsx } from 'clsx';

const Tooltip = ({ children, text, position = "top", className = "" }) => {
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

  return (
    <div className={clsx("relative inline-flex group", className)}>
      {children}
      <div className={clsx(
        "absolute z-50 px-2.5 py-1.5 text-[11px] font-medium text-white bg-slate-900 rounded-lg whitespace-nowrap",
        "opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none",
        positions[position]
      )}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
