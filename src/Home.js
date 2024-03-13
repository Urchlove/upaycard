import React from "react";
import card1 from "./assets/images/card1.jpg";
import card2 from "./assets/images/card2.jpg";
import card3 from "./assets/images/card3.jpg";
import "./home.css";

function Home() {
  return (
    <main>
      <div className="card">
        <img src={card1} alt="card" />
        <p className="description">
          Speed, security and safety with debit Mastercard®
        </p>

        <p className="features">
          Features
        </p>

        <ul>
          <li>
            High Speed Payments.
          </li>

          <li>
            Card can be used anywhere in the world. 
          </li>

          <li>
            Geolocation feature
          </li>

          <li>
            Easy Analysis
          </li>
          
        </ul>
      </div>
      <div className="card">
        <img src={card2} alt="card1"/>
        <p className="description">
          VISA cards are international payment cards.
        </p>

        <p className="features">
          Features
        </p>

        <ul>
          <li>
            High Speed Payments.
          </li>

          <li>
            Card can be used anywhere in the world. 
          </li>

          <li>
            Geolocation feature
          </li>

          <li>
            Easy Analysis
          </li>
          
        </ul>
      </div>
      <div className="card">
        <img src={card3} alt="card2"/>
        <p className="description">
          The Premier Mastercard gives you access to a world of travel benefits
          and privileges.
        </p>
        <p className="features">
          Features
        </p>

        <ul>
          <li>
            High Speed Payments.
          </li>

          <li>
            Card can be used anywhere in the world. 
          </li>

          <li>
            Geolocation feature
          </li>

          <li>
            Easy Analysis
          </li>
          
        </ul>
      </div>

      <div className="card">
        <img src={card1} alt="card" />
        <p className="description">
          Speed, security and safety with debit Mastercard®
        </p>

        <p className="features">
          Features
        </p>

        <ul>
          <li>
            High Speed Payments.
          </li>

          <li>
            Card can be used anywhere in the world. 
          </li>

          <li>
            Geolocation feature
          </li>

          <li>
            Easy Analysis
          </li>
          
        </ul>
      </div>
      <div className="card">
        <img src={card2} alt="card1"/>
        <p className="description">
          VISA cards are international payment cards.
        </p>

        <p className="features">
          Features
        </p>

        <ul>
          <li>
            High Speed Payments.
          </li>

          <li>
            Card can be used anywhere in the world. 
          </li>

          <li>
            Geolocation feature
          </li>

          <li>
            Easy Analysis
          </li>
          
        </ul>
      </div>
      <div className="card">
        <img src={card3} alt="card2"/>
        <p className="description">
          The Premier Mastercard gives you access to a world of travel benefits
          and privileges.
        </p>
        <p className="features">
          Features
        </p>

        <ul>
          <li>
            High Speed Payments.
          </li>

          <li>
            Card can be used anywhere in the world. 
          </li>

          <li>
            Geolocation feature
          </li>

          <li>
            Easy Analysis
          </li>
          
        </ul>
      </div>
    </main>
  );
}

export default Home;
