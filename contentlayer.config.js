import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const commonComputedFields = {
  title: {
    type: 'string',
    resolve: (page) => {
      // If any document already has a title, leave it in tact.
      if (page.title) return page.title;
      // Take the first h1 in md as title.
      return page.body.raw.split('\n').reduce((title, line) => {
        if (!title && /^# /.test(line)) return line.replace(/^# /, '').trim();
        return title;
      }, '');
    },
  },
};

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
  },
  computedFields: {
    ...commonComputedFields,
    slug: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath.replace(/^pages/, '')}`,
    },
  },
}));

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `lib-src/**/*.mdx`,
  contentType: 'mdx',
  fields: {},
  computedFields: {
    ...commonComputedFields,
    slug: {
      type: 'string',
      resolve: (doc) =>
        `/docs/${doc._raw.flattenedPath.replace('lib-src/', '')}`,
    },
    docsSlug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath.replace('lib-src/', '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: '.',
  contentDirInclude: ['lib-src', 'pages'],
  documentTypes: [Doc, Page],
});
