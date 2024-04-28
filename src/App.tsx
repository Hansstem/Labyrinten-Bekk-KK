import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import LandingPage from "./pages/LandingPage";
import DiscoverPage from "./pages/DiscoverPage";
import Footer from "./components/Footer/Footer";
import VervPage from "./pages/VervPage";

const contentType = new Headers();
contentType.append("Content-Type", "application/json");

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RecoilRoot>
          <div className="main-content pt-24">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/:id" element={<VervPage />} />
            </Routes>
          </div>
        </RecoilRoot>
        <Footer />
      </Router>
    </>
  );
}

export default App;
