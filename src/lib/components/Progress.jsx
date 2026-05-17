import { clsx } from 'clsx';

const Progress = ({ value = 0, max = 100, size = "md", variant = "primary", label, showValue = false, className = "" }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    xs: "h-1",
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4"
  };

  const variants = {
    primary: "bg-[#E31B23]",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    info: "bg-blue-500"
  };

  return (
    <div className={clsx("w-full", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-xs font-semibold text-slate-700">{label}</span>}
          {showValue && <span className="text-xs font-mono text-slate-500">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={clsx("w-full bg-slate-100 rounded-full overflow-hidden", sizes[size])}>
        <div
          className={clsx("h-full rounded-full transition-all duration-700 ease-out", variants[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
