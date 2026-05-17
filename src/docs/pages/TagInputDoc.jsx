import { useState } from 'react';
import TagInput from '../../lib/components/TagInput';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const TagInputDoc = () => {
  const [emails, setEmails] = useState(['alex@danesh.com', 'sarah@acme.co']);
  const [redTags, setRedTags] = useState(['urgent', 'critical']);
  const [blueTags, setBlueTags] = useState(['feature', 'enhancement']);
  const [greenTags, setGreenTags] = useState(['completed', 'tested']);
  const [purpleTags, setPurpleTags] = useState(['research', 'design']);

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic Tag Input</SectionTitle>
        <ComponentPreview
          title="Default Tags"
          code={`import { TagInput } from '@danesh-ui/react';

<TagInput placeholder="Add a tag and press Enter..." />`}
        >
          <div className="w-full max-w-md">
            <TagInput placeholder="Add a tag and press Enter..." />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Controlled Tags</SectionTitle>
        <ComponentPreview
          title="Email Recipients"
          code={`const [emails, setEmails] = useState(['alex@danesh.com']);

<TagInput
  label="To"
  tags={emails}
  onChange={setEmails}
  placeholder="Add recipients..."
  validate={(tag) => tag.includes('@')}
  color="blue"
/>`}
        >
          <div className="w-full max-w-md">
            <TagInput
              label="To"
              tags={emails}
              onChange={setEmails}
              placeholder="Add recipients..."
              validate={(tag) => tag.includes('@')}
              color="blue"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Color Variants</SectionTitle>
        <ComponentPreview
          title="Tag Colors"
          code={`<TagInput color="red" placeholder="Red tags..." />
<TagInput color="blue" placeholder="Blue tags..." />
<TagInput color="green" placeholder="Green tags..." />
<TagInput color="purple" placeholder="Purple tags..." />`}
        >
          <div className="w-full max-w-md space-y-3">
            <TagInput color="red" tags={redTags} onChange={setRedTags} placeholder="Red tags..." />
            <TagInput color="blue" tags={blueTags} onChange={setBlueTags} placeholder="Blue tags..." />
            <TagInput color="green" tags={greenTags} onChange={setGreenTags} placeholder="Green tags..." />
            <TagInput color="purple" tags={purpleTags} onChange={setPurpleTags} placeholder="Purple tags..." />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Max Tags & Validation</SectionTitle>
        <ComponentPreview
          title="With Limits"
          code={`<TagInput
  label="Skills (max 5)"
  placeholder="Add a skill..."
  maxTags={5}
  hint="You can add up to 5 skills"
/>`}
        >
          <div className="w-full max-w-md">
            <TagInput
              label="Skills (max 5)"
              placeholder="Add a skill..."
              maxTags={5}
              hint="You can add up to 5 skills"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Size Variants"
          code={`<TagInput size="sm" placeholder="Small tags..." />
<TagInput size="md" placeholder="Medium tags..." />
<TagInput size="lg" placeholder="Large tags..." />`}
        >
          <div className="w-full max-w-md space-y-3">
            <TagInput size="sm" placeholder="Small tags..." />
            <TagInput size="md" placeholder="Medium tags (default)..." />
            <TagInput size="lg" placeholder="Large tags..." />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Error State</SectionTitle>
        <ComponentPreview
          title="Validation Error"
          code={`<TagInput label="Roles" error="Invalid role format" placeholder="Add roles..." />`}
        >
          <div className="w-full max-w-md">
            <TagInput label="Roles" error="Invalid role format" placeholder="Add roles..." />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label above input' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text below input' },
          { name: 'tags', type: 'string[]', default: '[]', description: 'Controlled tag array' },
          { name: 'onChange', type: '(tags: string[]) => void', default: '—', description: 'Called when tags change' },
          { name: 'placeholder', type: 'string', default: '"Type and press Enter..."', description: 'Placeholder text' },
          { name: 'maxTags', type: 'number', default: '—', description: 'Maximum number of tags' },
          { name: 'validate', type: '(tag: string) => boolean', default: '—', description: 'Validation function per tag' },
          { name: 'color', type: '"red" | "blue" | "green" | "yellow" | "purple" | "slate"', default: '"red"', description: 'Tag color theme' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Input size' },
          { name: 'allowDuplicates', type: 'boolean', default: 'false', description: 'Allow duplicate tags' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input' },
        ]} />
      </section>
    </div>
  );
};

export default TagInputDoc;
