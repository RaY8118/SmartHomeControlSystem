import React, { useState } from "react";
import { toast } from "react-toastify";

const WifiForm = ({ onSubmit }) => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ssid, password });
    toast.success("Wifi Credentials Updated Successfully!");
    setSsid("");
    setPassword("");
  };

  const handleSsidChange = (e) => {
    setSsid(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <h1>Wifi Credentials</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ssid">Enter your SSID:</label>
        <input type="text" id="ssid" value={ssid} onChange={handleSsidChange} />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WifiForm;
