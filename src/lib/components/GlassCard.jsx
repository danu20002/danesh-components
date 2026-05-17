import { clsx } from 'clsx';

const GlassCard = ({ children, className, variant = 'glass', hover = false, ...props }) => {
  const variants = {
    glass: 'backdrop-blur-xl bg-white/5 dark:bg-white/5 border border-white/10 shadow-xl',
    frost: 'backdrop-blur-2xl bg-white/10 dark:bg-white/10 border border-white/10 shadow-xl',
    crystal: 'backdrop-blur-md bg-white/20 dark:bg-white/[0.15] border border-white/20 shadow-lg',
  };

  return (
    <div
      className={clsx(
        'rounded-2xl theme-transition',
        variants[variant],
        hover && 'hover:-translate-y-1 hover:shadow-2xl cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

GlassCard.displayName = 'GlassCard';
export default GlassCard;
