import React, { useState } from 'react';
import { Zap, Shield, Globe, Cpu, HelpCircle } from 'daneshicons';
import Progress from '../../lib/components/Progress';
import Skeleton from '../../lib/components/Skeleton';
import Accordion from '../../lib/components/Accordion';
import Divider from '../../lib/components/Divider';
import Tooltip from '../../lib/components/Tooltip';
import ToastContainer, { toast } from '../../lib/components/Toast';
import Button from '../../lib/components/Button';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const FeedbackDoc = () => {
  const [progress, setProgress] = useState(65);

  return (
    <div className="space-y-10">
      <ToastContainer position="bottom-right" />

      {/* Progress */}
      <section>
        <SectionTitle>Progress</SectionTitle>
        <ComponentPreview
          title="Progress Bars"
          code={`import { Progress } from '@danesh-ui/react';

<Progress value={65} label="Upload" showValue />
<Progress value={30} variant="warning" size="lg" />
<Progress value={90} variant="success" label="Complete" showValue />`}
        >
          <div className="w-full max-w-md space-y-4">
            <Progress value={progress} label="Upload Progress" showValue />
            <Progress value={30} variant="warning" label="Storage Used" showValue />
            <Progress value={90} variant="success" label="Build Status" showValue />
            <Progress value={15} variant="info" size="xs" />
            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="secondary" onClick={() => setProgress(p => Math.max(0, p - 10))}>-10%</Button>
              <Button size="sm" onClick={() => setProgress(p => Math.min(100, p + 10))}>+10%</Button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Skeleton */}
      <section>
        <SectionTitle>Skeleton</SectionTitle>
        <ComponentPreview
          title="Loading Placeholders"
          code={`import { Skeleton } from '@danesh-ui/react';

<Skeleton variant="circular" width="48px" height="48px" />
<Skeleton variant="rectangular" height="120px" />
<Skeleton variant="text" lines={3} />`}
        >
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton variant="circular" width="48px" height="48px" />
              <div className="flex-1">
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" className="mt-2" />
              </div>
            </div>
            <Skeleton variant="rectangular" height="120px" />
            <Skeleton variant="text" lines={4} />
          </div>
        </ComponentPreview>
      </section>

      {/* Toast */}
      <section>
        <SectionTitle>Toast Notifications</SectionTitle>
        <p className="text-sm text-slate-500 mb-6">Imperative toast API. Add <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">{'<ToastContainer />'}</code> once in your app root.</p>
        <ComponentPreview
          title="Toast Triggers"
          code={`import { ToastContainer, toast } from '@danesh-ui/react';

// In your root layout:
<ToastContainer position="bottom-right" />

// Trigger toasts anywhere:
toast.success('Saved!', { description: 'Changes saved.' });
toast.error('Failed!', { description: 'Something went wrong.' });
toast.warning('Warning', { description: 'Check your input.' });
toast.info('Info', { description: 'New update available.' });`}
        >
          <div className="flex flex-wrap gap-3">
            <Button variant="success" size="sm" onClick={() => toast.success('Saved successfully!', { description: 'Your changes have been saved.' })}>
              Success Toast
            </Button>
            <Button variant="danger" size="sm" onClick={() => toast.error('Error occurred!', { description: 'Failed to save changes.' })}>
              Error Toast
            </Button>
            <Button variant="secondary" size="sm" onClick={() => toast.warning('Warning!', { description: 'Please check your input fields.' })}>
              Warning Toast
            </Button>
            <Button variant="outline" size="sm" onClick={() => toast.info('New update', { description: 'Version 2.0 is now available.' })}>
              Info Toast
            </Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Accordion */}
      <section>
        <SectionTitle>Accordion</SectionTitle>
        <ComponentPreview
          title="Collapsible Sections"
          code={`import { Accordion } from '@danesh-ui/react';

<Accordion
  items={[
    { title: 'What is Danesh UI?', icon: Zap, content: '...' },
    { title: 'How do I install it?', icon: Shield, content: '...' },
    { title: 'Is it free?', icon: Globe, content: '...' },
  ]}
  defaultOpen={[0]}
/>`}
        >
          <div className="w-full max-w-lg">
            <Accordion
              defaultOpen={[0]}
              items={[
                { title: "What is Danesh'UI?", icon: Zap, content: "Danesh'UI is an enterprise-grade React component library built with Tailwind CSS. It provides pre-built, accessible UI components for building modern dashboards and applications." },
                { title: "How do I install it?", icon: Shield, content: "Run `npm install @danesh-ui/react` in your project. Make sure you have Tailwind CSS configured in your project as a prerequisite." },
                { title: "Is it open source?", icon: Globe, content: "Danesh'UI is currently in private beta. We plan to open-source the core library in the v1.0.0 release." },
                { title: "What's the tech stack?", icon: Cpu, content: "React 18+, Tailwind CSS v4, Lucide Icons, and clsx for class composition. All components are tree-shakeable." },
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Divider */}
      <section>
        <SectionTitle>Divider</SectionTitle>
        <ComponentPreview
          title="Content Separator"
          code={`import { Divider } from '@danesh-ui/react';

<Divider />
<Divider label="OR" />
<Divider label="Section" />`}
        >
          <div className="w-full max-w-md space-y-6">
            <p className="text-sm text-slate-600 text-center">Content above divider</p>
            <Divider />
            <p className="text-sm text-slate-600 text-center">Plain divider above</p>
            <Divider label="OR" />
            <p className="text-sm text-slate-600 text-center">Labeled divider above</p>
            <Divider label="Continue" />
            <p className="text-sm text-slate-600 text-center">Another labeled divider</p>
          </div>
        </ComponentPreview>
      </section>

      {/* Tooltip */}
      <section>
        <SectionTitle>Tooltip</SectionTitle>
        <ComponentPreview
          title="Hover Tooltips"
          code={`import { Tooltip, Button } from '@danesh-ui/react';

<Tooltip text="Top tooltip" position="top">
  <Button variant="secondary">Top</Button>
</Tooltip>

<Tooltip text="Right side" position="right">
  <Button variant="secondary">Right</Button>
</Tooltip>`}
        >
          <div className="flex gap-6 items-center py-6">
            <Tooltip text="I appear on top!" position="top">
              <Button variant="secondary" size="sm">Hover (Top)</Button>
            </Tooltip>
            <Tooltip text="Right tooltip" position="right">
              <Button variant="secondary" size="sm">Hover (Right)</Button>
            </Tooltip>
            <Tooltip text="Bottom tooltip" position="bottom">
              <Button variant="secondary" size="sm">Hover (Bottom)</Button>
            </Tooltip>
            <Tooltip text="Left tooltip" position="left">
              <Button variant="secondary" size="sm">Hover (Left)</Button>
            </Tooltip>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
};

export default FeedbackDoc;
