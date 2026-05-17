import { useState } from 'react';
import SearchInput from '../../lib/components/SearchInput';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const SearchInputDoc = () => {
  const [debounced, setDebounced] = useState('');

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic Search</SectionTitle>
        <ComponentPreview
          title="Default Search Input"
          code={`import { SearchInput } from '@danesh-ui/react';

<SearchInput placeholder="Search users..." />
<SearchInput placeholder="Search docs..." showShortcut />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <SearchInput placeholder="Search users..." />
            <SearchInput placeholder="Search docs..." showShortcut />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>With Clear & Shortcut</SectionTitle>
        <ComponentPreview
          title="Clearable Search"
          code={`<SearchInput 
  placeholder="Type to search..."
  showShortcut
  onClear={() => console.log('cleared')}
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <SearchInput
              placeholder="Type to search..."
              showShortcut
              onClear={() => {}}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Debounced Search</SectionTitle>
        <ComponentPreview
          title="300ms Debounce"
          code={`const [val, setVal] = useState('');

<SearchInput 
  placeholder="Search with debounce..."
  debounceMs={300}
  onChange={(e) => setVal(e.target.value)}
/>
<p className="text-xs text-slate-400">Value: {val}</p>`}
        >
          <div className="w-full max-w-sm space-y-3">
            <SearchInput
              placeholder="Search with debounce..."
              debounceMs={300}
              onChange={(e) => setDebounced(e.target.value)}
            />
            <p className="text-xs theme-text-tertiary">Debounced value: <span className="font-mono font-bold">{debounced || '(waiting...)'}</span></p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Size Variants"
          code={`<SearchInput size="sm" placeholder="Small search" />
<SearchInput size="md" placeholder="Medium search" />
<SearchInput size="lg" placeholder="Large search" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <SearchInput size="sm" placeholder="Small search" />
            <SearchInput size="md" placeholder="Medium search (default)" />
            <SearchInput size="lg" placeholder="Large search" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>With Label</SectionTitle>
        <ComponentPreview
          title="Labelled Search"
          code={`<SearchInput label="Search Employees" placeholder="Name, email, or role..." />`}
        >
          <div className="w-full max-w-sm">
            <SearchInput label="Search Employees" placeholder="Name, email, or role..." />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label above the input' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text below input' },
          { name: 'placeholder', type: 'string', default: '"Search..."', description: 'Placeholder text' },
          { name: 'value', type: 'string', default: '—', description: 'Controlled value' },
          { name: 'onChange', type: 'function', default: '—', description: 'Change handler' },
          { name: 'onClear', type: 'function', default: '—', description: 'Called when clear button clicked' },
          { name: 'showShortcut', type: 'boolean', default: 'false', description: 'Show ⌘K badge' },
          { name: 'debounceMs', type: 'number', default: '0', description: 'Debounce delay in ms' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Input size' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input' },
        ]} />
      </section>
    </div>
  );
};

export default SearchInputDoc;
