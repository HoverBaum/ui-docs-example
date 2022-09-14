import { Box, useBoolean } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import theme from 'prism-react-renderer/themes/nightOwl';
import React, { useEffect } from 'react';
import { CodeContainer } from './CodeContainer';
import { CopyButton } from './CopyButton';
import { Highlight } from './Highlight';

const LiveBlock = dynamic(() => import('./LiveBlock'));

function CodeBlock(props: any) {
  const [isMounted, { on }] = useBoolean();
  useEffect(
    /**
     * Lazily-load <ReactLiveBlock /> to save bundle size.
     */
    on,
    [on],
  );
  const {
    className,
    live = true,
    manual,
    children,
    viewlines,
    ln,
    mountStylesheet = false,
  } = props.children.props;

  const _live = live === 'true' || live === true;

  const language = className?.replace(/language-/, '');
  const rawCode = children.trim();

  const reactLiveBlockProps = {
    rawCode,
    language,
    theme,
    noInline: manual,
    mountStylesheet,
  };

  if (isMounted && language === 'jsx' && _live === true) {
    return <LiveBlock {...reactLiveBlockProps} />;
  }

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer px="0" overflow="hidden">
        <Highlight
          codeString={rawCode}
          language={language}
          theme={theme}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top="4" code={rawCode} />
    </Box>
  );
}

export default CodeBlock;
