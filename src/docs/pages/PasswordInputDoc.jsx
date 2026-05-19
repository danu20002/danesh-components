import { useState } from 'react';
import { Lock, Key, Shield } from 'daneshicons';
import PasswordInput from '../../lib/components/PasswordInput';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const PasswordInputDoc = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('P@ssw0rd!');

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic Password</SectionTitle>
        <ComponentPreview
          title="Standard Password Input"
          code={`import { PasswordInput } from '@danesh-ui/react';

<PasswordInput label="Password" placeholder="Enter password" />
<PasswordInput label="Confirm Password" icon={Lock} placeholder="Re-enter password" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <PasswordInput label="Password" placeholder="Enter password" />
            <PasswordInput label="Confirm Password" icon={Lock} placeholder="Re-enter password" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>With Strength Meter</SectionTitle>
        <ComponentPreview
          title="Password Strength"
          code={`import { PasswordInput } from '@danesh-ui/react';
import { Key } from 'daneshicons';

<PasswordInput
  label="Create Password"
  icon={Key}
  showStrength
  placeholder="Type a strong password..."
/>`}
        >
          <div className="w-full max-w-sm">
            <PasswordInput
              label="Create Password"
              icon={Key}
              showStrength
              placeholder="Type a strong password..."
              value={val1}
              onChange={e => setVal1(e.target.value)}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>With Copy Button</SectionTitle>
        <ComponentPreview
          title="Copyable Password"
          code={`<PasswordInput
  label="Generated Password"
  value="P@ssw0rd!"
  allowCopy
  showStrength
  icon={Shield}
/>`}
        >
          <div className="w-full max-w-sm">
            <PasswordInput
              label="Generated Password"
              icon={Shield}
              allowCopy
              showStrength
              value={val2}
              onChange={e => setVal2(e.target.value)}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Validation States</SectionTitle>
        <ComponentPreview
          title="Error & Hint"
          code={`<PasswordInput
  label="Current Password"
  error="Incorrect password"
  icon={Lock}
  placeholder="••••••••"
/>
<PasswordInput
  label="New Password"
  hint="Min 8 characters with 1 number & 1 symbol"
  showStrength
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <PasswordInput label="Current Password" error="Incorrect password" icon={Lock} placeholder="••••••••" />
            <PasswordInput label="New Password" hint="Min 8 characters with 1 number & 1 symbol" showStrength />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Size Variants"
          code={`<PasswordInput size="sm" label="Small" placeholder="Small" />
<PasswordInput size="md" label="Medium" placeholder="Medium (default)" />
<PasswordInput size="lg" label="Large" placeholder="Large" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <PasswordInput size="sm" label="Small" placeholder="Small" />
            <PasswordInput size="md" label="Medium" placeholder="Medium (default)" />
            <PasswordInput size="lg" label="Large" placeholder="Large" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label above the input' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text below input' },
          { name: 'icon', type: 'DaneshIcon', default: '—', description: 'Left-side icon' },
          { name: 'showStrength', type: 'boolean', default: 'false', description: 'Show strength meter' },
          { name: 'allowCopy', type: 'boolean', default: 'false', description: 'Show copy-to-clipboard button' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Input size' },
          { name: 'required', type: 'boolean', default: 'false', description: 'Required field indicator' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input' },
        ]} />
      </section>
    </div>
  );
};

export default PasswordInputDoc;
