import { clsx } from 'clsx';
import { AlertTriangle, Info, X } from 'lucide-react';
import Modal from './Modal';
import Button from './Button';

const variantStyles = {
  danger: {
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400',
    IconComponent: AlertTriangle,
    buttonVariant: 'danger'
  },
  warning: {
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    IconComponent: AlertTriangle,
    buttonVariant: 'primary'
  },
  info: {
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    IconComponent: Info,
    buttonVariant: 'primary'
  }
};

const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger',
  loading = false,
  icon: IconOverride,
  className = ''
}) => {
  const { iconBg, iconColor, IconComponent, buttonVariant } = variantStyles[variant];
  const Icon = IconOverride || IconComponent;

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="sm"
      className={clsx('theme-bg', className)}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <Button
            variant="ghost"
            onClick={onClose}
            disabled={loading}
          >
            {cancelLabel}
          </Button>
          <Button
            variant={buttonVariant}
            onClick={onConfirm}
            loading={loading}
          >
            {confirmLabel}
          </Button>
        </div>
      }
    >
      <div className="text-center">
        <div className={clsx(
          'mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4',
          iconBg
        )}>
          <Icon className={iconColor} size={24} />
        </div>
        {title && (
          <h3 className="text-lg font-bold theme-text mb-2">{title}</h3>
        )}
        {message && (
          <p className="theme-text-secondary text-sm leading-relaxed">{message}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 rounded-lg hover:theme-bg-hover theme-text-tertiary hover:theme-text transition-colors cursor-pointer"
      >
        <X size={16} />
      </button>
    </Modal>
  );
};

ConfirmDialog.displayName = 'ConfirmDialog';
export default ConfirmDialog;
