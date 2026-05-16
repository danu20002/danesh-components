import React from 'react';
import { clsx } from 'clsx';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [], separator, className = "" }) => {
  const Sep = separator || (() => <ChevronRight size={14} className="text-slate-400 mx-1 shrink-0" />);

  return (
    <nav className={clsx("flex items-center flex-wrap gap-0.5 text-sm", className)} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const Icon = item.icon || (i === 0 ? Home : null);

        return (
          <React.Fragment key={i}>
            {i > 0 && <Sep />}
            {isLast ? (
              <span className="text-slate-900 font-semibold flex items-center gap-1.5">
                {Icon && <Icon size={14} />}
                {item.label}
              </span>
            ) : (
              <a
                href={item.href || '#'}
                onClick={(e) => { e.preventDefault(); item.onClick?.(); }}
                className="text-slate-500 hover:text-[#E31B23] transition-colors flex items-center gap-1.5"
              >
                {Icon && <Icon size={14} />}
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
