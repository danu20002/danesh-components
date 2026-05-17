import { useState, useRef, useEffect, useCallback } from 'react';
import { clsx } from 'clsx';

const positionStyles = {
  top: {
    popover: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrow: 'top-full left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-b-transparent',
  },
  bottom: {
    popover: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrow: 'bottom-full left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-t-transparent',
  },
  left: {
    popover: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrow: 'left-full top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-r-transparent',
  },
  right: {
    popover: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrow: 'right-full top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-l-transparent',
  },
};

const alignOffsets = {
  start: { x: 'left-0 -translate-x-0', y: 'top-0 -translate-y-0' },
  center: { x: 'left-1/2 -translate-x-1/2', y: 'top-1/2 -translate-y-1/2' },
  end: { x: 'right-0 translate-x-0', y: 'bottom-0 translate-y-0' },
};

const arrowAlignOffsets = {
  start: { x: 'left-3 -translate-x-0', y: 'top-3 -translate-y-0' },
  center: { x: 'left-1/2 -translate-x-1/2', y: 'top-1/2 -translate-y-1/2' },
  end: { x: 'right-3 translate-x-0', y: 'bottom-3 translate-y-0' },
};

const Popover = ({
  trigger,
  children,
  position = 'bottom',
  align = 'center',
  open: controlledOpen,
  onOpenChange,
  className,
  contentClassName,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const toggleOpen = useCallback(() => {
    const next = !open;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  }, [open, isControlled, onOpenChange]);

  const close = useCallback(() => {
    if (open) {
      if (!isControlled) setInternalOpen(false);
      onOpenChange?.(false);
    }
  }, [open, isControlled, onOpenChange]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        close();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, close]);

  const pos = positionStyles[position];
  const alignX = alignOffsets[align].x;
  const alignY = alignOffsets[align].y;
  const arrowAlignX = arrowAlignOffsets[align].x;
  const arrowAlignY = arrowAlignOffsets[align].y;

  const isVertical = position === 'top' || position === 'bottom';
  const alignClass = isVertical ? alignX : alignY;
  const arrowAlignClass = isVertical ? arrowAlignX : arrowAlignY;

  return (
    <div className={clsx('relative inline-flex', className)}>
      <div ref={triggerRef} onClick={toggleOpen} className="inline-flex cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div
          ref={popoverRef}
          className={clsx(
            'absolute z-50',
            pos.popover,
            alignClass,
          )}
        >
          <div
            className={clsx(
              'theme-bg-card border theme-border-secondary rounded-xl theme-shadow-xl',
              'p-4 min-w-[200px]',
              'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:scale-95',
              contentClassName,
            )}
          >
            {children}
          </div>
          <div
            className={clsx(
              'absolute w-0 h-0',
              'border-theme-border',
              pos.arrow,
              arrowAlignClass,
            )}
          />
        </div>
      )}
    </div>
  );
};

Popover.displayName = 'Popover';

export default Popover;
