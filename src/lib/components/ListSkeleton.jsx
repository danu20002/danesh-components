import { clsx } from 'clsx';

const lineWidths = ['65%', '85%', '55%', '75%', '90%', '60%', '70%'];

const ListSkeleton = ({
  items = 5,
  hasAvatar = false,
  hasIcon = false,
  className = '',
}) => {
  return (
    <div className={clsx('space-y-3 animate-pulse', className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          {hasAvatar && (
            <div className="w-10 h-10 rounded-full bg-[var(--theme-bg-tertiary)] shrink-0" />
          )}
          {hasIcon && !hasAvatar && (
            <div className="w-8 h-8 rounded-lg bg-[var(--theme-bg-tertiary)] shrink-0" />
          )}
          <div className="flex-1 space-y-2">
            <div
              className="h-3 rounded bg-[var(--theme-bg-tertiary)]"
              style={{ width: lineWidths[i % lineWidths.length] }}
            />
            <div
              className="h-2.5 rounded bg-[var(--theme-bg-tertiary)]"
              style={{ width: lineWidths[(i + 2) % lineWidths.length] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

ListSkeleton.displayName = 'ListSkeleton';
export default ListSkeleton;
