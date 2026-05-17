import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { X, Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

const variantStyles = {
  info: {
    container: "border-blue-500/30 bg-blue-500/10 text-blue-700",
    button: "hover:bg-blue-500/15 text-blue-600",
    IconComponent: Info
  },
  success: {
    container: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
    button: "hover:bg-emerald-500/15 text-emerald-600",
    IconComponent: CheckCircle2
  },
  warning: {
    container: "border-amber-500/30 bg-amber-500/10 text-amber-700",
    button: "hover:bg-amber-500/15 text-amber-600",
    IconComponent: AlertTriangle
  },
  error: {
    container: "border-red-500/30 bg-red-500/10 text-red-700",
    button: "hover:bg-red-500/15 text-red-600",
    IconComponent: AlertCircle
  }
};

const positionStyles = {
  top: "fixed top-0 left-0 right-0 z-50",
  bottom: "fixed bottom-0 left-0 right-0 z-50"
};

const AlertBanner = ({
  variant = "info",
  message,
  dismissible = false,
  position = "top",
  icon = true,
  className = "",
  autoDismiss = 0
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss > 0) {
      const timer = setTimeout(() => setVisible(false), autoDismiss);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss]);

  if (!visible) return null;

  const { container, button, IconComponent } = variantStyles[variant];

  return (
    <div className={clsx(
      "w-full px-5 py-3 border-b flex items-center gap-3 text-sm font-medium animate-slide-in",
      positionStyles[position],
      container,
      className
    )}>
      {icon && <IconComponent size={18} className="shrink-0" />}
      <span className="flex-1">{message}</span>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          className={clsx("shrink-0 p-1 rounded-md transition-colors", button)}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

AlertBanner.displayName = 'AlertBanner';

export default AlertBanner;
