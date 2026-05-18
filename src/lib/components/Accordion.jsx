import { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'daneshicons';

const AccordionItem = ({ title, children, isOpen, onToggle, icon: Icon }) => (
  <div className="border-b border-slate-100 last:border-b-0">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full px-5 py-4 text-left hover:bg-slate-50/50 transition-colors"
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon size={18} className="text-slate-400" />}
        <span className="text-sm font-semibold text-slate-900">{title}</span>
      </div>
      <ChevronDown 
        size={16} 
        className={clsx(
          "text-slate-400 transition-transform duration-200",
          isOpen && "rotate-180"
        )} 
      />
    </button>
    <div className={clsx(
      "overflow-hidden transition-all duration-300",
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    )}>
      <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const Accordion = ({ items = [], multiple = false, defaultOpen = [], className = "" }) => {
  const [openItems, setOpenItems] = useState(new Set(defaultOpen));

  const toggle = (index) => {
    setOpenItems((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className={clsx("border border-slate-200 rounded-xl overflow-hidden", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          icon={item.icon}
          isOpen={openItems.has(i)}
          onToggle={() => toggle(i)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
