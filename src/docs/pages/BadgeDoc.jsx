import Badge from '../../lib/components/Badge';
import { ComponentPreview, PropsTable, SectionTitle, NoteBlock } from '../DocComponents';

const BadgeDoc = () => (
  <div className="space-y-10">
    <NoteBlock type="tip">
      Explore the <strong>Badge Lab</strong> for status badges, notification counters, badge groups, and animated pulse badges.
    </NoteBlock>
    <section>
      <SectionTitle>Variants</SectionTitle>
      <ComponentPreview
        title="All Variants"
        code={`import { Badge } from '@danesh-ui/react';

<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="outline">Outline</Badge>
      </ComponentPreview>
    </section>

    <section>
      <SectionTitle>With Status Dot</SectionTitle>
      <ComponentPreview
        title="Dot Indicator"
        code={`<Badge variant="success" dot>Online</Badge>
<Badge variant="warning" dot>Away</Badge>
<Badge variant="error" dot>Busy</Badge>
<Badge dot>Offline</Badge>`}
      >
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="warning" dot>Away</Badge>
        <Badge variant="error" dot>Busy</Badge>
        <Badge dot>Offline</Badge>
      </ComponentPreview>
    </section>

    <section>
      <SectionTitle>Sizes</SectionTitle>
      <ComponentPreview
        title="Badge Sizes"
        code={`<Badge size="sm" variant="primary">Small</Badge>
<Badge size="md" variant="primary">Medium</Badge>
<Badge size="lg" variant="primary">Large</Badge>`}
      >
        <Badge size="sm" variant="primary">Small</Badge>
        <Badge size="md" variant="primary">Medium</Badge>
        <Badge size="lg" variant="primary">Large</Badge>
      </ComponentPreview>
    </section>

    <section>
      <SectionTitle>API Reference</SectionTitle>
      <PropsTable props={[
        { name: 'variant', type: '"default" | "primary" | "success" | "warning" | "error" | "info" | "outline"', default: '"default"', description: 'Badge color variant' },
        { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Badge size' },
        { name: 'dot', type: 'boolean', default: 'false', description: 'Shows a colored dot indicator' },
        { name: 'children', type: 'ReactNode', default: '—', description: 'Badge text content' },
      ]} />
    </section>
  </div>
);

export default BadgeDoc;
