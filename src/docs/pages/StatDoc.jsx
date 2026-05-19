import Stat from '../../lib/components/Stat';
import { TrendingUp, TrendingDown, Users, CreditCard, ShoppingBag, Zap } from 'daneshicons';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const StatDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Stat" />

      <section id="basic-stat">
        <SectionTitle>Basic Stats</SectionTitle>
        <ComponentPreview
          title="Dashboard KPIs"
          code={`import { Stat } from '@danesh-ui/react';

<Stat 
  label="Total Revenue" 
  value="$45,231" 
  icon={CreditCard} 
  trend="+12% from last month"
  trendType="increase"
/>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Stat 
              label="Monthly Revenue" 
              value="$124,592" 
              icon={CreditCard} 
              trend="+14.2%"
              trendType="increase"
            />
            <Stat 
              label="Active Users" 
              value="12,842" 
              icon={Users} 
              trend="+5.1%"
              trendType="increase"
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="variants">
        <SectionTitle>Trend Variations</SectionTitle>
        <ComponentPreview
          title="Positive & Negative Trends"
          code={`<Stat trendType="decrease" trend="-4.5%" ... />
<Stat trendType="neutral" trend="0%" ... />`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Stat 
              label="Churn Rate" 
              value="2.4%" 
              icon={TrendingDown} 
              trend="-0.8%"
              trendType="decrease"
            />
            <Stat 
              label="Server Load" 
              value="42%" 
              icon={Zap} 
              trend="Stable"
              trendType="neutral"
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Stat category title' },
          { name: 'value', type: 'string | number', default: '—', description: 'The main statistical value' },
          { name: 'icon', type: 'DaneshIcon', default: '—', description: 'Category icon' },
          { name: 'trend', type: 'string', default: '—', description: 'Trend percentage or label' },
          { name: 'trendType', type: '"increase" | "decrease" | "neutral"', default: '"neutral"', description: 'Influences trend color and indicator' },
        ]} />
      </section>
    </div>
  );
};

export default StatDoc;
