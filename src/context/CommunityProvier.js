import React, { useState, createContext } from "react";

export const CommunityContext = createContext();

export default function CommunityProvider({ children }) {
  const [communityLinks, setCommunityLinks] = useState([]);
  return (
    <CommunityContext.Provider value={{ communityLinks, setCommunityLinks }}>
      {children}
    </CommunityContext.Provider>
  );
}
