import React, { useState, createContext } from "react";

export const CustomThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [customTheme, setCustomTheme] = useState([]);
  return (
    <CustomThemeContext.Provider value={{ customTheme, setCustomTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
}
