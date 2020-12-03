import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { light, dark } from 'styles/theme';
import ThemeContext from 'theme-context';
import GlobalStyles from 'styles/global-styles';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = () => setTheme(theme === light ? dark : light);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}
