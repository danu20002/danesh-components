import { clsx } from 'clsx';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, period = '/month', description, features = [], cta, popular = false, className, ...props }) => {
  return (
    <div
      className={clsx(
        'relative rounded-2xl theme-bg-card border theme-shadow-sm theme-transition flex flex-col',
        popular
          ? 'border-[#E31B23]/30 shadow-lg scale-[1.02] z-10'
          : 'theme-border hover:theme-shadow-md',
        className
      )}
      {...props}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-[#E31B23] rounded-full shadow-md">
            Popular
          </span>
        </div>
      )}
      <div className={clsx('p-6 flex flex-col gap-2', popular && 'pt-8')}>
        <h3 className="text-lg font-bold theme-text">{title}</h3>
        {description && <p className="text-sm theme-text-secondary">{description}</p>}
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-4xl font-extrabold theme-text">{price}</span>
          <span className="text-sm theme-text-tertiary font-medium">{period}</span>
        </div>
      </div>
      {features.length > 0 && (
        <div className="px-6 pb-6 flex-1">
          <ul className="flex flex-col gap-2.5">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cta && <div className="px-6 pb-6">{cta}</div>}
    </div>
  );
};

PricingCard.displayName = 'PricingCard';
export default PricingCard;
