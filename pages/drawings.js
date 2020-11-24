import _ from 'lodash';
import Head from 'next/head';
import styled from 'styled-components';

import { HeadingLg } from 'styles/components';
import Layout from 'components/layout';

export default function Drawings() {
  return (
    <Layout>
      <Head>
        <title>Jordan Paz | Drawings</title>
      </Head>
      <HeadingLg>Drawings</HeadingLg>
      <Grid>
        {_.times(15, () => (
          <ImageContainer>
            <FakeImage />
          </ImageContainer>
        ))}
      </Grid>
    </Layout>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-gap: 1rem;
  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border: 1px solid;
  box-sizing: border-box;
  ::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const FakeImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
