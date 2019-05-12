import React from "react";

const HomePageCard = () => {
  return (
    <div className="home-card">
      <h1>Welcome to Butterd</h1>
      <p>the social network for film lovers</p>
      <div className="home-card-button">
        <button>Get Started</button>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-title">
        <h3>{feature.name}</h3>
      </div>
      <div className="feature-card-description">
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

export { HomePageCard, FeatureCard };
