import React from 'react';
import Spinner from '../../lib/components/Spinner';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const SpinnerDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Spinner" />

      <section id="basic-spinner">
        <SectionTitle>Basic Usage</SectionTitle>
        <ComponentPreview
          title="Loading Animation"
          code={`import { Spinner } from '@danesh-ui/react';

<Spinner />
<Spinner size="lg" variant="primary" />`}
        >
          <div className="flex items-center gap-8">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
        </ComponentPreview>
      </section>

      <section id="variants">
        <SectionTitle>Color Variants</SectionTitle>
        <ComponentPreview
          title="Theme Integration"
          code={`<Spinner variant="success" />
<Spinner variant="warning" />`}
        >
          <div className="flex items-center gap-8">
            <Spinner variant="primary" />
            <Spinner variant="success" />
            <Spinner variant="warning" />
            <Spinner variant="error" />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Dimensions of the spinner' },
          { name: 'variant', type: '"primary" | "success" | "warning" | "error" | "white"', default: '"primary"', description: 'Color scheme' },
          { name: 'thickness', type: 'number', default: '2', description: 'Width of the spinner stroke' },
        ]} />
      </section>
    </div>
  );
};

export default SpinnerDoc;
