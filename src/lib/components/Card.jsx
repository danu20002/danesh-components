import { clsx } from 'clsx';

const Card = ({ title, subtitle, children, footer, actions, className = "", hover = false, ...props }) => (
  <div 
    className={clsx(
      "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden",
      hover && "hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-pointer",
      className
    )}
    {...props}
  >
    {(title || subtitle || actions) && (
      <div className="px-6 py-4 border-b border-slate-100 flex items-start justify-between">
        <div>
          {title && <h3 className="font-bold text-slate-900 text-[15px]">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    )}
    <div className="p-6">{children}</div>
    {footer && (
      <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100">{footer}</div>
    )}
  </div>
);

export default Card;
