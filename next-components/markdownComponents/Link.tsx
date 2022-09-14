import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { ComponentType } from 'react';

export const Link: ComponentType<LinkProps> = ({ children, ...props }) => {
  // For Figma links we instead display an embedded preview.
  const { href } = props;
  const isFigma = href && href.includes('figma.com');
  if (isFigma)
    return (
      <iframe
        title="Figma frame"
        width="100%"
        height="450"
        src={`https://www.figma.com/embed?embed_host=taxdooui&url=${encodeURI(
          href,
        )}`}
      ></iframe>
    );

  return <ChakraLink {...props}>{children}</ChakraLink>;
};
