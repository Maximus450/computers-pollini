import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Config";
import Form from "react-bootstrap/Form";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, {
        name,
        email,
        address,
      });

      console.log("Order submitted successfully!");
      setName("");
      setEmail("");
      setAddress("");
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="container">
      <h1>Checkout Page</h1>
      <form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Form.Control
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
