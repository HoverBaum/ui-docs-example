import * as Chakra from '@chakra-ui/react';
import { Code, Divider, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import CodeBlock from './CodeBlock';
import * as DSComponents from '../lib-src';
import { Quote } from './markdownComponents/Quote';
import { Link } from './markdownComponents/Link';
import { PropsTable } from './PropsTable';
const { chakra } = Chakra;

export const MDXComponents = {
  ...Chakra,
  ...DSComponents,
  h1: (props: any) => <Heading size="xl" {...props} />,
  h2: (props: any) => (
    <>
      <Heading as="h2" size="lg" marginTop={8} marginBottom={0} {...props} />
      <Divider marginBottom={4} />
    </>
  ),
  h3: (props: any) => <Heading as="h3" size="md" marginTop={2} {...props} />,
  p: (props: any) => <Text marginTop={1} {...props} />,
  a: (props: any) => <Link {...props} />,
  pre: (props: any) => {
    if (typeof props.children === 'string')
      return <chakra.div my="2em" borderRadius="sm" {...props} />;
    return <CodeBlock {...props} />;
  },
  code: (props: any) => <Code {...props} />,
  blockquote: (props: any) => <Quote {...props} />,
  PropsTable,
};
