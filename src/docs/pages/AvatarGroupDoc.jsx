import React from 'react';
import Avatar from '../../lib/components/Avatar';
import AvatarGroup from '../../lib/components/AvatarGroup';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const AvatarGroupDoc = () => {
  const users = [
    { name: 'Alex Johnson', src: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Sarah Smith', src: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Michael Brown', src: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Elena Rodriguez', src: 'https://i.pravatar.cc/150?u=4' },
    { name: 'David Lee', src: 'https://i.pravatar.cc/150?u=5' },
  ];

  return (
    <div className="space-y-12">
      <ImportBlock component="AvatarGroup" subComponents={['Avatar']} />

      <section id="basic-group">
        <SectionTitle>Basic Grouping</SectionTitle>
        <ComponentPreview
          title="Stacked Avatars"
          code={`import { Avatar, AvatarGroup } from '@danesh-ui/react';

<AvatarGroup max={3}>
  <Avatar src="..." name="User 1" />
  <Avatar src="..." name="User 2" />
  <Avatar src="..." name="User 3" />
</AvatarGroup>`}
        >
          <div className="space-y-8">
            <AvatarGroup>
              {users.slice(0, 3).map(u => <Avatar key={u.name} {...u} />)}
            </AvatarGroup>
            
            <AvatarGroup max={4}>
              {users.map(u => <Avatar key={u.name} {...u} />)}
            </AvatarGroup>
          </div>
        </ComponentPreview>
      </section>

      <section id="sizes">
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Scale Variations"
          code={`<AvatarGroup size="sm">...</AvatarGroup>
<AvatarGroup size="lg">...</AvatarGroup>`}
        >
          <div className="space-y-8">
            <AvatarGroup size="sm">
              {users.slice(0, 4).map(u => <Avatar key={u.name} {...u} />)}
            </AvatarGroup>
            <AvatarGroup size="md">
              {users.slice(0, 4).map(u => <Avatar key={u.name} {...u} />)}
            </AvatarGroup>
            <AvatarGroup size="lg">
              {users.slice(0, 4).map(u => <Avatar key={u.name} {...u} />)}
            </AvatarGroup>
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'max', type: 'number', default: '5', description: 'Maximum number of avatars to show before truncation' },
          { name: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Size of avatars in the group' },
          { name: 'spacing', type: 'string', default: '"-space-x-3"', description: 'Tailwind spacing class for overlap' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Avatar components' },
        ]} />
      </section>
    </div>
  );
};

export default AvatarGroupDoc;
