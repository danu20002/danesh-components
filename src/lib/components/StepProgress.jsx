import React from 'react';
import { clsx } from 'clsx';
import { Check } from 'daneshicons';

const StepProgress = ({
  steps = [],
  currentStep = 0,
  variant = 'default',
  orientation = 'horizontal',
  className = '',
}) => {
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={clsx(
        'flex',
        isVertical ? 'flex-col' : 'items-center',
        className
      )}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === steps.length - 1;
        const Icon = step.icon;

        return (
          <React.Fragment key={index}>
            <div
              className={clsx(
                'flex items-center gap-3',
                isVertical ? 'flex-row' : 'flex-col'
              )}
            >
              <div
                className={clsx(
                  'relative flex items-center justify-center rounded-full transition-all duration-300 shrink-0 w-8 h-8',
                  isCompleted &&
                    'bg-[#E31B23] text-white border-2 border-[#E31B23]',
                  isCurrent &&
                    'border-2 border-[#E31B23] text-[#E31B23] animate-pulse',
                  !isCompleted &&
                    !isCurrent &&
                    'border-2 border-[var(--theme-border)] text-[var(--theme-text-muted)]'
                )}
              >
                {isCompleted && variant !== 'numbered' ? (
                  <Check className="w-4 h-4" />
                ) : variant === 'numbered' ? (
                  <span className="text-xs font-bold">{index + 1}</span>
                ) : variant === 'icon' && Icon ? (
                  <Icon className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
              </div>

              {(step.title || step.description) && (
                <div
                  className={clsx(
                    isVertical ? 'flex-1 min-w-0 py-3' : 'text-center'
                  )}
                >
                  <div
                    className={clsx(
                      'text-sm font-medium',
                      isCompleted && 'text-[var(--theme-text)]',
                      isCurrent && 'text-[#E31B23] font-semibold',
                      !isCompleted && !isCurrent && 'text-[var(--theme-text-muted)]'
                    )}
                  >
                    {step.title}
                  </div>
                  {step.description && (
                    <div className="text-xs text-[var(--theme-text-tertiary)] mt-0.5">
                      {step.description}
                    </div>
                  )}
                </div>
              )}
            </div>

            {!isLast && (
              <div
                className={clsx(
                  'shrink-0',
                  isVertical ? 'w-0.5 h-8 ml-4' : 'h-0.5 w-12 mx-2'
                )}
              >
                <div
                  className={clsx(
                    'h-full w-full rounded-full transition-all duration-500',
                    isCompleted
                      ? 'bg-[#E31B23]'
                      : 'bg-[var(--theme-bg-tertiary)]'
                  )}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

StepProgress.displayName = 'StepProgress';
export default StepProgress;
