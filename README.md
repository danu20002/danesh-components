# Danesh'UI — React Component Library

A modern, enterprise-grade React component library built for speed, consistency, and beautiful design. Designed for dashboards, ERP systems, and data-heavy applications.

## Features

- **66+ production-ready components** — from basic inputs to complex data tables, org charts, and modals
- **DaneshIcons integration** — 200+ custom SVG icons with a simple, composable API
- **Tailwind CSS v4** — styled with Tailwind CSS and enhanced with `clsx` and `tailwind-merge`
- **Dark mode ready** — theme-aware components with CSS variable support
- **Accessible** — keyboard navigation, ARIA attributes, and focus management built in
- **React 19** — built on the latest React with forwardRef patterns for all inputs

## Tech Stack

| Technology | Version |
|---|---|
| React | ^19.2.6 |
| Vite | ^8.0.12 |
| Tailwind CSS | ^4.3.0 |
| daneshicons | ^1.0.7 |
| clsx | ^2.1.1 |
| tailwind-merge | ^3.6.0 |

## Installation

```bash
npm install @danesh-ui/react daneshicons clsx tailwind-merge
```

## Quick Start

```jsx
import { Button, Input, Alert } from '@danesh-ui/react';
import { Search, Mail, Lock } from 'daneshicons';

function LoginForm() {
  return (
    <div className="max-w-sm space-y-4 p-6 border rounded-2xl">
      <Input label="Email" placeholder="you@company.com" icon={Mail} />
      <Input label="Password" type="password" placeholder="••••••••" icon={Lock} />
      <Button className="w-full">Sign In</Button>
    </div>
  );
}
```

## Components

### Inputs
| Component | Description |
|---|---|
| `Input` | Text input with icon support, validation states, and multiple sizes |
| `FloatingInput` | Input with animated floating labels |
| `SearchInput` | Search input with clear button and keyboard shortcut |
| `PasswordInput` | Password input with visibility toggle, strength meter, and copy |
| `PhoneInput` | Phone input with country selector and dial codes |
| `MaskedInput` | Auto-formatting input for phones, credit cards, dates, SSNs |
| `CurrencyInput` | Currency-formatted input |
| `Textarea` | Multi-line text input |
| `Select` | Dropdown select with icon support |
| `AutoSuggest` | Search input with suggestion dropdown |
| `CounterInput` | Numeric stepper with min/max controls |
| `TagInput` | Tag/chip input with add, remove, and validation |
| `OtpInput` | One-time password input with paste support |

### Buttons & Actions
| Component | Description |
|---|---|
| `Button` | Versatile button with 18+ variants, animations, and icon support |
| `Toggle` | On/off toggle switch |

### Feedback
| Component | Description |
|---|---|
| `Alert` | Inline alert with icon and dismissible option |
| `AlertBanner` | Full-width top/bottom alert banner |
| `AlertStack` | Stack of multiple alerts with dismiss |
| `AlertWithAction` | Alert with action button |
| `Toast` | Toast notification system with success, error, warning, info |
| `ConfirmDialog` | Confirmation modal with danger/warning/info variants |
| `Progress` | Linear progress bar |
| `CircularProgress` | Circular progress indicator |
| `StepProgress` | Step-by-step progress wizard |
| `Spinner` | Loading spinner |
| `SpinnerWithText` | Spinner with loading text |
| `FullPageSpinner` | Full-page loading overlay |
| `Skeleton` | Content placeholder skeleton |
| `CardSkeleton` | Card-shaped skeleton |
| `ListSkeleton` | List-shaped skeleton |
| `TableSkeleton` | Table-shaped skeleton |
| `EmptyState` | Empty data placeholder with icon and action |

### Navigation
| Component | Description |
|---|---|
| `Breadcrumb` | Breadcrumb navigation with icons |
| `Pagination` | Page navigation with ellipsis and siblings |
| `Tabs` | Tab container (renders UnderlineTabs, PillTabs, or VerticalTabs) |
| `UnderlineTabs` | Tabs with animated underline indicator |
| `PillTabs` | Tabs with pill-style active state |
| `VerticalTabs` | Vertical tab sidebar |
| `Drawer` | Slide-out panel (left, right, top, bottom) |
| `Modal` | Centered dialog overlay |
| `Popover` | Floating popover component |
| `Tooltip` | Hover tooltip |

### Cards & Layout
| Component | Description |
|---|---|
| `Card` | Flexible card container with variants |
| `GlassCard` | Glassmorphism card with blur effect |
| `InteractiveCard` | Hover-interactive card |
| `MetricCard` | KPI/metric card with trend indicator |
| `PricingCard` | Pricing tier card with features list |
| `ProfileCard` | User profile card |
| `ExpandableCard` | Collapsible card with accordion behavior |
| `Stat` | Statistic card with trend and icon |

### Data Display
| Component | Description |
|---|---|
| `Table` | Data table with sorting and selection |
| `Badge` | Status badge with multiple variants |
| `StatusBadge` | Semantic status indicator |
| `NotificationBadge` | Notification dot with count |
| `BadgeGroup` | Grouped badges |
| `PulsingBadge` | Animated pulsing badge |
| `Avatar` | User avatar with initials and status |
| `AvatarGroup` | Overlapping avatar stack |
| `OrgChart` | Organizational hierarchy chart |
| `OrgChartSidebar` | Org chart with sidebar panel |
| `Kbd` | Keyboard shortcut display |
| `Divider` | Section divider |

### Forms
| Component | Description |
|---|---|
| `Checkbox` | Checkbox with label and description |
| `Radio` | Radio button group |

## DaneshIcons

A custom SVG icon library with **200+ icons** designed for the Danesh'UI ecosystem. Each icon is a composable React component.

```jsx
import { Home, User, Settings, Search } from 'daneshicons';

<Home size={24} color="#E31B23" />
<Search className="my-custom-class" size={18} />
```

Browse all icons at [daneshicons.vercel.app](https://daneshicons.vercel.app/)

## Development

```bash
# Start the dev server
npm run dev

# Build for production
npm run build

# Run the linter
npm run lint

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── lib/
│   └── components/     # All reusable components
├── docs/
│   ├── pages/          # Documentation pages for each component
│   ├── templates/      # Dashboard and page templates
│   └── DocComponents.jsx  # Documentation UI components
└── App.jsx             # Main application with component navigation
```

## License

Private — All rights reserved.
