import { useState } from 'react';
import { clsx } from 'clsx';
import { X, Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle
};

const itemStyles = {
  info: {
    container: "border-l-blue-500 bg-blue-500/5",
    icon: "text-blue-500",
    button: "hover:bg-blue-500/10 text-blue-500"
  },
  success: {
    container: "border-l-emerald-500 bg-emerald-500/5",
    icon: "text-emerald-500",
    button: "hover:bg-emerald-500/10 text-emerald-500"
  },
  warning: {
    container: "border-l-amber-500 bg-amber-500/5",
    icon: "text-amber-500",
    button: "hover:bg-amber-500/10 text-amber-500"
  },
  error: {
    container: "border-l-red-500 bg-red-500/5",
    icon: "text-red-500",
    button: "hover:bg-red-500/10 text-red-500"
  }
};

const AlertStack = ({ alerts = [], onDismiss, className = "" }) => {
  const [dismissedIds, setDismissedIds] = useState(new Set());

  if (!alerts.length) return null;

  const handleDismiss = (id) => {
    setDismissedIds((prev) => new Set([...prev, id]));
    onDismiss?.(id);
  };

  const visible = alerts.filter((a) => !dismissedIds.has(a.id));

  if (!visible.length) return null;

  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {visible.map((alert) => {
        const IconComp = icons[alert.variant] || Info;
        const style = itemStyles[alert.variant] || itemStyles.info;

        return (
          <div
            key={alert.id}
            className={clsx(
              "flex items-start gap-3 px-4 py-3 rounded-xl border-l-4 border theme-border theme-bg-card animate-fade-in animate-slide-in",
              style.container
            )}
          >
            <IconComp size={18} className={clsx("shrink-0 mt-0.5", style.icon)} />
            <div className="flex-1 min-w-0">
              {alert.title && (
                <p className="text-sm font-bold theme-text leading-none mb-1">{alert.title}</p>
              )}
              {alert.message && (
                <p className="text-xs theme-text-secondary">{alert.message}</p>
              )}
            </div>
            {(alert.dismissible !== false) && (
              <button
                onClick={() => handleDismiss(alert.id)}
                className={clsx("shrink-0 p-0.5 rounded-md transition-colors", style.button)}
              >
                <X size={14} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

AlertStack.displayName = 'AlertStack';

export default AlertStack;
