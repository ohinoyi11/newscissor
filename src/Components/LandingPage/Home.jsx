import React from "react";
import Hero from "./Hero";
import { Route, Routes } from "react-router-dom";
import Info from "./Info";
import Pricing from "./Pricing";
import Urlconv from "./Urlconv";
import FAQ from "./FAQs";
import Revolution from "./Revolution";
import Footer from "./Footer";
import CustomPricing from "./Custom-Pricing";

function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Pricing />
      <Routes>
        <Route path="/Custom-Pricing" element={<CustomPricing />}></Route>
      </Routes>
      <Urlconv />
      <FAQ />
      <Revolution />
      <Footer />
    </div>
  );
}

export default Home;
