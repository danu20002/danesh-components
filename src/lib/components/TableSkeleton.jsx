import { clsx } from 'clsx';

const defaultWidths = ['40%', '25%', '20%', '15%'];
const lineWidths = ['55%', '75%', '60%', '80%', '45%', '65%', '70%', '50%'];

const TableSkeleton = ({
  rows = 5,
  columns = 4,
  hasHeader = true,
  className = '',
}) => {
  const widths = Array.from({ length: columns }, (_, i) => defaultWidths[i] || '25%');

  return (
    <div
      className={clsx(
        'border border-[var(--theme-border)] rounded-xl overflow-hidden animate-pulse',
        className
      )}
    >
      {hasHeader && (
        <div className="bg-[var(--theme-bg-secondary)] border-b border-[var(--theme-border)]">
          <div className="flex">
            {widths.map((w, i) => (
              <div key={i} className="px-4 py-3" style={{ width: w }}>
                <div className="h-4 rounded bg-[var(--theme-bg-tertiary)] w-3/4" />
              </div>
            ))}
          </div>
        </div>
      )}
      {Array.from({ length: rows }).map((_, ri) => (
        <div
          key={ri}
          className="flex border-b border-[var(--theme-border)] last:border-b-0"
        >
          {widths.map((w, ci) => (
            <div key={ci} className="px-4 py-3" style={{ width: w }}>
              <div
                className="h-3 rounded bg-[var(--theme-bg-tertiary)]"
                style={{ width: lineWidths[(ri + ci) % lineWidths.length] }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

TableSkeleton.displayName = 'TableSkeleton';
export default TableSkeleton;
