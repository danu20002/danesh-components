import React from 'react';
import { clsx } from 'clsx';
import { RefreshCw } from 'lucide-react';

const Button = React.forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  icon: Icon, 
  iconRight: IconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  square = false,
  animation = "none", // none | shine | slide | pulse | glitch | wave | shimmer | reveal
  rounded = "default", // default | full | none | sap
  badge = null,
  iconOnly = false,
  delay = 0, // animation delay in ms
  ...props 
}, ref) => {
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none relative overflow-hidden group";
  
  const variants = {
    // Core Variants
    primary: "bg-[#E31B23] text-white hover:bg-[#C4171E] shadow-[0_4px_14px_0_rgba(227,27,35,0.39)] hover:shadow-[0_6px_20px_rgba(227,27,35,0.23)] border-b-2 border-red-800",
    secondary: "theme-bg-secondary theme-text border theme-border hover:theme-bg-hover theme-shadow-sm hover:theme-shadow-md",
    outline: "bg-transparent theme-text-active border-2 theme-border-active hover:theme-bg-active",
    ghost: "bg-transparent theme-text-secondary hover:theme-bg-hover hover:theme-text",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-[0_4px_14px_0_rgba(239,68,68,0.39)]",
    success: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)]",
    soft: "bg-[#E31B23]/10 text-[#E31B23] hover:bg-[#E31B23]/20 border border-[#E31B23]/20",
    glass: "glass theme-text border border-white/20 hover:bg-white/10 dark:hover:bg-white/5",
    glow: "bg-[#E31B23] text-white hover:bg-[#C4171E] shadow-[0_0_20px_rgba(227,27,35,0.4)] hover:shadow-[0_0_30_rgba(227,27,35,0.6)]",
    link: "bg-transparent theme-text-active hover:underline underline-offset-4 p-0",

    // SAP Fiori / Enterprise Variants
    fiori: "bg-white border-slate-300 text-[#0064d1] hover:bg-slate-50 hover:border-[#0064d1] active:bg-[#e5effa]",
    emphasized: "bg-[#0064d1] border-[#0064d1] text-white hover:bg-[#0056b3] hover:border-[#0056b3] active:bg-[#004085]",
    accept: "bg-white border-[#107e3e] text-[#107e3e] hover:bg-[#107e3e]/5 active:bg-[#107e3e]/15",
    reject: "bg-white border-[#bb0000] text-[#bb0000] hover:bg-[#bb0000]/5 active:bg-[#bb0000]/15",
    attention: "bg-white border-[#e9730c] text-[#e9730c] hover:bg-[#e9730c]/5 active:bg-[#e9730c]/15",
    negative: "bg-[#bb0000] border-[#bb0000] text-white hover:bg-[#930000] active:bg-[#700000]",
    positive: "bg-[#107e3e] border-[#107e3e] text-white hover:bg-[#0b5d2d] active:bg-[#084521]",
    transparent: "bg-transparent border-transparent text-[#0064d1] hover:bg-[#0064d1]/5 active:bg-[#0064d1]/15"
  };

  const sizes = {
    xs: "px-2.5 py-1 text-[11px] gap-1",
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3 text-base gap-2.5",
    xl: "px-10 py-4 text-lg gap-3"
  };

  const roundedClasses = {
    default: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
    sap: "rounded-[0.5rem]"
  };

  const animationClasses = {
    none: "",
    shine: "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_2s_infinite] hover:before:translate-x-full before:transition-transform before:duration-1000",
    slide: "hover:gap-4 transition-all duration-300",
    pulse: "animate-sync-pulse",
    glitch: "hover:animate-[glitch_0.3s_infinite]",
    wave: "animate-sync-wave",
    shimmer: "overflow-hidden", // Handled by overlay below
    reveal: "group" // Handled by overlay below
  };

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      style={{ animationDelay: `${delay}ms` }}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        roundedClasses[rounded],
        animationClasses[animation],
        fullWidth && "w-full",
        square && "aspect-square p-0",
        iconOnly && "w-10 h-10 p-0",
        className
      )}
      {...props}
    >
      {loading ? (
        <RefreshCw size={16} className="animate-spin" />
      ) : (
        <>
          {Icon && <Icon size={18} className={clsx("shrink-0", animation === "slide" && "group-hover:translate-x-1 transition-transform")} />}
          {!iconOnly && <span>{children}</span>}
          {IconRight && <IconRight size={18} className={clsx("shrink-0", animation === "slide" && "group-hover:translate-x-1 transition-transform")} />}
          
          {badge && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#bb0000] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform">
              {badge}
            </span>
          )}

          {/* Special Animation Overlays */}
          {animation === "shine" && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          )}

          {animation === "shimmer" && (
            <div 
              style={{ animationDelay: `${delay}ms` }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sync-shimmer" 
            />
          )}

          {animation === "reveal" && (
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-1" />
          )}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
