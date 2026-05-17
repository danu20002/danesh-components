import { useState } from 'react';
import FileDropzone from '../../lib/components/FileDropzone';
import { ComponentPreview, PropsTable, SectionTitle } from '../DocComponents';

const FileDropzoneDoc = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle>Basic File Upload</SectionTitle>
        <ComponentPreview
          title="Default Dropzone"
          code={`import { FileDropzone } from '@danesh-ui/react';

<FileDropzone label="Upload Files" hint="Drag & drop or click to browse" />`}
        >
          <div className="w-full max-w-md">
            <FileDropzone
              label="Upload Files"
              hint="Drag & drop or click to browse"
              value={files}
              onChange={setFiles}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Images Only</SectionTitle>
        <ComponentPreview
          title="Image Upload with Preview"
          code={`<FileDropzone
  label="Upload Images"
  accept="image/*"
  maxFiles={3}
  maxSize={2 * 1024 * 1024}
  hint="PNG, JPG or WebP up to 2MB"
/>`}
        >
          <div className="w-full max-w-md">
            <FileDropzone
              label="Upload Images"
              accept="image/*"
              maxFiles={3}
              maxSize={2 * 1024 * 1024}
              hint="PNG, JPG or WebP up to 2MB"
              value={images}
              onChange={setImages}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Accept Types</SectionTitle>
        <ComponentPreview
          title="Specific File Types"
          code={`<FileDropzone
  label="Documents"
  accept=".pdf,.doc,.docx,.csv"
  maxSize={10 * 1024 * 1024}
  hint="PDF, DOC, CSV up to 10MB"
/>`}
        >
          <div className="w-full max-w-md">
            <FileDropzone
              label="Documents"
              accept=".pdf,.doc,.docx,.csv"
              maxSize={10 * 1024 * 1024}
              hint="PDF, DOC, CSV up to 10MB"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Sizes</SectionTitle>
        <ComponentPreview
          title="Size Variants"
          code={`<FileDropzone size="sm" label="Small" />
<FileDropzone size="md" label="Medium (default)" />
<FileDropzone size="lg" label="Large" />`}
        >
          <div className="w-full max-w-md space-y-4">
            <FileDropzone size="sm" label="Small" />
            <FileDropzone size="md" label="Medium (default)" />
            <FileDropzone size="lg" label="Large" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Single File Mode</SectionTitle>
        <ComponentPreview
          title="Single Upload"
          code={`<FileDropzone label="Profile Photo" multiple={false} maxFiles={1} accept="image/*" />`}
        >
          <div className="w-full max-w-md">
            <FileDropzone label="Profile Photo" multiple={false} maxFiles={1} accept="image/*" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Error & States</SectionTitle>
        <ComponentPreview
          title="Validation Error"
          code={`<FileDropzone label="Upload" error="File is too large" />`}
        >
          <div className="w-full max-w-md">
            <FileDropzone label="Upload" error="File is too large. Maximum size is 5MB." />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'label', type: 'string', default: '—', description: 'Label above the dropzone' },
          { name: 'error', type: 'string', default: '—', description: 'Error message' },
          { name: 'hint', type: 'string', default: '—', description: 'Helper text below dropzone' },
          { name: 'value', type: 'File[]', default: '[]', description: 'Array of uploaded files' },
          { name: 'onChange', type: '(files: File[]) => void', default: '—', description: 'Called when files are added/removed' },
          { name: 'accept', type: 'string', default: '—', description: 'Accepted MIME types (e.g. "image/*")' },
          { name: 'maxSize', type: 'number', default: '5242880', description: 'Max file size in bytes (default 5MB)' },
          { name: 'maxFiles', type: 'number', default: '5', description: 'Maximum number of files' },
          { name: 'multiple', type: 'boolean', default: 'true', description: 'Allow multiple file selection' },
          { name: 'showPreview', type: 'boolean', default: 'true', description: 'Show file preview thumbnails' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Dropzone size' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the dropzone' },
        ]} />
      </section>
    </div>
  );
};

export default FileDropzoneDoc;
