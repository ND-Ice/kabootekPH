import React, { useState, createContext } from "react";

export const AddressContext = createContext();

export default function AddressProvider({ children }) {
  const [addressData, setAddressData] = useState([]);

  return (
    <AddressContext.Provider value={{ addressData, setAddressData }}>
      {children}
    </AddressContext.Provider>
  );
}
