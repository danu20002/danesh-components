import React, { useState } from 'react';
import Checkbox from '../../lib/components/Checkbox';
import Radio from '../../lib/components/Radio';
import Select from '../../lib/components/Select';
import Textarea from '../../lib/components/Textarea';
import { Globe } from 'daneshicons';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const FormsDoc = () => {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [radio, setRadio] = useState('email');

  return (
    <div className="space-y-10">
      {/* Checkbox */}
      <section>
        <SectionTitle>Checkbox</SectionTitle>
        <ComponentPreview
          title="Interactive Checkboxes"
          code={`import { Checkbox } from '@danesh-ui/react';

<Checkbox checked={true} onChange={setChecked} label="Accept terms" />
<Checkbox label="Subscribe" description="Receive weekly updates" />
<Checkbox disabled label="Locked option" />`}
        >
          <div className="space-y-3">
            <Checkbox checked={check1} onChange={setCheck1} label="Accept terms & conditions" />
            <Checkbox checked={check2} onChange={setCheck2} label="Subscribe to newsletter" description="Get weekly product updates and tips" />
            <Checkbox checked={check3} onChange={setCheck3} label="Enable 2FA" description="Recommended for security" />
            <Checkbox disabled label="Admin access (locked)" />
          </div>
        </ComponentPreview>
      </section>

      {/* Radio */}
      <section>
        <SectionTitle>Radio Group</SectionTitle>
        <ComponentPreview
          title="Radio Selection"
          code={`import { Radio } from '@danesh-ui/react';

<Radio
  name="contact"
  value={selected}
  onChange={setSelected}
  options={[
    { value: 'email', label: 'Email', description: 'Fastest response' },
    { value: 'phone', label: 'Phone' },
    { value: 'sms', label: 'SMS' },
  ]}
/>`}
        >
          <div className="w-full max-w-sm">
            <Radio
              name="contact"
              value={radio}
              onChange={setRadio}
              options={[
                { value: 'email', label: 'Email', description: 'We\'ll respond within 24 hours' },
                { value: 'phone', label: 'Phone', description: 'Business hours only' },
                { value: 'sms', label: 'SMS', description: 'Quick notifications' },
                { value: 'none', label: 'No contact', disabled: true },
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Select */}
      <section>
        <SectionTitle>Select</SectionTitle>
        <ComponentPreview
          title="Dropdown Select"
          code={`import { Select } from '@danesh-ui/react';

<Select
  label="Country"
  icon={Globe}
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
  ]}
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Select
              label="Country"
              icon={Globe}
              options={[
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'de', label: 'Germany' },
                { value: 'jp', label: 'Japan' },
                { value: 'in', label: 'India' },
              ]}
            />
            <Select
              label="Priority"
              error="Please select a priority"
              options={[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
                { value: 'critical', label: 'Critical' },
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Textarea */}
      <section>
        <SectionTitle>Textarea</SectionTitle>
        <ComponentPreview
          title="Multi-line Input"
          code={`import { Textarea } from '@danesh-ui/react';

<Textarea label="Message" placeholder="Write your message..." rows={4} />
<Textarea label="Notes" hint="Markdown supported" />
<Textarea label="Bio" error="Too long! Max 200 chars" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Textarea label="Message" placeholder="Write your message here..." rows={3} />
            <Textarea label="Notes" placeholder="Any additional notes..." hint="Markdown is supported" rows={3} />
            <Textarea label="Bio" placeholder="Tell us about yourself..." error="Exceeds 200 character limit" rows={3} />
          </div>
        </ComponentPreview>
      </section>

      {/* API Tables */}
      <section>
        <SectionTitle>Checkbox API</SectionTitle>
        <PropsTable props={[
          { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state' },
          { name: 'onChange', type: '(checked: boolean) => void', default: '—', description: 'Change handler' },
          { name: 'label', type: 'string', default: '—', description: 'Label text' },
          { name: 'description', type: 'string', default: '—', description: 'Help text' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables checkbox' },
        ]} />
      </section>

      <section>
        <SectionTitle>Radio API</SectionTitle>
        <PropsTable props={[
          { name: 'options', type: 'RadioOption[]', default: '[]', description: 'Array of { value, label, description?, disabled? }' },
          { name: 'value', type: 'string', default: '—', description: 'Currently selected value' },
          { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Selection change handler' },
          { name: 'name', type: 'string', default: '—', description: 'Radio group name' },
          { name: 'direction', type: '"vertical" | "horizontal"', default: '"vertical"', description: 'Layout direction' },
        ]} />
      </section>

      <section>
        <SectionTitle>Select API</SectionTitle>
        <PropsTable props={[
          { name: 'options', type: 'SelectOption[]', default: '[]', description: 'Array of { value, label, disabled? }' },
          { name: 'label', type: 'string', default: '—', description: 'Label text' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Help text' },
          { name: 'icon', type: 'DaneshIcon', default: '—', description: 'Left icon' },
          { name: 'placeholder', type: 'string', default: '"Select an option..."', description: 'Placeholder text' },
        ]} />
      </section>

      <section>
        <SectionTitle>Textarea API</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label text' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Help text' },
          { name: 'rows', type: 'number', default: '4', description: 'Visible text rows' },
          { name: 'resize', type: '"none" | "vertical" | "horizontal" | "both"', default: '"vertical"', description: 'Resize behavior' },
        ]} />
      </section>
    </div>
  );
};

export default FormsDoc;
