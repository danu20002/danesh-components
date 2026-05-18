import Accordion from '../../lib/components/Accordion';
import { HelpCircle, Shield, Zap } from 'daneshicons';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const AccordionDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Accordion" />

      <section id="basic-accordion">
        <SectionTitle>Basic Accordion</SectionTitle>
        <ComponentPreview
          title="Collapsible Content"
          code={`import { Accordion } from '@danesh-ui/react';

<Accordion
  items={[
    { title: 'What is Danesh\'UI?', content: 'A premium React component library.' },
    { title: 'Is it free?', content: 'Yes, it\'s open source!' }
  ]}
/>`}
        >
          <div className="w-full max-w-2xl">
            <Accordion
              items={[
                { title: 'What is Danesh\'UI?', content: 'Danesh\'UI is an enterprise-grade React component library built with Tailwind CSS v4, focusing on performance, accessibility, and premium design.' },
                { title: 'Which frameworks are supported?', content: 'Currently we support React 18 and 19. Next.js, Vite, and Remix are all fully compatible.' },
                { title: 'Can I use it for commercial projects?', content: 'Absolutely! Danesh\'UI is licensed under MIT, allowing you to use it for personal and commercial projects without any restrictions.' }
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="with-icons">
        <SectionTitle>With Icons</SectionTitle>
        <ComponentPreview
          title="Iconic Accordion"
          code={`<Accordion
  items={[
    { title: 'Support', icon: HelpCircle, content: '...' },
    { title: 'Security', icon: Shield, content: '...' }
  ]}
/>`}
        >
          <div className="w-full max-w-2xl">
            <Accordion
              items={[
                { title: 'Customer Support', icon: HelpCircle, content: 'Our team is available 24/7 to help you with any technical integration issues or design questions.' },
                { title: 'Enterprise Security', icon: Shield, content: 'We prioritize security with regular audits and WAI-ARIA compliance across all interactive components.' },
                { title: 'Fast Performance', icon: Zap, content: 'Built with treeshaking in mind, Danesh\'UI ensures your bundle stays small and your apps stay fast.' }
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'items', type: 'AccordionItem[]', default: '[]', description: 'Array of { title, content, icon?, defaultOpen? }' },
          { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Allow multiple items to be open at once' },
          { name: 'variant', type: '"default" | "separated" | "bordered"', default: '"default"', description: 'Visual style' },
          { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        ]} />
      </section>
    </div>
  );
};

export default AccordionDoc;
