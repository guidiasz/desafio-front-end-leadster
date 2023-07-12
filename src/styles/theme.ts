import { DefaultTheme, css } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    notebook: '1280px',
    tablet: '768px',
    phone: '576px',
  },
  colors: {
    black: '#212121',
    white: '#FFF',
    gray50: '#F2F4F8',
    gray100: '#F0F8FF',
    gray200: '#D5D9DD',
    gray250: '#C8D4DD',
    gray600: '#677294',
    gray700: '#2C3E50',
    primary: '#007AFF',
    primaryGradient: 'linear-gradient(45deg,#2C83FB 0%, #1F76F0 100%)',
    hoverBorder: '#1857C1',
  },
  outline: '',
  scaleUpAnimation: css`
    opacity: 0;
    transform: scale(0.8);
    animation: scaleUp 0.3s forwards;
  `,
  fontSizes: {
    xsmall: '.92rem',
    small: '1rem',
    normal: '1.14rem',
    medium: '1.25rem',
    large: '1.54rem',
    xlarge: '2.74rem',
    xxlarge: '3.17rem',
    huge: '5.83rem',
  },
};

theme.outline = `solid 2px ${theme.colors.primary}`;
