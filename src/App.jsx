import React, { useState, useEffect } from 'react';
import {
  Layers, Monitor, Terminal, MousePointer2, Type, Bell, ToggleLeft, Users,
  PanelTop, LayoutGrid, FileText, ChevronRight, ChevronDown, GitFork, ExternalLink,
  Search, Menu, X, Sparkles, Boxes, SlidersHorizontal, Package, Copy,
  Check, BookOpen, Zap, Shield, Paintbrush, Database, Table2, Sun, Moon,
  CheckSquare, Circle, List, AlignLeft, BarChart3, Clock, Square, Layout,
  Info, SeparatorHorizontal, MousePointer, Hash, Map, Navigation, Loader2,
  Table as TableIcon, Globe, MessageSquare, KeyRound, Search as SearchIcon, Tags, Smartphone,
  TextCursorInput, CreditCard, ShoppingCart, PhoneCall, UploadCloud, CircleDot,
  Gauge, Layers3, AlignJustify, PanelRightOpen
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
import PasswordInputDoc from './docs/pages/PasswordInputDoc';
import SearchInputDoc from './docs/pages/SearchInputDoc';
import TagInputDoc from './docs/pages/TagInputDoc';
import OtpInputDoc from './docs/pages/OtpInputDoc';
import FloatingLabDoc from './docs/pages/FloatingLabDoc';
import InputMasksDoc from './docs/pages/InputMasksDoc';
import SmartInputsDoc from './docs/pages/SmartInputsDoc';
import PhoneInputDoc from './docs/pages/PhoneInputDoc';
import FileDropzoneDoc from './docs/pages/FileDropzoneDoc';

// Gallery Pages
import CardLabDoc from './docs/pages/CardLabDoc';
import AlertLabDoc from './docs/pages/AlertLabDoc';
import BadgeLabDoc from './docs/pages/BadgeLabDoc';
import ModalLabDoc from './docs/pages/ModalLabDoc';
import TabsVaultDoc from './docs/pages/TabsVaultDoc';
import ProgressGalleryDoc from './docs/pages/ProgressGalleryDoc';
import SkeletonGalleryDoc from './docs/pages/SkeletonGalleryDoc';
import TooltipGalleryDoc from './docs/pages/TooltipGalleryDoc';
import DaneshIconsDoc from './docs/pages/DaneshIconsDoc';
import DeveloperDoc from './docs/pages/DeveloperDoc';
import OrgChartDoc from './docs/pages/OrgChartDoc';

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
      { id: 'DaneshIcons', icon: Sparkles, label: 'DaneshIcons' },
      { id: 'Developer', icon: Users, label: 'Developer' },
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
      {
        id: 'Input',
        icon: Type,
        label: 'Input',
        subItems: [
          { id: 'Input', label: 'Main Docs' },
          { id: 'FloatingLab', label: 'Floating Lab' },
          { id: 'InputMasks', label: 'Input Masks' },
          { id: 'SmartInputs', label: 'Smart Inputs' },
          { id: 'PhoneInput', label: 'Phone Input' },
          { id: 'FileDropzone', label: 'File Upload' },
        ]
      },
      {
        id: 'Card',
        icon: LayoutGrid,
        label: 'Card',
        subItems: [
          { id: 'Card', label: 'Main Docs' },
          { id: 'CardLab', label: 'Card Lab' },
        ]
      },
      {
        id: 'Alert',
        icon: Bell,
        label: 'Alert',
        subItems: [
          { id: 'Alert', label: 'Main Docs' },
          { id: 'AlertLab', label: 'Alert Lab' },
        ]
      },
      {
        id: 'Badge',
        icon: Sparkles,
        label: 'Badge',
        subItems: [
          { id: 'Badge', label: 'Main Docs' },
          { id: 'BadgeLab', label: 'Badge Lab' },
        ]
      },
      { id: 'Avatar', icon: Users, label: 'Avatar' },
      { id: 'Toggle', icon: ToggleLeft, label: 'Toggle' },
      {
        id: 'Tabs',
        icon: PanelTop,
        label: 'Tabs',
        subItems: [
          { id: 'Tabs', label: 'Main Docs' },
          { id: 'TabsVault', label: 'Tabs Vault' },
        ]
      },
      {
        id: 'Modal',
        icon: Boxes,
        label: 'Modal',
        subItems: [
          { id: 'Modal', label: 'Main Docs' },
          { id: 'ModalLab', label: 'Modal Lab' },
        ]
      },
    ]
  },
  {
    title: 'Forms',
    items: [
      { id: 'Checkbox', icon: CheckSquare, label: 'Checkbox' },
      { id: 'Radio', icon: Circle, label: 'Radio' },
      { id: 'Select', icon: List, label: 'Select' },
      { id: 'Textarea', icon: AlignLeft, label: 'Textarea' },
      { id: 'PasswordInput', icon: KeyRound, label: 'Password' },
      { id: 'SearchInput', icon: SearchIcon, label: 'Search' },
      { id: 'TagInput', icon: Tags, label: 'Tag Input' },
      { id: 'OtpInput', icon: Smartphone, label: 'OTP Input' },
    ]
  },
  {
    title: 'Feedback',
    items: [
      { id: 'Progress', icon: BarChart3, label: 'Progress' },
      { id: 'ProgressGallery', icon: Gauge, label: 'Progress Gallery' },
      { id: 'Toast', icon: Clock, label: 'Toast' },
      { id: 'Skeleton', icon: Square, label: 'Skeleton' },
      { id: 'SkeletonGallery', icon: Layers3, label: 'Skeleton Gallery' },
    ]
  },
  {
    title: 'Layout & Utils',
    items: [
      { id: 'Accordion', icon: Layout, label: 'Accordion' },
      { id: 'Tooltip', icon: Info, label: 'Tooltip' },
      { id: 'Popover', icon: Navigation, label: 'Popover' },
      { id: 'TooltipGallery', icon: AlignJustify, label: 'Tooltip Gallery' },
      { id: 'Divider', icon: SeparatorHorizontal, label: 'Divider' },
      { id: 'Drawer', icon: PanelRightOpen, label: 'Drawer' },
    ]
  },
  {
    title: 'Data & Navigation',
    items: [
      { id: 'Table', icon: TableIcon, label: 'Table' },
      { id: 'OrgChart', icon: Users, label: 'Org Chart', premium: true },
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
  PasswordInput: "Secure password fields with strength meter, visibility toggle, and copy support.",
  SearchInput: "Smart search inputs with debounce support, clear button, and keyboard shortcut hints.",
  TagInput: "Chip-style tag inputs for emails, skills, and multi-value entry with validation.",
  OtpInput: "One-time password input with auto-focus, paste support, and auto-submit on complete.",
  FloatingLab: "Material-inspired floating label inputs with smooth animations across 4 visual variants.",
  InputMasks: "Auto-formatting input masks for phone numbers, credit cards, dates, SSNs, and more.",
  SmartInputs: "Intelligent autocomplete, number counters, and multi-currency formatters for data entry.",
  PhoneInput: "International phone input with searchable country selector, flags, and dial codes.",
  FileDropzone: "Drag-and-drop file upload with preview thumbnails, size validation, and progress states.",

  CardLab: "Glass, interactive, metric, and pricing cards for data-rich dashboards and product showcases.",
  AlertLab: "Banner alerts, stacked notifications, and action-oriented alert components for real-time feedback.",
  BadgeLab: "Status indicators, notification counters, grouped badges, and animated pulse badges.",
  TabsVault: "Underline, pill, and vertical tab variants for flexible content organization.",
  ModalLab: "Slide-in drawers and confirmation dialogs for focused user interactions.",
  ProgressGallery: "Circular progress rings, step wizards, and animated loaders for every context.",
  SkeletonGallery: "Card, table, and list skeleton placeholders for elegant loading experiences.",
  TooltipGallery: "Rich tooltips, popovers, and hover-triggered information panels.",
  Popover: "Click-triggered popover panels with smart positioning and arrow indicators.",
  Drawer: "Slide-in panels for settings, navigation, and detailed content views.",
  DaneshIcons: "200+ premium SVG icons designed for the Danesh design system. Open source and fully customizable.",
  Developer: "Meet the creator behind Danesh'UI — full stack developer, UI/UX designer, and open source enthusiast.",
  OrgChart: "Interactive organizational chart with hierarchical tree visualization, search, zoom, and custom card rendering.",
};

const PAGE_TOC = {
  Button: ['Core Variants', 'Premium Variants', 'Shapes & Sizes', 'Interactive States', 'Icon Combinations', 'Hover Animations', 'API Reference'],

  Card: ['Basic Card', 'With Footer', 'Hover Effect', 'Card Grid', 'API Reference'],
  Alert: ['Variants', 'Dismissible', 'Without Title', 'API Reference'],
  Badge: ['Variants', 'With Status Dot', 'Sizes', 'API Reference'],
  Avatar: ['Sizes', 'Status Indicator', 'Avatar Group', 'API Reference'],
  Toggle: ['Basic Toggle', 'Sizes', 'Disabled', 'API Reference'],
  Tabs: ['Default Tabs', 'Pills Variant', 'Outline Variant', 'API Reference'],
  Modal: ['Basic Modal', 'Form Modal', 'API Reference'],
  Templates: ['Realistic ERP Template Preview', 'Template Features'],
  FioriButtons: ['Standard Action Types', 'Semantic / Status Types', 'High Contrast (Solid)', 'Functional Modes', 'Enterprise Usage Pattern'],
  PasswordInput: ['Basic Password', 'With Strength Meter', 'With Copy Button', 'Validation States', 'Sizes', 'API Reference'],
  SearchInput: ['Basic Search', 'With Clear & Shortcut', 'Debounced Search', 'Sizes', 'With Label', 'API Reference'],
  TagInput: ['Basic Tag Input', 'Controlled Tags', 'Color Variants', 'Max Tags & Validation', 'Sizes', 'Error State', 'API Reference'],
  OtpInput: ['Basic OTP', 'With Label', 'Controlled & Auto-Submit', 'Sizes', 'Error State', '4 Digit Short Code', 'API Reference'],
  Input: ['Basic Input', 'With Icons', 'Sizes', 'Input Types', 'Validation States', 'Right Icon', 'Disabled & Read Only', 'Form Example', 'Input Group Layout', 'Dark Mode Compatible', 'API Reference'],
  FloatingLab: ['Default Variant', 'Modern Variant', 'Outline Variant', 'Ghost Variant', 'Size Matrix', 'Usage'],
  InputMasks: ['Mask Gallery', 'With Left & Right Icons', 'Size Variants', 'Usage'],
  SmartInputs: ['Auto Suggest', 'Counter Input', 'Currency Input', 'Real World: Order Form', 'Usage'],
  PhoneInput: ['Basic Phone Input', 'Different Countries', 'Country Search', 'Sizes', 'Validation', 'API Reference'],
  FileDropzone: ['Basic File Upload', 'Images Only', 'Accept Types', 'Sizes', 'Single File Mode', 'Error & States', 'API Reference'],

  CardLab: ['Glass Cards', 'Interactive Cards', 'Metric Cards', 'Pricing Cards', 'Expandable Cards', 'Profile Cards', 'Usage'],
  AlertLab: ['Alert Banner', 'Alert Stack', 'Alert With Action', 'Usage'],
  BadgeLab: ['Status Badges', 'Notification Badges', 'Badge Groups', 'Pulsing Badges', 'Usage'],
  TabsVault: ['Underline Tabs', 'Pill Tabs', 'Vertical Tabs', 'Usage'],
  ModalLab: ['Slide Drawers', 'Confirm Dialog', 'Usage'],
  ProgressGallery: ['Circular Progress', 'Step Progress', 'Spinner With Text', 'Full Page Spinner', 'Usage'],
  SkeletonGallery: ['Card Skeleton', 'Table Skeleton', 'List Skeleton', 'Usage'],
  TooltipGallery: ['Tooltip Positions', 'Popover Triggers', 'Usage'],
  DaneshIcons: ['Quick Links', 'Icon Showcase', 'Usage', 'Integration'],
  Developer: ['About', 'Quick Stats', 'Projects', 'Connect'],
  OrgChart: ['Basic Org Chart', 'Search & Filter', 'Zoom & Pan', 'Custom Card', 'Interaction & Events', 'API Reference', 'Data Structure', 'from Danesh'],
};

const SidebarItem = ({ id, activeTab, setActiveTab, setMobileMenuOpen, icon: Icon, label, subItems, premium }) => {
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
          w-full flex items-center gap-3 px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 cursor-pointer theme-transition relative overflow-hidden
          ${premium ? 'premium-nav-item' : ''}
          ${activeTab === id || (isParentActive && !isOpen)
            ? premium
              ? 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 text-amber-800 dark:text-amber-300 shadow-sm shadow-amber-200/50 dark:shadow-amber-900/20 border border-amber-200/50 dark:border-amber-800/30'
              : 'theme-bg-active theme-text-active theme-shadow-sm'
            : premium
              ? 'theme-text-secondary hover:bg-amber-50/50 dark:hover:bg-amber-950/10 hover:text-amber-700 dark:hover:text-amber-400 border border-transparent hover:border-amber-200/30 dark:hover:border-amber-800/20'
              : 'theme-text-secondary hover:theme-bg-hover hover:theme-text'}
        `}
      >
        {premium && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
        )}
        <div className="relative flex items-center gap-3 w-full">
          <Icon size={16} className={isParentActive ? 'theme-text-active' : 'theme-text-tertiary'} strokeWidth={isParentActive ? 2.5 : 2} />
          <span className="truncate">{label}</span>
          {premium && (
            <span className="ml-auto text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(251,191,36,0.3)] animate-pulse-subtle">
              ✦ Premium
            </span>
          )}
          {subItems ? (
            <ChevronDown size={14} className={`ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          ) : (
            activeTab === id && <ChevronRight size={12} className="ml-auto opacity-50" />
          )}
        </div>
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
      case 'PasswordInput': return <PasswordInputDoc />;
      case 'SearchInput': return <SearchInputDoc />;
      case 'TagInput': return <TagInputDoc />;
      case 'OtpInput': return <OtpInputDoc />;

      case 'Templates': return <TemplatesDoc />;
      case 'AnimatedVault': return <AnimatedVault />;
      case 'SyncLab': return <SyncLab />;
      case 'FioriButtons': return <FioriButtons />;
      case 'FloatingLab': return <FloatingLabDoc />;
      case 'InputMasks': return <InputMasksDoc />;
      case 'SmartInputs': return <SmartInputsDoc />;
      case 'PhoneInput': return <PhoneInputDoc />;
      case 'FileDropzone': return <FileDropzoneDoc />;

      case 'CardLab': return <CardLabDoc />;
      case 'AlertLab': return <AlertLabDoc />;
      case 'BadgeLab': return <BadgeLabDoc />;
      case 'ModalLab': return <ModalLabDoc />;
      case 'TabsVault': return <TabsVaultDoc />;
      case 'ProgressGallery': return <ProgressGalleryDoc />;
      case 'SkeletonGallery': return <SkeletonGalleryDoc />;
      case 'TooltipGallery': return <TooltipGalleryDoc />;
      case 'DaneshIcons': return <DaneshIconsDoc />;
      case 'Developer': return <DeveloperDoc />;
      case 'OrgChart': return <OrgChartDoc />;
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
