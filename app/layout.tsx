import { metadata } from '@/lib/metadata';
import RootLayoutClient from './RootLayoutClient';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
