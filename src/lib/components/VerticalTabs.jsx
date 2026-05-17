import React, { useState } from 'react';
import { clsx } from 'clsx';

const VerticalTabs = React.forwardRef(({
  tabs,
  defaultTab,
  onChange,
  className = '',
  position = 'left'
}, ref) => {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleChange = (tabId) => {
    setActive(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find(t => t.id === active)?.content;

  const isLeft = position === 'left';

  const tabsList = (
    <div className="flex flex-col gap-1" role="tablist">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => handleChange(tab.id)}
          role="tab"
          aria-selected={active === tab.id}
          className={clsx(
            'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 text-left cursor-pointer relative',
            active === tab.id
              ? [
                  'theme-text-active theme-bg-active',
                  isLeft
                    ? 'border-l-[3px] border-[#E31B23] rounded-l-none'
                    : 'border-r-[3px] border-[#E31B23] rounded-r-none'
                ]
              : 'theme-text-secondary hover:theme-text hover:theme-bg-hover border-l-[3px] border-r-[3px] border-transparent'
          )}
        >
          {tab.icon && <tab.icon size={18} className="shrink-0" />}
          <span className="flex-1 truncate">{tab.label}</span>
          {tab.badge != null && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E31B23] text-white min-w-[18px] text-center leading-none">
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      className={clsx(
        'flex flex-col md:flex-row gap-6',
        isLeft ? '' : 'md:flex-row-reverse',
        className
      )}
    >
      <div className="md:w-56 shrink-0">
        {tabsList}
      </div>
      <div className="flex-1 min-w-0 animate-fade-in" key={active}>
        {activeTabContent}
      </div>
    </div>
  );
});

VerticalTabs.displayName = 'VerticalTabs';
export default VerticalTabs;
