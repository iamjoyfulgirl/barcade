import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Chat from "./components/Chat/ChatMessage"
import Barcadians from "./components/Pages/Barcadians";
import Game from "./components/Pages/Game";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Chat /> 
      <Game />
      <Barcadians />
    </div>
  );
}

export default App;
