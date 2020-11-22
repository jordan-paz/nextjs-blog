import _ from 'lodash';
import Head from 'next/head';
import styled from 'styled-components';

import Layout, { siteTitle } from '../components/layout';
import { MainText } from '../components/typography';

export default function Art() {
    return (
        <Layout>
            <Head>
                <title>Jordan Paz | Art</title>
            </Head>
            <h1>Drawings</h1>
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
    grid-template-columns: repeat(auto-fill, minmax(47%, 1fr));
    @media (min-width: 576px) {
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    }
    grid-gap: 0.5rem;
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
