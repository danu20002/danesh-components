import React from 'react';
import Divider from '../../lib/components/Divider';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const DividerDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Divider" />

      <section id="basic-divider">
        <SectionTitle>Basic Divider</SectionTitle>
        <ComponentPreview
          title="Horizontal Separation"
          code={`import { Divider } from '@danesh-ui/react';

<p>Top section</p>
<Divider />
<p>Bottom section</p>`}
        >
          <div className="w-full space-y-4 theme-text-secondary text-sm">
            <p>Components provide the building blocks for your UI.</p>
            <Divider />
            <p>Utilities help you layout those components with precision.</p>
          </div>
        </ComponentPreview>
      </section>

      <section id="with-label">
        <SectionTitle>With Label</SectionTitle>
        <ComponentPreview
          title="Labelled Separation"
          code={`<Divider label="OR" />
<Divider label="Section Break" align="left" />`}
        >
          <div className="w-full space-y-8">
            <Divider label="CONTINUE WITH" />
            <Divider label="USER DETAILS" align="left" />
            <Divider label="ACTIONS" align="right" />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Optional text to display in the middle' },
          { name: 'align', type: '"left" | "center" | "right"', default: '"center"', description: 'Label alignment' },
          { name: 'variant', type: '"solid" | "dashed"', default: '"solid"', description: 'Line style' },
          { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        ]} />
      </section>
    </div>
  );
};

export default DividerDoc;
