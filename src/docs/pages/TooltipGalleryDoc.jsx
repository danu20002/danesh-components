import { Settings, User, Bell, Mail, HelpCircle, Info } from 'lucide-react';;
import Popover from '../../lib/components/Popover';
import Tooltip from '../../lib/components/Tooltip';
import Button from '../../lib/components/Button';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const TooltipGalleryDoc = () => {
  return (
    <div className="space-y-12 pb-20">

      {/* Tooltip Positions */}
      <section id="tooltip-positions">
        <SectionTitle>Tooltip Positions</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">
          Hover each button to see the tooltip in different positions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { label: 'Top', position: 'top' },
            { label: 'Bottom', position: 'bottom' },
            { label: 'Left', position: 'left' },
            { label: 'Right', position: 'right' },
          ].map(({ label, position }) => (
            <div key={position} className="flex flex-col items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">{label}</span>
              <Tooltip text={`${label} tooltip`} position={position}>
                <Button variant="outline">Hover me</Button>
              </Tooltip>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CodeBlock
            title="TooltipPositions.jsx"
            code={`<Tooltip text="Top tooltip" position="top">
  <Button variant="outline">Hover me</Button>
</Tooltip>
<Tooltip text="Bottom tooltip" position="bottom">
  <Button variant="outline">Hover me</Button>
</Tooltip>
<Tooltip text="Left tooltip" position="left">
  <Button variant="outline">Hover me</Button>
</Tooltip>
<Tooltip text="Right tooltip" position="right">
  <Button variant="outline">Hover me</Button>
</Tooltip>`}
          />
        </div>
      </section>

      {/* Popover Triggers */}
      <section id="popover-triggers">
        <SectionTitle>Popover Triggers</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">
          Click to open contextual popovers with various content types.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Settings Panel */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">01 — Settings</span>
            <Popover
              position="bottom"
              trigger={
                <Button variant="secondary" icon={Settings}>Settings</Button>
              }
            >
              <div className="space-y-3 min-w-[220px]">
                <p className="text-xs font-black theme-text uppercase tracking-wider">Quick Settings</p>
                <div className="space-y-2">
                  {['Notifications', 'Privacy', 'Appearance', 'Language'].map((item) => (
                    <div key={item} className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:theme-bg-hover transition-colors cursor-pointer">
                      <span className="text-xs font-medium theme-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Popover>
          </div>

          {/* User Menu */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">02 — User Menu</span>
            <Popover
              position="bottom"
              trigger={
                <Button variant="outline" icon={User}>Profile</Button>
              }
            >
              <div className="space-y-1 min-w-[200px]">
                <div className="flex items-center gap-3 px-2 py-2 border-b theme-border-secondary mb-2">
                  <div className="w-8 h-8 rounded-full theme-bg-secondary flex items-center justify-center">
                    <User size={14} className="theme-text-secondary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold theme-text">John Doe</span>
                    <span className="text-[10px] theme-text-tertiary">john@example.com</span>
                  </div>
                </div>
                {[
                  { icon: User, label: 'My Account' },
                  { icon: Settings, label: 'Preferences' },
                  { icon: Bell, label: 'Notifications' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:theme-bg-hover transition-colors cursor-pointer">
                    <Icon size={14} className="theme-text-secondary" />
                    <span className="text-xs font-medium theme-text-secondary">{label}</span>
                  </div>
                ))}
              </div>
            </Popover>
          </div>

          {/* Notifications Info */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">03 — Notifications</span>
            <Popover
              position="bottom"
              trigger={
                <div className="relative inline-flex">
                  <Button variant="outline" icon={Bell}>Alerts</Button>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">3</span>
                </div>
              }
            >
              <div className="space-y-2 min-w-[240px]">
                <div className="flex items-center justify-between border-b theme-border-secondary pb-2 mb-2">
                  <p className="text-xs font-black theme-text uppercase tracking-wider">Notifications</p>
                  <span className="text-[10px] theme-text-tertiary cursor-pointer hover:theme-text-active">Mark all read</span>
                </div>
                {[
                  { icon: Mail, text: 'New message from Sarah', time: '2m ago' },
                  { icon: Info, text: 'System update completed', time: '1h ago' },
                  { icon: HelpCircle, text: 'Your report is ready', time: '3h ago' },
                ].map(({ icon: Icon, text, time }) => (
                  <div key={text} className="flex items-start gap-3 px-2 py-2 rounded-lg hover:theme-bg-hover transition-colors cursor-pointer">
                    <div className="w-7 h-7 rounded-full theme-bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={12} className="theme-text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium theme-text truncate">{text}</p>
                      <span className="text-[9px] theme-text-tertiary">{time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Popover>
          </div>
        </div>
        <div className="mt-6">
          <CodeBlock
            title="PopoverTriggers.jsx"
            code={`// Settings popover
<Popover
  position="bottom"
  trigger={<Button variant="secondary" icon={Settings}>Settings</Button>}
>
  <div className="space-y-3 min-w-[220px]">
    <p className="text-xs font-black theme-text uppercase tracking-wider">Quick Settings</p>
    {/* menu items */}
  </div>
</Popover>

// User menu popover
<Popover
  position="bottom"
  trigger={<Button variant="outline" icon={User}>Profile</Button>}
>
  <div className="space-y-1 min-w-[200px]">
    {/* user info + menu items */}
  </div>
</Popover>

// Notifications popover
<Popover
  position="bottom"
  trigger={
    <div className="relative inline-flex">
      <Button variant="outline" icon={Bell}>Alerts</Button>
      <Badge variant="error" size="sm" className="absolute -top-1 -right-1">3</Badge>
    </div>
  }
>
  <div className="space-y-2 min-w-[240px]">
    {/* notification list */}
  </div>
</Popover>`}
          />
        </div>
      </section>

      {/* Usage */}
      <section id="usage">
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          title="Example.jsx"
          code={`import { Tooltip, Popover } from '@danesh-ui/react';
import { Settings, Bell } from 'lucide-react';

function MyComponent() {
  return (
    <div className="flex gap-4">
      <Tooltip text="Notifications" position="top">
        <Bell size={20} />
      </Tooltip>

      <Popover
        position="bottom"
        trigger={<button>Open Settings</button>}
      >
        <p>Popover content here</p>
      </Popover>
    </div>
  );
}`}
        />
        <div className="mt-6">
          <NoteBlock type="info">
            <strong>Tooltip</strong> appears on hover with configurable <code>position</code> (top/bottom/left/right). <strong>Popover</strong> toggles on click and supports <code>position</code>, <code>align</code>, and controlled <code>open</code>/<code>onOpenChange</code> props.
          </NoteBlock>
        </div>
      </section>

    </div>
  );
};

export default TooltipGalleryDoc;
