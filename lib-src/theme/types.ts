export type SingleColor = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};
export type DSColors = 'DSBlue' | 'DSOrange';
export type ThemeColors = {
  black: string;
  white: string;
  DSBlue: SingleColor;
  DSOrange: SingleColor;
};

type GlobalStyles = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
export type LayoutProps = {
  color?: string;
  backgroundColor?: string;
  margin?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  position?:
    | GlobalStyles
    | '-webkit-sticky'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'static'
    | 'sticky';
  right?: number | string;
  left?: number | string;
  top?: number | string;
  bottom?: number | string;
};
export enum LayoutPropsEnumeration {
  ref = 'ref',
  key = 'key',
  backgroundColor = 'backgroundColor',
  marginTop = 'marginTop',
  marginRight = 'marginRight',
  marginBottom = 'marginBottom',
  marginLeft = 'marginLeft',
  paddingTop = 'paddingTop',
  paddingRight = 'paddingRight',
  paddingBottom = 'paddingBottom',
  paddingLeft = 'paddingLeft',
  position = 'position',
  right = 'right',
  left = 'left',
  top = 'top',
  bottom = 'bottom',
}
