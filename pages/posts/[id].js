import Head from 'next/head';

import Layout from '../../components/layout';
import Date from '../../components/date';
import { HeadingLg, Subtext } from '../../styles/components';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

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
            <Date dateString={postData.date} />
          </Subtext>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
