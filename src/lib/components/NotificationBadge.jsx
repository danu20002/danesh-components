import { clsx } from 'clsx';

const variantStyles = {
  primary: 'bg-[#E31B23] text-white',
  success: 'bg-emerald-500 text-white',
  warning: 'bg-amber-500 text-white',
  error: 'bg-red-500 text-white',
};

const sizeStyles = {
  sm: 'min-w-[16px] h-4 text-[10px] px-1',
  md: 'min-w-[20px] h-5 text-[11px] px-1.5',
  lg: 'min-w-[24px] h-6 text-xs px-2',
};

const dotSizes = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
};

const NotificationBadge = ({ count, max = 99, dot = false, variant = 'primary', size = 'md', bounce = false, className = '' }) => {
  if (dot) {
    return (
      <span className={clsx(
        'absolute top-0 right-0 block translate-x-1/3 -translate-y-1/3 rounded-full',
        variantStyles[variant],
        dotSizes[size],
        className
      )} />
    );
  }

  const displayCount = count > max ? `${max}+` : count;

  return (
    <span
      className={clsx(
        'absolute top-0 right-0 inline-flex items-center justify-center font-bold rounded-full -translate-y-1/2 translate-x-1/2',
        variantStyles[variant],
        sizeStyles[size],
        bounce && 'animate-[bounce_0.3s_ease]',
        className
      )}
      key={bounce ? count : undefined}
    >
      {displayCount}
    </span>
  );
};

NotificationBadge.displayName = 'NotificationBadge';
export default NotificationBadge;
