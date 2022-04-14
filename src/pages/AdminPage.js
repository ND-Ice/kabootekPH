import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import { Sidebar } from "../components/sidebar";
import {
  HomeEditor,
  ServicesEditor,
  AboutEditor,
  ContactEditor,
  FooterEditor,
  ThemeEditor,
} from "../pages";

export default function AdminPage() {
  return (
    <Page>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeEditor />} />
        <Route path="/services" element={<ServicesEditor />} />
        <Route path="/about" element={<AboutEditor />} />
        <Route path="/contact" element={<ContactEditor />} />
        <Route path="/footer" element={<FooterEditor />} />
        <Route path="/theme" element={<ThemeEditor />} />
      </Routes>
    </Page>
  );
}

const Page = styled.section`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;
