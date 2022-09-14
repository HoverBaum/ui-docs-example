import React from 'react';
import * as TaxdooComponents from '../lib-src';

/**
 * These are all the compoenents available in ```js blocks in mdx files.
 * https://github.com/FormidableLabs/react-live#how-does-the-scope-work
 */
const LiveScope = {
  React,
  ...React,
  ...TaxdooComponents,
};

export default LiveScope;
