import { useState } from 'react';
import { Settings, Menu, Bell, ShoppingCart, Trash2 } from 'daneshicons';
import Drawer from '../../lib/components/Drawer';
import ConfirmDialog from '../../lib/components/ConfirmDialog';
import Button from '../../lib/components/Button';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const ModalLabDoc = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Design Lab
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Modal <span className="text-red-600">Lab</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          A collection of drawer and confirmation dialog patterns with live previews.
        </p>
      </header>

      <NoteBlock type="info">
        <strong>Drawers</strong> slide in from any edge of the screen. <strong>ConfirmDialog</strong> provides a quick modal confirmation with danger, warning, and info variants.
      </NoteBlock>

      {/* === Slide Drawers === */}
      <section>
        <SectionTitle>Slide Drawers</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Drawers slide from any edge with customizable width/height and optional footer.</p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Button onClick={() => setLeftOpen(true)}>Open Left Drawer</Button>
          <Button onClick={() => setRightOpen(true)}>Open Right Drawer</Button>
          <Button onClick={() => setTopOpen(true)}>Open Top Drawer</Button>
          <Button onClick={() => setBottomOpen(true)}>Open Bottom Drawer</Button>
        </div>

        <Drawer open={leftOpen} onClose={() => setLeftOpen(false)} position="left" title="Navigation" size="sm">
          <nav className="space-y-2">
            {[{ icon: Settings, label: 'Settings' }, { icon: Bell, label: 'Notifications' }, { icon: ShoppingCart, label: 'Cart' }].map((item, i) => (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg theme-text-secondary hover:theme-text hover:theme-bg-hover transition-colors text-sm cursor-pointer">
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </nav>
        </Drawer>

        <Drawer open={rightOpen} onClose={() => setRightOpen(false)} position="right" title="Shopping Cart" footer={
          <Button size="sm" onClick={() => setRightOpen(false)}>Checkout</Button>
        }>
          <div className="space-y-4">
            {['Design System Book', 'React Stickers', 'UI Wireframe Kit'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl theme-bg-secondary">
                <ShoppingCart size={20} className="theme-text-tertiary" />
                <span className="text-sm theme-text flex-1">{item}</span>
                <span className="text-xs theme-text-tertiary">$12.99</span>
              </div>
            ))}
          </div>
        </Drawer>

        <Drawer open={topOpen} onClose={() => setTopOpen(false)} position="top" title="Quick Settings">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ icon: Settings, label: 'Settings' }, { icon: Menu, label: 'Menu' }, { icon: Bell, label: 'Alerts' }, { icon: ShoppingCart, label: 'Cart' }].map((item, i) => (
              <button key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl theme-bg-secondary hover:theme-bg-hover transition-colors cursor-pointer">
                <item.icon size={24} className="theme-text" />
                <span className="text-xs theme-text-secondary">{item.label}</span>
              </button>
            ))}
          </div>
        </Drawer>

        <Drawer open={bottomOpen} onClose={() => setBottomOpen(false)} position="bottom" title="Notifications" size="md">
          <div className="space-y-3">
            {[
              { icon: Bell, text: 'New update available', time: '2 min ago' },
              { icon: ShoppingCart, text: 'Order shipped', time: '1 hour ago' },
              { icon: Settings, text: 'Security alert', time: '1 day ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl theme-bg-secondary">
                <item.icon size={16} className="theme-text-tertiary mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm theme-text">{item.text}</p>
                  <p className="text-xs theme-text-tertiary">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Drawer>

        <CodeBlock
          title="Drawer Example"
          code={`import { Drawer, Button } from '@danesh-ui/react';
import { ShoppingCart } from 'daneshicons';

const [open, setOpen] = useState(false);

// Right drawer (default position)
<Drawer open={open} onClose={() => setOpen(false)} title="Cart" footer={<Button>Checkout</Button>}>
  <p>Drawer content here</p>
</Drawer>

// Position variants
<Drawer position="left" open={open} onClose={() => setOpen(false)} title="Navigation" />
<Drawer position="top" open={open} onClose={() => setOpen(false)} title="Settings" />
<Drawer position="bottom" open={open} onClose={() => setOpen(false)} title="Notifications" />

// Size: "sm" | "md" | "lg" | "xl" | "full"`}
        />
      </section>

      {/* === Confirm Dialog === */}
      <section>
        <SectionTitle>Confirm Dialog</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">A modal confirmation dialog with variant-based icon and button styling.</p>
        <Button variant="danger" onClick={() => setConfirmOpen(true)}>
          <Trash2 size={16} />
          Delete Account
        </Button>

        <ConfirmDialog
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => { setConfirmOpen(false); }}
          title="Delete Account?"
          message="This action cannot be undone. All your data will be permanently removed."
          confirmLabel="Delete"
          cancelLabel="Cancel"
          variant="danger"
        />

        <div className="mt-8">
          <CodeBlock
            title="ConfirmDialog Example"
            code={`import { ConfirmDialog, Button } from '@danesh-ui/react';
import { Trash2 } from 'daneshicons';

const [open, setOpen] = useState(false);

<Button variant="danger" onClick={() => setOpen(true)}>
  <Trash2 size={16} />
  Delete
</Button>

<ConfirmDialog
  open={open}
  onClose={() => setOpen(false)}
  onConfirm={() => { /* handle confirm */ }}
  title="Delete Account?"
  message="This action cannot be undone."
  confirmLabel="Delete"
  cancelLabel="Cancel"
  variant="danger"
/>

// Variants: danger, warning, info
<ConfirmDialog variant="warning" title="Are you sure?" />
<ConfirmDialog variant="info" title="Did you know?" />`}
          />
        </div>
      </section>

      {/* === Usage === */}
      <section>
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          title="ModalLab.jsx"
          code={`import { Drawer, ConfirmDialog, Button } from '@danesh-ui/react';
import { ShoppingCart, Trash2 } from 'daneshicons';

// --- Drawer ---
const [drawerOpen, setDrawerOpen] = useState(false);

<Drawer
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  position="right"
  title="Drawer Title"
  size="md"
>
  <p>Your drawer content goes here.</p>
</Drawer>

// --- ConfirmDialog ---
const [confirmOpen, setConfirmOpen] = useState(false);

<Button variant="danger" onClick={() => setConfirmOpen(true)}>
  Delete
</Button>

<ConfirmDialog
  open={confirmOpen}
  onClose={() => setConfirmOpen(false)}
  onConfirm={() => { /* action */ }}
  title="Confirm Title"
  message="Are you sure you want to proceed?"
  confirmLabel="Confirm"
  cancelLabel="Cancel"
  variant="danger"
/>`}
        />
      </section>
    </div>
  );
};

export default ModalLabDoc;
