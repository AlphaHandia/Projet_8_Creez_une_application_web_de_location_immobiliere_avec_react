import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import APropos from "./Pages/APropos/a-propos";
import Error from "./Pages/Error/error";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";
import Housing from "./Pages/Home/Housing/housing";
import "./Sass/main.scss";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/Housing/:logementId" element={<Housing />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
