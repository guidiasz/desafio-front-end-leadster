'use client';
import React from 'react';
import { lightTheme } from '@/styles/DefaultTheme';
import GlobalStyles from '@/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
