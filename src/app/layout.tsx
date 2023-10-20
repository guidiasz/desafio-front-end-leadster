import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';
import Providers from './providers';
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Leadster - Chatbot de Marketing Digital',
  description:
    'Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!',
};
export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={plusJakartaSans.className}>
        <Providers>
          {props.children}
          {props.modal}
        </Providers>
      </body>
    </html>
  );
}
