import React, { useState } from 'react';
import { Search, Mail, Lock, Eye, EyeOff, User, Globe, Key } from 'lucide-react';
import Input from '../../lib/components/Input';
import Button from '../../lib/components/Button';
import { ComponentPreview, PropsTable, SectionTitle, CodeBlock } from '../DocComponents';

const InputDoc = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-10">
      {/* Basic */}
      <section>
        <SectionTitle>Basic Input</SectionTitle>
        <p className="text-sm text-slate-500 mb-6">A simple text input with a label.</p>
        <ComponentPreview
          title="Default Input"
          code={`import { Input } from '@danesh-ui/react';

<Input label="Full Name" placeholder="Enter your name" />
<Input label="Email" type="email" placeholder="you@example.com" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="Full Name" placeholder="Enter your name" />
            <Input label="Email" type="email" placeholder="you@example.com" />
          </div>
        </ComponentPreview>
      </section>

      {/* With Icons */}
      <section>
        <SectionTitle>With Icons</SectionTitle>
        <ComponentPreview
          title="Icon Inputs"
          code={`import { Search, Mail, Lock } from 'lucide-react';

<Input label="Search" placeholder="Type to search..." icon={Search} />
<Input label="Email" placeholder="you@company.com" icon={Mail} />
<Input label="Password" type="password" placeholder="••••••••" icon={Lock} />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="Search" placeholder="Type to search..." icon={Search} />
            <Input label="Email" placeholder="you@company.com" icon={Mail} />
            <Input label="Password" type="password" placeholder="••••••••" icon={Lock} />
          </div>
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Size Variants"
          code={`<Input size="sm" label="Small" placeholder="Small input" />
<Input size="md" label="Medium" placeholder="Medium input (default)" />
<Input size="lg" label="Large" placeholder="Large input" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input size="sm" label="Small" placeholder="Small input" />
            <Input size="md" label="Medium" placeholder="Medium input (default)" />
            <Input size="lg" label="Large" placeholder="Large input" />
          </div>
        </ComponentPreview>
      </section>

      {/* Error & Hint */}
      <section>
        <SectionTitle>Validation States</SectionTitle>
        <ComponentPreview
          title="Error & Hint"
          code={`<Input 
  label="API Key" 
  error="This field is required" 
  placeholder="dx_live_..." 
/>
<Input 
  label="Username" 
  hint="Must be 3-20 characters" 
  placeholder="Pick a username" 
  icon={User}
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="API Key" error="This field is required" placeholder="dx_live_..." />
            <Input label="Username" hint="Must be 3-20 characters" placeholder="Pick a username" icon={User} />
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled & Required */}
      <section>
        <SectionTitle>Disabled & Required</SectionTitle>
        <ComponentPreview
          title="States"
          code={`<Input label="Disabled Input" placeholder="Cannot edit" disabled />
<Input label="Required Field" placeholder="Must fill in" required />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="Disabled Input" placeholder="Cannot edit" disabled />
            <Input label="Required Field" placeholder="Must fill in" required />
          </div>
        </ComponentPreview>
      </section>

      {/* Form Example */}
      <section>
        <SectionTitle>Form Example</SectionTitle>
        <ComponentPreview
          title="Login Form"
          code={`import { Input, Button } from '@danesh-ui/react';
import { Mail, Lock } from 'lucide-react';

<div className="space-y-4">
  <Input label="Email" placeholder="alex@danesh.com" icon={Mail} />
  <Input label="Password" type="password" placeholder="••••••••" icon={Lock} />
  <Button className="w-full">Sign In</Button>
</div>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="Email" placeholder="alex@danesh.com" icon={Mail} />
            <Input label="Password" type="password" placeholder="••••••••" icon={Lock} />
            <Button className="w-full">Sign In to Dashboard</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* API */}
      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label text above the input' },
          { name: 'error', type: 'string', default: '—', description: 'Error message (turns input red)' },
          { name: 'hint', type: 'string', default: '—', description: 'Help text below the input' },
          { name: 'icon', type: 'LucideIcon', default: '—', description: 'Left-side icon' },
          { name: 'iconRight', type: 'LucideIcon', default: '—', description: 'Right-side icon' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Input size' },
          { name: 'required', type: 'boolean', default: 'false', description: 'Shows asterisk on label' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
        ]} />
      </section>
    </div>
  );
};

export default InputDoc;
