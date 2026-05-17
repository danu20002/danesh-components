import React, { useState } from 'react';
import { clsx } from 'clsx';

const PillTabs = React.forwardRef(({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className = ''
}, ref) => {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleChange = (tabId) => {
    setActive(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find(t => t.id === active)?.content;

  return (
    <div ref={ref} className={className}>
      <div className={clsx(
        'inline-flex theme-bg-secondary border theme-border rounded-xl p-1 gap-1',
        variant === 'compact' && 'p-0.5 gap-0.5'
      )}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleChange(tab.id)}
            className={clsx(
              'flex items-center gap-2 font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer',
              variant === 'default' && 'px-4 py-2 text-sm',
              variant === 'compact' && 'px-3 py-1.5 text-xs',
              active === tab.id
                ? 'bg-[#E31B23] text-white shadow-sm'
                : 'theme-text-secondary hover:theme-text hover:theme-bg-hover'
            )}
          >
            {tab.icon && <tab.icon size={variant === 'compact' ? 14 : 16} />}
            {tab.label}
          </button>
        ))}
      </div>
      {activeTabContent && (
        <div className="mt-4 animate-fade-in" key={active}>
          {activeTabContent}
        </div>
      )}
    </div>
  );
});

PillTabs.displayName = 'PillTabs';
export default PillTabs;
