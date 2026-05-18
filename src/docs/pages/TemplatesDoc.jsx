import { 
  LayoutDashboard, 
  UserCircle, 
  Lock, 
  ShoppingBag, 
  BarChart3, 
  Settings, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Smartphone,
  Tablet,
  ExternalLink
} from 'daneshicons';
import Button from '../../lib/components/Button';
import Badge from '../../lib/components/Badge';
import { SectionTitle, NoteBlock } from '../DocComponents';
import ERPDashboard from '../templates/ERPDashboard';

const TemplateCard = ({ title, description, icon: Icon, tags = [], previewUrl, isNew }) => (
  <div className="group relative theme-bg border theme-border rounded-[2rem] overflow-hidden theme-shadow-md hover:theme-shadow-xl transition-all duration-500 hover:-translate-y-2">
    <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon size={64} className="theme-text-tertiary group-hover:theme-text-active transition-all duration-500 group-hover:scale-110" />
      
      {isNew && (
        <div className="absolute top-4 left-4">
          <Badge variant="primary">New</Badge>
        </div>
      )}
      
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <Button variant="glow" icon={ExternalLink}>Live Preview</Button>
      </div>
    </div>
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-black uppercase tracking-widest theme-text-tertiary">{tag}</span>
        ))}
      </div>
      <h4 className="text-xl font-bold theme-text mb-2 group-hover:theme-text-active transition-colors">{title}</h4>
      <p className="text-sm theme-text-secondary leading-relaxed mb-6">{description}</p>
      
      <div className="flex items-center justify-between pt-6 border-t theme-border-secondary">
        <div className="flex gap-2">
          <Monitor size={14} className="theme-text-tertiary" />
          <Tablet size={14} className="theme-text-tertiary" />
          <Smartphone size={14} className="theme-text-tertiary" />
        </div>
        <button className="text-[13px] font-bold theme-text-active flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
          Get Template <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </div>
);

const TemplatesDoc = () => {
  return (
    <div className="space-y-20">
      <header className="max-w-3xl">
        <h2 className="text-3xl font-black theme-text mb-4 tracking-tight">Premium Templates</h2>
        <p className="text-lg theme-text-secondary leading-relaxed">
          Production-ready starter kits and example layouts built with Danesh'UI. 
          Save weeks of development time with our hand-crafted templates.
        </p>
      </header>

      <NoteBlock type="tip">
        All templates are fully responsive, accessible, and support native Dark Mode out of the box. 
        Copy the source code directly or use our CLI to scaffold new projects.
      </NoteBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TemplateCard 
          title="Enterprise ERP Dashboard"
          description="A complete manufacturing ERP dashboard with production tracking, inventory levels, and order management."
          icon={LayoutDashboard}
          tags={['Manufacturing', 'ERP', 'Dashboard']}
          isNew
        />
        <TemplateCard 
          title="Marketing Landing Page"
          description="High-conversion landing page with feature grids, hero sections, and pricing tables."
          icon={ShoppingBag}
          tags={['E-commerce', 'Marketing', 'Landing']}
        />
        <TemplateCard 
          title="Authentication Suite"
          description="A collection of clean, secure login, signup, and password recovery pages with full validation."
          icon={Lock}
          tags={['Auth', 'Security']}
          isNew
        />
        <TemplateCard 
          title="User Settings Portal"
          description="Comprehensive profile management, security settings, and notification preference centers."
          icon={Settings}
          tags={['Settings', 'Profile']}
        />
      </div>

      <section>
        <SectionTitle>Realistic ERP Template Preview</SectionTitle>
        <p className="text-sm theme-text-secondary mb-10 leading-relaxed max-w-3xl">
          Below is a live instance of the <span className="theme-text font-bold">Enterprise ERP Dashboard</span>. 
          It demonstrates how Danesh'UI components like Stats, Cards, Tables, and Badges work together to create a complex, cohesive application interface.
        </p>
        <div className="theme-bg border theme-border rounded-[2.5rem] overflow-hidden theme-shadow-xl p-4 lg:p-10 theme-bg-preview dot-pattern">
          <ERPDashboard />
        </div>
      </section>

      <section className="pt-12">
        <SectionTitle>Template Features</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Tailwind v4 Native', desc: 'Built using the latest Tailwind CSS v4 engine for maximum performance.', icon: CheckCircle2 },
            { title: 'Type-Safe', desc: 'Fully written in TypeScript with comprehensive interface definitions.', icon: CheckCircle2 },
            { title: 'Component Driven', desc: 'Atomic design structure using Danesh\'UI core components.', icon: CheckCircle2 },
          ].map(f => (
            <div key={f.title} className="p-6 rounded-3xl theme-bg-secondary border theme-border-secondary">
              <f.icon className="theme-text-active mb-3" size={20} />
              <h5 className="font-bold theme-text mb-1">{f.title}</h5>
              <p className="text-xs theme-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TemplatesDoc;
