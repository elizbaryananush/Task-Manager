'use client'

import './globals.scss';
import { StoreProvider } from '../store/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>{children}</StoreProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
