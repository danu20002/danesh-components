import { useState } from 'react';
import { ShoppingCart, User, Check, CreditCard, Loader2 } from 'daneshicons';
import CircularProgress from '../../lib/components/CircularProgress';
import StepProgress from '../../lib/components/StepProgress';
import SpinnerWithText from '../../lib/components/SpinnerWithText';
import FullPageSpinner from '../../lib/components/FullPageSpinner';
import Button from '../../lib/components/Button';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const ProgressGalleryDoc = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fullPageVisible, setFullPageVisible] = useState(false);

  const steps = [
    { title: 'Cart', description: 'Review items', icon: ShoppingCart },
    { title: 'Details', description: 'Shipping info', icon: User },
    { title: 'Payment', description: 'Pay now', icon: CreditCard },
    { title: 'Done', description: 'Order placed', icon: Check },
  ];

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Component Gallery
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Progress <span className="text-red-600">Gallery</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          Circular indicators, step wizards, and spinner overlays for every loading state.
        </p>
      </header>

      <NoteBlock type="info">
        Mix and match sizes, colors, and variants across all progress components. All use theme variables — no hardcoded colors.
      </NoteBlock>

      {/* === Circular Progress === */}
      <section>
        <SectionTitle>Circular Progress</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Animated ring indicators in multiple sizes and color variants.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 theme-bg border theme-border-secondary rounded-3xl p-8 justify-items-center">
          <div className="flex flex-col items-center gap-3">
            <CircularProgress value={75} size="sm" variant="primary" showValue />
            <span className="text-xs theme-text-tertiary">sm / primary</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CircularProgress value={65} size="md" variant="success" showValue />
            <span className="text-xs theme-text-tertiary">md / success</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CircularProgress value={45} size="lg" variant="warning" label="Loading" />
            <span className="text-xs theme-text-tertiary">lg / warning</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CircularProgress value={90} size="xl" variant="info" showValue label="Almost done" />
            <span className="text-xs theme-text-tertiary">xl / info</span>
          </div>
        </div>
        <div className="mt-8">
          <CodeBlock
            title="CircularProgress Example"
            code={`import { CircularProgress } from '@danesh-ui/react';

// Basic usage
<CircularProgress value={75} />

// Size: sm | md | lg | xl
<CircularProgress value={50} size="lg" />

// Variant: primary | success | warning | info
<CircularProgress value={80} variant="success" />

// With label and percentage
<CircularProgress value={65} showValue label="Uploading" />`}
          />
        </div>
      </section>

      {/* === Step Progress === */}
      <section>
        <SectionTitle>Step Progress</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Multi-step wizard with title, description, and icon support. Navigate through the steps below.</p>
        <div className="theme-bg border theme-border-secondary rounded-3xl p-8">
          <StepProgress steps={steps} currentStep={currentStep} />
          <div className="flex items-center justify-between mt-8">
            <Button variant="ghost" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
              Previous
            </Button>
            <span className="text-xs theme-text-tertiary font-medium">Step {currentStep + 1} of {steps.length}</span>
            <Button onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))} disabled={currentStep === steps.length}>
              Next
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <CodeBlock
            title="StepProgress Example"
            code={`import { StepProgress } from '@danesh-ui/react';
import { ShoppingCart, User, CreditCard, Check } from 'daneshicons';

const steps = [
  { title: 'Cart', description: 'Review items', icon: ShoppingCart },
  { title: 'Details', description: 'Shipping info', icon: User },
  { title: 'Payment', description: 'Pay now', icon: CreditCard },
  { title: 'Done', description: 'Order placed', icon: Check },
];

const [step, setStep] = useState(1);

<StepProgress steps={steps} currentStep={step} />

// Variant: "default" | "numbered" | "icon"
<StepProgress steps={steps} currentStep={2} variant="numbered" />`}
          />
        </div>
      </section>

      {/* === Spinner With Text === */}
      <section>
        <SectionTitle>Spinner With Text</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Spinner with optional text label and description in row or column layout.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 theme-bg border theme-border-secondary rounded-3xl p-8 justify-items-center">
          <SpinnerWithText size="sm" color="primary" text="Loading" description="Please wait" direction="column" />
          <SpinnerWithText size="md" color="primary" text="Saving..." description="Your changes" direction="column" />
          <SpinnerWithText size="lg" color="primary" text="Uploading" description="3 files remaining" direction="column" />
          <SpinnerWithText size="md" color="primary" text="Processing..." direction="row" />
        </div>
        <div className="mt-8">
          <CodeBlock
            title="SpinnerWithText Example"
            code={`import { SpinnerWithText } from '@danesh-ui/react';

// Column layout (default)
<SpinnerWithText size="md" color="primary" text="Loading" description="Please wait" />

// Row layout
<SpinnerWithText size="sm" color="primary" text="Processing..." direction="row" />

// Sizes: xs | sm | md | lg | xl
<SpinnerWithText size="lg" text="Uploading" />

// Colors: primary | white | slate | current
<SpinnerWithText color="primary" text="Loading..." />`}
          />
        </div>
      </section>

      {/* === Full Page Spinner === */}
      <section>
        <SectionTitle>Full Page Spinner</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">A centered overlay spinner with backdrop blur, used for page-level loading states.</p>
        <Button onClick={() => setFullPageVisible(true)}>
          <Loader2 size={16} />
          Show Full Page Spinner
        </Button>

        {fullPageVisible && (
          <FullPageSpinner
            visible={fullPageVisible}
            text="Processing your request"
            description="This should only take a moment"
            spinnerSize="lg"
          />
        )}

        {fullPageVisible && (
          <div className="mt-4">
            <Button variant="ghost" onClick={() => setFullPageVisible(false)}>Dismiss Overlay</Button>
          </div>
        )}

        <div className="mt-8">
          <CodeBlock
            title="FullPageSpinner Example"
            code={`import { FullPageSpinner, Button } from '@danesh-ui/react';
import { Loader2 } from 'daneshicons';

const [visible, setVisible] = useState(false);

{visible && (
  <FullPageSpinner
    visible={visible}
    text="Processing your request"
    description="This should only take a moment"
    blur={true}
  />
)}

<Button onClick={() => setVisible(true)}>
  <Loader2 size={16} />
  Show Spinner
</Button>

<Button onClick={() => setVisible(false)}>Dismiss</Button>`}
          />
        </div>
      </section>

      {/* === Usage === */}
      <section>
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          title="ProgressGallery.jsx"
          code={`import {
  CircularProgress,
  StepProgress,
  SpinnerWithText,
  FullPageSpinner,
} from '@danesh-ui/react';
import { ShoppingCart, User, CreditCard, Check } from 'daneshicons';

// Circular indicator
<CircularProgress value={75} size="md" variant="primary" showValue />

// Step wizard
const steps = [
  { title: 'Cart', icon: ShoppingCart },
  { title: 'Details', icon: User },
  { title: 'Payment', icon: CreditCard },
  { title: 'Done', icon: Check },
];
<StepProgress steps={steps} currentStep={1} />

// Spinner with text
<SpinnerWithText size="md" text="Loading..." direction="column" />

// Full-page overlay
<FullPageSpinner visible={true} text="Loading" description="Please wait" />`}
        />
      </section>
    </div>
  );
};

export default ProgressGalleryDoc;
