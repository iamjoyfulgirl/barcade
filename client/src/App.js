import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
// import Chat from "./components/Chat/ChatMessage";
import Barcadians from './components/Pages/Barcadians';
import Footer from './components/Footer/Footer';
import Game from './components/Pages/Game';
// import Flappyird from './components/Pages/Flappybird';
import './index.css';
// import Signin from './components/Access/Signin';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Signin /> */}
      <Home />
      {/* <Chat /> */}
      <Game />
      {/* <Flappyird /> */}
      <Barcadians />
      <Footer />
    </div>
  );
}

export default App;
