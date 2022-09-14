import { Box, chakra } from '@chakra-ui/react';
import React, { ComponentType, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { CodeContainer } from './CodeContainer';
import { CopyButton } from './CopyButton';
import scope from './LiveScope';

const LiveCodePreview = chakra(LivePreview, {
  baseStyle: {
    fontFamily: 'body',
    mt: 5,
    p: 3,
    borderWidth: 1,
    borderRadius: '12px',
  },
});

const LiveBlock: ComponentType<{ rawCode: string }> = ({
  rawCode,
  ...rest
}) => {
  const [editorCode, setEditorCode] = useState(rawCode.trim());
  const onChange = (newCode: string) => setEditorCode(newCode.trim());
  const liveProviderProps = {
    code: editorCode,
    scope,
    ...rest,
  };
  return (
    <LiveProvider {...liveProviderProps}>
      <LiveCodePreview zIndex="1" />
      <Box position="relative" zIndex="0">
        <CodeContainer>
          <LiveEditor onChange={onChange} />
        </CodeContainer>

        <CopyButton code={editorCode} />
      </Box>
      <LiveError />
    </LiveProvider>
  );
};

export default LiveBlock;
