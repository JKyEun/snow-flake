import type { Metadata } from 'next';
import '../styles/index.scss';
import GNB from '@/components/GNB';

export const metadata: Metadata = {
  title: 'Base Template',
  description: 'Base Template for Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: 'black' }}>
        <GNB />
        {children}
      </body>
    </html>
  );
}
