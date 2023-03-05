import React, { useState } from "react";
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing.js';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import LoginModal from "./components/LoginModal";
import SignUpModal from "./SignUpModal";
import Header from './components/Header.js';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/*
function App() {
  const [landingVisible, setLandingVisible] = useState(true);
  const [contactUsVisible, setContactUsVisible] = useState(false);
  const [membershipVisible, setMembershipVisible] = useState(false);

  function toggleLanding() {
    setLandingVisible(true);
    setContactUsVisible(false);
    setMembershipVisible(false);
  }

  function toggleContactUs() {
    setLandingVisible(false);
    setContactUsVisible(true);
    setMembershipVisible(false);
  }

  function toggleMembership() {
    setLandingVisible(false);
    setContactUsVisible(false);
    setMembershipVisible(true);
  }

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  function handleLoginClick() {
    setShowLoginModal(true);
  }

  function closeLoginModal() {
    setShowLoginModal(false);
  }

  function handleSignUpClick() {
    setShowSignUpModal(true);
  }

  function closeSignUpModal() {
    setShowSignUpModal(false);
  }

  return (
    <div className="header">
      <div>
        <div className="buttons" style={{ position: "absolute", top: 0, right: 0 }}>
          <button className="cool-button" style={{ right: "75px" }} onClick={handleLoginClick}>Login</button>
          {showLoginModal && <LoginModal onClose={closeLoginModal} />}
          <button className="cool-button" onClick={handleSignUpClick}>Signup</button>
          {showSignUpModal && <SignUpModal onClose={closeSignUpModal} />}
        </div>
      </div>
      <Navbar toggleLanding={toggleLanding} toggleContactUs={toggleContactUs} toggleMembership={toggleMembership} />
      <div className={`Landing ${landingVisible ? "" : "hidden"}`}>
        <Landing />
      </div>
      <div className={`contactUs ${contactUsVisible ? "" : "hidden"}`}>
        <ContactUs />
      </div>
      <div className={`membership ${membershipVisible ? "" : "hidden"}`}>
        <Membership />
      </div>
    </div>
  );
}

export default App;
*/

function App() {

  const [landingVisible, setLandingVisible] = useState(true);
  const [contactUsVisible, setContactUsVisible] = useState(false);
  const [membershipVisible, setMembershipVisible] = useState(false);

  function toggleLanding() {
    setLandingVisible(true);
    setContactUsVisible(false);
    setMembershipVisible(false);
  }

  function toggleContactUs() {
    setLandingVisible(false);
    setContactUsVisible(true);
    setMembershipVisible(false);
  }

  function toggleMembership() {
    setLandingVisible(false);
    setContactUsVisible(false);
    setMembershipVisible(true);
  }

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  function handleLoginClick() {
    setShowLoginModal(true);
  }

  function closeLoginModal() {
    setShowLoginModal(false);
  }

  function handleSignUpClick() {
    setShowSignUpModal(true);
  }

  function closeSignUpModal() {
    setShowSignUpModal(false);
  }

  return (
    
    <ApolloProvider client={client}>
      <Router>
      <div className="header">

        <div className="">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Landing />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              <Route 
                path="/contact" 
                element={<ContactUs/>}
              />
              <Route 
                path="/membership" 
                element={<Membership/>}
              />
            </Routes>
          </div>
        </div>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;