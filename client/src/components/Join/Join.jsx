import React, { useEffect, useRef, useState } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
  const [email, setEmail] = useState(""); // Correctly handle state for email input
  const form = useRef();

  useEffect(() => {
    // Remove fetch() or implement it properly if needed
    // Example fetch:
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Log the email input value
    console.log("Email entered:", email);

    emailjs
      .sendForm(
        "service_615t20o",
        "template_099cokk",
        form.current,
        "9DLX4F4aAim9bBikE"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Correct state update
          />
          <button type="submit" className="btn-j">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
