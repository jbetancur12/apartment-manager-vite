import React from "react";
import { Route, Routes } from "react-router-dom";

import MainCards from "../MainCards/MainCards";
import Menu from "../Menu/Menu";
import Tenants from "../Tenants/Tenants";
import "./Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <Menu />
      <section className="Main-cards">
        <Routes>
          <Route path="/" element={<MainCards />} />
          <Route path="about" element={<Tenants />} />
        </Routes>
      </section>
    </main>
  );
};

export default Main;
