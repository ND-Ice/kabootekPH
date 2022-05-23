import React, { useState, createContext } from "react";

export const SocialContext = createContext();

export default function SocialProvider({ children }) {
  const [socialLinks, setSocialLinks] = useState([]);

  return (
    <SocialContext.Provider value={{ socialLinks, setSocialLinks }}>
      {children}
    </SocialContext.Provider>
  );
}
