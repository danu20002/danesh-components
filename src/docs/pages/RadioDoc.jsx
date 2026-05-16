import React, { useState } from 'react';
import Radio from '../../lib/components/Radio';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const RadioDoc = () => {
  const [value, setValue] = useState('email');

  return (
    <div className="space-y-12">
      <ImportBlock component="Radio" />

      <section id="basic-radio">
        <SectionTitle>Basic Radio Group</SectionTitle>
        <ComponentPreview
          title="Single Choice Selection"
          code={`import { Radio } from '@danesh-ui/react';

<Radio
  name="notification"
  value={value}
  onChange={setValue}
  options={[
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'sms', label: 'SMS' },
  ]}
/>`}
        >
          <div className="w-full max-w-sm">
            <Radio
              name="notification"
              value={value}
              onChange={setValue}
              options={[
                { value: 'email', label: 'Email' },
                { value: 'phone', label: 'Phone' },
                { value: 'sms', label: 'SMS' },
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="with-description">
        <SectionTitle>With Description</SectionTitle>
        <ComponentPreview
          title="Rich Radio Options"
          code={`<Radio
  options={[
    { value: 'pro', label: 'Pro Plan', description: '$29/mo' },
    { value: 'team', label: 'Team Plan', description: '$99/mo' },
  ]}
/>`}
        >
          <div className="w-full max-w-sm">
            <Radio
              name="plans"
              value="pro"
              options={[
                { value: 'pro', label: 'Pro Plan', description: 'Advanced features for individuals' },
                { value: 'team', label: 'Team Plan', description: 'Collaboration tools for small teams' },
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'options', type: 'RadioOption[]', default: '[]', description: 'Array of { value, label, description?, disabled? }' },
          { name: 'value', type: 'string', default: '—', description: 'Currently selected value' },
          { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Change handler' },
          { name: 'name', type: 'string', default: '—', description: 'Radio group name attribute' },
          { name: 'direction', type: '"vertical" | "horizontal"', default: '"vertical"', description: 'Layout direction' },
        ]} />
      </section>
    </div>
  );
};

export default RadioDoc;
