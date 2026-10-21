import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'AccountWise Docs',
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
