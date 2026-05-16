import React, { useState } from 'react';
import { DollarSign, Users, TrendingUp, Activity, Package, Eye, Download, ShoppingCart, FileX, Search, Home, Settings, Folder } from 'lucide-react';
import Table from '../../lib/components/Table';
import Stat from '../../lib/components/Stat';
import AvatarGroup from '../../lib/components/AvatarGroup';
import Breadcrumb from '../../lib/components/Breadcrumb';
import Spinner from '../../lib/components/Spinner';
import Kbd from '../../lib/components/Kbd';
import EmptyState from '../../lib/components/EmptyState';
import Pagination from '../../lib/components/Pagination';
import Badge from '../../lib/components/Badge';
import Button from '../../lib/components/Button';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock, NoteBlock } from '../DocComponents';

const DataDoc = () => {
  const [page, setPage] = useState(3);

  const tableData = [
    { id: 1, name: 'Alex Johnson', email: 'alex@danesh.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Chen', email: 'sarah@danesh.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Mike Brown', email: 'mike@danesh.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Lisa Wang', email: 'lisa@danesh.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Tom Davis', email: 'tom@danesh.com', role: 'Admin', status: 'Away' },
  ];

  const tableColumns = [
    { key: 'name', header: 'Name', render: (val) => <span className="font-semibold text-slate-900">{val}</span> },
    { key: 'email', header: 'Email', render: (val) => <span className="text-slate-500 font-mono text-xs">{val}</span> },
    { key: 'role', header: 'Role', render: (val) => <Badge variant={val === 'Admin' ? 'primary' : val === 'Editor' ? 'info' : 'default'} size="sm">{val}</Badge> },
    { key: 'status', header: 'Status', render: (val) => <Badge variant={val === 'Active' ? 'success' : val === 'Inactive' ? 'default' : 'warning'} dot size="sm">{val}</Badge> },
  ];

  return (
    <div className="space-y-12">
      {/* Table */}
      <section>
        <SectionTitle id="table">Table</SectionTitle>
        <ImportBlock component="Table" />
        <p className="text-sm text-slate-500 mb-6">A data table with custom cell renderers, striped rows, hover effects, and compact mode.</p>
        <ComponentPreview
          title="Data Table"
          code={`import { Table, Badge } from '@danesh-ui/react';

const columns = [
  { key: 'name', header: 'Name', render: (val) => (
    <span className="font-semibold">{val}</span>
  )},
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role', render: (val) => (
    <Badge variant="info" size="sm">{val}</Badge>
  )},
  { key: 'status', header: 'Status', render: (val) => (
    <Badge variant="success" dot size="sm">{val}</Badge>
  )},
];

const data = [
  { name: 'Alex Johnson', email: 'alex@danesh.com', role: 'Admin', status: 'Active' },
  { name: 'Sarah Chen', email: 'sarah@danesh.com', role: 'Editor', status: 'Active' },
];

<Table columns={columns} data={data} striped hoverable />`}
        >
          <div className="w-full">
            <Table columns={tableColumns} data={tableData} striped hoverable />
          </div>
        </ComponentPreview>
      </section>

      {/* Stat Cards */}
      <section>
        <SectionTitle id="stat">Stat Card</SectionTitle>
        <ImportBlock component="Stat" />
        <p className="text-sm text-slate-500 mb-6">KPI cards for dashboards with trend indicators, icons, and multiple visual styles.</p>
        <ComponentPreview
          title="Stat Variants"
          code={`import { Stat } from '@danesh-ui/react';
import { DollarSign, Users, TrendingUp, Activity } from 'lucide-react';

<Stat title="Revenue" value="$42,500" change={12.5} changeLabel="vs last month" icon={DollarSign} />
<Stat title="Users" value="8,249" change={-2.1} changeLabel="vs last week" icon={Users} />
<Stat title="Growth" value="23.5%" change={5.2} icon={TrendingUp} variant="filled" />
<Stat title="Performance" value="99.9%" icon={Activity} variant="gradient" />`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <Stat title="Revenue" value="$42,500" change={12.5} changeLabel="vs last month" icon={DollarSign} />
            <Stat title="Users" value="8,249" change={-2.1} changeLabel="vs last week" icon={Users} />
            <Stat title="Growth" value="23.5%" change={5.2} icon={TrendingUp} variant="filled" />
            <Stat title="Uptime" value="99.9%" icon={Activity} variant="gradient" />
          </div>
        </ComponentPreview>
      </section>

      {/* Avatar Group */}
      <section>
        <SectionTitle id="avatar-group">Avatar Group</SectionTitle>
        <ImportBlock component="AvatarGroup" />
        <ComponentPreview
          title="Stacked Avatars"
          code={`import { AvatarGroup } from '@danesh-ui/react';

<AvatarGroup
  max={4}
  avatars={[
    { name: 'Alex Johnson' },
    { name: 'Sarah Chen' },
    { name: 'Mike Brown' },
    { name: 'Lisa Wang' },
    { name: 'Tom Davis' },
    { name: 'Eve Miller' },
  ]}
/>`}
        >
          <div className="flex items-center gap-8">
            <div className="text-center">
              <AvatarGroup max={4} size="md" avatars={[
                { name: 'Alex Johnson' }, { name: 'Sarah Chen' }, { name: 'Mike Brown' },
                { name: 'Lisa Wang' }, { name: 'Tom Davis' }, { name: 'Eve Miller' },
              ]} />
              <p className="text-xs text-slate-400 mt-2">Medium</p>
            </div>
            <div className="text-center">
              <AvatarGroup max={3} size="lg" avatars={[
                { name: 'Alex Johnson' }, { name: 'Sarah Chen' }, { name: 'Mike Brown' }, { name: 'Lisa Wang' },
              ]} />
              <p className="text-xs text-slate-400 mt-2">Large</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Breadcrumb */}
      <section>
        <SectionTitle id="breadcrumb">Breadcrumb</SectionTitle>
        <ImportBlock component="Breadcrumb" />
        <ComponentPreview
          title="Navigation Breadcrumbs"
          code={`import { Breadcrumb } from '@danesh-ui/react';
import { Home, Folder, Settings } from 'lucide-react';

<Breadcrumb items={[
  { label: 'Home', icon: Home },
  { label: 'Projects', icon: Folder },
  { label: 'Settings', icon: Settings },
  { label: 'General' },
]} />`}
        >
          <div className="space-y-4 w-full">
            <Breadcrumb items={[
              { label: 'Home', icon: Home },
              { label: 'Projects', icon: Folder },
              { label: 'Settings', icon: Settings },
              { label: 'General' },
            ]} />
          </div>
        </ComponentPreview>
      </section>

      {/* Spinner */}
      <section>
        <SectionTitle id="spinner">Spinner</SectionTitle>
        <ImportBlock component="Spinner" />
        <ComponentPreview
          title="Loading Spinners"
          code={`import { Spinner } from '@danesh-ui/react';

<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" label="Loading data..." />
<Spinner size="xl" color="slate" />`}
        >
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" label="Loading data..." />
          <Spinner size="xl" color="slate" />
        </ComponentPreview>
      </section>

      {/* Kbd */}
      <section>
        <SectionTitle id="kbd">Keyboard Shortcut</SectionTitle>
        <ImportBlock component="Kbd" />
        <ComponentPreview
          title="Keyboard Keys"
          code={`import { Kbd } from '@danesh-ui/react';

<p>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search</p>
<p>Save with <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></p>
<p>Undo: <Kbd>⌘</Kbd> + <Kbd>Z</Kbd></p>`}
        >
          <div className="flex flex-wrap gap-6 items-center">
            <span className="text-sm text-slate-600 flex items-center gap-1.5">Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search</span>
            <span className="text-sm text-slate-600 flex items-center gap-1.5">Save: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></span>
            <span className="text-sm text-slate-600 flex items-center gap-1.5">Undo: <Kbd>⌘</Kbd> + <Kbd>Z</Kbd></span>
            <span className="text-sm text-slate-600 flex items-center gap-1.5"><Kbd>Esc</Kbd> to close</span>
          </div>
        </ComponentPreview>
      </section>

      {/* EmptyState */}
      <section>
        <SectionTitle id="empty-state">Empty State</SectionTitle>
        <ImportBlock component="EmptyState" />
        <ComponentPreview
          title="No Data Placeholder"
          code={`import { EmptyState, Button } from '@danesh-ui/react';
import { Search } from 'lucide-react';

<EmptyState
  icon={Search}
  title="No results found"
  description="Try adjusting your search or filter criteria to find what you're looking for."
  action={<Button size="sm">Clear Filters</Button>}
/>`}
        >
          <EmptyState
            icon={Search}
            title="No results found"
            description="Try adjusting your search or filter criteria to find what you're looking for."
            action={<Button size="sm">Clear Filters</Button>}
          />
        </ComponentPreview>
      </section>

      {/* Pagination */}
      <section>
        <SectionTitle id="pagination">Pagination</SectionTitle>
        <ImportBlock component="Pagination" />
        <ComponentPreview
          title="Page Navigation"
          code={`import { Pagination } from '@danesh-ui/react';

const [page, setPage] = useState(3);

<Pagination current={page} total={20} onChange={setPage} />`}
        >
          <div className="flex flex-col items-center gap-3">
            <Pagination current={page} total={20} onChange={setPage} />
            <p className="text-xs text-slate-400">Page {page} of 20</p>
          </div>
        </ComponentPreview>
      </section>

      {/* API Tables */}
      <section>
        <SectionTitle id="table-api">Table API</SectionTitle>
        <PropsTable props={[
          { name: 'columns', type: 'Column[]', default: '[]', description: 'Array of { key, header, width?, render? }' },
          { name: 'data', type: 'Record[]', default: '[]', description: 'Array of data objects' },
          { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row colors' },
          { name: 'hoverable', type: 'boolean', default: 'true', description: 'Row hover effect' },
          { name: 'compact', type: 'boolean', default: 'false', description: 'Smaller padding' },
        ]} />
      </section>

      <section>
        <SectionTitle id="stat-api">Stat API</SectionTitle>
        <PropsTable props={[
          { name: 'title', type: 'string', default: '—', description: 'Metric label' },
          { name: 'value', type: 'string', default: '—', description: 'Metric value' },
          { name: 'change', type: 'number', default: '—', description: 'Percentage change' },
          { name: 'changeLabel', type: 'string', default: '—', description: 'Change context (e.g., "vs last month")' },
          { name: 'icon', type: 'LucideIcon', default: '—', description: 'Metric icon' },
          { name: 'variant', type: '"default" | "filled" | "gradient"', default: '"default"', description: 'Visual style' },
        ]} />
      </section>
    </div>
  );
};

export default DataDoc;
