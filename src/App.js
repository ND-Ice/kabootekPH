import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";

import { AdminPage, LandingPage, LoginPage } from "./pages";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<AdminPage />} />
      </Routes>
    </ThemeProvider>
  );
}
