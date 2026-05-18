import { clsx } from 'clsx';
import { TrendingUp, TrendingDown, Minus } from 'daneshicons';

const Stat = ({ title, value, change, changeLabel, icon: Icon, variant = "default", className = "" }) => {
  const isPositive = change > 0;
  const isNegative = change < 0;

  const variants = {
    default: "bg-white border border-slate-200",
    filled: "bg-slate-900 text-white border border-slate-800",
    gradient: "bg-gradient-to-br from-[#E31B23] to-[#ff4f56] text-white border-none"
  };

  return (
    <div className={clsx("rounded-2xl p-5 shadow-sm", variants[variant], className)}>
      <div className="flex items-start justify-between mb-3">
        <p className={clsx(
          "text-xs font-semibold uppercase tracking-wider",
          variant === "default" ? "text-slate-500" : "text-white/70"
        )}>
          {title}
        </p>
        {Icon && (
          <div className={clsx(
            "w-9 h-9 rounded-xl flex items-center justify-center",
            variant === "default" ? "bg-red-50 text-[#E31B23]" : "bg-white/15 text-white"
          )}>
            <Icon size={18} />
          </div>
        )}
      </div>
      <p className={clsx(
        "text-2xl font-bold tracking-tight",
        variant === "default" ? "text-slate-900" : "text-white"
      )}>
        {value}
      </p>
      {(change !== undefined || changeLabel) && (
        <div className="flex items-center gap-1.5 mt-2">
          {change !== undefined && (
            <span className={clsx(
              "inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-md",
              variant === "default" 
                ? isPositive ? "text-emerald-700 bg-emerald-50" : isNegative ? "text-red-600 bg-red-50" : "text-slate-500 bg-slate-100"
                : isPositive ? "text-emerald-300 bg-emerald-500/20" : isNegative ? "text-red-300 bg-red-500/20" : "text-white/60 bg-white/10"
            )}>
              {isPositive ? <TrendingUp size={12} /> : isNegative ? <TrendingDown size={12} /> : <Minus size={12} />}
              {isPositive ? '+' : ''}{change}%
            </span>
          )}
          {changeLabel && (
            <span className={clsx(
              "text-[11px]",
              variant === "default" ? "text-slate-400" : "text-white/50"
            )}>
              {changeLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Stat;
