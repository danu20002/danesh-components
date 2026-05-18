import { useState } from 'react';
import { Bell, Mail, Zap, MessageSquare, Heart, Star, Check, Copy } from 'daneshicons';
import Badge from '../../lib/components/Badge';
import StatusBadge from '../../lib/components/StatusBadge';
import NotificationBadge from '../../lib/components/NotificationBadge';
import BadgeGroup from '../../lib/components/BadgeGroup';
import PulsingBadge from '../../lib/components/PulsingBadge';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const LabItem = ({ children, title, index, code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative theme-bg border theme-border-secondary rounded-3xl p-6 hover:theme-shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="h-28 flex items-center justify-center mb-6">
        {children}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">#{String(index).padStart(2, '0')}</span>
          <span className="text-xs font-bold theme-text group-hover:theme-text-active transition-colors">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className={`p-2 rounded-lg transition-all ${copied ? 'bg-emerald-500/10 text-emerald-500' : 'theme-bg-secondary theme-text-tertiary hover:theme-text-active'}`}
          title="Copy Component Code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};

const BadgeLabDoc = () => {
  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Design Lab
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Badge <span className="text-red-600">Lab</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          A gallery of badge components for status indicators, notification counters, grouped labels, and animated pulsing badges.
          Every component includes a <strong>one-click copy</strong> feature for instant integration.
        </p>
      </header>

      <NoteBlock type="info">
        <strong>🎯 Badge Family:</strong> StatusBadge shows user presence (online/offline), NotificationBadge displays counts, BadgeGroup arranges multiple badges, and PulsingBadge adds attention-grabbing animations — all fully themeable.
      </NoteBlock>

      {/* === Status Badges === */}
      <SectionTitle>Status Badges</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Presence indicators with a colored dot and optional pulsing animation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { status: 'online', label: 'Online', pulsing: false },
          { status: 'offline', label: 'Offline', pulsing: false },
          { status: 'busy', label: 'Busy', pulsing: false },
          { status: 'away', label: 'Away', pulsing: false },
          { status: 'pending', label: 'Pending', pulsing: false },
          { status: 'online', label: 'Online (Pulse)', pulsing: true },
          { status: 'busy', label: 'Busy (Pulse)', pulsing: true },
          { status: 'pending', label: 'Pending (Pulse)', pulsing: true },
          { status: 'away', label: 'Away (Pulse)', pulsing: true },
        ].map((item, idx) => (
          <LabItem key={idx} title={`StatusBadge: ${item.label}`} index={idx + 1} code={`<StatusBadge status="${item.status}" label="${item.label}"${item.pulsing ? ' pulsing' : ''} />`}>
            <StatusBadge status={item.status} label={item.label} pulsing={item.pulsing} />
          </LabItem>
        ))}
      </div>
      <CodeBlock
        title="StatusBadge.jsx"
        code={`<StatusBadge status="online" label="Online" />
<StatusBadge status="offline" label="Offline" />
<StatusBadge status="busy" label="Busy" />
<StatusBadge status="away" label="Away" />
<StatusBadge status="pending" label="Pending" />
<StatusBadge status="online" label="Online" pulsing />
<StatusBadge status="busy" label="Busy" pulsing />
<StatusBadge status="pending" label="Pending" pulsing />`}
      />

      {/* === Notification Badges === */}
      <SectionTitle>Notification Badges</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Icon badges with count display, multiple variants, sizes, and dot mode.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { icon: Bell, count: 3, variant: 'primary', size: 'md', label: '3 Notifications' },
          { icon: Mail, count: 42, variant: 'success', size: 'md', label: '42 Messages' },
          { icon: Bell, count: 100, variant: 'warning', size: 'md', label: '100+ Alerts' },
          { icon: MessageSquare, count: 99, variant: 'error', size: 'md', label: '99+ Replies' },
          { icon: Bell, count: 5, variant: 'primary', size: 'sm', label: 'Small Badge' },
          { icon: Bell, count: 5, variant: 'primary', size: 'lg', label: 'Large Badge' },
          { icon: Heart, dot: true, variant: 'error', size: 'md', label: 'Dot (Error)' },
          { icon: Star, dot: true, variant: 'warning', size: 'md', label: 'Dot (Warning)' },
          { icon: Bell, dot: true, variant: 'success', size: 'md', label: 'Dot (Success)' },
        ].map((item, idx) => {
          const Icon = item.icon;
          const code = item.dot
            ? `<NotificationBadge variant="${item.variant}" size="${item.size}" dot />`
            : `<NotificationBadge count={${item.count}} variant="${item.variant}" size="${item.size}" />`;
          return (
            <LabItem key={idx} title={`NotificationBadge: ${item.label}`} index={idx + 1} code={code}>
              <div className="relative">
                <Icon className="w-6 h-6 theme-text-secondary" />
                <NotificationBadge count={item.count} variant={item.variant} size={item.size} dot={item.dot} />
              </div>
            </LabItem>
          );
        })}
      </div>
      <CodeBlock
        title="NotificationBadge.jsx"
        code={`{/* With count */}
<NotificationBadge count={3} variant="primary" />
<NotificationBadge count={42} variant="success" />
<NotificationBadge count={100} variant="warning" />
<NotificationBadge count={99} variant="error" />

{/* Dot mode */}
<NotificationBadge variant="error" dot />
<NotificationBadge variant="warning" dot />
<NotificationBadge variant="success" dot />

{/* Sizes */}
<NotificationBadge count={5} size="sm" />
<NotificationBadge count={5} size="md" />
<NotificationBadge count={5} size="lg" />`}
      />

      {/* === Badge Groups === */}
      <SectionTitle>Badge Groups</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Multiple badges arranged in a row or column with separators between them.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            title: 'Row Group',
            direction: 'row',
            badges: [
              { variant: 'primary', children: 'React' },
              { variant: 'success', children: 'Vue' },
              { variant: 'info', children: 'Svelte' },
            ],
          },
          {
            title: 'Row w/ Dot',
            direction: 'row',
            badges: [
              { variant: 'primary', dot: true, children: 'Deploy' },
              { variant: 'warning', dot: true, children: 'Review' },
              { variant: 'success', dot: true, children: 'Done' },
            ],
          },
          {
            title: 'Column Group',
            direction: 'col',
            badges: [
              { variant: 'primary', children: 'Admin' },
              { variant: 'warning', children: 'Editor' },
              { variant: 'outline', children: 'Viewer' },
            ],
          },
          {
            title: 'Tech Stack',
            direction: 'row',
            badges: [
              { variant: 'primary', children: 'TypeScript' },
              { variant: 'info', children: 'Tailwind' },
              { variant: 'success', children: 'React' },
              { variant: 'warning', children: 'Node' },
            ],
          },
          {
            title: 'Status Pipeline',
            direction: 'row',
            badges: [
              { variant: 'warning', dot: true, children: 'Build' },
              { variant: 'info', dot: true, children: 'Test' },
              { variant: 'error', dot: true, children: 'Lint' },
              { variant: 'success', dot: true, children: 'Deploy' },
            ],
          },
          {
            title: 'Wrapped Group',
            direction: 'row',
            wrap: true,
            badges: [
              { variant: 'primary', children: 'alpha' },
              { variant: 'success', children: 'beta' },
              { variant: 'warning', children: 'gamma' },
              { variant: 'error', children: 'delta' },
              { variant: 'info', children: 'epsilon' },
              { variant: 'outline', children: 'zeta' },
            ],
          },
        ].map((item, idx) => {
          const spacing = item.badges.length > 5 ? 'sm' : 'md';
          const code = `<BadgeGroup direction="${item.direction === 'col' ? 'column' : 'row'}" spacing="${spacing}"${item.wrap ? ' wrap' : ''}>
  ${item.badges.map(b => `<Badge variant="${b.variant}"${b.dot ? ' dot' : ''}>${b.children}</Badge>`).join('\n  ')}
</BadgeGroup>`;
          return (
            <LabItem key={idx} title={`BadgeGroup: ${item.title}`} index={idx + 1} code={code}>
              <BadgeGroup direction={item.direction} spacing={spacing} wrap={item.wrap}>
                {item.badges.map((b, i) => (
                  <Badge key={i} variant={b.variant} dot={b.dot}>{b.children}</Badge>
                ))}
              </BadgeGroup>
            </LabItem>
          );
        })}
      </div>
      <CodeBlock
        title="BadgeGroup.jsx"
        code={`import BadgeGroup from '@danesh-ui/react/BadgeGroup';
import Badge from '@danesh-ui/react/Badge';

{/* Row group */}
<BadgeGroup direction="row" spacing="md">
  <Badge variant="primary">React</Badge>
  <Badge variant="success">Vue</Badge>
  <Badge variant="info">Svelte</Badge>
</BadgeGroup>

{/* Column group */}
<BadgeGroup direction="column" spacing="md">
  <Badge variant="primary">Admin</Badge>
  <Badge variant="warning">Editor</Badge>
  <Badge variant="outline">Viewer</Badge>
</BadgeGroup>

{/* With wrap */}
<BadgeGroup direction="row" spacing="sm" wrap>
  <Badge variant="primary">alpha</Badge>
  <Badge variant="success">beta</Badge>
  <Badge variant="warning">gamma</Badge>
  <Badge variant="error">delta</Badge>
  <Badge variant="info">epsilon</Badge>
</BadgeGroup>`}
      />

      {/* === Pulsing Badges === */}
      <SectionTitle>Pulsing Badges</SectionTitle>
      <p className="text-sm theme-text-secondary mb-6 -mt-4">Animated badges with a ping ring effect to draw attention. Customize variant, size, and ring color.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { children: 'New', variant: 'primary', size: 'md', ringColor: '#E31B23', label: 'Primary (Red Ring)' },
          { children: 'Live', variant: 'error', size: 'md', ringColor: '#ef4444', label: 'Error (Red Ring)' },
          { children: 'Active', variant: 'success', size: 'md', ringColor: '#10b981', label: 'Success (Green Ring)' },
          { children: 'Pending', variant: 'warning', size: 'md', ringColor: '#f59e0b', label: 'Warning (Amber Ring)' },
          { children: 'Info', variant: 'info', size: 'md', ringColor: '#3b82f6', label: 'Info (Blue Ring)' },
          { children: 'Beta', variant: 'outline', size: 'md', ringColor: '#94a3b8', label: 'Outline (Grey Ring)' },
          { children: 'Hot', variant: 'primary', size: 'sm', ringColor: '#E31B23', label: 'Small Size' },
          { children: 'New', variant: 'primary', size: 'lg', ringColor: '#E31B23', label: 'Large Size' },
          { children: <Zap size={12} />, variant: 'warning', size: 'sm', ringColor: '#f59e0b', label: 'With Icon' },
        ].map((item, idx) => (
          <LabItem key={idx} title={`PulsingBadge: ${item.label}`} index={idx + 1} code={`<PulsingBadge variant="${item.variant}" size="${item.size}" ringColor="${item.ringColor}">{${typeof item.children === 'string' ? `'${item.children}'` : '<Zap size={12} />'}}</PulsingBadge>`}>
            <PulsingBadge variant={item.variant} size={item.size} ringColor={item.ringColor}>
              {item.children}
            </PulsingBadge>
          </LabItem>
        ))}
      </div>
      <CodeBlock
        title="PulsingBadge.jsx"
        code={`import PulsingBadge from '@danesh-ui/react/PulsingBadge';

<PulsingBadge variant="primary" ringColor="#E31B23">New</PulsingBadge>
<PulsingBadge variant="success" ringColor="#10b981">Active</PulsingBadge>
<PulsingBadge variant="warning" ringColor="#f59e0b">Pending</PulsingBadge>
<PulsingBadge variant="error" ringColor="#ef4444">Live</PulsingBadge>
<PulsingBadge variant="info" ringColor="#3b82f6">Info</PulsingBadge>
<PulsingBadge variant="outline" ringColor="#94a3b8">Beta</PulsingBadge>

{/* Sizes */}
<PulsingBadge size="sm" variant="primary">Hot</PulsingBadge>
<PulsingBadge size="md" variant="primary">New</PulsingBadge>
<PulsingBadge size="lg" variant="primary">New</PulsingBadge>

{/* With icon */}
<PulsingBadge variant="warning" size="sm"><Zap size={12} /></PulsingBadge>`}
      />

      {/* === Import + Usage === */}
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        title="Badge Components"
        code={`import StatusBadge from '@danesh-ui/react/StatusBadge';
import NotificationBadge from '@danesh-ui/react/NotificationBadge';
import BadgeGroup from '@danesh-ui/react/BadgeGroup';
import PulsingBadge from '@danesh-ui/react/PulsingBadge';
import Badge from '@danesh-ui/react/Badge';

{/* Status badge */}
<StatusBadge status="online" label="Online" />
<StatusBadge status="busy" label="Busy" pulsing />

{/* Notification badge */}
<NotificationBadge count={3} variant="primary" />
<NotificationBadge variant="error" dot />

{/* Badge group */}
<BadgeGroup direction="row">
  <Badge variant="primary">React</Badge>
  <Badge variant="success">Vue</Badge>
</BadgeGroup>

{/* Pulsing badge */}
<PulsingBadge variant="primary" ringColor="#E31B23">New</PulsingBadge>`}
      />

      <NoteBlock type="tip">
        <strong>💡 Tip:</strong> Wrap NotificationBadge inside a <code>relative</code> container to position it correctly over an icon. StatusBadge supports 5 statuses (online, offline, busy, away, pending) with an optional <code>pulsing</code> prop for animated attention.
      </NoteBlock>
    </div>
  );
};

export default BadgeLabDoc;
