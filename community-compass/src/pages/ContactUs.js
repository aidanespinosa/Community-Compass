import React from "react";
import ContactForm from "../components/ContactForm";

const contactUs = () => {

    return (
        
        <div className="contactUs mb-4 py-3 flex-row align-center" style={{ marginRight: 25 }}>
            <h1 style={{ color: "gray", fontSize: 45, marginBottom: 15, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                Contact Us:
            </h1>
            <div className="form mb-4 py-3 flex-column align-center">
                <ContactForm />
            </div>
        </div>

    );
}

export default contactUs;