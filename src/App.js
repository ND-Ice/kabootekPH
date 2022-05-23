import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { Toaster } from "react-hot-toast";

import { AdminPage, LandingPage, LoginPage } from "./pages";
import { CustomThemeContext } from "./context/CustomThemeProvider";
import GobalStyles from "./components/GobalStyles";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const { customTheme } = useContext(CustomThemeContext);
  const activatedTheme = customTheme?.filter((theme) => theme?.is_activated)[0];
  return (
    <ThemeProvider theme={activatedTheme || theme}>
      <GobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
}
