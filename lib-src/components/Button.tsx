import * as React from 'react';
import {
  ButtonProps as ChakraButtonProps,
  ComponentStyleConfig,
} from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/button';
import { DSColors } from '../theme/types';
import colors from '../theme/colors';

type ButtonProps = Pick<ChakraButtonProps, 'id' | 'isDisabled' | 'onClick'> & {
  /**
   * One of the DS colors.
   */
  color?: DSColors;
  /**
   * Button variants.
   */
  variant?: 'solid' | 'outline';
};

export interface ButtonStylesProps extends ButtonProps {
  colorScheme: DSColors;
}

export const ButtonStyles: ComponentStyleConfig = {
  defaultProps: {
    borderRadius: 'md',
    colorScheme: 'DSBlue',
  },
  variants: {
    solid: ({ colorScheme }) => {
      return {
        bg: colors[colorScheme as DSColors][600],
        borderColor: colors[colorScheme as DSColors][600],
        color: colors.white,
        _active: {
          bg: colors[colorScheme as DSColors][800],
          borderColor: colors[colorScheme as DSColors][800],
          color: colors.white,
        },
        _hover: {
          bg: colors[colorScheme as DSColors][700],
          borderColor: colors[colorScheme as DSColors][700],
          color: colors.white,
          _disabled: {
            bg: colors[colorScheme as DSColors][600],
            borderColor: colors[colorScheme as DSColors][600],
          },
        },
        _disabled: {
          opacity: 0.5,
        },
      };
    },
    outline: ({ colorScheme }) => {
      return {
        _active: {
          bg: colors[colorScheme as DSColors][200],
          borderColor: colors[colorScheme as DSColors][200],
          color: colors[colorScheme as DSColors][800],
        },
        _hover: {
          bg: colors[colorScheme as DSColors][100],
          borderColor: colors[colorScheme as DSColors][100],
          color: colors[colorScheme as DSColors][700],
          _disabled: {
            borderColor: colors[colorScheme as DSColors][600],
            color: colors[colorScheme as DSColors][600],
          },
        },
        _disabled: {
          opacity: 0.5,
        },
      };
    },
  },
};

/**
 * Taxdoo Button.
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(
  ({ id, color, variant, isDisabled, children, onClick }, ref): JSX.Element => (
    <ChakraButton
      id={id}
      colorScheme={color}
      variant={variant}
      isDisabled={isDisabled}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </ChakraButton>
  ),
);
