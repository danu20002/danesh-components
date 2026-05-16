import React, { useState, useEffect } from 'react';
import {
  Layers, Monitor, Terminal, MousePointer2, Type, Bell, ToggleLeft, Users,
  PanelTop, LayoutGrid, FileText, ChevronRight, ChevronDown, GitFork, ExternalLink,
  Search, Menu, X, Sparkles, Boxes, SlidersHorizontal, Package, Copy,
  Check, BookOpen, Zap, Shield, Paintbrush, Database, Table2, Sun, Moon,
  CheckSquare, Circle, List, AlignLeft, BarChart3, Clock, Square, Layout,
  Info, SeparatorHorizontal, MousePointer, Hash, Map, Navigation, Loader2,
  Table as TableIcon, Globe, MessageSquare
} from 'lucide-react';

// Doc Pages
import ButtonDoc from './docs/pages/ButtonDoc';
import InputDoc from './docs/pages/InputDoc';
import AlertDoc from './docs/pages/AlertDoc';
import AnimatedVault from './docs/pages/AnimatedVault';
import SyncLab from './docs/pages/SyncLab';
import FioriButtons from './docs/pages/FioriButtons';
import CardDoc from './docs/pages/CardDoc';
import BadgeDoc from './docs/pages/BadgeDoc';
import ToggleDoc from './docs/pages/ToggleDoc';
import AvatarDoc from './docs/pages/AvatarDoc';
import TabsDoc from './docs/pages/TabsDoc';
import ModalDoc from './docs/pages/ModalDoc';
import CheckboxDoc from './docs/pages/CheckboxDoc';
import RadioDoc from './docs/pages/RadioDoc';
import SelectDoc from './docs/pages/SelectDoc';
import TextareaDoc from './docs/pages/TextareaDoc';
import ProgressDoc from './docs/pages/ProgressDoc';
import SkeletonDoc from './docs/pages/SkeletonDoc';
import AccordionDoc from './docs/pages/AccordionDoc';
import TooltipDoc from './docs/pages/TooltipDoc';
import DividerDoc from './docs/pages/DividerDoc';
import TableDoc from './docs/pages/TableDoc';
import StatDoc from './docs/pages/StatDoc';
import AvatarGroupDoc from './docs/pages/AvatarGroupDoc';
import BreadcrumbDoc from './docs/pages/BreadcrumbDoc';
import PaginationDoc from './docs/pages/PaginationDoc';
import SpinnerDoc from './docs/pages/SpinnerDoc';
import KbdDoc from './docs/pages/KbdDoc';
import EmptyStateDoc from './docs/pages/EmptyStateDoc';
import TemplatesDoc from './docs/pages/TemplatesDoc';
import ToastDoc from './docs/pages/ToastDoc';
import ToastContainer from './lib/components/Toast';


// Library Components
import Badge from './lib/components/Badge';
import Button from './lib/components/Button';
import { CodeBlock } from './docs/DocComponents';

