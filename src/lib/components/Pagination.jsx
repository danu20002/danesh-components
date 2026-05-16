import React from 'react';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const Pagination = ({ current = 1, total = 10, onChange, siblings = 1, className = "" }) => {
  const range = (start, end) => {
    const r = [];
    for (let i = start; i <= end; i++) r.push(i);
    return r;
  };

  const pages = (() => {
    const totalNums = siblings * 2 + 5;
    if (total <= totalNums) return range(1, total);

    const leftSib = Math.max(current - siblings, 1);
    const rightSib = Math.min(current + siblings, total);
    const showLeftDots = leftSib > 2;
    const showRightDots = rightSib < total - 1;

    if (!showLeftDots && showRightDots) {
      const leftRange = range(1, 3 + 2 * siblings);
      return [...leftRange, 'dots', total];
    }
    if (showLeftDots && !showRightDots) {
      const rightRange = range(total - (2 + 2 * siblings), total);
      return [1, 'dots', ...rightRange];
    }
    return [1, 'dots', ...range(leftSib, rightSib), 'dots', total];
  })();

  const PageBtn = ({ page, active }) => (
    <button
      onClick={() => onChange?.(page)}
      className={clsx(
        "w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200",
        active 
          ? "bg-[#E31B23] text-white shadow-sm" 
          : "text-slate-600 hover:bg-slate-100"
      )}
    >
      {page}
    </button>
  );

  return (
    <div className={clsx("flex items-center gap-1", className)}>
      <button
        onClick={() => current > 1 && onChange?.(current - 1)}
        disabled={current === 1}
        className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((page, i) => (
        page === 'dots' 
          ? <MoreHorizontal key={`dots-${i}`} size={14} className="text-slate-400 mx-1" />
          : <PageBtn key={page} page={page} active={page === current} />
      ))}
      <button
        onClick={() => current < total && onChange?.(current + 1)}
        disabled={current === total}
        className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
