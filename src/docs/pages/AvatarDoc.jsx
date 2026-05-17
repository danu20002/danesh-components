import Avatar from '../../lib/components/Avatar';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const AvatarDoc = () => (
  <div className="space-y-10">
    <ImportBlock component="Avatar" />

    <section>
      <SectionTitle>Initials Avatar</SectionTitle>
      <ComponentPreview
        title="Name Initials"
        code={`import { Avatar } from '@danesh-ui/react';

<Avatar name="John Doe" />
<Avatar name="Alice Smith" />
<Avatar name="Bob Wilson" />`}
      >
        <Avatar name="John Doe" />
        <Avatar name="Alice Smith" />
        <Avatar name="Bob Wilson" />
      </ComponentPreview>
    </section>

    <section>
      <SectionTitle>Sizes</SectionTitle>
      <ComponentPreview
        title="Avatar Sizes"
        code={`<Avatar name="JD" size="xs" />
<Avatar name="JD" size="sm" />
<Avatar name="JD" size="md" />
<Avatar name="JD" size="lg" />
<Avatar name="JD" size="xl" />`}
      >
        <Avatar name="JD" size="xs" />
        <Avatar name="JD" size="sm" />
        <Avatar name="JD" size="md" />
        <Avatar name="JD" size="lg" />
        <Avatar name="JD" size="xl" />
      </ComponentPreview>
    </section>

    <section>
      <SectionTitle>Status Indicator</SectionTitle>
      <ComponentPreview
        title="Online Status"
        code={`<Avatar name="John" status="online" size="lg" />
<Avatar name="Alice" status="away" size="lg" />
<Avatar name="Bob" status="busy" size="lg" />
<Avatar name="Eve" status="offline" size="lg" />`}
      >
        <Avatar name="John" status="online" size="lg" />
        <Avatar name="Alice" status="away" size="lg" />
        <Avatar name="Bob" status="busy" size="lg" />
        <Avatar name="Eve" status="offline" size="lg" />
      </ComponentPreview>
    </section>

    <section>
      <SectionTitle>Placeholder (No Name)</SectionTitle>
      <ComponentPreview
        title="Fallback Avatar"
        code={`<Avatar size="lg" />
<Avatar size="md" />
<Avatar size="sm" />`}
      >
        <Avatar size="lg" />
        <Avatar size="md" />
        <Avatar size="sm" />
      </ComponentPreview>
    </section>

    <section>
      <SectionTitle>API Reference</SectionTitle>
      <PropsTable props={[
        { name: 'src', type: 'string', default: '—', description: 'Image URL' },
        { name: 'name', type: 'string', default: '—', description: 'Full name for initials fallback' },
        { name: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Avatar size' },
        { name: 'status', type: '"online" | "offline" | "busy" | "away"', default: '—', description: 'Status dot indicator' },
        { name: 'alt', type: 'string', default: '—', description: 'Image alt text' },
      ]} />
    </section>
  </div>
);

export default AvatarDoc;
