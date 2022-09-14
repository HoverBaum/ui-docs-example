import { Button, Text, useClipboard, useToast } from '@chakra-ui/react';
import React from 'react';

export type IconShowcaseProps = {
  Icon: React.ComponentType;
  name: string;
};

export const IconShowcase: React.FC<IconShowcaseProps> = ({ Icon, name }) => {
  const { onCopy } = useClipboard(`<${name} />`);
  const toast = useToast();

  const onCopyIcon = () => {
    onCopy();

    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 2000,
      isClosable: false,
    });
  };

  return (
    <Button
      paddingTop={9}
      paddingBottom={9}
      onClick={onCopyIcon}
      color="black"
      textAlign="center"
      variant="outline"
      flexDir="column"
      justifyContent="center"
    >
      <Icon />
      <Text marginTop={2}>{name.replace(/Icon$/, '')}</Text>
    </Button>
  );
};
