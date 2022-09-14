import { Button, ButtonProps, useClipboard } from '@chakra-ui/react';
import React from 'react';

interface CopyButtonProps extends ButtonProps {
  code: string;
}

export const CopyButton = ({ code, ...props }: CopyButtonProps) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Button
      bgColor="taxdooGreen.600"
      size="sm"
      position="absolute"
      textTransform="uppercase"
      fontSize="xs"
      height="24px"
      top="1.25em"
      zIndex="1"
      right="1.25em"
      {...props}
      onClick={onCopy}
    >
      {hasCopied ? 'Copied' : 'Copy'}
    </Button>
  );
};
