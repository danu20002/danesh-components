import { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

const ExpandableCard = ({ title, subtitle, children, expanded: controlledExpanded, defaultExpanded = false, className, icon: IconComponent, ...props }) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const toggle = () => {
    if (!isControlled) setInternalExpanded((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        'rounded-2xl theme-bg-card border theme-border theme-shadow-sm',
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={toggle}
        className="w-full flex items-center gap-3 p-5 text-left focus:outline-none"
      >
        {IconComponent && (
          <div className="w-10 h-10 rounded-xl bg-[#E31B23]/10 text-[#E31B23] flex items-center justify-center shrink-0">
            <IconComponent size={20} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold theme-text text-sm">{title}</h3>
          {subtitle && <p className="text-[12px] theme-text-tertiary mt-0.5 truncate">{subtitle}</p>}
        </div>
        <ChevronDown
          size={18}
          className={clsx(
            'theme-text-tertiary shrink-0 transition-transform duration-300',
            expanded && 'rotate-180'
          )}
        />
      </button>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-in-out',
          expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-5 pb-5">{children}</div>
      </div>
    </div>
  );
};

ExpandableCard.displayName = 'ExpandableCard';
export default ExpandableCard;
