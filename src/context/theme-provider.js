import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/use-localStorage";
export const ThemeContext = createContext({
  darkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const isDarkTheme = theme === "dark";
 
  const body = document.body;
  body.classList = theme;

  const toggleThemeHandler = () => {
   theme && setTheme( (prev)=> {
      return prev === 'light' ? 'dark': 'light';
    })
    isDarkTheme ? body.classList = "dark" : body.classList.remove("dark");
  };

  const contextProvider = {
    darkTheme: isDarkTheme,
    toggleTheme: toggleThemeHandler,
  };

  useEffect(()=> {
    setTheme(theme)
  },[theme])

  return (
    <ThemeContext.Provider value={contextProvider}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
