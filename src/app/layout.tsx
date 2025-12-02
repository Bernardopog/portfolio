import { Header } from '@/components/shared/layout';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { I18nProvider } from '@/i18n';

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  style: 'normal',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfólio | Bernardo',
  description: 'Portfólio do Bernardo',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get('theme')?.value;
  const locale = (await cookies()).get('locale')?.value;

  return (
    <html lang='pt' className={`${theme === 'dark' && 'dark'}`}>
      <body
        className={`${inter.variable} relative max-h-dvh w-full overflow-hidden bg-white dark:bg-black`}
      >
        <I18nProvider locale={locale ?? 'pt'}>
          <Header
            darkMode={theme === 'dark'}
            startLocale={(locale as 'pt' | 'en') ?? 'pt'}
          />

          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
