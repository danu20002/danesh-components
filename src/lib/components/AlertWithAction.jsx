import { useState } from 'react';
import { clsx } from 'clsx';
import { X, Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import Button from './Button';

const variantConfig = {
  info: {
    IconComponent: Info,
    iconColor: "text-blue-500",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    buttonVariant: "primary"
  },
  success: {
    IconComponent: CheckCircle2,
    iconColor: "text-emerald-500",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    buttonVariant: "success"
  },
  warning: {
    IconComponent: AlertTriangle,
    iconColor: "text-amber-500",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    buttonVariant: "primary"
  },
  error: {
    IconComponent: AlertCircle,
    iconColor: "text-red-500",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    buttonVariant: "danger"
  }
};

const actionVariants = {
  primary: "primary",
  outline: "outline",
  ghost: "ghost"
};

const AlertWithAction = ({
  variant = "info",
  title,
  children,
  actionLabel = "Action",
  onAction,
  actionVariant = "primary",
  dismissible = false,
  className = ""
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const { IconComponent, iconColor, border, bg, buttonVariant } = variantConfig[variant];

  return (
    <div className={clsx(
      "relative p-4 rounded-xl border theme-bg-card",
      border,
      bg,
      className
    )}>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 p-0.5 rounded-md hover:bg-black/5 theme-text-muted transition-colors"
        >
          <X size={16} />
        </button>
      )}

      <div className="flex gap-3">
        <IconComponent size={20} className={clsx("shrink-0 mt-0.5", iconColor)} />
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="text-sm font-bold theme-text mb-1">{title}</h4>
          )}
          <div className="text-sm theme-text-secondary">{children}</div>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <Button
          variant={actionVariants[actionVariant] || buttonVariant}
          size="sm"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};

AlertWithAction.displayName = 'AlertWithAction';

export default AlertWithAction;
