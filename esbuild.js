const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['lib-src/index.ts'],
    outdir: 'lib',
    bundle: true,
    sourcemap: true,
    // Minification broke the usage of the package in
    // webpack using projects.
    minifySyntax: true,
    minifyWhitespace: true,
    platform: 'node',
    target: ['node12'],
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@chakra-ui/react',
      '@chakra-ui/icons',
      '@emotion/styled',
    ],
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
