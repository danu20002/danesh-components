import { 
  Check, X, AlertTriangle, 
  Settings, Bell, Plus, Trash2, Download, 
  RefreshCw, MoreHorizontal, Layers
} from 'daneshicons';
import Button from '../../lib/components/Button';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const FioriButtons = () => {
  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0064d1]/10 text-[#0064d1] rounded-full text-[10px] font-black tracking-widest mb-4">
          <Layers size={14} /> SAP_FIORI_DESIGN_SYSTEM
        </div>
        <h1 className="text-4xl lg:text-6xl font-black theme-text tracking-tight mb-6">
          SAP <span className="text-[#0064d1]">Fiori</span> Integration
        </h1>
        <p className="theme-text-secondary font-medium text-xl leading-relaxed">
          The core <code>Button</code> component now supports enterprise-grade Fiori variants. 
          Use the <code>variant</code> prop with SAP standard literals for instant Horizon design compliance.
        </p>
      </header>

      <NoteBlock type="success">
        <strong>Unified Component:</strong> All SAP-style buttons below now use the main <code>Button.jsx</code> 
        component from the library. No separate implementation is required.
      </NoteBlock>

      <section>
        <SectionTitle id="standard-action-types">01. Standard Action Types</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 theme-bg border theme-border-secondary rounded-3xl flex flex-col justify-center gap-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="emphasized" rounded="sap">Save Changes</Button>
              <Button variant="fiori" rounded="sap">Edit Data</Button>
              <Button variant="ghost" rounded="sap">Cancel</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="transparent" rounded="sap">More Details</Button>
            </div>
          </div>
          <CodeBlock 
            title="React_Library_Usage.jsx"
            language="jsx"
            code={`// Standard SAP Actions using the Library Button
<Button variant="emphasized" rounded="sap">Save Changes</Button>
<Button variant="fiori" rounded="sap">Edit Data</Button>
<Button variant="ghost" rounded="sap">Cancel</Button>`}
          />
        </div>
      </section>

      <section>
        <SectionTitle id="semantic-status-types">02. Semantic / Status Types</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 theme-bg border theme-border-secondary rounded-3xl flex items-center gap-4">
            <Button variant="accept" rounded="sap" icon={Check}>Approve</Button>
            <Button variant="reject" rounded="sap" icon={X}>Reject</Button>
            <Button variant="attention" rounded="sap" icon={AlertTriangle}>Warning</Button>
          </div>
          <CodeBlock 
            title="Semantic_Integration.jsx"
            language="jsx"
            code={`<Button variant="accept" rounded="sap" icon={Check}>Approve</Button>
<Button variant="reject" rounded="sap" icon={X}>Reject</Button>
<Button variant="attention" rounded="sap" icon={AlertTriangle}>Warning</Button>`}
          />
        </div>
      </section>

      <section>
        <SectionTitle id="high-contrast">03. High Contrast (Solid)</SectionTitle>
        <div className="p-8 bg-[#1d2d3e] rounded-3xl flex flex-wrap gap-4">
          <Button variant="positive" rounded="sap" icon={Check}>Positive Action</Button>
          <Button variant="negative" rounded="sap" icon={Trash2}>Critical Delete</Button>
          <Button variant="fiori" rounded="sap" className="bg-white text-[#1d2d3e] border-white hover:bg-slate-100">Inverted Primary</Button>
        </div>
      </section>

      <section>
        <SectionTitle id="functional-modes">04. Functional Modes</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 theme-bg border theme-border-secondary rounded-2xl space-y-4">
             <p className="text-xs font-bold theme-text-tertiary uppercase">Icon Only</p>
             <div className="flex gap-2">
                <Button variant="fiori" rounded="sap" iconOnly icon={Settings} />
                <Button variant="emphasized" rounded="sap" iconOnly icon={Plus} />
             </div>
          </div>
          <div className="p-6 theme-bg border theme-border-secondary rounded-2xl space-y-4">
             <p className="text-xs font-bold theme-text-tertiary uppercase">Loading State</p>
             <Button variant="fiori" rounded="sap" loading={true}>Processing Data...</Button>
          </div>
          <div className="p-6 theme-bg border theme-border-secondary rounded-2xl space-y-4">
             <p className="text-xs font-bold theme-text-tertiary uppercase">Badges</p>
             <Button variant="emphasized" rounded="sap" badge="24" icon={Bell}>Messages</Button>
          </div>
        </div>
      </section>

      <footer className="mt-40 pt-12 border-t theme-border-secondary flex flex-col md:flex-row items-center justify-between theme-text-tertiary">
        <div className="flex items-center gap-8 mb-6 md:mb-0">
          <span className="text-[10px] font-black uppercase tracking-widest italic">Danesh'UI // Fiori Enterprise Suite</span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em]">
          Powered by Unified Button Engine
        </p>
      </footer>
    </div>
  );
};

export default FioriButtons;
