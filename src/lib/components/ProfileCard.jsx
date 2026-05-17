import { clsx } from 'clsx';

const ProfileCard = ({ name, role, avatar, initials, stats = [], actions, className, ...props }) => {
  return (
    <div
      className={clsx(
        'rounded-2xl theme-bg-card border theme-border theme-shadow-sm p-6',
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center text-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#E31B23]/20"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-[#E31B23] flex items-center justify-center text-white text-xl font-bold">
            {initials || name?.charAt(0) || '?'}
          </div>
        )}
        <div>
          <h3 className="text-base font-bold theme-text">{name}</h3>
          {role && <p className="text-sm theme-text-secondary mt-0.5">{role}</p>}
        </div>
      </div>
      {stats.length > 0 && (
        <div className="flex items-center justify-center gap-6 mt-5 pt-5 border-t theme-border-secondary">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-lg font-bold theme-text">{stat.value}</p>
              <p className="text-[11px] theme-text-tertiary font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      {actions && <div className="mt-5 flex items-center justify-center gap-2">{actions}</div>}
    </div>
  );
};

ProfileCard.displayName = 'ProfileCard';
export default ProfileCard;
