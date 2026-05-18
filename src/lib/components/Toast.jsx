import { useState, useEffect, useCallback } from 'react';
import { clsx } from 'clsx';
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from 'daneshicons';

let toastId = 0;
const listeners = new Set();
let toasts = [];

const updateToasts = (newToasts) => {
  toasts = newToasts;
  listeners.forEach((fn) => fn(toasts));
};

export const toast = {
  _add(variant, title, options = {}) {
    const id = ++toastId;
    const newToast = { id, variant, title, ...options };
    updateToasts([...toasts, newToast]);
    
    const duration = options.duration || 4000;
    if (duration > 0) {
      setTimeout(() => {
        updateToasts(toasts.filter(t => t.id !== id));
      }, duration);
    }
    return id;
  },
  success: (title, opts) => toast._add('success', title, opts),
  error: (title, opts) => toast._add('error', title, opts),
  warning: (title, opts) => toast._add('warning', title, opts),
  info: (title, opts) => toast._add('info', title, opts),
  dismiss: (id) => updateToasts(toasts.filter(t => t.id !== id)),
  dismissAll: () => updateToasts([])
};

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info
};

const styles = {
  success: "border-emerald-200 bg-white",
  error: "border-red-200 bg-white",
  warning: "border-amber-200 bg-white",
  info: "border-blue-200 bg-white"
};

const iconStyles = {
  success: "text-emerald-500",
  error: "text-red-500",
  warning: "text-amber-500",
  info: "text-blue-500"
};

const ToastContainer = ({ position = "bottom-right" }) => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const listener = (t) => setCurrent([...t]);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
  };

  if (current.length === 0) return null;

  return (
    <div className={clsx("fixed z-[100] flex flex-col gap-2 pointer-events-none", positions[position])}>
      {current.map((t) => {
        const IconComp = icons[t.variant];
        return (
          <div
            key={t.id}
            className={clsx(
              "pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg min-w-[320px] max-w-[420px] animate-slide-in",
              styles[t.variant]
            )}
          >
            <IconComp className={clsx("shrink-0 mt-0.5", iconStyles[t.variant])} size={18} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900">{t.title}</p>
              {t.description && <p className="text-xs text-slate-500 mt-0.5">{t.description}</p>}
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="shrink-0 p-0.5 rounded-md hover:bg-slate-100 text-slate-400 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
