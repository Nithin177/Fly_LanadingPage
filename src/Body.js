import React from "react";

function Body() {
  return (
    <div className="main">
      <div className="left">
        <h1>Fly with us</h1>
        <p>
          Embark on a journey of a lifetime! ✈️ Book your airline tickets with
          us today and let your dreams take flight.
        </p>
        <br />
        <br />
        <button className="btn">Contact Us</button>
      </div>
      <div className="right"></div>
      <img
        src="https://t3.ftcdn.net/jpg/02/71/22/40/360_F_271224016_b1cJFCWPM4VKahtz0DfZ7CYYkiaetQTL.jpg"
        alt=""
        height={350}
        width={550}
      />
    </div>
  );
}

export default Body;
