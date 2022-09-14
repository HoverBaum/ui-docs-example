import { SingleColor, ThemeColors } from './types';

const BLACK = '#364149';

const WHITE = '#f6fafd';

const DSBlue: SingleColor = {
  50: '#e8f0f9',
  100: '#e6f2f9',
  200: '#cce5f3',
  300: '#b3d8ed',
  400: '#99cbf7',
  500: '#80bdf1',
  600: '#66b0eb',
  700: '#4da3e5',
  800: '#3396df',
  900: '#1989d9',
};

const DSOrange: SingleColor = {
  50: '#fff8f2',
  100: '#f9e6e6',
  200: '#f3cccc',
  300: '#edb3b3',
  400: '#f79999',
  500: '#f18080',
  600: '#eb6666',
  700: '#e54d4d',
  800: '#df3333',
  900: '#d91919',
};

const colors: ThemeColors = {
  black: BLACK,
  white: WHITE,
  DSBlue,
  DSOrange,
};

export default colors;
