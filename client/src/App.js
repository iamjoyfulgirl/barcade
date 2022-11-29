import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
// commented out while working on chat
import Chat from "./Pages/Chat";


//div issue occurring from here.
import Barcadians from "./Pages/Barcadians";
import Footer from "./components/Footer/Footer";
import Lobby from "./Pages/Lobby";
import Flappybird from "./Pages/Flappybird";
import "./index.css";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Arcade from "./Pages/Arcade";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  console.log("token from App:", token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token
        ? `Bearer ${token}`
        : `Bearer ${localStorage.getItem("id_token")}`,
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
    <div>
      <ApolloProvider client={client}>
        <Navbar />
        <Home />
        <br/>
        <Chat />
        <br/>
        <Lobby />
        <Arcade />
        <Barcadians />
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
