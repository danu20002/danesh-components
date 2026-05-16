import React, { useState } from 'react';
import Checkbox from '../../lib/components/Checkbox';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const CheckboxDoc = () => {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  return (
    <div className="space-y-12">
      <ImportBlock component="Checkbox" />

      <section id="basic-checkbox">
        <SectionTitle>Basic Checkbox</SectionTitle>
        <ComponentPreview
          title="Simple Selection"
          code={`import { Checkbox } from '@danesh-ui/react';

<Checkbox 
  label="Accept terms & conditions" 
  checked={checked} 
  onChange={setChecked} 
/>`}
        >
          <div className="space-y-4">
            <Checkbox checked={check1} onChange={setCheck1} label="Accept terms & conditions" />
            <Checkbox checked={check2} onChange={setCheck2} label="Subscribe to newsletter" />
          </div>
        </ComponentPreview>
      </section>

      <section id="with-description">
        <SectionTitle>With Description</SectionTitle>
        <ComponentPreview
          title="Informative Checkbox"
          code={`<Checkbox 
  label="Enable 2FA" 
  description="Recommended for security" 
  checked={checked}
  onChange={setChecked}
/>`}
        >
          <Checkbox 
            checked={check3} 
            onChange={setCheck3} 
            label="Enable 2FA" 
            description="Protect your account with an extra layer of security." 
          />
        </ComponentPreview>
      </section>

      <section id="states">
        <SectionTitle>States</SectionTitle>
        <ComponentPreview
          title="Disabled & Error States"
          code={`<Checkbox disabled label="Disabled option" />
<Checkbox disabled checked label="Disabled checked" />`}
        >
          <div className="space-y-4">
            <Checkbox disabled label="Disabled option" />
            <Checkbox disabled checked label="Disabled checked" />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state' },
          { name: 'onChange', type: '(checked: boolean) => void', default: '—', description: 'Change handler' },
          { name: 'label', type: 'string', default: '—', description: 'Label text' },
          { name: 'description', type: 'string', default: '—', description: 'Secondary text below the label' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
          { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        ]} />
      </section>
    </div>
  );
};

export default CheckboxDoc;
