import { clsx } from 'clsx';
import Spinner from './Spinner';

const SpinnerWithText = ({
  size = 'md',
  color = 'primary',
  text,
  description,
  direction = 'column',
  className = '',
}) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-3',
        direction === 'column' ? 'flex-col text-center' : 'flex-row',
        className
      )}
    >
      <Spinner size={size} color={color} />
      {(text || description) && (
        <div>
          {text && (
            <div className="text-sm font-medium text-[var(--theme-text)]">
              {text}
            </div>
          )}
          {description && (
            <div className="text-xs text-[var(--theme-text-muted)] mt-0.5">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

SpinnerWithText.displayName = 'SpinnerWithText';
export default SpinnerWithText;
