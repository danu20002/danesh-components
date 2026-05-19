import { useState } from 'react';
import { Search, Mail, Lock, Eye, EyeOff, User, AtSign, Link } from 'daneshicons';
import Input from '../../lib/components/Input';
import Button from '../../lib/components/Button';
import { ComponentPreview, PropsTable, SectionTitle, NoteBlock } from '../DocComponents';

const InputDoc = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic Input</SectionTitle>
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

      <section>
        <SectionTitle>With Icons</SectionTitle>
        <ComponentPreview
          title="Icon Inputs"
          code={`import { Search, Mail, Lock } from 'daneshicons';

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

      <section>
        <SectionTitle>Input Types</SectionTitle>
        <ComponentPreview
          title="HTML5 Input Types"
          code={`<Input label="Email" type="email" placeholder="email@example.com" icon={AtSign} />
<Input label="Website" type="url" placeholder="https://example.com" icon={Link} />
<Input label="Search" type="search" placeholder="Search..." icon={Search} />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="Email" type="email" placeholder="email@example.com" icon={AtSign} />
            <Input label="Website" type="url" placeholder="https://example.com" icon={Link} />
            <Input label="Search" type="search" placeholder="Search..." icon={Search} />
          </div>
        </ComponentPreview>
      </section>

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

      <section>
        <SectionTitle>Right Icon</SectionTitle>
        <ComponentPreview
          title="Icon Right"
          code={`const [visible, setVisible] = useState(false);

<Input 
  label="Password"
  type={visible ? 'text' : 'password'}
  icon={Lock}
  iconRight={visible ? EyeOff : Eye}
  placeholder="••••••••"
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              icon={Lock}
              iconRight={showPassword ? EyeOff : Eye}
              placeholder="••••••••"
              onClickIconRight={() => setShowPassword(!showPassword)}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Disabled & Read Only</SectionTitle>
        <ComponentPreview
          title="States"
          code={`<Input label="Disabled Input" placeholder="Cannot edit" disabled />
<Input label="Read Only" value="Pre-filled value" readOnly />
<Input label="Required Field" placeholder="Must fill in" required />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="Disabled Input" placeholder="Cannot edit" disabled />
            <Input label="Read Only" value="Pre-filled value" readOnly />
            <Input label="Required Field" placeholder="Must fill in" required />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Form Example</SectionTitle>
        <ComponentPreview
          title="Login Form"
          code={`import { Input, Button } from '@danesh-ui/react';
import { Mail, Lock, User } from 'daneshicons';

<div className="max-w-sm space-y-4 p-6 border rounded-2xl">
  <Input label="Full Name" placeholder="Alex Danesh" icon={User} />
  <Input label="Email" placeholder="alex@danesh.com" icon={Mail} />
  <Input label="Password" type="password" placeholder="••••••••" icon={Lock} />
  <Button className="w-full">Sign In to Dashboard</Button>
</div>`}
        >
          <div className="w-full max-w-sm space-y-4 p-6 border theme-border-secondary rounded-2xl theme-bg-card">
            <Input label="Full Name" placeholder="Alex Danesh" icon={User} />
            <Input label="Email" placeholder="alex@danesh.com" icon={Mail} />
            <Input label="Password" type="password" placeholder="••••••••" icon={Lock} />
            <Button className="w-full">Sign In to Dashboard</Button>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Input Group Layout</SectionTitle>
        <ComponentPreview
          title="Side-by-Side"
          code={`<div className="flex gap-3">
  <div className="flex-1">
    <Input label="First Name" placeholder="John" />
  </div>
  <div className="flex-1">
    <Input label="Last Name" placeholder="Doe" />
  </div>
</div>
<div className="flex gap-3">
  <div className="w-24">
    <Input label="Age" type="number" placeholder="25" />
  </div>
  <div className="flex-1">
    <Input label="Occupation" placeholder="Engineer" icon={User} />
  </div>
</div>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Input label="First Name" placeholder="John" />
              </div>
              <div className="flex-1">
                <Input label="Last Name" placeholder="Doe" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-24">
                <Input label="Age" type="number" placeholder="25" />
              </div>
              <div className="flex-1">
                <Input label="Occupation" placeholder="Engineer" icon={User} />
              </div>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Dark Mode Compatible</SectionTitle>
        <NoteBlock type="tip">
          All Input components automatically adapt to dark mode using CSS variables. The border, background, text, and placeholder colors transition smoothly when the theme is toggled.
        </NoteBlock>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label text above the input' },
          { name: 'error', type: 'string', default: '—', description: 'Error message (turns input red)' },
          { name: 'hint', type: 'string', default: '—', description: 'Help text below the input' },
          { name: 'icon', type: 'DaneshIcon', default: '—', description: 'Left-side icon' },
          { name: 'iconRight', type: 'DaneshIcon', default: '—', description: 'Right-side icon' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Input size' },
          { name: 'required', type: 'boolean', default: 'false', description: 'Shows asterisk on label' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
          { name: 'readOnly', type: 'boolean', default: 'false', description: 'Makes input read-only' },
          { name: 'type', type: 'string', default: '"text"', description: 'HTML input type' },
        ]} />
      </section>
    </div>
  );
};

export default InputDoc;
