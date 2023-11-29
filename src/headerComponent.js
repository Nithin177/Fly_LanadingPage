import React from "react";
import "./App.css";

function headerComponent() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <img
              src="https://media.istockphoto.com/id/1258141375/vector/plane-travel-icon-air-travel-around-the-world-flying-around-the-world-travel-agency-logo.jpg?s=612x612&w=0&k=20&c=QaZk5NDYsdfKd_7iUNAe3CImkcwlzyaibpMuYIteeWY="
              alt=""
            />
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Flights</a>
          </li>
          <li>
            <a href=""> Discounts</a>
          </li>
        </ul>
      </nav>
      <button className="button">Book Tickets</button>
    </div>
  );
}

export default headerComponent;
