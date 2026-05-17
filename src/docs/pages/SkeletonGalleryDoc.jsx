import CardSkeleton from '../../lib/components/CardSkeleton';
import TableSkeleton from '../../lib/components/TableSkeleton';
import ListSkeleton from '../../lib/components/ListSkeleton';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const SkeletonGalleryDoc = () => {
  return (
    <div className="space-y-12 pb-20">

      {/* Card Skeleton */}
      <section id="card-skeleton">
        <SectionTitle>Card Skeleton</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">
          Loading placeholders for card layouts with optional image and avatar variants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">01 — Default (3 lines)</span>
            <CardSkeleton lines={3} />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">02 — With Image</span>
            <CardSkeleton lines={2} hasImage />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">03 — With Avatar</span>
            <CardSkeleton lines={3} hasAvatar />
          </div>
        </div>
        <div className="mt-6">
          <CodeBlock
            title="CardSkeleton.jsx"
            code={`<CardSkeleton lines={3} />
<CardSkeleton lines={2} hasImage />
<CardSkeleton lines={3} hasAvatar />`}
          />
        </div>
      </section>

      {/* Table Skeleton */}
      <section id="table-skeleton">
        <SectionTitle>Table Skeleton</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">
          Table loading states with configurable rows, columns, and optional header.
        </p>
        <div className="space-y-8">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">01 — Default (5 rows × 4 columns)</span>
            <TableSkeleton rows={5} columns={4} />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">02 — Compact (3 rows, no header)</span>
            <TableSkeleton rows={3} columns={4} hasHeader={false} />
          </div>
        </div>
        <div className="mt-6">
          <CodeBlock
            title="TableSkeleton.jsx"
            code={`<TableSkeleton rows={5} columns={4} />
<TableSkeleton rows={3} columns={4} hasHeader={false} />`}
          />
        </div>
      </section>

      {/* List Skeleton */}
      <section id="list-skeleton">
        <SectionTitle>List Skeleton</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">
          List loading states with avatar and icon variants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">01 — With Avatar (5 items)</span>
            <div className="theme-bg border theme-border-secondary rounded-2xl p-6">
              <ListSkeleton items={5} hasAvatar />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] theme-text-tertiary">02 — With Icon (3 items)</span>
            <div className="theme-bg border theme-border-secondary rounded-2xl p-6">
              <ListSkeleton items={3} hasIcon />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <CodeBlock
            title="ListSkeleton.jsx"
            code={`<ListSkeleton items={5} hasAvatar />
<ListSkeleton items={3} hasIcon />`}
          />
        </div>
      </section>

      {/* Usage */}
      <section id="usage">
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          title="Example.jsx"
          code={`import { CardSkeleton, TableSkeleton, ListSkeleton } from '@danesh-ui/react';

function LoadingState() {
  return (
    <div className="space-y-8">
      <CardSkeleton lines={3} />
      <TableSkeleton rows={5} columns={4} />
      <ListSkeleton items={5} hasAvatar />
    </div>
  );
}`}
        />
        <div className="mt-6">
          <NoteBlock type="info">
            <strong>Props:</strong> <code>lines</code>, <code>rows</code>, <code>columns</code> control the structure. <code>hasImage</code>, <code>hasAvatar</code>, <code>hasIcon</code> toggle visual elements. All components use the <code>animate-pulse</code> animation.
          </NoteBlock>
        </div>
      </section>

    </div>
  );
};

export default SkeletonGalleryDoc;
