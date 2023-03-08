import React, { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
const stripe = loadStripe('sk_test_51Mgh8NGGno84ND8L78IKd03OnvFmjQyoMCj4p3v0MPWOyKMy99wM9CU4HMzZYhGCrISbTVxSGuc7Zb9hnArIl9cc00ct3Tb9VX');

function AccountCreationPage() {
    const [selectedPlan, setSelectedPlan] = useState("basic");

    function handlePlanSelection(event) {
        setSelectedPlan(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(selectedPlan);
    }

    const handleSubmitSub = async (event) => {
        if (!stripe) {

        }

    }

    return (
        <div className="membership" style={{ marginRight: 25 }}>
            <h1 style={{ color: "gray", fontSize: 45, marginBottom: 15, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                Membership Options:
            </h1>
            
                <div>

                    <label htmlFor="basic">Basic Account (Free)</label>
                    <ul>Basic accounts include:</ul>
                    <ul>- Local neighborhood Crime Grade Rating for the provided address.</ul>
                    <ul>- Local School District and ratings of listed schools.</ul>
                </div>
                <div>

                    <label htmlFor="premium">Premium Account ($10/month)</label>
                    <ul>Premium accounts include:</ul>
                    <ul>- All benefits from basic memberships.</ul>
                    <ul>- Ratings of local public amenities such as parks and trails.</ul>
                    <ul>- Ratings of local recreational areas such as campsites, pools, museums, etc.</ul>
                    <ul>- (optional) Access to the Megan's Law website for the provided address.</ul>
                </div>

            

            <form action="/create-checkout-session" method="POST">
                    <input type="hidden" name="priceId" value="price_1MiVhgGGno84ND8Lt0DEwfqQ" />
                    <button className="cool-button" type="submit">Upgrage To Premium</button>
            </form>
        </div>
    );
}

export default AccountCreationPage;