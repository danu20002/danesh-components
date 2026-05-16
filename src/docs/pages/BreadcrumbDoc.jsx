import React from 'react';
import Breadcrumb from '../../lib/components/Breadcrumb';
import { Home, Folder, FileText } from 'lucide-react';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const BreadcrumbDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Breadcrumb" />

      <section id="basic-breadcrumb">
        <SectionTitle>Basic Usage</SectionTitle>
        <ComponentPreview
          title="Navigation Path"
          code={`import { Breadcrumb } from '@danesh-ui/react';

<Breadcrumb
  items={[
    { label: 'Home', href: '/', icon: Home },
    { label: 'Project', href: '/project' },
    { label: 'Current Page' }
  ]}
/>`}
        >
          <Breadcrumb
            items={[
              { label: 'Home', href: '#', icon: Home },
              { label: 'Documentation', href: '#' },
              { label: 'Components', href: '#' },
              { label: 'Breadcrumb' }
            ]}
          />
        </ComponentPreview>
      </section>

      <section id="variants">
        <SectionTitle>Separators & Styles</SectionTitle>
        <ComponentPreview
          title="Custom Separators"
          code={`<Breadcrumb separator="/" ... />
<Breadcrumb separator=">" ... />`}
        >
          <div className="space-y-8">
            <Breadcrumb
              separator="/"
              items={[
                { label: 'System', icon: Folder },
                { label: 'Users', icon: Folder },
                { label: 'Settings', icon: FileText }
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'items', type: 'BreadcrumbItem[]', default: '[]', description: 'Array of { label, href?, icon? }' },
          { name: 'separator', type: 'ReactNode', default: '"ChevronRight"', description: 'Custom separator element or icon' },
          { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        ]} />
      </section>
    </div>
  );
};

export default BreadcrumbDoc;
