import { clsx } from 'clsx';
import Badge from './Badge';

const InteractiveCard = ({ children, className, effect = 'lift', onClick, badge, badgeVariant = 'primary', ...props }) => {
  const effects = {
    lift: 'hover:-translate-y-1 hover:shadow-lg',
    glow: 'hover:shadow-[0_0_20px_rgba(227,27,35,0.15)] ring-1 ring-transparent hover:ring-[#E31B23]/20',
    border: 'relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-[#E31B23] before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    scale: 'hover:scale-[1.02]',
  };

  return (
    <div
      className={clsx(
        'relative rounded-2xl theme-bg-card border theme-border theme-shadow-sm theme-transition',
        effects[effect],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      {children}
    </div>
  );
};

InteractiveCard.displayName = 'InteractiveCard';
export default InteractiveCard;
