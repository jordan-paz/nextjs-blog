import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import {
  HeadingMd,
  HeadingSm,
  Section,
  ListItem,
  Subtext,
  Anchor,
} from '../styles/components';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section m="20px 0">
        <HeadingSm>
          Hello, World 👋 I'm <b>Jordan,</b> a front end engineer at{' '}
          <Anchor href="https://dutchie.com/home">dutchie</Anchor>, living in
          Bend, Oregon. I make code and{' '}
          <Link href="/drawings">
            <Anchor>drawings</Anchor>
          </Link>
        </HeadingSm>
      </Section>
      <Section mt="40px">
        <HeadingMd>Blog</HeadingMd>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem key={id}>
              <Link href={`/posts/${id}`}>
                <HeadingSm>
                  <Anchor>{title}</Anchor>
                </HeadingSm>
              </Link>
              <Subtext>
                <Date dateString={date} />
              </Subtext>
            </ListItem>
          ))}
        </ul>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
