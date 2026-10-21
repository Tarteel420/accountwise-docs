import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card, Cards } from 'fumadocs-ui/components/card';
import type { MDXComponents } from 'mdx/types';
import type { HTMLAttributes } from 'react';

function Steps(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      style={{
        borderLeft: '1px solid var(--color-fd-border, #e5e7eb)',
        marginLeft: '0.75rem',
        paddingLeft: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
      {...props}
    />
  );
}

function Step(props: HTMLAttributes<HTMLDivElement>) {
  return <div style={{ marginBottom: '0.5rem' }} {...props} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Steps,
    Step,
    Tab,
    Tabs,
    Callout,
    Card,
    Cards,
    ...components,
  };
}