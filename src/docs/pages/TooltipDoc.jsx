import Tooltip from '../../lib/components/Tooltip';
import Button from '../../lib/components/Button';
import { HelpCircle, Info, Settings } from 'lucide-react';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const TooltipDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Tooltip" />

      <section id="basic-tooltip">
        <SectionTitle>Basic Tooltip</SectionTitle>
        <ComponentPreview
          title="Hover Information"
          code={`import { Tooltip } from '@danesh-ui/react';

<Tooltip content="Edit settings">
  <Button variant="outline"><Settings size={16} /></Button>
</Tooltip>`}
        >
          <div className="flex flex-wrap gap-12 items-center">
            <Tooltip content="Update account settings">
              <Button variant="secondary" icon={Settings}>Settings</Button>
            </Tooltip>
            
            <Tooltip content="Learn more about this feature">
              <div className="flex items-center gap-1.5 theme-text-secondary cursor-help">
                <HelpCircle size={16} />
                <span className="text-sm font-medium border-b border-dashed theme-border">Hover for info</span>
              </div>
            </Tooltip>
          </div>
        </ComponentPreview>
      </section>

      <section id="positions">
        <SectionTitle>Placement</SectionTitle>
        <ComponentPreview
          title="Different Positions"
          code={`<Tooltip content="Top tooltip" position="top">...</Tooltip>
<Tooltip content="Right tooltip" position="right">...</Tooltip>`}
        >
          <div className="flex flex-wrap gap-4">
            <Tooltip content="I am on top" position="top">
              <Button variant="outline">Top</Button>
            </Tooltip>
            <Tooltip content="I am on bottom" position="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>
            <Tooltip content="I am on left" position="left">
              <Button variant="outline">Left</Button>
            </Tooltip>
            <Tooltip content="I am on right" position="right">
              <Button variant="outline">Right</Button>
            </Tooltip>
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'content', type: 'ReactNode', default: '—', description: 'The text or element to show in the tooltip' },
          { name: 'position', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'Tooltip placement' },
          { name: 'delay', type: 'number', default: '200', description: 'Show delay in milliseconds' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'The element that triggers the tooltip' },
        ]} />
      </section>
    </div>
  );
};

export default TooltipDoc;
