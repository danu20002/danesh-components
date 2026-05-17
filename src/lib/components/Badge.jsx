import { clsx } from 'clsx';

const Badge = ({ children, variant = "default", size = "md", dot = false, className = "" }) => {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    primary: "bg-red-50 text-[#E31B23] border-red-100",
    success: "bg-emerald-50 text-emerald-700 border-emerald-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    error: "bg-red-50 text-red-600 border-red-100",
    info: "bg-blue-50 text-blue-700 border-blue-100",
    outline: "bg-transparent text-slate-600 border-slate-300"
  };

  const sizes = {
    sm: "px-1.5 py-0.5 text-[10px]",
    md: "px-2.5 py-0.5 text-[11px]",
    lg: "px-3 py-1 text-xs"
  };

  const dotColors = {
    default: "bg-slate-400",
    primary: "bg-[#E31B23]",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    outline: "bg-slate-400"
  };

  return (
    <span className={clsx(
      "inline-flex items-center gap-1.5 font-semibold rounded-full border",
      variants[variant],
      sizes[size],
      className
    )}>
      {dot && <span className={clsx("w-1.5 h-1.5 rounded-full", dotColors[variant])} />}
      {children}
    </span>
  );
};

export default Badge;
