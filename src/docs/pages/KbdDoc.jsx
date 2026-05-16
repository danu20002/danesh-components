import React from 'react';
import Kbd from '../../lib/components/Kbd';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const KbdDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Kbd" />

      <section id="basic-kbd">
        <SectionTitle>Basic Usage</SectionTitle>
        <ComponentPreview
          title="Keyboard Shortcuts"
          code={`import { Kbd } from '@danesh-ui/react';

<Kbd>⌘</Kbd>
<Kbd>K</Kbd>`}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-sm theme-text-secondary mr-2">Search</span>
              <Kbd>Ctrl</Kbd>
              <span className="theme-text-tertiary">+</span>
              <Kbd>K</Kbd>
            </div>
            
            <div className="flex items-center gap-1.5 ml-8">
              <span className="text-sm theme-text-secondary mr-2">Save</span>
              <Kbd>⌘</Kbd>
              <span className="theme-text-tertiary">+</span>
              <Kbd>S</Kbd>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section id="sizes">
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Scale Variations"
          code={`<Kbd size="sm">S</Kbd>
<Kbd size="lg">L</Kbd>`}
        >
          <div className="flex items-center gap-4">
            <Kbd size="sm">Shift</Kbd>
            <Kbd size="md">Enter</Kbd>
            <Kbd size="lg">Space</Kbd>
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'children', type: 'ReactNode', default: '—', description: 'The shortcut label' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Controls the display size' },
          { name: 'variant', type: '"default" | "outline"', default: '"default"', description: 'Visual style' },
        ]} />
      </section>
    </div>
  );
};

export default KbdDoc;
