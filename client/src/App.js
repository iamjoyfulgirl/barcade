import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
// import Chat from "./components/Chat/ChatMessage";
import Barcadians from "./Pages/Barcadians";
import Footer from "./components/Footer/Footer";
import Game from "./Pages/Game";
// import Flappybird from "./components/Pages/Flappybird";
import "./index.css";
import Signup from "./components/Access/Signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
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
        {/* <Flappybird /> */}
        <Barcadians />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
