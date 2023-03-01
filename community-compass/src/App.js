import React, { useState } from "react";
import './App.css';
import Navbar from './Navbar';
import Landing from './Landing.js';
import Membership from './Membership';
import ContactUs from './ContactUs';
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

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
    <div className="directory">
      <div className="header">
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
