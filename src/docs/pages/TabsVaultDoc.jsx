import { User, Bell, Settings, Shield, Activity } from 'lucide-react';
import UnderlineTabs from '../../lib/components/UnderlineTabs';
import PillTabs from '../../lib/components/PillTabs';
import VerticalTabs from '../../lib/components/VerticalTabs';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const TabsVaultDoc = () => {
  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Component Vault
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Tabs <span className="text-red-600">Vault</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          Three tab variants — underline, pill, and vertical — each with live interactive previews.
        </p>
      </header>

      <NoteBlock type="tip">
        All tab components share a consistent API: pass an array of <code>{'{ id, label, icon, content }'}</code> objects. Add badges to underline and vertical tabs, or switch between default and compact sizes on pill tabs.
      </NoteBlock>

      {/* === Underline Tabs === */}
      <section>
        <SectionTitle>Underline Tabs</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Animated underline indicator that slides between tabs. Supports icons and badges.</p>
        <div className="theme-bg border theme-border-secondary rounded-3xl p-6">
          <UnderlineTabs tabs={[
            { id: 'account', label: 'Account', icon: User, content: <p className="text-sm theme-text-secondary">Manage your account details, email, and profile information.</p> },
            { id: 'notifications', label: 'Notifications', icon: Bell, content: <p className="text-sm theme-text-secondary">Configure how and when you receive notifications.</p> },
            { id: 'settings', label: 'Settings', icon: Settings, content: <p className="text-sm theme-text-secondary">General application settings and preferences.</p> },
            { id: 'activity', label: 'Activity', icon: Activity, badge: 12, content: <p className="text-sm theme-text-secondary">Recent activity and audit log entries.</p> },
          ]} />
        </div>
        <div className="mt-8">
          <CodeBlock
            title="UnderlineTabs Example"
            code={`import { UnderlineTabs } from '@danesh-ui/react';
import { User, Bell, Settings } from 'lucide-react';

<UnderlineTabs tabs={[
  { id: 'account', label: 'Account', icon: User, content: <p>Account details...</p> },
  { id: 'notifications', label: 'Notifications', icon: Bell, content: <p>Notifications...</p> },
  { id: 'settings', label: 'Settings', icon: Settings, content: <p>Settings...</p> },
  { id: 'activity', label: 'Activity', badge: 12, content: <p>Activity...</p> },
]} />`}
          />
        </div>
      </section>

      {/* === Pill Tabs === */}
      <section>
        <SectionTitle>Pill Tabs</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Pill-style segmented control with default and compact variants.</p>
        <div className="space-y-8 theme-bg border theme-border-secondary rounded-3xl p-6">
          <div>
            <p className="text-xs font-bold theme-text-tertiary uppercase tracking-wider mb-3">Default</p>
            <PillTabs tabs={[
              { id: 'all', label: 'All', content: <p className="text-sm theme-text-secondary">Showing all 42 items in your workspace.</p> },
              { id: 'active', label: 'Active', content: <p className="text-sm theme-text-secondary">Showing 38 active items.</p> },
              { id: 'archived', label: 'Archived', content: <p className="text-sm theme-text-secondary">Showing 4 archived items.</p> },
              { id: 'drafts', label: 'Drafts', content: <p className="text-sm theme-text-secondary">Showing 7 draft items.</p> },
              { id: 'deleted', label: 'Deleted', content: <p className="text-sm theme-text-secondary">Showing 12 deleted items.</p> },
            ]} />
          </div>
          <div>
            <p className="text-xs font-bold theme-text-tertiary uppercase tracking-wider mb-3">Compact</p>
            <PillTabs variant="compact" tabs={[
              { id: 'all', label: 'All', content: <p className="text-sm theme-text-secondary">All items view (compact).</p> },
              { id: 'active', label: 'Active', content: <p className="text-sm theme-text-secondary">Active items view (compact).</p> },
              { id: 'archived', label: 'Archived', content: <p className="text-sm theme-text-secondary">Archived items view (compact).</p> },
              { id: 'drafts', label: 'Drafts', content: <p className="text-sm theme-text-secondary">Draft items view (compact).</p> },
              { id: 'deleted', label: 'Deleted', content: <p className="text-sm theme-text-secondary">Deleted items view (compact).</p> },
            ]} />
          </div>
        </div>
        <div className="mt-8">
          <CodeBlock
            title="PillTabs Example"
            code={`import { PillTabs } from '@danesh-ui/react';

// Default variant
<PillTabs tabs={[
  { id: 'all', label: 'All', content: <p>All items</p> },
  { id: 'active', label: 'Active', content: <p>Active items</p> },
  { id: 'archived', label: 'Archived', content: <p>Archived items</p> },
]} />

// Compact variant
<PillTabs variant="compact" tabs={[
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'archived', label: 'Archived' },
]} />`}
          />
        </div>
      </section>

      {/* === Vertical Tabs === */}
      <section>
        <SectionTitle>Vertical Tabs</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Sidebar-style tabs with icons, badges, and left/right position support.</p>
        <div className="theme-bg border theme-border-secondary rounded-3xl p-6">
          <VerticalTabs tabs={[
            { id: 'profile', label: 'Profile', icon: User, content: <p className="text-sm theme-text-secondary">Manage your public profile information and avatar.</p> },
            { id: 'security', label: 'Security', icon: Shield, badge: 3, content: <p className="text-sm theme-text-secondary">Password, 2FA, and security settings.</p> },
            { id: 'notifications', label: 'Notifications', icon: Bell, badge: 12, content: <p className="text-sm theme-text-secondary">Push, email, and in-app notification preferences.</p> },
            { id: 'activity', label: 'Activity Log', icon: Activity, content: <p className="text-sm theme-text-secondary">View your recent account activity and login history.</p> },
          ]} />
        </div>
        <div className="mt-8">
          <CodeBlock
            title="VerticalTabs Example"
            code={`import { VerticalTabs } from '@danesh-ui/react';
import { User, Shield, Bell, Activity } from 'lucide-react';

<VerticalTabs tabs={[
  { id: 'profile', label: 'Profile', icon: User, content: <p>Profile...</p> },
  { id: 'security', label: 'Security', icon: Shield, badge: 3, content: <p>Security...</p> },
  { id: 'notifications', label: 'Notifications', icon: Bell, badge: 12, content: <p>Notifications...</p> },
  { id: 'activity', label: 'Activity Log', icon: Activity, content: <p>Activity...</p> },
]} />

// Right-aligned variant
<VerticalTabs position="right" tabs={tabs} />`}
          />
        </div>
      </section>

      {/* === Usage === */}
      <section>
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          title="TabsVault.jsx"
          code={`import { UnderlineTabs, PillTabs, VerticalTabs } from '@danesh-ui/react';
import { User, Bell, Settings } from 'lucide-react';

// Underline (animated indicator)
<UnderlineTabs tabs={[
  { id: 'a', label: 'Account', icon: User, content: <div>...</div> },
  { id: 'b', label: 'Notifications', icon: Bell, content: <div>...</div> },
]} />

// Pill (segmented control)
<PillTabs tabs={[
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
]} />
<PillTabs variant="compact" tabs={[...]} />

// Vertical (sidebar layout)
<VerticalTabs tabs={[
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Shield, badge: 3 },
]} />
<VerticalTabs position="right" tabs={[...]} />`}
        />
      </section>
    </div>
  );
};

export default TabsVaultDoc;
