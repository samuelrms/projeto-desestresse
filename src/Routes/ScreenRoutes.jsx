import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../screens/Home";
import LittleStressed from "../screens/LittleStressed";
import Stressed from "../screens/Stressed";
import VeryStressed from "../screens/VeryStressed";

const ScreenRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto-desestresse" element={<Home />} />
        <Route path="/projeto-desestresse" element={<Home />} />
        <Route
          path="/projeto-desestresse/pouco-estressado"
          element={<LittleStressed />}
        />
        <Route path="/projeto-desestresse/estressado" element={<Stressed />} />
        <Route
          path="/projeto-desestresse/muito-estressado"
          element={<VeryStressed />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ScreenRoutes;
