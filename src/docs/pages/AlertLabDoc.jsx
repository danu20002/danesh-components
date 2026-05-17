import { useState } from 'react';
import Button from '../../lib/components/Button';
import AlertBanner from '../../lib/components/AlertBanner';
import AlertStack from '../../lib/components/AlertStack';
import AlertWithAction from '../../lib/components/AlertWithAction';
import { SectionTitle, NoteBlock, CodeBlock } from '../DocComponents';

const AlertLabDoc = () => {
  const [banners, setBanners] = useState([
    { id: 1, variant: 'info', message: 'System update scheduled for 2:00 AM PST on March 15th.' },
  ]);

  const addBanner = (variant, message) => {
    const id = Date.now();
    setBanners(prev => [...prev, { id, variant, message }]);
    setTimeout(() => {
      setBanners(prev => prev.filter(b => b.id !== id));
    }, 4000);
  };

  const [alerts, setAlerts] = useState([
    { id: 'a1', variant: 'info', title: 'New Update Available', message: 'Version 3.2.1 is ready for download.' },
    { id: 'a2', variant: 'success', title: 'Backup Complete', message: 'Your data was successfully backed up at 3:00 AM.' },
    { id: 'a3', variant: 'warning', title: 'Storage Alert', message: 'You are using 85% of your allocated storage.' },
  ]);

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Design Lab
        </div>
        <h2 className="text-4xl lg:text-5xl font-black theme-text mb-4 tracking-tighter uppercase italic">Alert <span className="text-red-600">Lab</span></h2>
        <p className="text-lg theme-text-secondary leading-relaxed font-medium">
          A gallery of banner, stack, and action-oriented alert components for every feedback scenario.
        </p>
      </header>

      <NoteBlock type="info">
        <strong>Alert Family:</strong> Three specialized alert components — <strong>AlertBanner</strong> (top/bottom bar), <strong>AlertStack</strong> (stacked list), and <strong>AlertWithAction</strong> (card with CTA).
      </NoteBlock>

      <section>
        <SectionTitle>Alert Banner</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Full-width banners that dock to the top or bottom of the viewport. Dismissible and auto-dismiss options available.</p>

        <div className="theme-bg border theme-border-secondary rounded-3xl p-3 mb-6 space-y-2">
          {banners.length > 0 ? (
            banners.slice(-3).map(b => (
              <AlertBanner
                key={b.id}
                variant={b.variant}
                message={b.message}
                dismissible
                className="!relative !top-auto !left-auto !right-auto !z-0 rounded-xl"
                autoDismiss={3000}
              />
            ))
          ) : (
            <p className="text-sm theme-text-secondary text-center py-6">No banners active. Click a button below to trigger one.</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button size="sm" onClick={() => addBanner('info', 'System update scheduled for 2:00 AM PST on March 15th.')}>Info Banner</Button>
          <Button size="sm" variant="success" onClick={() => addBanner('success', 'Payment received successfully. Thank you for your purchase!')}>Success Banner</Button>
          <Button size="sm" onClick={() => addBanner('warning', 'Your session will expire in 5 minutes. Please save your work.')}>Warning Banner</Button>
          <Button size="sm" variant="danger" onClick={() => addBanner('error', 'Unable to connect to the database. Check your network connection.')}>Error Banner</Button>
        </div>

        <CodeBlock
          title="AlertBanner.jsx"
          code={`import AlertBanner from './AlertBanner';

<AlertBanner
  variant="info"
  message="System update scheduled for 2:00 AM PST on March 15th."
  dismissible
/>

<AlertBanner
  variant="success"
  message="Payment received successfully."
  dismissible
  autoDismiss={5000}
/>

<AlertBanner
  variant="warning"
  message="Your session will expire in 5 minutes."
  position="bottom"
/>`}
        />
      </section>

      <section>
        <SectionTitle>Alert Stack</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">A vertical stack of dismissible alerts with semantic icons and color-coded left borders.</p>

        <div className="theme-bg border theme-border-secondary rounded-3xl p-6 lg:p-10 mb-6 max-w-xl">
          <AlertStack alerts={alerts} onDismiss={(id) => setAlerts(prev => prev.filter(a => a.id !== id))} />
          {alerts.length === 0 && (
            <p className="text-sm theme-text-secondary text-center py-8">All alerts dismissed.</p>
          )}
        </div>

        <CodeBlock
          title="AlertStack.jsx"
          code={`import { useState } from 'react';
import AlertStack from './AlertStack';

const [alerts, setAlerts] = useState([
  { id: '1', variant: 'info', title: 'New Update Available', message: 'Version 3.2.1 is ready for download.' },
  { id: '2', variant: 'success', title: 'Backup Complete', message: 'Your data was successfully backed up.' },
  { id: '3', variant: 'warning', title: 'Storage Alert', message: 'You are using 85% of your allocated storage.' },
]);

<AlertStack
  alerts={alerts}
  onDismiss={(id) => setAlerts(prev => prev.filter(a => a.id !== id))}
/>`}
        />
      </section>

      <section>
        <SectionTitle>Alert With Action</SectionTitle>
        <p className="text-sm theme-text-secondary mb-6 -mt-4">Alert cards with an action button. Use for upgrade prompts, confirmation dialogs, or CTAs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 max-w-3xl">
          <AlertWithAction
            variant="warning"
            title="Action Required"
            actionLabel="Upgrade Now"
            onAction={() => alert('Upgrade flow triggered!')}
          >
            Your subscription will expire in 7 days. Upgrade now to keep all features active.
          </AlertWithAction>

          <AlertWithAction
            variant="success"
            title="Setup Complete"
            actionLabel="View Dashboard"
            actionVariant="outline"
            onAction={() => alert('Navigating to dashboard...')}
          >
            Your project has been configured successfully. All systems are operational.
          </AlertWithAction>

          <AlertWithAction
            variant="error"
            title="Deployment Failed"
            actionLabel="Retry"
            actionVariant="ghost"
            onAction={() => alert('Retrying deployment...')}
          >
            The production build failed at the minification step. Check the logs for details.
          </AlertWithAction>

          <AlertWithAction
            variant="info"
            title="New Feature Available"
            actionLabel="Learn More"
            onAction={() => alert('Opening docs...')}
            dismissible
          >
            Dark mode is now available in the dashboard. Enable it in your settings.
          </AlertWithAction>
        </div>

        <CodeBlock
          title="AlertWithAction.jsx"
          code={`import AlertWithAction from './AlertWithAction';

<AlertWithAction
  variant="warning"
  title="Action Required"
  actionLabel="Upgrade Now"
  onAction={() => alert('Upgrade flow triggered!')}
>
  Your subscription will expire in 7 days.
</AlertWithAction>

<AlertWithAction
  variant="success"
  title="Setup Complete"
  actionLabel="View Dashboard"
  actionVariant="outline"
  onAction={() => alert('Navigating to dashboard...')}
>
  Your project has been configured successfully.
</AlertWithAction>`}
        />
      </section>

      <section>
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          title="Import"
          code={`import AlertBanner from './AlertBanner';
import AlertStack from './AlertStack';
import AlertWithAction from './AlertWithAction';`}
        />
      </section>
    </div>
  );
};

export default AlertLabDoc;
