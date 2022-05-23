import React, { useState, createContext } from "react";

export const EmailContext = createContext();

export default function EmailProvider({ children }) {
  const [emailData, setEmailData] = useState([]);

  return (
    <EmailContext.Provider value={{ emailData, setEmailData }}>
      {children}
    </EmailContext.Provider>
  );
}
