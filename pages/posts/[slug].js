import Head from 'next/head';
import _ from 'lodash';
import BlockContent from '@sanity/block-content-to-react';
import { getAllPostSlugs, getPost } from 'lib/posts.js';
import client from 'sanity-client';
import Layout from 'components/layout';
import Date from 'components/date';
import { HeadingLg, Subtext } from 'styles/components';

export default function Post({ postData }) {
  const { title, publishedAt, body } = postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <HeadingLg>{title}</HeadingLg>
        <div>
          <Subtext>
            <Date dateString={publishedAt} />
          </Subtext>
        </div>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  const paths = _.map(slugs, (slug) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPost(params.slug);
  return {
    props: {
      postData,
    },
  };
}
