import React from 'react';
import { clsx } from 'clsx';

const AvatarGroup = ({ avatars = [], max = 4, size = "md", className = "" }) => {
  const displayed = avatars.slice(0, max);
  const remaining = avatars.length - max;

  const sizes = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-12 h-12 text-sm"
  };

  const overlaps = {
    sm: "-ml-2",
    md: "-ml-3",
    lg: "-ml-4"
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className={clsx("flex items-center", className)}>
      {displayed.map((avatar, i) => (
        <div
          key={i}
          className={clsx(
            "rounded-full border-2 border-white shadow-sm relative",
            sizes[size],
            i > 0 && overlaps[size]
          )}
          style={{ zIndex: displayed.length - i }}
          title={avatar.name}
        >
          {avatar.src ? (
            <img src={avatar.src} alt={avatar.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <div className="w-full h-full rounded-full bg-red-50 text-[#E31B23] flex items-center justify-center font-bold">
              {getInitials(avatar.name)}
            </div>
          )}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={clsx(
            "rounded-full border-2 border-white bg-slate-100 text-slate-600 flex items-center justify-center font-bold shadow-sm",
            sizes[size],
            overlaps[size]
          )}
          style={{ zIndex: 0 }}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
