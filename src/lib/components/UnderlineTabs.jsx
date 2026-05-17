import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';

const UnderlineTabs = React.forwardRef(({
  tabs,
  defaultTab,
  onChange,
  className = ''
}, ref) => {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const idx = tabs.findIndex(t => t.id === active);
    const el = tabRefs.current[idx];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    }
  }, [active, tabs]);

  const handleChange = (tabId) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab?.disabled) return;
    setActive(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find(t => t.id === active)?.content;

  return (
    <div ref={ref} className={className}>
      <div className="relative border-b theme-border">
        <div className="flex">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              ref={el => tabRefs.current[idx] = el}
              onClick={() => handleChange(tab.id)}
              disabled={tab.disabled}
              className={clsx(
                'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap relative',
                active === tab.id
                  ? 'theme-text-active'
                  : 'theme-text-secondary hover:theme-text',
                tab.disabled && 'opacity-40 pointer-events-none'
              )}
            >
              {tab.icon && <tab.icon size={16} />}
              {tab.label}
              {tab.badge != null && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E31B23] text-white min-w-[18px] text-center leading-none">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
        <div
          className="absolute bottom-0 h-0.5 bg-[#E31B23] transition-all duration-300 ease-out rounded-full"
          style={{ left: underlineStyle.left, width: underlineStyle.width }}
        />
      </div>
      {activeTabContent && (
        <div className="mt-4 animate-fade-in" key={active}>
          {activeTabContent}
        </div>
      )}
    </div>
  );
});

UnderlineTabs.displayName = 'UnderlineTabs';
export default UnderlineTabs;