const NAV_SECTIONS = [
  {
    title: 'Getting Started',
    items: [
      { id: 'Introduction', icon: Monitor, label: 'Introduction' },
      { id: 'Installation', icon: Terminal, label: 'Installation' },
      { id: 'Templates', icon: LayoutGrid, label: 'Templates' },
    ]
  },
  {
    title: 'Components',
    items: [
      { 
        id: 'Button', 
        icon: MousePointer2, 
        label: 'Button',
        subItems: [
          { id: 'Button', label: 'Main Docs' },
          { id: 'AnimatedVault', label: 'Animated Vault' },
          { id: 'SyncLab', label: 'Sync Lab' },
          { id: 'FioriButtons', label: 'SAP Fiori' },
        ]
      },
      { id: 'Input', icon: Type, label: 'Input' },
      { id: 'Card', icon: LayoutGrid, label: 'Card' },
      { id: 'Alert', icon: Bell, label: 'Alert' },
      { id: 'Badge', icon: Sparkles, label: 'Badge' },
      { id: 'Avatar', icon: Users, label: 'Avatar' },
      { id: 'Toggle', icon: ToggleLeft, label: 'Toggle' },
      { id: 'Tabs', icon: PanelTop, label: 'Tabs' },
      { id: 'Modal', icon: Boxes, label: 'Modal' },
    ]
  },
  {
    title: 'Forms',
    items: [
      { id: 'Checkbox', icon: CheckSquare, label: 'Checkbox' },
      { id: 'Radio', icon: Circle, label: 'Radio' },
      { id: 'Select', icon: List, label: 'Select' },
      { id: 'Textarea', icon: AlignLeft, label: 'Textarea' },
    ]
  },
  {
    title: 'Feedback',
    items: [
      { id: 'Progress', icon: BarChart3, label: 'Progress' },
      { id: 'Toast', icon: Clock, label: 'Toast' },
      { id: 'Skeleton', icon: Square, label: 'Skeleton' },
    ]
  },
  {
    title: 'Layout & Utils',
    items: [
      { id: 'Accordion', icon: Layout, label: 'Accordion' },
      { id: 'Tooltip', icon: Info, label: 'Tooltip' },
      { id: 'Divider', icon: SeparatorHorizontal, label: 'Divider' },
    ]
  },
  {
    title: 'Data & Navigation',
    items: [
      { id: 'Table', icon: TableIcon, label: 'Table' },
      { id: 'Stat', icon: Database, label: 'Stat' },
      { id: 'AvatarGroup', icon: Users, label: 'Avatar Group' },
      { id: 'Breadcrumb', icon: Map, label: 'Breadcrumb' },
      { id: 'Pagination', icon: Navigation, label: 'Pagination' },
      { id: 'Spinner', icon: Loader2, label: 'Spinner' },
      { id: 'Kbd', icon: Hash, label: 'Keyboard' },
      { id: 'EmptyState', icon: Boxes, label: 'Empty State' },
    ]
  }
];

const PAGE_DESCRIPTIONS = {
  Introduction: "Build stunning enterprise dashboards with a high-performance design system. 25+ components designed for speed and reliability.",
  Installation: "Install Danesh'UI via NPM and start building in minutes.",
  Button: "Interactive button components with support for icons, loading states, and multiple variants.",
  Input: "Smart input fields with validation, icons, and automated accessibility.",
  Card: "Premium containers for organizing complex dashboard information.",
  Alert: "Contextual feedback messages that keep your users informed.",
  Badge: "Status indicators and labels with vibrant color palettes.",
  Avatar: "User profile representations with support for groups and status.",
  Toggle: "Fluent switch components for binary state management.",
  Tabs: "Content organization with smooth transitions and multiple styles.",
  Modal: "High-performance dialogs and overlays for focused user actions.",
  Checkbox: "Elegant multi-selection controls for forms and lists.",
  Radio: "Single-choice selection components with custom styling.",
  Select: "Feature-rich dropdowns for complex data selection.",
  Textarea: "Multi-line text inputs with auto-resize and validation.",
  Progress: "Visual indicators for process completion and loading states.",
  Toast: "Non-intrusive notifications with stackable support.",
  Skeleton: "Premium loading placeholders for improved perceived performance.",
  Accordion: "Collapsible content sections for efficient space usage.",
  Tooltip: "Contextual info snippets that appear on hover or focus.",
  Divider: "Clean separators for visual hierarchy and organization.",
  Table: "Powerful data grids with sorting, filtering, and custom rendering.",
  Stat: "Dashboard KPI cards with trend analysis and icon support.",
  AvatarGroup: "Stacked avatar components for team and user lists.",
  Breadcrumb: "Hierarchical navigation paths for complex site structures.",
  Pagination: "Advanced controls for navigating large datasets.",
  Spinner: "Versatile loading indicators for every context.",
  Kbd: "Visual keyboard shortcuts for desktop-first applications.",
  EmptyState: "Beautiful placeholders for empty data scenarios.",
  Templates: "Premium production-ready starter kits and example layouts built with Danesh'UI.",
  AnimatedVault: "A collection of 50 high-performance button designs and motion presets.",
  SyncLab: "Choreographed micro-interactions built on shared timing offsets for elite precision.",
  FioriButtons: "Enterprise-grade button suite compatible with SAP UI5 and Fiori design standards.",
};

