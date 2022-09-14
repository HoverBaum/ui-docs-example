import Head from 'next/head';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allDocs, Doc } from 'contentlayer/generated';
import { MDXComponents } from 'next-components/MDXComponents';
import { Container } from '@chakra-ui/react';

export async function getStaticPaths() {
  const paths: string[] = allDocs.map((doc) => doc.slug);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: { params: any }) {
  const slugs = Array.isArray(ctx.params.slug)
    ? ctx.params.slug
    : [ctx.params.slug];
  const slug = `/${slugs.join('/')}`;
  const doc = allDocs.find((doc) => doc.docsSlug === slug);
  if (!doc) return { props: {} };
  return {
    props: {
      doc,
    },
  };
}

const DocLayout = ({ doc }: { doc: Doc }) => {
  const MDXContent = useMDXComponent(doc.body.code);
  if (!doc) return <p>Error</p>;
  return (
    <>
      <Head>
        <title>{doc.title}</title>
      </Head>
      <Container maxWidth="container.md" paddingBottom={8}>
        <MDXContent components={MDXComponents} />
      </Container>
    </>
  );
};

export default DocLayout;
