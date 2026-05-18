import { useState } from 'react';
import { TrendingUp, DollarSign, Users, ShoppingCart, Activity, Settings, GitFork, Star } from 'daneshicons';
import GlassCard from '../../lib/components/GlassCard';
import InteractiveCard from '../../lib/components/InteractiveCard';
import MetricCard from '../../lib/components/MetricCard';
import PricingCard from '../../lib/components/PricingCard';
import ExpandableCard from '../../lib/components/ExpandableCard';
import ProfileCard from '../../lib/components/ProfileCard';
import Button from '../../lib/components/Button';
import Badge from '../../lib/components/Badge';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const CardLabDoc = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Design Lab
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Card <span className="text-red-600">Lab</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          A collection of versatile card components for building modern UIs — from glassmorphism and interactive hover effects to metrics, pricing tables, profiles, and expandable panels.
        </p>
      </header>

      <NoteBlock type="info">
        <strong> Cards:</strong> Each card component is fully theme-aware, responsive, and built for composition. Mix and match variants, effects, and sizes to suit your layout.
      </NoteBlock>

      <div className="flex items-center gap-3 -mt-2 mb-8">
        <Badge variant="warning" size="sm">
          <Star size={10} /> Featured
        </Badge>
        <Badge variant="success" size="sm">
          <TrendingUp size={10} /> Trending
        </Badge>
      </div>

      {/* === Glass Cards === */}
      <SectionTitle>Glass Cards</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Three glassmorphism variants with adjustable backdrop blur and opacity.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {(['glass', 'frost', 'crystal']).map((variant) => (
          <div key={variant} className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[200px] flex items-center justify-center">
            <GlassCard variant={variant} className="p-8 text-center w-full">
              <p className="theme-text text-lg font-bold capitalize">{variant}</p>
              <p className="theme-text-secondary text-sm mt-2">
                {variant === 'glass' ? 'Standard glassmorphism with backdrop blur and subtle border.' :
                 variant === 'frost' ? 'Extra blur for a frosted look with higher opacity.' :
                 'Crisp and clear with reduced blur for better readability.'}
              </p>
            </GlassCard>
          </div>
        ))}
      </div>
      <CodeBlock
        showLineNumbers
        title="GlassCard.jsx"
        code={`<GlassCard variant="glass" className="p-8 text-center">
  <p className="theme-text text-lg font-bold">Glass</p>
  <p className="theme-text-secondary text-sm mt-2">Standard glassmorphism.</p>
</GlassCard>

<GlassCard variant="frost" className="p-8 text-center">
  <p className="theme-text text-lg font-bold">Frost</p>
  <p className="theme-text-secondary text-sm mt-2">Frosted glass look.</p>
</GlassCard>

<GlassCard variant="crystal" className="p-8 text-center">
  <p className="theme-text text-lg font-bold">Crystal</p>
  <p className="theme-text-secondary text-sm mt-2">Crystal clear style.</p>
</GlassCard>

{/* With hover animation */}
<GlassCard hover className="p-8 text-center">
  <p className="theme-text text-lg font-bold">Hover me</p>
</GlassCard>`}
      />

      {/* === Interactive Cards === */}
      <SectionTitle>Interactive Cards</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Four hover effect variants — lift, glow, border gradient, and scale.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {['lift', 'glow', 'border', 'scale'].map((effect) => (
          <div key={effect} className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[200px] flex items-center justify-center">
            <InteractiveCard effect={effect} className="p-8 text-center w-full" badge={effect === 'glow' ? 'Hot' : effect === 'border' ? 'New' : effect === 'scale' ? 'Top' : undefined} badgeVariant={effect === 'glow' ? 'error' : effect === 'scale' ? 'warning' : 'primary'}>
              <p className="theme-text text-base font-bold capitalize">{effect}</p>
              <p className="theme-text-tertiary text-xs mt-1">Hover over me</p>
            </InteractiveCard>
          </div>
        ))}
      </div>
      <CodeBlock
        showLineNumbers
        title="InteractiveCard.jsx"
        code={`<InteractiveCard effect="lift" className="p-8 text-center">
  <p className="theme-text text-lg font-bold">Lift Effect</p>
  <p className="theme-text-secondary text-sm">Hover to lift with shadow.</p>
</InteractiveCard>

<InteractiveCard effect="glow" className="p-8 text-center" badge="Hot">
  <p className="theme-text text-lg font-bold">Glow Effect</p>
  <p className="theme-text-secondary text-sm">Red glow on hover.</p>
</InteractiveCard>

<InteractiveCard effect="border" className="p-8 text-center" badge="New">
  <p className="theme-text text-lg font-bold">Border Effect</p>
  <p className="theme-text-secondary text-sm">Gradient border reveal.</p>
</InteractiveCard>

<InteractiveCard effect="scale" className="p-8 text-center">
  <p className="theme-text text-lg font-bold">Scale Effect</p>
  <p className="theme-text-secondary text-sm">Smooth scale up.</p>
</InteractiveCard>`}
      />

      {/* === Metric Cards === */}
      <SectionTitle>Metric Cards</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Data-driven cards with trend indicators, icons, and multiple size options.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[200px] flex items-center justify-center">
          <MetricCard title="Revenue" value="$42,580" trend="up" trendLabel="12.5%" icon={DollarSign} variant="primary" className="w-full" />
        </div>
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[200px] flex items-center justify-center">
          <MetricCard title="Users" value="24,390" trend="up" trendLabel="8.2%" icon={Users} variant="info" className="w-full" />
        </div>
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[200px] flex items-center justify-center">
          <MetricCard title="Orders" value="1,842" trend="down" trendLabel="3.1%" icon={ShoppingCart} variant="warning" className="w-full" />
        </div>
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[200px] flex items-center justify-center">
          <MetricCard title="Engagement" value="87.4%" trend="up" trendLabel="5.7%" icon={Activity} variant="success" className="w-full" />
        </div>
      </div>
      <CodeBlock
        showLineNumbers
        title="MetricCard.jsx"
        code={`import { DollarSign, TrendingUp } from 'daneshicons';

<MetricCard
  title="Revenue"
  value="$42,580"
  trend="up"
  trendLabel="12.5%"
  icon={DollarSign}
  variant="primary"
/>

<MetricCard
  title="Users"
  value="24,390"
  trend="up"
  trendLabel="8.2%"
  icon={Users}
  variant="info"
/>

{/* Sizes: sm | md | lg */}
<MetricCard size="sm" title="Bounce" value="3.2%" trend="down" icon={Activity} variant="warning" />

{/* Without trend or icon */}
<MetricCard title="Total" value="$120K" variant="success" />`}
      />

      {/* === Pricing Cards === */}
      <SectionTitle>Pricing Cards</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Feature-rich pricing cards with optional popular badge and custom CTA.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[300px] flex items-center justify-center">
          <PricingCard
            title="Starter"
            price="$19"
            period="/month"
            description="For solo creators"
            features={['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support', '1 Team Member']}
            className="w-full"
          />
        </div>
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[300px] flex items-center justify-center">
          <PricingCard
            title="Pro"
            price="$49"
            period="/month"
            description="For growing teams"
            features={['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'Unlimited Team Members', 'Custom Domains', 'API Access']}
            popular
            cta={<Button fullWidth>Get Started</Button>}
            className="w-full"
          />
        </div>
      </div>
      <CodeBlock
        showLineNumbers
        title="PricingCard.jsx"
        code={`import Button from '../../lib/components/Button';

<PricingCard
  title="Starter"
  price="$19"
  period="/month"
  description="For solo creators"
  features={['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support']}
/>

{/* Popular variant */}
<PricingCard
  title="Pro"
  price="$49"
  period="/month"
  description="For growing teams"
  features={['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support']}
  popular
  cta={<Button fullWidth>Get Started</Button>}
/>`}
      />

      {/* === Expandable Cards === */}
      <SectionTitle>Expandable Cards</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Collapsible card panels with smooth height animation. Controlled or uncontrolled.</p>
      <div className="mb-8">
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[200px] flex items-center justify-center">
          <div className="w-full max-w-lg">
            <ExpandableCard
              title="Advanced Settings"
              subtitle="Configure your application preferences"
              icon={Settings}
              expanded={expanded}
              onClick={() => setExpanded(!expanded)}
            >
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between py-2 border-b theme-border-secondary">
                  <span className="text-sm theme-text">Dark Mode</span>
                  <span className="text-xs theme-text-tertiary">Coming soon</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b theme-border-secondary">
                  <span className="text-sm theme-text">Notifications</span>
                  <span className="text-xs theme-text-tertiary">Enabled</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm theme-text">Auto Save</span>
                  <span className="text-xs theme-text-tertiary">Every 30s</span>
                </div>
              </div>
            </ExpandableCard>
          </div>
        </div>
      </div>
      <CodeBlock
        showLineNumbers
        title="ExpandableCard.jsx"
        code={`import { useState } from 'react';
import { Settings } from 'daneshicons';
import ExpandableCard from '../../lib/components/ExpandableCard';

const [expanded, setExpanded] = useState(false);

<ExpandableCard
  title="Advanced Settings"
  subtitle="Configure your preferences"
  icon={Settings}
  expanded={expanded}
  onClick={() => setExpanded(!expanded)}
>
  <div className="space-y-3 pt-2">
    <p className="text-sm theme-text-secondary">
      Your expanded content goes here.
    </p>
  </div>
</ExpandableCard>

{/* Uncontrolled usage */}
<ExpandableCard
  title="FAQ"
  subtitle="Frequently asked questions"
  defaultExpanded
>
  <p className="text-sm theme-text-secondary">Answer content...</p>
</ExpandableCard>`}
      />

      {/* === Profile Cards === */}
      <SectionTitle>Profile Cards</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">User profile cards with avatar, stats, and action slots.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[250px] flex items-center justify-center">
          <ProfileCard
            name="Alex Morgan"
            role="Senior Product Designer"
            initials="AM"
            stats={[
              { label: 'Projects', value: '48' },
              { label: 'Clients', value: '24' },
              { label: 'Rating', value: '4.9' },
            ]}
            actions={
              <>
                <Button size="sm" variant="secondary">Profile</Button>
                <Button size="sm">Follow</Button>
              </>
            }
            className="w-full"
          />
        </div>
        <div className="p-6 rounded-2xl theme-bg-preview border theme-border-secondary dot-pattern min-h-[250px] flex items-center justify-center">
          <ProfileCard
            name="Sarah Chen"
            role="Full-Stack Developer"
            initials="SC"
            stats={[
              { label: 'Repos', value: '86' },
              { label: 'Stars', value: '1.2k' },
              { label: 'Contribs', value: '340' },
            ]}
            actions={
              <>
                <Button size="sm" variant="secondary" icon={GitFork}>GitHub</Button>
                <Button size="sm">Hire</Button>
              </>
            }
            className="w-full"
          />
        </div>
      </div>
      <CodeBlock
        showLineNumbers
        title="ProfileCard.jsx"
        code={`import ProfileCard from '../../lib/components/ProfileCard';
import Button from '../../lib/components/Button';

<ProfileCard
  name="Alex Morgan"
  role="Senior Product Designer"
  initials="AM"
  stats={[
    { label: 'Projects', value: '48' },
    { label: 'Clients', value: '24' },
    { label: 'Awards', value: '6' },
  ]}
  actions={
    <>
      <Button size="sm" variant="secondary">Profile</Button>
      <Button size="sm">Follow</Button>
    </>
  }
/>

{/* With avatar image */}
<ProfileCard
  name="Sarah Chen"
  role="Full-Stack Developer"
  avatar="/avatars/sarah.jpg"
  stats={[
    { label: 'Repos', value: '86' },
    { label: 'Stars', value: '1.2k' },
  ]}
/>`}
      />

      {/* === Usage === */}
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        showLineNumbers
        title="Import all cards"
        code={`import GlassCard from './components/GlassCard';
import InteractiveCard from './components/InteractiveCard';
import MetricCard from './components/MetricCard';
import PricingCard from './components/PricingCard';
import ExpandableCard from './components/ExpandableCard';
import ProfileCard from './components/ProfileCard';`}
      />
    </div>
  );
};

export default CardLabDoc;
