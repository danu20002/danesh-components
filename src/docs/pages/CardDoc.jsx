import { MoreHorizontal, TrendingUp, Zap } from 'daneshicons';
import Card from '../../lib/components/Card';
import Button from '../../lib/components/Button';
import Badge from '../../lib/components/Badge';
import { ComponentPreview, PropsTable, SectionTitle, NoteBlock } from '../DocComponents';

const CardDoc = () => {
  return (
    <div className="space-y-10">
      <NoteBlock type="tip">
        Explore our <strong>Card Lab</strong> for advanced card variants like Glass, Interactive, Metric, Pricing, Expandable, and Profile cards.
      </NoteBlock>

      {/* Basic */}
      <section>
        <SectionTitle>Basic Card</SectionTitle>
        <ComponentPreview
          title="Simple Card"
          code={`import { Card } from '@danesh-ui/react';

<Card title="Revenue Summary" subtitle="Updated 2 mins ago">
  <div className="h-24 flex flex-col justify-center">
    <h2 className="text-3xl font-bold theme-text">$42,500.00</h2>
    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">+12.5% from last month</p>
  </div>
</Card>`}
        >
          <div className="w-full max-w-md">
            <Card title="Revenue Summary" subtitle="Updated 2 mins ago">
              <div className="h-24 flex flex-col justify-center">
                <h2 className="text-3xl font-bold theme-text">$42,500.00</h2>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">+12.5% from last month</p>
              </div>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* With Footer */}
      <section>
        <SectionTitle>With Footer</SectionTitle>
        <ComponentPreview
          title="Footer Card"
          code={`<Card 
  title="Monthly Report" 
  subtitle="Jan 2024"
  footer={<Button size="sm" variant="ghost">View Full Report</Button>}
>
  <p className="text-sm theme-text-secondary">
    Total orders: 1,248 | Revenue: $89,340
  </p>
</Card>`}
        >
          <div className="w-full max-w-md">
            <Card 
              title="Monthly Report" 
              subtitle="Jan 2024"
              footer={<Button size="sm" variant="ghost">View Full Report</Button>}
            >
              <p className="text-sm theme-text-secondary">
                Total orders: 1,248 | Revenue: $89,340
              </p>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* With Actions */}
      <section>
        <SectionTitle>With Header Actions</SectionTitle>
        <ComponentPreview
          title="Card with Actions"
          code={`<Card 
  title="Team Members" 
  subtitle="5 active"
  actions={
    <Button size="xs" variant="ghost" icon={MoreHorizontal} />
  }
>
  <p className="text-sm theme-text-secondary">Manage your team and permissions.</p>
</Card>`}
        >
          <div className="w-full max-w-md">
            <Card 
              title="Team Members" 
              subtitle="5 active"
              actions={
                <Button size="xs" variant="ghost" icon={MoreHorizontal} />
              }
            >
              <p className="text-sm theme-text-secondary">Manage your team and permissions.</p>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* Hoverable */}
      <section>
        <SectionTitle>Hover Effect</SectionTitle>
        <ComponentPreview
          title="Hoverable Cards"
          code={`<Card hover title="Hover me!">
  <p className="text-sm theme-text-secondary">
    I have a subtle lift effect on hover.
  </p>
</Card>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Card hover title="Analytics" subtitle="Real-time">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-emerald-500" />
                <span className="text-2xl font-bold theme-text">2,845</span>
                <Badge variant="success" size="sm">+8.2%</Badge>
              </div>
            </Card>
            <Card hover title="Performance" subtitle="Last 24h">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-amber-500" />
                <span className="text-2xl font-bold theme-text">99.8%</span>
                <Badge variant="success" size="sm">Uptime</Badge>
              </div>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* Grid Layout */}
      <section>
        <SectionTitle>Card Grid</SectionTitle>
        <ComponentPreview
          title="Quick Actions Grid"
          code={`<Card title="Quick Actions">
  <div className="grid grid-cols-2 gap-3">
    <Button variant="secondary" size="sm" className="w-full">Export</Button>
    <Button variant="secondary" size="sm" className="w-full">Share</Button>
    <Button variant="secondary" size="sm" className="w-full">Audit</Button>
    <Button variant="secondary" size="sm" className="w-full">Pause</Button>
  </div>
</Card>`}
        >
          <div className="w-full max-w-md">
            <Card title="Quick Actions">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="secondary" size="sm" className="w-full">Export</Button>
                <Button variant="secondary" size="sm" className="w-full">Share</Button>
                <Button variant="secondary" size="sm" className="w-full">Audit</Button>
                <Button variant="secondary" size="sm" className="w-full">Pause</Button>
              </div>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* API */}
      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'title', type: 'string', default: '—', description: 'Card header title' },
          { name: 'subtitle', type: 'string', default: '—', description: 'Card header subtitle' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Card body content' },
          { name: 'footer', type: 'ReactNode', default: '—', description: 'Footer content area' },
          { name: 'actions', type: 'ReactNode', default: '—', description: 'Header right-side actions' },
          { name: 'hover', type: 'boolean', default: 'false', description: 'Enable hover lift effect' },
          { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        ]} />
      </section>
    </div>
  );
};

export default CardDoc;
