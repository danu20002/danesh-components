import Skeleton from '../../lib/components/Skeleton';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const SkeletonDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="Skeleton" />

      <section id="basic-skeleton">
        <SectionTitle>Basic Usage</SectionTitle>
        <ComponentPreview
          title="Loading Placeholders"
          code={`import { Skeleton } from '@danesh-ui/react';

<Skeleton className="w-full h-4" />
<Skeleton variant="circle" className="w-12 h-12" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Skeleton className="w-3/4 h-6" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-1/2 h-4" />
          </div>
        </ComponentPreview>
      </section>

      <section id="complex-example">
        <SectionTitle>Profile Placeholder</SectionTitle>
        <ComponentPreview
          title="Complex Layouts"
          code={`<div className="flex gap-4">
  <Skeleton variant="circle" className="w-12 h-12" />
  <div className="flex-1 space-y-2">
    <Skeleton className="w-1/3 h-4" />
    <Skeleton className="w-full h-3" />
  </div>
</div>`}
        >
          <div className="flex gap-4 items-center theme-bg-secondary p-4 rounded-xl border theme-border-secondary">
            <Skeleton variant="circle" className="w-12 h-12 shrink-0" />
            <div className="flex-1 space-y-3">
              <Skeleton className="w-[40%] h-4" />
              <Skeleton className="w-full h-3" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'variant', type: '"text" | "circle" | "rect"', default: '"text"', description: 'Shape of the skeleton' },
          { name: 'className', type: 'string', default: '""', description: 'Tailwind classes for sizing and spacing' },
          { name: 'animation', type: '"pulse" | "wave" | "none"', default: '"pulse"', description: 'Animation style' },
        ]} />
      </section>
    </div>
  );
};

export default SkeletonDoc;
