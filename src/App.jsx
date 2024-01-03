import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ExercisePage from "./pages/ExercisePage";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exercise-page" element={<ExercisePage />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}