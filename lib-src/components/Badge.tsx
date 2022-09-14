import * as React from 'react';
import { Badge as ChakraBadge } from '@chakra-ui/react';

type BadgeProps = {
  /**
   * ColorsScheme and background color for the badge.
   */
  colorScheme: 'DSBlue' | 'DSOrange';
};

export const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({
  colorScheme = 'gray',
  children,
}) => <ChakraBadge colorScheme={colorScheme}>{children}</ChakraBadge>;
