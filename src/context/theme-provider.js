import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/use-localStorage";
export const ThemeContext = createContext({
  darkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const isDarkTheme = theme === "dark";
 
//Set body class from localStorage
  const body = document.body;
  theme && (body.classList = theme);

  //Toggle theme 
  const toggleThemeHandler = () => {
   theme && setTheme( (prev)=> {
      return prev === 'light' ? 'dark': 'light';
    })
    //toggle class
    isDarkTheme && body.classList.toggle('dark')
  };

  const contextProvider = {
    darkTheme: isDarkTheme,
    toggleTheme: toggleThemeHandler,
  };

  useEffect(()=> {
    setTheme(theme)
  },[setTheme, theme])

  return (
    <ThemeContext.Provider value={contextProvider}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
