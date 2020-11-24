import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: all 0.10s linear;
    line-height: 1.6;
    font-size: 18px;
    padding: 0;
    margin: 0;
  }

  * {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  :visited { color: inherit; }
}


img {
  max-width: 100%;
  display: block;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
`;

export default GlobalStyles;
