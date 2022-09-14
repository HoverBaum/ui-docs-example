import { withContentlayer } from 'next-contentlayer';

export default withContentlayer({
  // By default Next.js will redirect urls with trailing slashes to their counterpart without a trailing slash.
  // See also: [Trailing Slash Configuration](https://nextjs.org/docs/api-reference/next.config.js/trailing-slash)
  // Instructs next to generate index.html files instead of <page>.html in <page> directory.
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
