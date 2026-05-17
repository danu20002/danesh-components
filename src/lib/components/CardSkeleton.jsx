import { clsx } from 'clsx';

const CardSkeleton = ({
  lines = 3,
  hasImage = false,
  hasAvatar = false,
  className = '',
}) => {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-card)] shadow-[var(--theme-shadow-sm)] overflow-hidden animate-pulse',
        className
      )}
    >
      {hasImage && (
        <div className="h-32 bg-[var(--theme-bg-tertiary)]" />
      )}
      <div className="p-6 space-y-4">
        {hasAvatar && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--theme-bg-tertiary)] shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-1/3 rounded bg-[var(--theme-bg-tertiary)]" />
              <div className="h-2.5 w-1/2 rounded bg-[var(--theme-bg-tertiary)]" />
            </div>
          </div>
        )}
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 rounded bg-[var(--theme-bg-tertiary)]"
            style={{ width: i === lines - 1 ? '70%' : '100%' }}
          />
        ))}
      </div>
    </div>
  );
};

CardSkeleton.displayName = 'CardSkeleton';
export default CardSkeleton;
