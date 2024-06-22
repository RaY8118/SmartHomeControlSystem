// src/App.js
import React, { useState } from "react";
import writeRelayData from "./writeRelayData";

function App() {
  const [relay1, setRelay1] = useState(false);
  const [relay2, setRelay2] = useState(false);
  const [relay3, setRelay3] = useState(false);
  const [relay4, setRelay4] = useState(false);

  const handleToggle = (relay, setRelay, relayId) => {
    const newRelayState = !relay;
    setRelay(newRelayState);
    writeRelayData(relayId, newRelayState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Control Relay with Toggle Button</h1>
        <div>
          <label>
            Relay 1:
            <button onClick={() => handleToggle(relay1, setRelay1, "relay1")}>
              {relay1 ? "ON" : "OFF"}
            </button>
          </label>
        </div>
        <div>
          <label>
            Relay 2:
            <button onClick={() => handleToggle(relay2, setRelay2, "relay2")}>
              {relay2 ? "ON" : "OFF"}
            </button>
          </label>
        </div>
        <div>
          <label>
            Relay 3:
            <button onClick={() => handleToggle(relay3, setRelay3, "relay3")}>
              {relay3 ? "ON" : "OFF"}
            </button>
          </label>
        </div>
        <div>
          <label>
            Relay 4:
            <button onClick={() => handleToggle(relay4, setRelay4, "relay4")}>
              {relay4 ? "ON" : "OFF"}
            </button>
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
