import {
  Alert,
  Code,
  Grid,
  GridItem,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ComponentType } from 'react';
import { LayoutPropsEnumeration } from '../lib-src/theme/types';
import { allProps } from '../propsDoc/jsonProps/allProps';

export type PropsTableProps = {
  /**
   * The name of the component to display.
   */
  of: string;
};

/**
 * Display a table with all properties of a specific component.
 */
export const PropsTable: ComponentType<PropsTableProps> = ({ of }) => {
  const propsDoc = allProps.find((propsDoc) => propsDoc.displayName === of);

  // Display a hint if no propsDoc is found.
  if (!propsDoc)
    return (
      <>
        <Alert status="error">
          📚 No PropsDoc found for {of}. Did you follow the instructions in
          <Code>propsDoc/Readme.md</Code>?
        </Alert>
        <Text>Try: </Text>
        <Code>cd propsDoc && npm run build</Code>
      </>
    );

  // Visualize all props.
  return (
    <VStack divider={<StackDivider />} spacing={4} align="stretch">
      {Object.entries(propsDoc.props)
        .filter(
          ([propName]) =>
            propName !==
            LayoutPropsEnumeration[
              propName as keyof typeof LayoutPropsEnumeration
            ],
        )
        .map(([propName, prop]) => (
          <Grid key={propName} templateColumns="1fr 3fr" gap={2}>
            <GridItem colSpan={2}>
              <Code>{propName}</Code>
            </GridItem>
            {prop.description && (
              <>
                <GridItem>
                  <Text>Description</Text>
                </GridItem>
                <GridItem>
                  <Text>{prop.description}</Text>
                </GridItem>
              </>
            )}
            <GridItem>
              <Text>Type</Text>
            </GridItem>
            <GridItem>
              <Text color="taxdooBlue.800">
                {prop.type.name.replace('| undefined', '')}
              </Text>
            </GridItem>
            {prop.defaultValue && (
              <>
                <GridItem>
                  <Text>Default</Text>
                </GridItem>
                <GridItem>
                  <Text>{prop.defaultValue.value}</Text>
                </GridItem>
              </>
            )}
          </Grid>
        ))}
    </VStack>
  );
};
