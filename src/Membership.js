import React, { useState } from "react";


function AccountCreationPage() {
    const [selectedPlan, setSelectedPlan] = useState("basic");

    function handlePlanSelection(event) {
        setSelectedPlan(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(selectedPlan);
    }

    return (
        <div className="membership" style={{ marginLeft: 360, marginRight: 25 }}>
            <h1 style={{ color: "gray", fontSize: 45, marginBottom: 15, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                Membership Options:
            </h1>
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="radio" id="basic" name="plan" value="basic" checked={selectedPlan === "basic"} onChange={handlePlanSelection} />
                    <label htmlFor="basic">Basic Account (Free)</label>
                    <ul>Basic accounts include:</ul>
                    <ul>- Local neighborhood Crime Grade Rating for the provided address.</ul>
                    <ul>- Local School District and ratings of listed schools.</ul>
                </div>
                <div>
                    <input type="radio" id="premium" name="plan" value="premium" checked={selectedPlan === "premium"} onChange={handlePlanSelection} />
                    <label htmlFor="premium">Premium Account ($10/month)</label>
                    <ul>Premium accounts include:</ul>
                    <ul>- All benefits from basic memberships.</ul>
                    <ul>- Ratings of local public amenities such as parks and trails.</ul>
                    <ul>- Ratings of local recreational areas such as campsites, pools, museums, etc.</ul>
                    <ul>- (optional) Access to the Megan's Law website for the provided address.</ul>
                </div>
                <button className="cool-button" type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default AccountCreationPage;