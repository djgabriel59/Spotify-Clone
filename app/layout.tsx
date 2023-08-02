import { Sidebar } from '@/components/Sidebar';
import './globals.css';
import { Figtree } from 'next/font/google';
import SupaBaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModelProvider from '@/providers/ModelProvider';
import ToasterProvider from '@/providers/ToasterProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <SupaBaseProvider>
          <UserProvider>
            <ModelProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupaBaseProvider>
      </body>
    </html>
  );
}
