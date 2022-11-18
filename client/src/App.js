import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Barcadians from "./components/Pages/Barcadians";
import Game from "./components/Pages/Game";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Game />
      <Barcadians />
      <Footer />
    </div>
  );
}

export default App;
