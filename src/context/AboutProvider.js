import React, { useState, createContext } from "react";

export const AboutContext = createContext();

export default function AboutProvider({ children }) {
  const [aboutData, setAboutData] = useState({});
  return (
    <AboutContext.Provider value={{ aboutData, setAboutData }}>
      {children}
    </AboutContext.Provider>
  );
}
