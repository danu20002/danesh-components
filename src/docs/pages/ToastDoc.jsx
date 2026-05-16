import React from 'react';
import Button from '../../lib/components/Button';
import { toast } from '../../lib/components/Toast';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock, NoteBlock } from '../DocComponents';

const ToastDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="ToastContainer" subComponents={['toast']} />

      <NoteBlock type="info">
        Toast requires a <code>ToastContainer</code> to be mounted at the root of your application (usually in <code>App.jsx</code>).
      </NoteBlock>

      <section id="basic-toast">
        <SectionTitle>Basic Usage</SectionTitle>
        <ComponentPreview
          title="Notifications"
          code={`import { toast } from '@danesh-ui/react';

<Button onClick={() => toast.success('Operation completed!')}>
  Show Toast
</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="success" onClick={() => toast.success('Profile updated successfully!')}>
              Success Toast
            </Button>
            <Button variant="danger" onClick={() => toast.error('Failed to save changes.')}>
              Error Toast
            </Button>
            <Button variant="secondary" onClick={() => toast.info('New message received.')}>
              Info Toast
            </Button>
            <Button variant="outline" onClick={() => toast.warning('Storage is almost full.')}>
              Warning Toast
            </Button>
          </div>
        </ComponentPreview>
      </section>

      <section id="with-description">
        <SectionTitle>With Description</SectionTitle>
        <ComponentPreview
          title="Detailed Notifications"
          code={`toast.success('File Uploaded', { 
  description: 'Your document is now available.' 
});`}
        >
          <Button 
            variant="secondary" 
            onClick={() => toast.success('Deployment Started', { 
              description: 'We are deploying your changes to the production server. This may take a few minutes.' 
            })}
          >
            Show Detailed Toast
          </Button>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'toast.success(title, options?)', type: 'function', default: '—', description: 'Show a success toast' },
          { name: 'toast.error(title, options?)', type: 'function', default: '—', description: 'Show an error toast' },
          { name: 'toast.info(title, options?)', type: 'function', default: '—', description: 'Show an info toast' },
          { name: 'toast.warning(title, options?)', type: 'function', default: '—', description: 'Show a warning toast' },
          { name: 'options.description', type: 'string', default: '—', description: 'Secondary text' },
          { name: 'options.duration', type: 'number', default: '4000', description: 'Time in ms before auto-dismiss' },
        ]} />
      </section>
    </div>
  );
};

export default ToastDoc;
