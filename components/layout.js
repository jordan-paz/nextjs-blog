import Head from 'next/head';
import styled from 'styled-components';
import { width, height } from 'styled-system';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { HeadingXL, HeadingMd, Anchor } from '../styles/components';
import Link from 'next/link';
import { system } from 'styled-system';

const name = 'Jordan Paz';
export const siteTitle = 'Jordan Paz';

export default function Layout({ children, home }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jordan Paz is a front end engineer and artist."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <CircleImage
              width="9rem"
              height="9rem"
              src="/images/profile.jpg"
              alt={name}
            />
            <HeadingXL>{name}</HeadingXL>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <CircleImage
                  width="7rem"
                  height="7rem"
                  src="/images/profile.jpg"
                  alt={name}
                />
              </a>
            </Link>
            <HeadingMd>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </HeadingMd>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 46rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const CircleImage = styled.img`
  border-radius: 9999px;
  ${width}
  ${height}
`;
