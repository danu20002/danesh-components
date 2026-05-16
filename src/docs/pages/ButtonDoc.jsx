import React, { useState } from 'react';
import { Search, Copy, ExternalLink, Download, Trash2, Plus, ArrowRight, Loader, Mail, Heart, Terminal, Star, Settings, Bell, Send } from 'lucide-react';
import Button from '../../lib/components/Button';
import { ComponentPreview, PropsTable, SectionTitle, CodeBlock, ImportBlock, NoteBlock } from '../DocComponents';

const ButtonDoc = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-12">
      <ImportBlock component="Button" />
      <NoteBlock type="tip">
        All buttons feature a high-performance <code className="theme-text-active bg-red-500/10 px-1.5 py-0.5 rounded text-xs font-mono">active:scale-[0.96]</code> interaction and hardware-accelerated transitions.
      </NoteBlock>

      {/* Core Variants */}
      <section>
        <SectionTitle>Core Variants</SectionTitle>
        <p className="text-sm theme-text-secondary mb-8 leading-relaxed">The foundational variants for any application interface.</p>
        <ComponentPreview
          title="Classic Styles"
          code={`<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost Style</Button>
<Button variant="link">Simple Link</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost Style</Button>
            <Button variant="link">Simple Link</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Premium Variants */}
      <section>
        <SectionTitle>Premium Variants</SectionTitle>
        <p className="text-sm theme-text-secondary mb-8 leading-relaxed">Modern, high-impact styles for premium user experiences.</p>
        <ComponentPreview
          title="Modern Styles"
          code={`<Button variant="glow">Glow Effect</Button>
<Button variant="soft">Soft Variant</Button>
<Button variant="glass">Glassmorphism</Button>
<Button variant="success">Success Action</Button>
<Button variant="danger">Critical Action</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="glow">Glow Effect</Button>
            <Button variant="soft">Soft Variant</Button>
            <Button variant="glass" className="backdrop-blur-md">Glassmorphism</Button>
            <Button variant="success">Success Action</Button>
            <Button variant="danger">Critical Action</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Shapes & Sizes */}
      <section>
        <SectionTitle>Shapes & Sizes</SectionTitle>
        <p className="text-sm theme-text-secondary mb-8 leading-relaxed">Control the geometry of your buttons from pill to circle.</p>
        <ComponentPreview
          title="Shapes Demo"
          code={`<Button rounded="full">Pill Button</Button>
<Button square icon={Heart} />
<Button square rounded="full" icon={Plus} size="lg" />
<Button rounded="none">Sharp Edges</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Button rounded="full" icon={ArrowRight} iconRight={ArrowRight}>Pill Button</Button>
            <Button square icon={Heart} variant="danger" />
            <Button square rounded="full" icon={Plus} size="lg" variant="primary" />
            <Button rounded="none" variant="outline">Sharp Edges</Button>
            <Button variant="secondary" size="xs">Extra Small</Button>
            <Button variant="secondary" size="xl">Extra Large</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* States */}
      <section>
        <SectionTitle>Interactive States</SectionTitle>
        <ComponentPreview
          title="States Demo"
          code={`<Button loading>Processing...</Button>
<Button disabled>Can't touch this</Button>
<Button fullWidth>Block Button</Button>`}
        >
          <div className="flex flex-col gap-6 w-full max-w-sm">
            <Button loading={loading} onClick={handleLoadingDemo} variant="glow" fullWidth>
              {loading ? 'Processing...' : 'Click for Loading Demo'}
            </Button>
            <div className="flex gap-4">
              <Button disabled variant="primary">Disabled Primary</Button>
              <Button disabled variant="outline">Disabled Outline</Button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Icon Combinations */}
      <section>
        <SectionTitle>Icon Combinations</SectionTitle>
        <ComponentPreview
          title="Icon Layouts"
          code={`<Button icon={Terminal}>Continue with GitHub</Button>
<Button iconRight={Send} variant="primary">Send Message</Button>
<Button square icon={Settings} variant="ghost" />`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Button icon={Terminal} variant="secondary">Continue with GitHub</Button>
            <Button iconRight={Send} variant="primary">Send Message</Button>
            <Button icon={Star} variant="glow">Starred</Button>
            <Button square icon={Settings} variant="ghost" size="lg" />
            <Button square rounded="full" icon={Bell} variant="soft" />
          </div>
        </ComponentPreview>
      </section>

      {/* Hover Animations */}
      <section>
        <SectionTitle>Hover Animations</SectionTitle>
        <p className="text-sm theme-text-secondary mb-8 leading-relaxed">Dynamic effects that respond to user interaction with high-performance animations.</p>
        <ComponentPreview
          title="Animation Gallery"
          code={`<Button animation="shine" variant="glow">Shine Effect</Button>
<Button animation="slide" iconRight={ArrowRight}>Magnetic Slide</Button>
<Button animation="pulse" variant="soft">Pulse Attention</Button>
<Button animation="slide" icon={Trash2} variant="danger">Slide Icon</Button>`}
        >
          <div className="flex flex-wrap gap-6 items-center">
            <Button animation="shine" variant="glow" size="lg">Shine Effect</Button>
            <Button animation="slide" iconRight={ArrowRight} variant="primary">Magnetic Slide</Button>
            <Button animation="pulse" variant="soft" size="lg" icon={Bell}>Pulse Attention</Button>
            <Button animation="slide" icon={Trash2} variant="danger">Slide Icon</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* API Table */}
      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'variant', type: '"primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "soft" | "glass" | "glow" | "link"', default: '"primary"', description: 'The visual style of the button.' },
          { name: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Standard height and padding scale.' },
          { name: 'rounded', type: '"default" | "full" | "none"', default: '"default"', description: 'Corner radius strategy.' },
          { name: 'square', type: 'boolean', default: 'false', description: 'Forces 1:1 aspect ratio for icon buttons.' },
          { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Sets width to 100% of container.' },
          { name: 'animation', type: '"none" | "shine" | "slide" | "pulse"', default: '"none"', description: 'Advanced hover animation effects.' },
          { name: 'icon', type: 'LucideIcon', default: '—', description: 'Optional left-side icon.' },
          { name: 'iconRight', type: 'LucideIcon', default: '—', description: 'Optional right-side icon.' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'Toggles loading spinner and disables clicks.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction and dims opacity.' },
        ]} />
      </section>
    </div>
  );
};

export default ButtonDoc;
