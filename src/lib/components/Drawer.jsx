import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { X } from 'lucide-react';

const Drawer = React.forwardRef(({
  open,
  onClose,
  title,
  children,
  footer,
  position = 'right',
  size = 'md',
  className = ''
}, ref) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose?.(); };
    if (open) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  const sizeMap = {
    left: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-[calc(100vw-2rem)]'
    },
    right: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-[calc(100vw-2rem)]'
    },
    top: {
      sm: 'max-h-32',
      md: 'max-h-64',
      lg: 'max-h-96',
      xl: 'max-h-[32rem]',
      full: 'max-h-[calc(100vh-2rem)]'
    },
    bottom: {
      sm: 'max-h-32',
      md: 'max-h-64',
      lg: 'max-h-96',
      xl: 'max-h-[32rem]',
      full: 'max-h-[calc(100vh-2rem)]'
    }
  };

  const translateFrom = {
    left: '-translate-x-full',
    right: 'translate-x-full',
    top: '-translate-y-full',
    bottom: 'translate-y-full'
  };

  const panelPosition = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full'
  };

  const isHorizontal = position === 'left' || position === 'right';

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        ref={overlayRef}
        onClick={(e) => e.target === overlayRef.current && onClose?.()}
        className={clsx(
          'fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        ref={ref}
        className={clsx(
          'fixed theme-bg shadow-xl flex flex-col transition-all duration-300 ease-out',
          panelPosition[position],
          isHorizontal ? sizeMap[position][size] : sizeMap[position][size],
          visible ? 'translate-x-0 translate-y-0' : translateFrom[position],
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b theme-border">
            <h3 className="font-bold text-lg theme-text">{title}</h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:theme-bg-hover theme-text-tertiary hover:theme-text transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-6 theme-text">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 theme-bg-secondary border-t theme-border flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
});

Drawer.displayName = 'Drawer';
export default Drawer;
