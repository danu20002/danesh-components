import { useState, useCallback } from 'react';
import OrgChart, { VerticalOrgChart, HorizontalOrgChart } from '../../lib/components/OrgChart';
import OrgChartSidebar, { VerticalOrgChartSidebar } from '../../lib/components/OrgChartSidebar';
import { SectionTitle, NoteBlock, CodeBlock, ComponentPreview, PropsTable, ImportBlock } from '../DocComponents';
import { Users, Building, Mail } from 'daneshicons';
import sampleData from '../data/OrgChartData.json';

const OrgChartDoc = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const customRender = useCallback((node) => (
    <div
      className="relative rounded-xl border-2 border-teal-500/20 bg-gradient-to-br from-white to-teal-50 dark:from-zinc-900 dark:to-zinc-900/80 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group min-w-[180px]"
      onClick={() => setSelectedNode(node)}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-t-xl" />
      <div className="flex items-center gap-3 px-4 py-3.5">
        <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
          {node.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-800 dark:text-zinc-100 truncate">{node.name}</p>
          <p className="text-[11px] text-slate-400 dark:text-zinc-500 truncate">{node.role}</p>
          <p className="text-[10px] text-slate-400 dark:text-zinc-500 truncate mt-0.5">{node.department} · {node.email}</p>
        </div>
      </div>
    </div>
  ), []);

  return (
    <div className="space-y-12">
      <ImportBlock component="OrgChart" subComponents={['VerticalOrgChart', 'HorizontalOrgChart', 'OrgChartSidebar', 'VerticalOrgChartSidebar', 'HorizontalOrgChartSidebar']} />

      {/* Sidebar Navigator */}
      <section id="sidebar-navigator">
        <SectionTitle>OrgChartSidebar</SectionTitle>
        <p className="theme-text-secondary text-sm mb-6">
          A horizontal or vertical org chart navigator with orthogonal SVG connector lines, report-count badges, and anchored profile tooltips. Dark mode follows the global theme toggle.
        </p>
        <div className="space-y-8">
          <ComponentPreview
            title="Horizontal"
            code={`import { HorizontalOrgChartSidebar } from '@danesh-ui/react';\nimport data from './OrgChartData.json';\n\n<HorizontalOrgChartSidebar data={data} />`}
          >
            <OrgChartSidebar data={sampleData} direction="horizontal" />
          </ComponentPreview>
          <ComponentPreview
            title="Vertical"
            code={`import { VerticalOrgChartSidebar } from '@danesh-ui/react';\nimport data from './OrgChartData.json';\n\n<VerticalOrgChartSidebar data={data} />`}
          >
            <VerticalOrgChartSidebar data={sampleData} />
          </ComponentPreview>
        </div>
      </section>

      {/* Vertical Org Chart */}
      <section id="vertical-org-chart">
        <SectionTitle>Vertical Org Chart</SectionTitle>
        <p className="theme-text-secondary text-sm mb-6">
          A vertical organizational hierarchy with Zoho-style CSS pseudo-element tree connectors, expandable/collapsible nodes, and department-colored employee cards.
        </p>
        <ComponentPreview
          title="VerticalOrgChart"
          code={`import { VerticalOrgChart } from '@danesh-ui/react';\nimport data from './OrgChartData.json';\n\n<VerticalOrgChart data={data} />`}
        >
          <VerticalOrgChart data={sampleData} />
        </ComponentPreview>
        <p className="theme-text-secondary text-xs mt-3">
          Sub-component of <code className="font-mono theme-bg-secondary px-1 py-0.5 rounded theme-text-active">OrgChart</code> with <code className="font-mono theme-bg-secondary px-1 py-0.5 rounded theme-text-active">direction="vertical"</code>. All nodes open by default. Use the toolbar for zoom/pan/search.
        </p>
      </section>

      {/* Horizontal Org Chart */}
      <section id="horizontal-org-chart">
        <SectionTitle>Horizontal Org Chart</SectionTitle>
        <p className="theme-text-secondary text-sm mb-6">
          A horizontal tree layout — ideal for wider screens or when you want the hierarchy to flow left-to-right. Uses the same Zoho-style connector approach with bracket-style pseudo-element lines.
        </p>
        <ComponentPreview
          title="HorizontalOrgChart"
          code={`import { HorizontalOrgChart } from '@danesh-ui/react';\nimport data from './OrgChartData.json';\n\n<HorizontalOrgChart data={data} />`}
        >
          <HorizontalOrgChart data={sampleData} />
        </ComponentPreview>
        <p className="theme-text-secondary text-xs mt-3">
          Sub-component of <code className="font-mono theme-bg-secondary px-1 py-0.5 rounded theme-text-active">OrgChart</code> with <code className="font-mono theme-bg-secondary px-1 py-0.5 rounded theme-text-active">direction="horizontal"</code>. All nodes open by default. Use the toolbar for zoom/pan/search.
        </p>
      </section>

      {/* Search & Filter */}
      <section id="search-filter">
        <SectionTitle>Search & Filter</SectionTitle>
        <p className="theme-text-secondary text-sm mb-6">
          Built-in search filters the entire tree by name, role, department, or email. Matching parent nodes auto-expand to reveal results.
        </p>
        <ComponentPreview
          title="With Search"
          code={`<VerticalOrgChart data={treeData} searchTerm="Sarah" />`}
        >
          <OrgChart data={sampleData} searchTerm="Priya" />
        </ComponentPreview>
      </section>

      {/* Zoom & Pan */}
      <section id="zoom-pan">
        <SectionTitle>Zoom & Pan</SectionTitle>
        <p className="theme-text-secondary text-sm mb-6">
          Scroll to zoom, drag to pan, or use the toolbar controls. Zoom range is configurable via <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">minZoom</code> and <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">maxZoom</code>.
        </p>
        <ComponentPreview
          title="Zoom Controls"
          code={`<OrgChart data={treeData} zoomable={true} draggable={true} />`}
        >
          <OrgChart data={sampleData} zoomable={true} draggable={true} />
        </ComponentPreview>
      </section>

      {/* Custom Card */}
      <section id="custom-card">
        <SectionTitle>Custom Card Rendering</SectionTitle>
        <p className="theme-text-secondary text-sm mb-6">
          Use the <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">renderNode</code> prop to render custom employee cards with your own design.
        </p>
        <ComponentPreview
          title="Custom Cards"
          code={`const renderNode = (node) => (\n  <CustomCard>\n    <Avatar initials={...} />\n    <div>\n      <h4>{node.name}</h4>\n      <p>{node.role}</p>\n    </div>\n  </CustomCard>\n);\n\n<VerticalOrgChart data={data} renderNode={renderNode} />`}
        >
          <OrgChart data={sampleData} renderNode={customRender} />
        </ComponentPreview>
      </section>

      {/* Interaction */}
      <section id="interaction">
        <SectionTitle>Interaction & Events</SectionTitle>
        <p className="theme-text-secondary text-sm mb-6">
          Click any employee card to trigger <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">onNodeClick</code>. Combine with your own detail panel for a complete HR experience.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VerticalOrgChart data={sampleData} onNodeClick={setSelectedNode} />
          </div>
          <div>
            {selectedNode ? (
              <div className="sticky top-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white text-xl font-bold shadow-lg mx-auto mb-4">
                  {selectedNode.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-100 text-center">{selectedNode.name}</h3>
                <p className="text-sm text-slate-400 dark:text-zinc-500 text-center mb-4">{selectedNode.role}</p>
                <div className="space-y-2 text-sm text-slate-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Building size={14} className="opacity-50" />
                    {selectedNode.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="opacity-50" />
                    {selectedNode.email}
                  </div>
                </div>
              </div>
            ) : (
              <div className="sticky top-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 text-center">
                <Users size={32} className="mx-auto mb-3 text-slate-300 dark:text-zinc-600" />
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">Click an employee card</p>
                <p className="text-xs mt-1 text-slate-400 dark:text-zinc-500">to view details</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Props */}
      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'data', type: 'OrgNode', default: '—', description: 'The root node of the organizational tree' },
          { name: 'renderNode', type: '(node: OrgNode) => ReactNode', default: 'Default card', description: 'Custom render function for each employee node' },
          { name: 'onNodeClick', type: '(node: OrgNode) => void', default: '—', description: 'Callback when an employee card is clicked' },
          { name: 'searchTerm', type: 'string', default: "''", description: 'External search term to filter employees' },
          { name: 'direction', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'Tree layout orientation. Also available as VerticalOrgChart / HorizontalOrgChart wrappers.' },
          { name: 'zoomable', type: 'boolean', default: 'true', description: 'Enable mouse wheel zoom' },
          { name: 'draggable', type: 'boolean', default: 'true', description: 'Enable drag to pan' },
          { name: 'minZoom', type: 'number', default: '0.3', description: 'Minimum zoom level' },
          { name: 'maxZoom', type: 'number', default: '2', description: 'Maximum zoom level' },
          { name: 'defaultExpanded', type: 'boolean', default: 'true', description: 'Expand all nodes by default' },
          { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes for the container' },
        ]} />
      </section>

      {/* Data Structure */}
      <section id="data-structure">
        <SectionTitle>Data Structure</SectionTitle>
        <p className="theme-text-secondary text-sm mb-4">
          The tree data follows a recursive structure. Each node can have optional <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">children</code> for subtree nesting. Load your data from a JSON file or API.
        </p>
        <CodeBlock
          code={`interface OrgNode {
  id: string;
  name: string;
  role: string;
  department?: string;
  email?: string;
  location?: string;
  avatar?: string;
  bio?: string;
  skills?: string[];
  children?: OrgNode[];
}`}
          language="ts"
          title="TypeScript"
        />
        <p className="theme-text-secondary text-sm mt-4">
          A complete sample is available at <code className="text-[13px] font-mono theme-bg-secondary px-1.5 py-0.5 rounded theme-text-active">src/docs/data/OrgChartData.json</code> with the full executive team, including departments, locations, bios, skills, and nested reporting lines.
        </p>
      </section>

      {/* from Danesh */}
      <section id="from-danesh">
        <SectionTitle>from Danesh</SectionTitle>
        <NoteBlock type="tip">
          Built with care for real-world HR teams. The expand/collapse, search, zoom/pan, and orientation toggle are all designed to mirror how you'd naturally explore an org tree — no training needed. If you're using this in production, I'd love to hear about it.
        </NoteBlock>
      </section>

    </div>
  );
};

export default OrgChartDoc;
