import { clsx } from 'clsx';

const sizeMap = { sm: 40, md: 56, lg: 80, xl: 120 };
const strokeMap = { sm: 4, md: 5, lg: 6, xl: 8 };

const variantColors = {
  primary: 'text-[#E31B23]',
  success: 'text-emerald-500',
  warning: 'text-amber-500',
  info: 'text-blue-500',
};

const CircularProgress = ({
  value = 0,
  size = 'md',
  strokeWidth,
  variant = 'primary',
  label,
  showValue = false,
  className = '',
}) => {
  const dimension = sizeMap[size] || sizeMap.md;
  const stroke = strokeWidth ?? strokeMap[size] ?? strokeMap.md;
  const radius = (dimension - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedValue = Math.min(Math.max(value, 0), 100);
  const offset = circumference * (1 - clampedValue / 100);

  return (
    <div className={clsx("relative inline-flex items-center justify-center", className)}>
      <svg
        width={dimension}
        height={dimension}
        viewBox={`0 0 ${dimension} ${dimension}`}
        className="-rotate-90"
      >
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-[var(--theme-bg-tertiary)]"
        />
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={clsx(
            "transition-all duration-700 ease-out",
            variantColors[variant]
          )}
        />
      </svg>
      {(label || showValue) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center leading-tight">
            {showValue && (
              <span className="text-xs font-semibold text-[var(--theme-text)]">
                {Math.round(clampedValue)}%
              </span>
            )}
            {label && (
              <span className="block text-[10px] text-[var(--theme-text-secondary)]">
                {label}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

CircularProgress.displayName = 'CircularProgress';
export default CircularProgress;
