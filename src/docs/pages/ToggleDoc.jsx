import React, { useState } from 'react';
import Toggle from '../../lib/components/Toggle';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const ToggleDoc = () => {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(true);
  const [v3, setV3] = useState(false);

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic Toggle</SectionTitle>
        <ComponentPreview
          title="Interactive Toggle"
          code={`import { Toggle } from '@danesh-ui/react';

const [enabled, setEnabled] = useState(false);

<Toggle 
  checked={enabled} 
  onChange={setEnabled} 
  label="Enable notifications" 
/>`}
        >
          <div className="space-y-4">
            <Toggle checked={v1} onChange={setV1} label="Enable notifications" />
            <Toggle checked={v2} onChange={setV2} label="Dark mode" />
            <Toggle checked={v3} onChange={setV3} label="Auto-save" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Toggle Sizes"
          code={`<Toggle size="sm" label="Small" checked />
<Toggle size="md" label="Medium" checked />
<Toggle size="lg" label="Large" checked />`}
        >
          <div className="space-y-4">
            <Toggle size="sm" label="Small" checked onChange={() => {}} />
            <Toggle size="md" label="Medium" checked onChange={() => {}} />
            <Toggle size="lg" label="Large" checked onChange={() => {}} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Disabled</SectionTitle>
        <ComponentPreview
          title="Disabled State"
          code={`<Toggle disabled label="Can't toggle this" />
<Toggle disabled checked label="Locked on" />`}
        >
          <div className="space-y-4">
            <Toggle disabled label="Can't toggle this" onChange={() => {}} />
            <Toggle disabled checked label="Locked on" onChange={() => {}} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'checked', type: 'boolean', default: 'false', description: 'Toggle state' },
          { name: 'onChange', type: '(checked: boolean) => void', default: '—', description: 'Change handler' },
          { name: 'label', type: 'string', default: '—', description: 'Text label' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Toggle size' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the toggle' },
        ]} />
      </section>
    </div>
  );
};

export default ToggleDoc;
