import React from 'react';
import { clsx } from 'clsx';

const Kbd = ({ children, className = "" }) => (
  <kbd className={clsx(
    "inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 text-[11px] font-mono font-semibold",
    "text-slate-600 bg-white border border-slate-300 rounded-md shadow-[0_1px_0_1px_rgba(0,0,0,0.05)]",
    className
  )}>
    {children}
  </kbd>
);

export default Kbd;
