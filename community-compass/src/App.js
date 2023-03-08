import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Landing from './Landing.js';
import Membership from './Membership';
import ContactUs from './ContactUs';
<<<<<<< HEAD:src/App.js
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


=======
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import ParticlesBg from './Particles';
import Login from './pages/Login.js';
>>>>>>> 7576bc65d65feb76ebd3261d0d6475ae3a629474:community-compass/src/App.js

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
    setShowSignUpModal(false);
  }

  function closeLoginModal() {
    setShowLoginModal(false);
  }

  function handleSignUpClick() {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  }

  function closeSignUpModal() {
    setShowSignUpModal(false);
  }

  return (
<<<<<<< HEAD:src/App.js
  <ApolloProvider client={client}>
    <div className="header">
      <div>
        <div className="buttons" style={{ position: "absolute", top: 0, right: 0 }}>
          <button className="cool-button" style={{ right: "75px" }} onClick={handleLoginClick}>Login</button>
          {showLoginModal && <LoginModal onClose={closeLoginModal} />}
          <button className="cool-button" onClick={handleSignUpClick}>Signup</button>
          {showSignUpModal && <SignUpModal onClose={closeSignUpModal} />}
        </div>
=======
    <>
      <div className="header" style={{ zIndex: 0, height: "100%", width: "350px", position: "absolute", opacity: 0.8 }}>
      </div>
      <h1 style={{ color: "black", marginBottom: 20, fontSize: 45, position: 'absolute', top: 25, left: 10 }}>
        Safe<span style={{ color: "#fff", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Zone</span>
      </h1>
      <div>
      <ParticlesBg color="#ff0000" num={200} type="random" bg={true} />
        <Navbar toggleLanding={toggleLanding} toggleContactUs={toggleContactUs} toggleMembership={toggleMembership} />
>>>>>>> 7576bc65d65feb76ebd3261d0d6475ae3a629474:community-compass/src/App.js
      </div>
      <div className={`Landing ${landingVisible ? "" : "hidden"}`}>
        <Landing />
      </div>
      <div className="buttons" style={{ position: "fixed", top: 0, right: 0 }}>
        <button style={{ color: "rgb(12, 123, 198)", backgroundColor: "white", fontWeight: 700 }} className="cool-button" onClick={handleLoginClick}>Login</button>
        <button style={{ backgroundColor: "rgb(12, 123, 198)", fontWeight: 500 }} className="cool-button" onClick={handleSignUpClick}>Signup</button>
        {showLoginModal && <LoginModal onClose={closeLoginModal} />}
        {showSignUpModal && <SignUpModal onClose={closeSignUpModal} />}
      </div>
      <div className={`contactUs ${contactUsVisible ? "" : "hidden"}`}>
        <ContactUs />
      </div>
      <div className={`membership ${membershipVisible ? "" : "hidden"}`}>
        <Membership />
      </div>
<<<<<<< HEAD:src/App.js
    </div>
  </ApolloProvider>
=======
    </>
>>>>>>> 7576bc65d65feb76ebd3261d0d6475ae3a629474:community-compass/src/App.js
  );
}

export default App;