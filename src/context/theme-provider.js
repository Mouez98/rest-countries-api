import { createContext, useState } from "react";

export const ThemeContext = createContext({
  darkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
     const [darkTheme, setDarkTheme] = useState(false);
     
     const toggleThemeHandler = () => {
     setDarkTheme((prev) => !prev);
     const body = document.body;
     darkTheme ? body.classList.remove("dark") : (body.classList = "dark");
    };

  const contextProvider = {
    darkTheme: darkTheme,
    toggleTheme: toggleThemeHandler
  };

  return (
    <ThemeContext.Provider value={contextProvider}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
