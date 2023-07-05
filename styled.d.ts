import 'styled-components';
import theme from './src/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray250: string;
      gray600: string;
      gray700: string;
      primary: string;
      primaryGradient: string;
      hoverBorder: string;
    };
    fontSizes: {
      xsmall: string;
      small: string;
      normal: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
    };
  }
  export interface TypographyProps {
    colorName?: keyof typeof theme.colors;
    size?: keyof typeof theme.fontSizes;
    fontWeight?: 400 | 500 | 700;
    lineHeight?: string | number;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    uppercase?: boolean;
    children: React.ReactNode;
  }
}
