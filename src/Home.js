import React from "react";
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="app">
        <img src={card1} alt="card"  className="img" />
        <h1 className="hii">
          Speed, security and safety with debit Mastercard® Using a debit
          Mastercard is a convenient way to manage your finances because funds
          are deducted directly from your checking account. Having an electronic
          record of every transaction can be a real time-saver and makes keeping
          track of what you spend a snap.
        </h1>
      </div>
      <div className="app">
        <img src={card2} alt="card1" className="img" />
        <h1 className="hii">
          VISA cards are international payment cards. You can use your VISA card
          for online shopping and make transactions around the world where the
          card is accepted.
        </h1>
      </div>
      <div className="app">
        <img src={card3} alt="card2" className="img" />
        <h1 className="hii">
          The Premier Mastercard gives you access to a world of travel benefits
          and privileges – including worldwide assistance, Priority Pass airport
          lounge access, and rewards when you spend. And all for no annual fee.
        </h1>
      </div>
    </div>
  );
}

export default Home;
