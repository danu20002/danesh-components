import React, { useState } from 'react';
import Pagination from '../../lib/components/Pagination';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const PaginationDoc = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-12">
      <ImportBlock component="Pagination" />

      <section id="basic-pagination">
        <SectionTitle>Basic Usage</SectionTitle>
        <ComponentPreview
          title="Page Controls"
          code={`import { Pagination } from '@danesh-ui/react';

<Pagination 
  currentPage={page} 
  totalPages={10} 
  onPageChange={setPage} 
/>`}
        >
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <p className="text-sm theme-text-secondary">Viewing page {page} of 10</p>
              <Pagination 
                currentPage={page} 
                totalPages={10} 
                onPageChange={setPage} 
              />
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section id="variants">
        <SectionTitle>Sizes & Variants</SectionTitle>
        <ComponentPreview
          title="Custom Styles"
          code={`<Pagination size="sm" ... />
<Pagination variant="outline" ... />`}
        >
          <div className="space-y-8">
            <Pagination currentPage={1} totalPages={5} size="sm" />
            <Pagination currentPage={3} totalPages={8} variant="outline" />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'currentPage', type: 'number', default: '1', description: 'The currently active page index' },
          { name: 'totalPages', type: 'number', default: '1', description: 'Total number of pages available' },
          { name: 'onPageChange', type: '(page: number) => void', default: '—', description: 'Callback when a page is selected' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Controls the size of buttons' },
          { name: 'variant', type: '"default" | "outline"', default: '"default"', description: 'Visual style' },
        ]} />
      </section>
    </div>
  );
};

export default PaginationDoc;
