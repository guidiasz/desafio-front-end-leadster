import { DefaultTheme } from 'styled-components';
import { colors, textSizes, spacing, fonts, viewports, others } from '@/styles/tokens/';
import clampGenerator from './helpers/clampGenerator.helpers';
import tokensToStyledComponents from './helpers/tokensToStyledComponents.helper';
import { TFont, TSpacing, TTextSize } from './styled';

const textSizeTokens = tokensToStyledComponents(clampGenerator(textSizes.items)) as TTextSize;
const spacingTokens = tokensToStyledComponents(clampGenerator(spacing.items)) as TSpacing;
const fontTokens = tokensToStyledComponents(fonts.items) as TFont;

export const sharedThemeValues = {
  textSize: textSizeTokens,
  spacing: spacingTokens,
  font: fontTokens,
  primitiveColors: colors.items,
  gutter: spacingTokens['s-m'],
  containerMaxWidth: `${viewports.max}px`,
  ...others.items,
};

export const themeColors = {
  link: {
    default: colors.items.primary600,
    hover: colors.items.primary700,
  },
  text: {
    base: colors.items.neutral900,
    subdued: colors.items.neutral700,
    subduedAlt: colors.items.neutral500,
    highlight: colors.items.primary600,
    invert: colors.items.neutral50,
  },
  background: {
    base: colors.items.neutral50,
    moderate: colors.items.neutral100,
    bold: colors.items.neutral300,
    strong: colors.items.neutral500,
    contrast: colors.items.neutral900,
    primary: colors.items.primary600,
    gradient: `linear-gradient(135deg, ${colors.items.neutral100}, ${colors.items.primary100})`,
  },
  outline: {
    strong: colors.items.neutral900,
    base: colors.items.neutral700,
    primary: colors.items.primary600,
    subdued: colors.items.neutral200,
  },
  focus: {
    primary: colors.items.primary600,
  },
};

export const lightTheme: DefaultTheme = {
  colors: { ...themeColors },

  ...sharedThemeValues,
};

export const darkTheme: DefaultTheme = {
  colors: {
    ...themeColors,
    link: {
      default: colors.items.primary300,
      hover: colors.items.primary400,
    },
    text: {
      base: colors.items.neutral100,
      subdued: colors.items.neutral300,
      subduedAlt: colors.items.neutral500,
      highlight: colors.items.primary400,
      invert: colors.items.neutral50,
    },
    background: {
      base: colors.items.neutral950,
      moderate: colors.items.neutral800,
      bold: colors.items.neutral600,
      strong: colors.items.neutral400,
      contrast: colors.items.neutral50,
      primary: colors.items.primary500,
      gradient: `linear-gradient(135deg, ${colors.items.neutral100}, ${colors.items.primary100})`,
    },
    outline: {
      strong: colors.items.neutral100,
      base: colors.items.neutral300,
      primary: colors.items.primary400,
      subdued: colors.items.neutral700,
    },
    focus: {
      primary: colors.items.primary400,
    },
  },

  ...sharedThemeValues,
};
