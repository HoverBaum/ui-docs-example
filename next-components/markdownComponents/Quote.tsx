import { Alert, Flex } from '@chakra-ui/react';
import { ComponentType } from 'react';

export const Quote: ComponentType = ({ children }) => {
  return (
    <Flex justifyContent="center">
      <Alert marginTop={4} marginBottom={4} width="95%" status="info">
        💡 {children}
      </Alert>
    </Flex>
  );
};
