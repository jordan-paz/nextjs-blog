import 'styles/global.css';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
