import Textarea from '../../lib/components/Textarea';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const TextareaDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Textarea" />

      <section id="basic-textarea">
        <SectionTitle>Basic Textarea</SectionTitle>
        <ComponentPreview
          title="Multi-line Input"
          code={`import { Textarea } from '@danesh-ui/react';

<Textarea 
  label="Message" 
  placeholder="Enter your message..." 
  rows={4} 
/>`}
        >
          <div className="w-full max-w-lg">
            <Textarea 
              label="Feedback" 
              placeholder="Tell us what you think..." 
              rows={4} 
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="states">
        <SectionTitle>Validation States</SectionTitle>
        <ComponentPreview
          title="Error & Hint"
          code={`<Textarea label="Bio" error="Too many characters" />
<Textarea label="Notes" hint="Markdown supported" />`}
        >
          <div className="w-full max-w-lg space-y-6">
            <Textarea 
              label="Biography" 
              placeholder="A short bio..." 
              error="Maximum length exceeded by 12 characters." 
            />
            <Textarea 
              label="Additional Notes" 
              placeholder="Add your notes here..." 
              hint="You can use Markdown to format your text." 
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label text' },
          { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text' },
          { name: 'rows', type: 'number', default: '4', description: 'Number of visible rows' },
          { name: 'error', type: 'string', default: '—', description: 'Error message text' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text below input' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
        ]} />
      </section>
    </div>
  );
};

export default TextareaDoc;
