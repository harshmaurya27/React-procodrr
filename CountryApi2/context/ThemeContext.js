import { createContext, useState } from "react";

export const ThemeContext = createContext("has");

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
      ? JSON.parse(localStorage.getItem("isDarkMode"))
      : false
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
