import Head from 'next/head';
import Link from 'next/link';
import {
  HeadingMd,
  HeadingSm,
  Section,
  ListItem,
  Subtext,
  Anchor,
} from 'styles/components';

import Date from 'components/date';
import { initializeApollo } from 'lib/apolloClient';
import { gql } from '@apollo/client';

export default function Home({ allPostData }) {
  console.log(allPostData);
  return (
    <>
      <Head>
        <title>Jordan Paz</title>
      </Head>
      <Section m="20px 0">
        <HeadingSm>
          Hello, World 👋 I'm <b>Jordan,</b> a front end engineer at{' '}
          <Anchor href="https://dutchie.com/home">dutchie</Anchor>, living in
          Bend, Oregon. I make code and{' '}
          <Link href="/drawings">
            <Anchor>drawings.</Anchor>
          </Link>
        </HeadingSm>
      </Section>
      <Section mt="60px">
        <HeadingMd>Blog</HeadingMd>
        <ul>
          {allPostData.map(({ slug, publishedAt, title }) => (
            <ListItem key={slug.current}>
              <Link href={`/posts/${slug.current}`}>
                <Anchor fontSize="1.5rem">{title}</Anchor>
              </Link>
              <br />
              <Subtext>
                <Date dateString={publishedAt} />
              </Subtext>
            </ListItem>
          ))}
        </ul>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const query = gql`
    query {
      allPostData: allPost {
        publishedAt
        title
        slug {
          current
        }
      }
    }
  `;
  const { data } = await apolloClient.query({ query });

  return {
    props: {
      allPostData: data.allPostData,
    },
  };
}
