import 'styled-components';
import { fonts, spacing, others, textSizes, colors } from './tokens';
import { sharedThemeValues, themeColors } from './DefaultTheme';

export type TSharedThemeValues = typeof sharedThemeValues;
export type TFont = typeof fonts.keys;
export type TSpacing = typeof spacing.keys;
export type TTextSize = typeof textSizes.keys;
export type TThemeColors = typeof themeColors;

declare module 'styled-components' {
  export interface DefaultTheme extends TSharedThemeValues {
    textSize: TTextSize;
    spacing: TSpacing;
    font: TFont;
    colors: TThemeColors;
  }
}
