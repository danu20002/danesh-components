import { clsx } from 'clsx';

const Toggle = ({ checked = false, onChange, label, size = "md", disabled = false }) => {
  const sizes = {
    sm: { track: "w-8 h-5", thumb: "w-3.5 h-3.5", translate: "translate-x-3" },
    md: { track: "w-10 h-6", thumb: "w-4.5 h-4.5", translate: "translate-x-4" },
    lg: { track: "w-12 h-7", thumb: "w-5.5 h-5.5", translate: "translate-x-5" }
  };

  const { track, thumb, translate } = sizes[size];

  return (
    <label className={clsx(
      "inline-flex items-center gap-3 select-none",
      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    )}>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && onChange?.(!checked)}
        className={clsx(
          "relative inline-flex shrink-0 items-center rounded-full transition-colors duration-200",
          track,
          checked ? "bg-[#E31B23]" : "bg-slate-200"
        )}
        disabled={disabled}
      >
        <span className={clsx(
          "inline-block rounded-full bg-white shadow-sm transition-transform duration-200 transform",
          thumb,
          checked ? translate : "translate-x-0.5"
        )} />
      </button>
      {label && <span className="text-sm text-slate-700 font-medium">{label}</span>}
    </label>
  );
};

export default Toggle;
