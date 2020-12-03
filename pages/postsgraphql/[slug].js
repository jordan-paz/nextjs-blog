import _ from 'lodash';
import BlockContent from '@sanity/block-content-to-react';
import { getAllPostSlugs, getPost } from 'lib/posts.js';
import client from 'sanity-client';
import Layout from 'components/layout';
import Date from 'components/date';
import { HeadingLg, Subtext } from 'styles/components';

import { initializeApollo, addApolloState } from '../../lib/apolloClient';
import { gql } from '@apollo/client';

export default function Post({ postData }) {
  console.log(postData);
  const { title, publishedAt, body } = postData;

  return (
    <Layout>
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
  const apolloClient = initializeApollo();
  const query = gql`
    query {
      allPost {
        slug {
          current
        }
      }
    }
  `;

  const { data } = await apolloClient.query({ query });
  const slugs = _.map(data.allPost, `slug`);
  const paths = _.map(slugs, ({ current }) => ({
    params: { slug: current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  const query = gql`
    query($slug: String!) {
      postData: allPost(where: { slug: { current: { eq: $slug } } }) {
        title
        bodyRaw
        publishedAt
        slug {
          current
        }
      }
    }
  `;
  const { data } = await apolloClient.query({
    query,
    variables: { slug: params.slug },
  });

  return {
    props: {
      postData: data.postData[0],
    },
  };

  // return addApolloState(apolloClient, {
  //   props: {},
  //   revalidate: 1,
  // });
}

// export async function getStaticProps({ params }) {
//   const postData = await getPost(params.slug);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
