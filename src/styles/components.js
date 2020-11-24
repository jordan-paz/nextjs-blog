import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const HeadingXL = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

export const HeadingLg = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

export const HeadingMd = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

export const HeadingSm = styled.h3`
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: normal;
`;

export const Anchor = styled.a`
  font-weight: bold;
  background-image: linear-gradient(
    0deg,
    rgba(90, 239, 78, 0.4) 0,
    rgba(90, 239, 78, 0.4) 30%,
    transparent 40%,
    transparent
  );
  :hover {
    cursor: pointer;
    text-decoration: none;
    background: rgba(90, 239, 78, 0.8);
  }
  ${typography}
`;

export const Subtext = styled.small`
  color: #999;
`;

// Layout
export const Section = styled.section`
  ${space}
`;

export const ListItem = styled.li`
  margin-bottom: 1.25rem;
`;
