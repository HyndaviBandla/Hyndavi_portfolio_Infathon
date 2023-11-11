import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [inputValue, setInputValue] = useState("send");

  function sending() {
    setInputValue("sending...");
  }

  return (
    <div>
      <section id="contact">
        <a
          href="mailto:hyndavibandla123@gmail.com"
          style={{ fontSize: "150%", color: "blue" }}
        >
          <h2>CONTACT ME</h2>
        </a>
        <form action="" className="form">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your Email"
          />
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter your message here..."
          ></textarea>
          <input type="submit" value={inputValue} id="send" onClick={sending} />
        </form>
      </section>
    </div>
  );
};

export default Contact;
