import React, { useState } from "react";

export const HomeContext = React.createContext();

export default function HomeProvider({ children }) {
  const [homeData, setHomeData] = useState({});

  return (
    <HomeContext.Provider value={{ homeData, setHomeData }}>
      {children}
    </HomeContext.Provider>
  );
}
