import _ from 'lodash';
import BlockContent from '@sanity/block-content-to-react';
import client from 'sanity-client';
import Date from 'components/date';
import { HeadingLg, Subtext } from 'styles/components';

import { initializeApollo } from 'lib/apolloClient';
import { gql } from '@apollo/client';

export default function Post({ postData }) {
  const { title, publishedAt, bodyRaw } = postData;

  return (
    <>
      <article>
        <HeadingLg>{title}</HeadingLg>
        <div>
          <Subtext>
            <Date dateString={publishedAt} />
          </Subtext>
        </div>
        <BlockContent
          blocks={bodyRaw}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />
      </article>
    </>
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
}
