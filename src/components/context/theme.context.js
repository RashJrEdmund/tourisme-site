import { createContext, useContext } from 'react';

const themeContext = createContext();

const ThemeProvider = themeContext.Provider;
const ThemeConsumer = themeContext.Consumer;

const themeObject = {
  dark: {
    color: 'white',
    backGround: 'black',
  },
  light: {
    color: 'black',
    backGround: 'white',
  },
};

const useTheme = () => {
  return useContext(ThemeConsumer);
};

export { ThemeProvider, ThemeConsumer, themeObject, useTheme };
