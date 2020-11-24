import Head from 'next/head';
import _ from 'lodash';
import client from '../../sanity-client';
import BlockContent from '@sanity/block-content-to-react';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { HeadingLg, Subtext } from '../../styles/components';

import { getAllPostSlugs } from 'lib/posts.js';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <HeadingLg>{postData.title}</HeadingLg>
        <div>
          <Subtext>
            <Date dateString={postData.publishedAt} />
          </Subtext>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <BlockContent
          blocks={postData.body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const query = '*[_type == "post"]';
  const allPosts = await client.fetch(query);
  const paths = _.map(allPosts, ({ slug }) => ({
    params: { slug: slug.current },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = params;
  const postData = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      postData,
    },
  };
}
