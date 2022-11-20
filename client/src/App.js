import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
// import Chat from "./components/Chat/ChatMessage";
import Barcadians from './Pages/Barcadians';
import Footer from './components/Footer/Footer';
import Game from './Pages/Game';
import Flappybird from './Pages/Flappybird';
import './index.css';
import Signup from './components/Access/Signup';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <Signup />
        <Home />
        {/* <Chat /> */}
        <Game />
        <Flappybird />
        <Barcadians />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
