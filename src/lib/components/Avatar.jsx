import React from 'react';
import { clsx } from 'clsx';
import { User } from 'daneshicons';

const Avatar = ({ src, alt, name, size = "md", status, className = "" }) => {
  const sizes = {
    xs: "w-6 h-6 text-[9px]",
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-12 h-12 text-sm",
    xl: "w-16 h-16 text-lg"
  };

  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-slate-400",
    busy: "bg-red-500",
    away: "bg-amber-500"
  };

  const statusSizes = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-4 h-4"
  };

  const getInitials = (n) => {
    if (!n) return '';
    return n.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className={clsx("relative inline-flex shrink-0", className)}>
      {src ? (
        <img 
          src={src} 
          alt={alt || name} 
          className={clsx("rounded-full object-cover border-2 border-white shadow-sm", sizes[size])}
        />
      ) : (
        <div className={clsx(
          "rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm",
          name ? "bg-red-50 text-[#E31B23]" : "bg-slate-100 text-slate-400",
          sizes[size]
        )}>
          {name ? getInitials(name) : <User size={size === 'xs' ? 12 : size === 'sm' ? 14 : 18} />}
        </div>
      )}
      {status && (
        <span className={clsx(
          "absolute bottom-0 right-0 rounded-full ring-2 ring-white",
          statusColors[status],
          statusSizes[size]
        )} />
      )}
    </div>
  );
};

export default Avatar;
