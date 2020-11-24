import { createContext } from 'react';
import { light } from 'styles/theme';

const ThemeContext = createContext({
  theme: light,
  toggleTheme: () => {},
});
export default ThemeContext;
