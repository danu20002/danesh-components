import { useState } from 'react';
import { clsx } from 'clsx';

const Tabs = ({ tabs, defaultTab, onChange, variant = "default", className = "" }) => {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId) => {
    setActive(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find(t => t.id === active)?.content;

  return (
    <div className={className}>
      <div className={clsx(
        "flex",
        variant === "default" && "border-b border-slate-200 gap-0",
        variant === "pills" && "gap-2 p-1 bg-slate-100 rounded-xl",
        variant === "outline" && "gap-2"
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={clsx(
              "flex items-center gap-2 font-medium transition-all duration-200 whitespace-nowrap",
              variant === "default" && [
                "px-4 py-2.5 text-sm border-b-2 -mb-px",
                active === tab.id 
                  ? "border-[#E31B23] text-[#E31B23]" 
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              ],
              variant === "pills" && [
                "px-4 py-2 text-sm rounded-lg",
                active === tab.id 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              ],
              variant === "outline" && [
                "px-4 py-2 text-sm rounded-xl border",
                active === tab.id 
                  ? "border-[#E31B23] text-[#E31B23] bg-red-50" 
                  : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
              ]
            )}
          >
            {tab.icon && <tab.icon size={16} />}
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
};

export default Tabs;
