import React, { useState } from 'react';
import Modal from '../../lib/components/Modal';
import Button from '../../lib/components/Button';
import Input from '../../lib/components/Input';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const ModalDoc = () => {
  const [basic, setBasic] = useState(false);
  const [form, setForm] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="space-y-10">
      <ImportBlock component="Modal" />

      <section>
        <SectionTitle>Basic Modal</SectionTitle>
        <ComponentPreview
          title="Simple Modal"
          code={`import { Modal, Button } from '@danesh-ui/react';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal 
  open={open} 
  onClose={() => setOpen(false)} 
  title="Welcome!"
>
  <p>This is a simple modal dialog.</p>
</Modal>`}
        >
          <Button onClick={() => setBasic(true)}>Open Modal</Button>
          <Modal open={basic} onClose={() => setBasic(false)} title="Welcome to Danesh'UI!">
            <p className="text-sm text-slate-600">This is a basic modal dialog. Press Escape or click the overlay to close it.</p>
          </Modal>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Form Modal</SectionTitle>
        <ComponentPreview
          title="With Form & Footer"
          code={`<Modal 
  open={open} 
  onClose={() => setOpen(false)} 
  title="Create Project"
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
      <Button>Create</Button>
    </>
  }
>
  <Input label="Project Name" placeholder="My Project" />
</Modal>`}
        >
          <Button onClick={() => setForm(true)}>Create Project</Button>
          <Modal 
            open={form} 
            onClose={() => setForm(false)} 
            title="Create New Project"
            footer={
              <>
                <Button variant="ghost" onClick={() => setForm(false)}>Cancel</Button>
                <Button onClick={() => setForm(false)}>Create Project</Button>
              </>
            }
          >
            <div className="space-y-4">
              <Input label="Project Name" placeholder="My Awesome Project" />
              <Input label="Description" placeholder="A brief description..." />
            </div>
          </Modal>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>Confirmation Dialog</SectionTitle>
        <ComponentPreview
          title="Confirm Action"
          code={`<Modal 
  open={open} 
  onClose={() => setOpen(false)} 
  title="Delete Project?"
  size="sm"
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="danger">Delete</Button>
    </>
  }
>
  <p>This action cannot be undone.</p>
</Modal>`}
        >
          <Button variant="danger" onClick={() => setConfirm(true)}>Delete Project</Button>
          <Modal 
            open={confirm} 
            onClose={() => setConfirm(false)} 
            title="Delete Project?"
            size="sm"
            footer={
              <>
                <Button variant="ghost" onClick={() => setConfirm(false)}>Cancel</Button>
                <Button variant="danger" onClick={() => setConfirm(false)}>Yes, Delete</Button>
              </>
            }
          >
            <p className="text-sm text-slate-600">This action cannot be undone. All data associated with this project will be permanently deleted.</p>
          </Modal>
        </ComponentPreview>
      </section>

      <section>
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'open', type: 'boolean', default: 'false', description: 'Controls modal visibility' },
          { name: 'onClose', type: '() => void', default: '—', description: 'Close handler' },
          { name: 'title', type: 'string', default: '—', description: 'Modal title' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Modal body content' },
          { name: 'footer', type: 'ReactNode', default: '—', description: 'Footer actions area' },
          { name: 'size', type: '"sm" | "md" | "lg" | "xl" | "full"', default: '"md"', description: 'Modal width' },
        ]} />
      </section>
    </div>
  );
};

export default ModalDoc;
