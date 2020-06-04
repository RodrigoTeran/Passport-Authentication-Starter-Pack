import React from "react";
import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";

const Home = () => {
  return (
    <div className="page" style={{
      textAlign: "center"
    }}>
      <p className="page-title">
        Simple OAuth with Node.js
      </p>
      <p style={{
        fontSize: 20
      }}>
        Passport.js contains support for over 
        <span style={{
          color: "var(--primary-red)"
        }}> 500+ </span>
        Get started today with just a username and password for apps like Facebook, Instagram, and Google.
      </p>
      <Terminal
        userData={
          "passport.authenticate('facebook')"
        }
        selected="All"></Terminal>
        <p style={{
          fontSize: 20
        }}>
          Popular Strategies
        </p>
        <CardList></CardList>
        <div style={{
          marginBottom: 20
        }}></div>
    </div>
  );
};
export default Home;