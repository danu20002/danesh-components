import React, { useState } from 'react';
import { Home, Settings, User, Bell } from 'daneshicons';
import Tabs from '../../lib/components/Tabs';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const TabsDoc = () => {
  return (
    <div className="space-y-10">
      <ImportBlock component="Tabs" />

      <section>
        <SectionTitle>Default Tabs</SectionTitle>
        <ComponentPreview
          title="Underline Tabs"
          code={`import { Tabs } from '@danesh-ui/react';

<Tabs tabs={[
  { id: 'account', label: 'Account', icon: User, content: <p>Account settings...</p> },
  { id: 'notifications', label: 'Notifications', icon: Bell, content: <p>Notification preferences...</p> },
  { id: 'settings', label: 'Settings', icon: Settings, content: <p>General settings...</p> },
]} />`}
        >
          <div className="w-full">
            <Tabs tabs={[
              { id: 'account', label: 'Account', icon: User, content: <p className="text-sm text-slate-600">Manage your account details, email, and profile information.</p> },
              { id: 'notifications', label: 'Notifications', icon: Bell, content: <p className="text-sm text-slate-600">Configure how and when you receive notifications.</p> },
              { id: 'settings', label: 'Settings', icon: Settings, content: <p className="text-sm text-slate-600">General application settings and preferences.</p> },
            ]} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Pills Variant</SectionTitle>
        <ComponentPreview
          title="Pill-style Tabs"
          code={`<Tabs 
  variant="pills" 
  tabs={[
    { id: 'all', label: 'All', content: <p>All items</p> },
    { id: 'active', label: 'Active', content: <p>Active items</p> },
    { id: 'archived', label: 'Archived', content: <p>Archived items</p> },
  ]} 
/>`}
        >
          <div className="w-full">
            <Tabs variant="pills" tabs={[
              { id: 'all', label: 'All', content: <p className="text-sm text-slate-600">Showing all 42 items in your workspace.</p> },
              { id: 'active', label: 'Active', content: <p className="text-sm text-slate-600">Showing 38 active items.</p> },
              { id: 'archived', label: 'Archived', content: <p className="text-sm text-slate-600">Showing 4 archived items.</p> },
            ]} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Outline Variant</SectionTitle>
        <ComponentPreview
          title="Outline Tabs"
          code={`<Tabs 
  variant="outline" 
  tabs={[
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reports' },
  ]} 
/>`}
        >
          <div className="w-full">
            <Tabs variant="outline" tabs={[
              { id: 'overview', label: 'Overview', content: <p className="text-sm text-slate-600">Project overview dashboard.</p> },
              { id: 'analytics', label: 'Analytics', content: <p className="text-sm text-slate-600">Traffic and engagement analytics.</p> },
              { id: 'reports', label: 'Reports', content: <p className="text-sm text-slate-600">Generated reports and summaries.</p> },
            ]} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'tabs', type: 'TabItem[]', default: '[]', description: 'Array of { id, label, icon?, content? }' },
          { name: 'defaultTab', type: 'string', default: 'first tab id', description: 'Initially active tab ID' },
          { name: 'variant', type: '"default" | "pills" | "outline"', default: '"default"', description: 'Tab style variant' },
          { name: 'onChange', type: '(tabId: string) => void', default: '—', description: 'Tab change callback' },
        ]} />
      </section>
    </div>
  );
};

export default TabsDoc;
