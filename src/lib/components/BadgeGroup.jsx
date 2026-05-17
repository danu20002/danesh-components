import React from 'react';
import { clsx } from 'clsx';

const spacingMap = {
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-3',
};

const BadgeGroup = ({ children, direction = 'row', spacing = 'md', wrap = false, className = '' }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={clsx(
      'inline-flex items-center',
      direction === 'row' ? 'flex-row' : 'flex-col',
      spacingMap[spacing],
      wrap && 'flex-wrap',
      className
    )}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && direction === 'row' && (
            <span className="w-1 h-1 rounded-full theme-bg-tertiary shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

BadgeGroup.displayName = 'BadgeGroup';
export default BadgeGroup;
