import { ThemeProvider } from 'styled-components';
import { light, dark } from 'styles/theme';
import ThemeContext from 'theme-context';
import GlobalStyles from 'styles/global-styles';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = () => setTheme(theme === light ? dark : light);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
