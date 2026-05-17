import { clsx } from 'clsx';

const statusConfig = {
  online: { dot: 'bg-emerald-500' },
  offline: { dot: 'bg-slate-400' },
  busy: { dot: 'bg-red-500' },
  away: { dot: 'bg-amber-500' },
  pending: { dot: 'bg-blue-500' },
};

const sizeStyles = {
  sm: 'px-1.5 py-0.5 text-[10px]',
  md: 'px-2.5 py-0.5 text-[11px]',
  lg: 'px-3 py-1 text-xs',
};

const dotSizes = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
};

const StatusBadge = ({ status = 'online', label, size = 'md', pulsing = false, className = '' }) => {
  const config = statusConfig[status] || statusConfig.online;

  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 font-semibold rounded-full border',
      'theme-bg-card theme-text-secondary theme-border-secondary theme-transition',
      sizeStyles[size],
      className
    )}>
      <span className={clsx(
        'rounded-full shrink-0',
        dotSizes[size],
        config.dot,
        pulsing && 'animate-pulse'
      )} />
      {label && <span>{label}</span>}
    </span>
  );
};

StatusBadge.displayName = 'StatusBadge';
export default StatusBadge;
