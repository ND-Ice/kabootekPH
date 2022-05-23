import React, { useState, createContext } from "react";

export const ServicesContext = createContext();

export default function ServicesProvider({ children }) {
  const [servicesData, setServicesData] = useState([]);
  return (
    <ServicesContext.Provider value={{ servicesData, setServicesData }}>
      {children}
    </ServicesContext.Provider>
  );
}
