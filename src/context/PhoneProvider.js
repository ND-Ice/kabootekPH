import React, { useState, createContext } from "react";

export const PhoneContext = createContext();

export default function PhoneProvider({ children }) {
  const [phoneData, setPhoneData] = useState([]);
  return (
    <PhoneContext.Provider value={{ phoneData, setPhoneData }}>
      {children}
    </PhoneContext.Provider>
  );
}