const PAGE_TOC = {
  Button: ['Core Variants', 'Premium Variants', 'Shapes & Sizes', 'Interactive States', 'Icon Combinations', 'Hover Animations', 'API Reference'],
  Input: ['Basic Input', 'With Icons', 'Sizes', 'Validation States', 'API Reference'],
  Card: ['Basic Card', 'With Footer', 'Hover Effect', 'Card Grid', 'API Reference'],
  Alert: ['Variants', 'Dismissible', 'Without Title', 'API Reference'],
  Badge: ['Variants', 'With Status Dot', 'Sizes', 'API Reference'],
  Avatar: ['Sizes', 'Status Indicator', 'Avatar Group', 'API Reference'],
  Toggle: ['Basic Toggle', 'Sizes', 'Disabled', 'API Reference'],
  Tabs: ['Default Tabs', 'Pills Variant', 'Outline Variant', 'API Reference'],
  Modal: ['Basic Modal', 'Form Modal', 'API Reference'],
  Templates: ['Realistic ERP Template Preview', 'Template Features'],
  FioriButtons: ['Standard Action Types', 'Semantic / Status Types', 'High Contrast (Solid)', 'Functional Modes', 'Enterprise Usage Pattern'],
};

const SidebarItem = ({ id, activeTab, setActiveTab, setMobileMenuOpen, icon: Icon, label, subItems }) => {
  const isParentActive = activeTab === id || subItems?.some(sub => sub.id === activeTab);
  const [isOpen, setIsOpen] = useState(isParentActive);

  useEffect(() => {
    if (isParentActive) setIsOpen(true);
  }, [isParentActive]);

  return (
    <div className="space-y-0.5">
      <button
        onClick={() => { 
          if (subItems) {
            setIsOpen(!isOpen);
          } else {
            setActiveTab(id); 
            setMobileMenuOpen(false); 
          }
        }}
        className={`
          w-full flex items-center gap-3 px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 cursor-pointer theme-transition
          ${activeTab === id || (isParentActive && !isOpen)
            ? 'theme-bg-active theme-text-active theme-shadow-sm' 
            : 'theme-text-secondary hover:theme-bg-hover hover:theme-text'}
        `}
      >
        <Icon size={16} className={isParentActive ? 'theme-text-active' : 'theme-text-tertiary'} strokeWidth={isParentActive ? 2.5 : 2} />
        <span className="truncate">{label}</span>
        {subItems ? (
          <ChevronDown size={14} className={`ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        ) : (
          activeTab === id && <ChevronRight size={12} className="ml-auto opacity-50" />
        )}
      </button>

      {subItems && isOpen && (
        <div className="ml-9 space-y-0.5 border-l theme-border-secondary pl-2 animate-fade-in">
          {subItems.map(sub => (
            <button
              key={sub.id}
              onClick={() => { setActiveTab(sub.id); setMobileMenuOpen(false); }}
              className={`
                w-full text-left px-3 py-1.5 text-[12.5px] font-medium rounded-lg transition-all duration-200 cursor-pointer
                ${activeTab === sub.id 
                  ? 'theme-text-active bg-red-500/5' 
                  : 'theme-text-secondary hover:theme-text hover:theme-bg-hover'}
              `}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ filteredSections, activeTab, setActiveTab, setMobileMenuOpen, searchQuery, setSearchQuery, theme, toggleTheme }) => (
  <div className="flex flex-col h-full theme-bg-sidebar theme-transition scrollbar-hide">
    <div className="lg:hidden p-6 pb-4 border-b theme-border-secondary">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 bg-gradient-to-br from-[#E31B23] to-[#ff4f56] rounded-xl flex items-center justify-center shadow-sm">
          <Layers className="text-white" size={18} />
        </div>
        <span className="font-bold text-[17px] tracking-tight theme-text">Danesh'<span className="text-[#E31B23]">UI</span></span>
      </div>
    </div>
    
    <div className="p-4">
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-tertiary" />
        <input
          type="text"
          placeholder="Search docs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full theme-bg theme-border border rounded-lg pl-9 pr-3 py-2 text-xs outline-none focus:border-[#E31B23] focus:ring-2 focus:ring-red-500/10 theme-transition placeholder:theme-text-tertiary theme-text"
        />
      </div>
    </div>

    <nav className="flex-1 overflow-y-auto px-3 space-y-6 pb-6">
      {filteredSections.map((section) => (
        <div key={section.title}>
          <p className="text-[10px] font-bold theme-text-tertiary uppercase tracking-[0.2em] px-3.5 mb-2">{section.title}</p>
          <div className="space-y-0.5">
            {section.items.map((item) => (
              <SidebarItem key={item.id} activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} {...item} />
            ))}
          </div>
        </div>
      ))}
    </nav>

    <div className="p-4 border-t theme-border-secondary">
      <div className="flex items-center justify-around theme-text-tertiary">
        <a href="#" className="hover:theme-text"><GitFork size={16} /></a>
        <a href="#" className="hover:theme-text"><Globe size={16} /></a>
        <a href="#" className="hover:theme-text"><MessageSquare size={16} /></a>
        <button onClick={toggleTheme} className="hover:theme-text cursor-pointer">
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('danesh-tab') || 'Introduction');
  const [theme, setTheme] = useState(() => localStorage.getItem('danesh-theme') || 'light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('danesh-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('danesh-tab', activeTab);
  }, [activeTab]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const filteredSections = NAV_SECTIONS.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const renderPage = () => {
    switch (activeTab) {
      case 'Introduction': return <IntroductionPage onNavigate={setActiveTab} />;
      case 'Installation': return <InstallationPage />;
      case 'Button': return <ButtonDoc />;
      case 'Input': return <InputDoc />;
      case 'Card': return <CardDoc />;
      case 'Alert': return <AlertDoc />;
      case 'Badge': return <BadgeDoc />;
      case 'Avatar': return <AvatarDoc />;
      case 'Toggle': return <ToggleDoc />;
      case 'Tabs': return <TabsDoc />;
      case 'Modal': return <ModalDoc />;
      case 'Checkbox': return <CheckboxDoc />;
      case 'Radio': return <RadioDoc />;
      case 'Select': return <SelectDoc />;
      case 'Textarea': return <TextareaDoc />;
      case 'Progress': return <ProgressDoc />;
      case 'Skeleton': return <SkeletonDoc />;
      case 'Accordion': return <AccordionDoc />;
      case 'Tooltip': return <TooltipDoc />;
      case 'Divider': return <DividerDoc />;
      case 'Table': return <TableDoc />;
      case 'Stat': return <StatDoc />;
      case 'AvatarGroup': return <AvatarGroupDoc />;
      case 'Breadcrumb': return <BreadcrumbDoc />;
      case 'Pagination': return <PaginationDoc />;
      case 'Spinner': return <SpinnerDoc />;
      case 'Kbd': return <KbdDoc />;
      case 'EmptyState': return <EmptyStateDoc />;
      case 'Toast': return <ToastDoc />;

      case 'Templates': return <TemplatesDoc />;
      case 'AnimatedVault': return <AnimatedVault />;
      case 'SyncLab': return <SyncLab />;
      case 'FioriButtons': return <FioriButtons />;
      default: return <IntroductionPage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex min-h-screen theme-bg theme-transition">
      <header className="fixed top-0 left-0 right-0 h-16 glass z-50 border-b theme-border-secondary px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('Introduction')}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#E31B23] to-[#ff4f56] rounded-lg flex items-center justify-center shadow-md">
              <Layers className="text-white" size={16} />
            </div>
            <span className="font-bold text-lg tracking-tight theme-text hidden sm:block">Danesh'<span className="text-[#E31B23]">UI</span></span>
          </div>

          <div className="hidden md:flex items-center relative">
             <Search size={14} className="absolute left-3 theme-text-tertiary" />
             <input 
               type="text" 
               placeholder="Search documentation... (Ctrl+K)"
               className="w-80 theme-bg-secondary theme-border border rounded-full pl-9 pr-4 py-1.5 text-sm outline-none focus:ring-2 focus:ring-red-500/10 theme-transition theme-text"
             />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="primary" size="sm" className="hidden sm:flex">v0.1.0-beta</Badge>
          <div className="w-px h-6 theme-bg-tertiary hidden sm:block" />
          <button onClick={toggleTheme} className="p-2 rounded-lg theme-bg-secondary theme-text-secondary hover:theme-text transition-all cursor-pointer">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg theme-bg-secondary theme-text">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <aside className="w-[260px] border-r theme-border-secondary theme-bg fixed top-16 bottom-0 hidden lg:flex flex-col z-40 theme-transition">
        <Sidebar 
          filteredSections={filteredSections}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setMobileMenuOpen={setMobileMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </aside>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]" onClick={() => setMobileMenuOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-[280px] theme-bg z-[70] shadow-2xl animate-slide-in">
            <Sidebar 
              filteredSections={filteredSections}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setMobileMenuOpen={setMobileMenuOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </aside>
        </div>
      )}

      <div className="flex-1 lg:ml-[260px] mt-16 theme-transition min-h-[calc(100vh-64px)]">
        <div className="flex h-full max-w-[1600px] mx-auto">
          <main className="flex-1 min-w-0 px-6 py-10 lg:px-20 lg:py-16">
            <div className="mb-16 animate-fade-in" key={activeTab}>
              <div className="flex items-center gap-1.5 text-[13px] theme-text-tertiary font-medium mb-6">
                <span className="hover:theme-text cursor-pointer transition-colors" onClick={() => setActiveTab('Introduction')}>Docs</span>
                <ChevronRight size={12} />
                <span className="theme-text-active font-semibold">{activeTab}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black theme-text tracking-tight mb-6">{activeTab}</h1>
              <p className="text-xl theme-text-secondary leading-relaxed max-w-4xl font-medium">
                {PAGE_DESCRIPTIONS[activeTab]}
              </p>
            </div>

            <div className="animate-fade-in" key={`content-${activeTab}`}>
              {renderPage()}
            </div>

            <footer className="mt-32 pt-12 border-t theme-border-secondary flex flex-col sm:flex-row justify-between items-center gap-8 theme-text-tertiary">
              <p className="text-sm font-medium">© 2024 Danesh'UI Design Systems. Premium enterprise components.</p>
              <div className="flex gap-8">
                 <a href="#" className="hover:theme-text transition-colors font-bold">GitHub</a>
                 <a href="#" className="hover:theme-text transition-colors font-bold">Discord</a>
                 <a href="#" className="hover:theme-text transition-colors font-bold">Twitter</a>
              </div>
            </footer>
          </main>

          {PAGE_TOC[activeTab] && (
            <aside className="hidden xl:block w-80 shrink-0 py-16 pr-12">
              <div className="sticky top-32">
                <p className="text-[11px] font-black theme-text-tertiary uppercase tracking-[0.2em] mb-5">On This Page</p>
                <nav className="space-y-1.5">
                  {PAGE_TOC[activeTab].map((section, i) => (
                    <a
                      key={i}
                      href={`#${section.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="block py-1.5 text-[13px] theme-text-secondary hover:theme-text-active transition-all leading-relaxed hover:translate-x-1"
                    >
                      {section}
                    </a>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t theme-border-secondary">
                  <p className="text-[11px] font-bold theme-text-tertiary uppercase tracking-[0.2em] mb-4">Community</p>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-2.5 text-[13px] theme-text-secondary hover:theme-text-active transition-colors">
                      <ExternalLink size={14} /> Edit this page
                    </a>
                    <a href="#" className="flex items-center gap-2.5 text-[13px] theme-text-secondary hover:theme-text-active transition-colors">
                      <Sparkles size={14} /> Share feedback
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

function IntroductionPage({ onNavigate }) {
  return (
    <div className="space-y-16 animate-fade-in">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-black p-12 lg:p-20 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E31B23] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E31B23] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge variant="primary" size="lg" className="mb-6 animate-float">🚀 Production Ready v0.1.0 Beta</Badge>
          <h2 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-none">
            Build stunning dashboards <br />
            <span className="gradient-text">at lightning speed.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
            The enterprise-grade React component library powered by Tailwind CSS v4. 
            Handcrafted for developers who demand excellence and performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" onClick={() => onNavigate('Installation')} className="px-10 h-14 text-lg">
              Get Started
            </Button>
            <Button variant="outline" size="xl" className="!text-white !border-slate-700 hover:!bg-white/10 h-14 px-10 text-lg">
              GitHub Repo
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Components', value: '25+', icon: Boxes, trend: '+5 new' },
          { label: 'Bundle Size', value: '~14KB', icon: Zap, trend: 'Gzipped' },
          { label: 'Tailwind v4', value: 'Native', icon: Paintbrush, trend: 'Modern' },
          { label: 'Performance', value: '100%', icon: Shield, trend: 'Verified' },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="theme-bg theme-border border rounded-2xl p-6 theme-shadow-sm hover:theme-shadow-md transition-all group">
              <div className="flex items-center justify-between mb-4">
                 <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 theme-text-active group-hover:scale-110 transition-transform">
                   <Icon size={24} />
                 </div>
                 <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">{stat.trend}</span>
              </div>
              <p className="text-3xl font-black theme-text mb-1">{stat.value}</p>
              <p className="text-sm font-bold theme-text-tertiary uppercase tracking-wider">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
           <h3 className="text-2xl font-bold theme-text mb-6 flex items-center gap-3">
             <span className="w-1.5 h-8 bg-[#E31B23] rounded-full" />
             Quick Setup
           </h3>
           <CodeBlock 
             title="App.jsx"
             showLineNumbers
             code={`import { Button, Card, Input } from '@danesh-ui/react';

export default function App() {
  return (
    <div className="p-10 space-y-6">
      <Card title="Sales Overview">
        <div className="flex gap-4">
          <Input placeholder="Search..." />
          <Button variant="primary">Search</Button>
        </div>
      </Card>
    </div>
  );
}`} />
        </div>
        <div className="space-y-8">
           <h3 className="text-2xl font-bold theme-text mb-6 flex items-center gap-3">
             <span className="w-1.5 h-8 bg-[#E31B23] rounded-full" />
             Core Features
           </h3>
           <div className="space-y-4">
              {[
                { title: 'Dark Mode', desc: 'Native dark mode support built-in.', icon: Moon },
                { title: 'Tailwind CSS', desc: 'Utility-first styling with zero runtime.', icon: Zap },
                { title: 'Accessible', desc: 'WAI-ARIA compliant out of the box.', icon: Shield },
              ].map(f => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-4 p-4 rounded-2xl theme-bg-secondary border theme-border-secondary">
                    <div className="shrink-0 text-red-500"><Icon size={24} /></div>
                    <div>
                      <h4 className="font-bold theme-text">{f.title}</h4>
                      <p className="text-sm theme-text-secondary">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
           </div>
        </div>
      </div>
    </div>
  );
}

function InstallationPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      <section>
        <h3 className="text-2xl font-bold theme-text mb-4">NPM Installation</h3>
        <p className="theme-text-secondary mb-6 text-lg">Install Danesh'UI and its peer dependencies via npm or yarn.</p>
        <div className="bg-[#0d1117] rounded-2xl p-6 relative group border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Terminal</span>
            <button className="text-slate-500 hover:text-white transition-colors"><Copy size={16} /></button>
          </div>
          <code className="text-emerald-400 font-mono text-lg block">
            <span className="text-slate-600 mr-4 select-none">$</span>
            npm install @danesh-ui/react lucide-react clsx tailwind-merge
          </code>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold theme-text mb-4">Tailwind Configuration</h3>
        <p className="theme-text-secondary mb-6 text-lg">Add the Danesh'UI content paths to your <code className="theme-bg-tertiary px-1.5 py-0.5 rounded font-mono">tailwind.config.js</code>.</p>
        <CodeBlock 
          title="tailwind.config.js"
          code={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@danesh-ui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`} />
      </section>
    </div>
  );
}
