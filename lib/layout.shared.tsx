import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img
            src="/logo.png"
            alt="AccountWise logo"
            width={32}
            height={32}
            style={{ borderRadius: '4px' }}
          />
          AccountWise Docs
        </>
      ),
    },
    links: [
      { text: 'Getting Started', url: '/docs/getting-started', active: 'nested-url' },
      { text: 'Dashboards', url: '/docs/dashboards', active: 'nested-url' },
      { text: 'Accounting', url: '/docs/accounting', active: 'nested-url' },
      { text: 'Sales', url: '/docs/sales', active: 'nested-url' },
      { text: 'Purchases', url: '/docs/purchases', active: 'nested-url' },
      { text: 'Banking', url: '/docs/banking', active: 'nested-url' },
      { text: 'Reports', url: '/docs/reports', active: 'nested-url' },
      { text: 'Administration', url: '/docs/administration', active: 'nested-url' },
      { text: 'Resources', url: '/docs/resources', active: 'nested-url' },
    ],
  };
}
