import React from 'react';
import { clsx } from 'clsx';
import { FileX } from 'lucide-react';

const EmptyState = ({ 
  icon: Icon = FileX, 
  title = "No data found", 
  description, 
  action, 
  className = "" 
}) => (
  <div className={clsx("flex flex-col items-center justify-center py-12 px-6 text-center", className)}>
    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
      <Icon size={28} className="text-slate-400" />
    </div>
    <h3 className="text-base font-bold text-slate-900 mb-1">{title}</h3>
    {description && <p className="text-sm text-slate-500 max-w-sm mb-5">{description}</p>}
    {action && <div>{action}</div>}
  </div>
);

export default EmptyState;
