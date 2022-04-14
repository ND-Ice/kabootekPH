import React from "react";

import {
  About,
  Contact,
  Footer,
  Homepage,
  Services,
} from "../components/sections";
import { Navbar } from "../components";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
