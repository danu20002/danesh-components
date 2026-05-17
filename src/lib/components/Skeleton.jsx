import { clsx } from 'clsx';

const Skeleton = ({ width, height, variant = "rectangular", className = "", lines = 1 }) => {
  const base = "bg-slate-200 animate-pulse";

  const variants = {
    rectangular: "rounded-lg",
    circular: "rounded-full",
    text: "rounded-md h-4"
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={clsx("space-y-2.5", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={clsx(base, variants.text)}
            style={{ width: i === lines - 1 ? '75%' : '100%', height: height || '14px' }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={clsx(base, variants[variant], className)}
      style={{
        width: width || (variant === 'circular' ? '40px' : '100%'),
        height: height || (variant === 'circular' ? '40px' : variant === 'text' ? '14px' : '100px')
      }}
    />
  );
};

export default Skeleton;
