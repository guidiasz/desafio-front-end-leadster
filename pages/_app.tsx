import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { GlobalStyles } from '../src/styles/globalStyles';
import { theme } from '../src/styles/theme';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className={plusJakartaSans.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
