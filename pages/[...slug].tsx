import Head from 'next/head';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPages, Page } from 'contentlayer/generated';
import { MDXComponents } from 'next-components/MDXComponents';
import { Container } from '@chakra-ui/react';

export async function getStaticPaths() {
  const paths: string[] = allPages.map((page) => page.slug);
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
  const page = allPages.find((page) => page.slug === slug);
  if (!page) return { props: {} };
  return {
    props: {
      page,
    },
  };
}

const DocLayout = ({ page }: { page: Page }) => {
  const MDXContent = useMDXComponent(page.body.code);
  if (!page) return <p>Error</p>;
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Container maxWidth="container.md" paddingBottom={8}>
        <MDXContent components={MDXComponents} />
      </Container>
    </>
  );
};

export default DocLayout;
