import Select from '../../lib/components/Select';
import { Globe, Shield, Zap } from 'daneshicons';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const SelectDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Select" />

      <section id="basic-select">
        <SectionTitle>Basic Select</SectionTitle>
        <ComponentPreview
          title="Dropdown Selection"
          code={`import { Select } from '@danesh-ui/react';

<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
/>`}
        >
          <div className="w-full max-w-xs">
            <Select
              label="Country"
              options={[
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'de', label: 'Germany' },
                { value: 'jp', label: 'Japan' },
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="with-icons">
        <SectionTitle>With Icons</SectionTitle>
        <ComponentPreview
          title="Iconic Selection"
          code={`<Select 
  icon={Globe} 
  label="Region" 
  options={[...]} 
/>`}
        >
          <div className="w-full max-w-xs space-y-4">
            <Select
              label="Region"
              icon={Globe}
              options={[{ value: 'na', label: 'North America' }, { value: 'eu', label: 'Europe' }]}
            />
            <Select
              label="Security Level"
              icon={Shield}
              options={[{ value: 'low', label: 'Low' }, { value: 'high', label: 'High' }]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'options', type: 'SelectOption[]', default: '[]', description: 'Array of { value, label, disabled? }' },
          { name: 'label', type: 'string', default: '—', description: 'Label text' },
          { name: 'icon', type: 'DaneshIcon', default: '—', description: 'Left-side icon' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text' },
          { name: 'placeholder', type: 'string', default: '"Select an option..."', description: 'Placeholder text' },
        ]} />
      </section>
    </div>
  );
};

export default SelectDoc;
