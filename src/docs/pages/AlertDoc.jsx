import React from 'react';
import Alert from '../../lib/components/Alert';
import { ComponentPreview, PropsTable, SectionTitle, CodeBlock } from '../DocComponents';

const AlertDoc = () => {
  return (
    <div className="space-y-10">
      {/* Variants */}
      <section>
        <SectionTitle>Variants</SectionTitle>
        <p className="text-sm text-slate-500 mb-6">Four semantic variants with auto-matching icons for quick feedback communication.</p>
        <ComponentPreview
          title="All Variants"
          code={`import { Alert } from '@danesh-ui/react';

<Alert variant="info" title="New Feature">
  We just added dark mode support to the dashboard.
</Alert>

<Alert variant="success" title="System Status">
  All nodes are operational. Latency is within normal parameters.
</Alert>

<Alert variant="warning" title="Security Warning">
  Someone from a new IP just logged into your console.
</Alert>

<Alert variant="error" title="Deployment Failed">
  The production build failed on step 4: "Minification Error".
</Alert>`}
        >
          <div className="w-full max-w-2xl space-y-4">
            <Alert variant="info" title="New Feature">
              We just added dark mode support to the dashboard.
            </Alert>
            <Alert variant="success" title="System Status">
              All nodes are operational. Latency is within normal parameters.
            </Alert>
            <Alert variant="warning" title="Security Warning">
              Someone from a new IP just logged into your console.
            </Alert>
            <Alert variant="error" title="Deployment Failed">
              The production build failed on step 4: "Minification Error".
            </Alert>
          </div>
        </ComponentPreview>
      </section>

      {/* Dismissible */}
      <section>
        <SectionTitle>Dismissible</SectionTitle>
        <p className="text-sm text-slate-500 mb-6">Add a close button with the <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">dismissible</code> prop.</p>
        <ComponentPreview
          title="Dismissible Alerts"
          code={`<Alert variant="info" title="Tip" dismissible>
  Click the X button to dismiss this alert.
</Alert>

<Alert variant="warning" title="Heads up!" dismissible>
  Your trial expires in 3 days. Upgrade now.
</Alert>`}
        >
          <div className="w-full max-w-2xl space-y-4">
            <Alert variant="info" title="Tip" dismissible>
              Click the X button to dismiss this alert.
            </Alert>
            <Alert variant="warning" title="Heads up!" dismissible>
              Your trial expires in 3 days. Upgrade now.
            </Alert>
          </div>
        </ComponentPreview>
      </section>

      {/* Without title */}
      <section>
        <SectionTitle>Without Title</SectionTitle>
        <ComponentPreview
          title="Simple Alerts"
          code={`<Alert variant="success">
  Your changes have been saved successfully.
</Alert>
<Alert variant="error">
  Unable to connect to the database. Please try again.
</Alert>`}
        >
          <div className="w-full max-w-2xl space-y-4">
            <Alert variant="success">
              Your changes have been saved successfully.
            </Alert>
            <Alert variant="error">
              Unable to connect to the database. Please try again.
            </Alert>
          </div>
        </ComponentPreview>
      </section>

      {/* API */}
      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'variant', type: '"info" | "success" | "warning" | "error"', default: '"info"', description: 'Alert style variant with matching icon' },
          { name: 'title', type: 'string', default: '—', description: 'Bold title text' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Alert body content' },
          { name: 'dismissible', type: 'boolean', default: 'false', description: 'Shows a close button' },
          { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        ]} />
      </section>
    </div>
  );
};

export default AlertDoc;
