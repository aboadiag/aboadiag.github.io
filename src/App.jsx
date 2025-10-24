import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Projects } from "./screens/Projects";
import { Research } from "./screens/Research";
import { ArtPage } from "./screens/ArtPage";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/artpage" element={<ArtPage />} />
      </Routes>
    </HashRouter>
  );
};
