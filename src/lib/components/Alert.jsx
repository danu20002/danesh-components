import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';
import { clsx } from 'clsx';

const Alert = ({ title, children, variant = "info", dismissible = false, className = "" }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const styles = {
    info: {
      container: "bg-blue-50 border-blue-200 text-blue-800",
      icon: "text-blue-500",
      IconComponent: Info
    },
    success: {
      container: "bg-emerald-50 border-emerald-200 text-emerald-800",
      icon: "text-emerald-500",
      IconComponent: CheckCircle2
    },
    warning: {
      container: "bg-amber-50 border-amber-200 text-amber-800",
      icon: "text-amber-500",
      IconComponent: AlertTriangle
    },
    error: {
      container: "bg-red-50 border-red-200 text-red-800",
      icon: "text-red-500",
      IconComponent: AlertCircle
    }
  };

  const { container, icon, IconComponent } = styles[variant];

  return (
    <div className={clsx("p-4 rounded-xl border flex gap-3 animate-fade-in", container, className)}>
      <IconComponent className={clsx("shrink-0 mt-0.5", icon)} size={20} />
      <div className="flex-1 min-w-0">
        {title && <h4 className="text-sm font-bold leading-none mb-1">{title}</h4>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
      {dismissible && (
        <button 
          onClick={() => setVisible(false)} 
          className="shrink-0 p-0.5 rounded-md hover:bg-black/5 transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default Alert;
