import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import colors from './colors';
import components from './components';

export const theme: Object = extendTheme(
  withDefaultColorScheme({ colorScheme: 'taxdooBlue' }),
  {
    colors,
    components,
  },
);
