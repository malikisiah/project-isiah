import { type Metadata } from 'next';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Malik Teague',
    default: 'Malik Teague - Software designer, entrepreneur, and athlete',
  },
  description:
    'I’m Malik, a software designer and entrepreneur based in Chicago.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-200 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
