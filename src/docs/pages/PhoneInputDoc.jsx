import { useState } from 'react';
import PhoneInput from '../../lib/components/PhoneInput';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const PhoneInputDoc = () => {
  const [basic, setBasic] = useState('');
  const [fr, setFr] = useState('');
  const [sg, setSg] = useState('');

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic Phone Input</SectionTitle>
        <ComponentPreview
          title="Default (US)"
          code={`import { PhoneInput } from '@danesh-ui/react';

<PhoneInput label="Phone Number" defaultCountry="US" />`}
        >
          <div className="w-full max-w-sm">
            <PhoneInput label="Phone Number" defaultCountry="US" value={basic} onChange={e => setBasic(e.target.value)} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Different Countries</SectionTitle>
        <ComponentPreview
          title="France & Singapore"
          code={`<PhoneInput label="French Phone" defaultCountry="FR" />
<PhoneInput label="Singapore Phone" defaultCountry="SG" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <PhoneInput label="French Phone" defaultCountry="FR" value={fr} onChange={e => setFr(e.target.value)} />
            <PhoneInput label="Singapore Phone" defaultCountry="SG" value={sg} onChange={e => setSg(e.target.value)} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Country Search</SectionTitle>
        <ComponentPreview
          title="Searchable Dropdown"
          code={`<PhoneInput label="International Phone" hint="Click flag to change country" />`}
        >
          <div className="w-full max-w-sm">
            <PhoneInput label="International Phone" hint="Click the flag icon to change country" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Size Variants"
          code={`<PhoneInput size="sm" label="Small" defaultCountry="GB" />
<PhoneInput size="md" label="Medium" defaultCountry="DE" />
<PhoneInput size="lg" label="Large" defaultCountry="JP" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <PhoneInput size="sm" label="Small" defaultCountry="GB" />
            <PhoneInput size="md" label="Medium (default)" defaultCountry="DE" />
            <PhoneInput size="lg" label="Large" defaultCountry="JP" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Validation</SectionTitle>
        <ComponentPreview
          title="Error & Hint"
          code={`<PhoneInput label="Phone" error="Invalid phone number" defaultCountry="US" />
<PhoneInput label="Phone" hint="We'll never share your number" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <PhoneInput label="Phone Number" error="Invalid phone number" defaultCountry="US" />
            <PhoneInput label="Phone Number" hint="We'll never share your number" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label above the input' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text below input' },
          { name: 'value', type: 'string', default: '—', description: 'Controlled phone number value' },
          { name: 'onChange', type: '(e) => void', default: '—', description: 'Change handler, e.target.country has selected country' },
          { name: 'defaultCountry', type: 'string', default: '"US"', description: 'Default country code (ISO 2-letter)' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Input size' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input' },
        ]} />
      </section>
    </div>
  );
};

export default PhoneInputDoc;
