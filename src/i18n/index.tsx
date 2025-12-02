import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import en from '../../messages/en.json';
import pt from '../../messages/pt.json';

// biome-ignore lint/suspicious/noExplicitAny: <Needed>
const messagesMap: Record<string, any> = {
  en,
  pt,
};

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const messages = messagesMap[locale ?? 'pt'];

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
