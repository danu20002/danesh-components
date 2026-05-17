import EmptyState from '../../lib/components/EmptyState';
import Button from '../../lib/components/Button';
import { Search, Plus, FolderOpen } from 'lucide-react';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const EmptyStateDoc = () => {
  return (
    <div className="space-y-12">
      <ImportBlock component="EmptyState" />

      <section id="basic-empty">
        <SectionTitle>Basic Usage</SectionTitle>
        <ComponentPreview
          title="Placeholder Content"
          code={`import { EmptyState } from '@danesh-ui/react';

<EmptyState
  icon={FolderOpen}
  title="No files found"
  description="Start by uploading your first project file."
  action={<Button icon={Plus}>Upload File</Button>}
/>`}
        >
          <div className="w-full max-w-2xl border theme-border-secondary rounded-2xl p-12 theme-bg-secondary">
            <EmptyState
              icon={FolderOpen}
              title="No projects yet"
              description="You haven't created any projects. Get started by creating your first workspace."
              action={<Button icon={Plus}>Create Project</Button>}
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="variants">
        <SectionTitle>Search Results</SectionTitle>
        <ComponentPreview
          title="Filtered State"
          code={`<EmptyState
  icon={Search}
  title="No matches"
  description="Try adjusting your filters..."
/>`}
        >
          <div className="w-full max-w-2xl border theme-border-secondary rounded-2xl p-12 theme-bg-secondary">
            <EmptyState
              icon={Search}
              title="No results found"
              description="We couldn't find anything matching your search criteria. Try using different keywords."
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'icon', type: 'LucideIcon', default: '—', description: 'Central illustration icon' },
          { name: 'title', type: 'string', default: '—', description: 'Main header text' },
          { name: 'description', type: 'string', default: '—', description: 'Supporting text below the title' },
          { name: 'action', type: 'ReactNode', default: '—', description: 'Optional call-to-action component' },
          { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        ]} />
      </section>
    </div>
  );
};

export default EmptyStateDoc;
