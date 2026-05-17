import { useState } from 'react';
import OtpInput from '../../lib/components/OtpInput';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const OtpInputDoc = () => {
  const [code, setCode] = useState('');

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic OTP</SectionTitle>
        <ComponentPreview
          title="6-Digit Code"
          code={`import { OtpInput } from '@danesh-ui/react';

<OtpInput length={6} autoFocus />`}
        >
          <div className="w-full max-w-sm flex justify-center">
            <OtpInput length={6} autoFocus />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>With Label</SectionTitle>
        <ComponentPreview
          title="Verification Code"
          code={`<OtpInput
  label="Verification Code"
  hint="Enter the 6-digit code sent to your email"
  length={6}
/>`}
        >
          <div className="w-full max-w-sm flex justify-center">
            <OtpInput
              label="Verification Code"
              hint="Enter the 6-digit code sent to your email"
              length={6}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Controlled & Auto-Submit</SectionTitle>
        <ComponentPreview
          title="With Complete Callback"
          code={`const [code, setCode] = useState('');

<OtpInput
  label="2FA Code"
  length={6}
  value={code}
  onChange={setCode}
  onComplete={(val) => alert(\`Verified: \${val}\`)}
  hint="Auto-verifies when all digits entered"
/>`}
        >
          <div className="w-full max-w-sm flex flex-col items-center gap-4">
            <OtpInput
              label="2FA Code"
              length={6}
              value={code}
              onChange={setCode}
              onComplete={(val) => alert(`Code submitted: ${val}`)}
              hint="Auto-verifies when all digits entered"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Size Variants"
          code={`<OtpInput size="sm" length={4} />
<OtpInput size="md" length={4} />
<OtpInput size="lg" length={4} />`}
        >
          <div className="w-full max-w-sm flex flex-col items-center gap-6">
            <OtpInput size="sm" length={4} />
            <OtpInput size="md" length={4} />
            <OtpInput size="lg" length={4} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Error State</SectionTitle>
        <ComponentPreview
          title="Invalid Code"
          code={`<OtpInput
  label="One-Time Password"
  length={6}
  error="Invalid code. Please try again."
/>`}
        >
          <div className="w-full max-w-sm flex justify-center">
            <OtpInput
              label="One-Time Password"
              length={6}
              error="Invalid code. Please try again."
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>4 Digit Short Code</SectionTitle>
        <ComponentPreview
          title="Compact OTP"
          code={`<OtpInput length={4} size="lg" hint="Enter your 4-digit PIN" />`}
        >
          <div className="w-full max-w-sm flex justify-center">
            <OtpInput length={4} size="lg" hint="Enter your 4-digit PIN" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'length', type: 'number', default: '6', description: 'Number of OTP digits' },
          { name: 'value', type: 'string', default: '—', description: 'Controlled value' },
          { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Called on each digit change' },
          { name: 'onComplete', type: '(value: string) => void', default: '—', description: 'Called when all digits entered' },
          { name: 'label', type: 'string', default: '—', description: 'Label above the input' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text below input' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of each digit box' },
          { name: 'type', type: '"text" | "password"', default: '"text"', description: 'Input type' },
          { name: 'autoFocus', type: 'boolean', default: 'false', description: 'Auto-focus first digit' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input' },
        ]} />
      </section>
    </div>
  );
};

export default OtpInputDoc;
