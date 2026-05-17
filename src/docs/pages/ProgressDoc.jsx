import Progress from '../../lib/components/Progress';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const ProgressDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Progress" />

      <section id="basic-progress">
        <SectionTitle>Basic Progress</SectionTitle>
        <ComponentPreview
          title="Loading Indicators"
          code={`import { Progress } from '@danesh-ui/react';

<Progress value={45} />
<Progress value={75} variant="success" />`}
        >
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium theme-text-secondary">
                <span>Standard</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium theme-text-secondary">
                <span>Success variant</span>
                <span>75%</span>
              </div>
              <Progress value={75} variant="success" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section id="variants">
        <SectionTitle>Variants & Sizes</SectionTitle>
        <ComponentPreview
          title="Custom Styles"
          code={`<Progress value={30} variant="error" size="sm" />
<Progress value={60} variant="warning" size="lg" />`}
        >
          <div className="w-full max-w-md space-y-6">
            <Progress value={30} variant="error" size="sm" />
            <Progress value={60} variant="warning" size="md" />
            <Progress value={90} variant="primary" size="lg" />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'value', type: 'number', default: '0', description: 'Progress percentage (0-100)' },
          { name: 'variant', type: '"primary" | "success" | "warning" | "error"', default: '"primary"', description: 'Color scheme' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Bar thickness' },
          { name: 'animated', type: 'boolean', default: 'true', description: 'Enable transition animation' },
        ]} />
      </section>
    </div>
  );
};

export default ProgressDoc;
