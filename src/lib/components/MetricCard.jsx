import { clsx } from 'clsx';
import { TrendingUp, TrendingDown } from 'daneshicons';

const MetricCard = ({ title, value, trend, trendLabel, icon: IconComponent, variant = 'primary', size = 'md', className, ...props }) => {
  const variantColors = {
    primary: 'bg-[#E31B23]/10 text-[#E31B23]',
    success: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  };

  const sizes = {
    sm: { card: 'p-4 gap-2', icon: 'w-9 h-9', iconSize: 16, title: 'text-[11px]', value: 'text-xl', trend: 'text-[11px]' },
    md: { card: 'p-5 gap-3', icon: 'w-11 h-11', iconSize: 20, title: 'text-xs', value: 'text-2xl', trend: 'text-xs' },
    lg: { card: 'p-6 gap-4', icon: 'w-14 h-14', iconSize: 24, title: 'text-sm', value: 'text-3xl', trend: 'text-sm' },
  };

  const s = sizes[size];

  return (
    <div
      className={clsx(
        'rounded-2xl theme-bg-card border theme-border theme-shadow-sm',
        s.card,
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <p className={clsx('font-semibold theme-text-secondary uppercase tracking-wide', s.title)}>{title}</p>
        {IconComponent && (
          <div className={clsx('rounded-xl flex items-center justify-center shrink-0', variantColors[variant], s.icon)}>
            <IconComponent size={s.iconSize} />
          </div>
        )}
      </div>
      <div className="flex items-end gap-3">
        <span className={clsx('font-bold theme-text', s.value)}>{value}</span>
        {trend && (
          <div className={clsx('flex items-center gap-1 pb-0.5', s.trend, trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500')}>
            {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {trendLabel && <span className="font-medium">{trendLabel}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

MetricCard.displayName = 'MetricCard';
export default MetricCard;
