import { clsx } from 'clsx';
import Badge from './Badge';

const PulsingBadge = ({ children, variant = 'default', size = 'md', ringColor = '#E31B23', className = '' }) => {
  return (
    <span className={clsx('relative inline-flex', className)}>
      <span
        className="absolute -inset-1 rounded-full animate-ping"
        style={{ backgroundColor: ringColor }}
      />
      <Badge variant={variant} size={size}>
        {children}
      </Badge>
    </span>
  );
};

PulsingBadge.displayName = 'PulsingBadge';
export default PulsingBadge;
