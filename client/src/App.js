import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Barcadians from "./components/Pages/Barcadians";
import Game from "./components/Pages/Game";
import Footer from "./components/Footer/Footer";
import "./index.css";
import Signin from "./components/Access/Signin";

function App() {
  return (
    <div>
      <Navbar />
      <Signin />
      <Home />
      <Game />
      <Barcadians />
      <Footer />
    </div>
  );
}

export default App;
