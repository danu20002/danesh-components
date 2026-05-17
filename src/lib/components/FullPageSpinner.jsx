import { clsx } from 'clsx';
import SpinnerWithText from './SpinnerWithText';

const FullPageSpinner = ({
  visible = true,
  text,
  description,
  blur = true,
  spinnerSize = 'lg',
  className = '',
}) => {
  if (!visible) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center',
        'bg-[var(--theme-bg)]/80',
        blur && 'backdrop-blur-sm',
        'transition-opacity duration-300',
        'opacity-100',
        className
      )}
    >
      <SpinnerWithText
        size={spinnerSize}
        color="primary"
        text={text}
        description={description}
        direction="column"
      />
    </div>
  );
};

FullPageSpinner.displayName = 'FullPageSpinner';
export default FullPageSpinner;
