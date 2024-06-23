import React, { useState } from 'react';
import { writeRelayData } from "../writeRelayData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Buttons = ({ devices }) => {
    const [relay1, setRelay1] = useState(false);
    const [relay2, setRelay2] = useState(false);
    const [relay3, setRelay3] = useState(false);
    const [relay4, setRelay4] = useState(false);

    const handleToggle = (relay, setRelay, relayId) => {
        const newRelayState = !relay;
        setRelay(newRelayState);
        writeRelayData(relayId, newRelayState);

        // Display toast message
        toast.success(`${devices[relayId] || "Relay"} switched ${newRelayState ? "ON" : "OFF"}`);
    };

    return (
        <div className="Buttons">
            <header className="App-header">
                <h1>Control Devices with Toggle Button</h1>
                <div>
                    <label>
                        {devices.device1 || "Relay 1"}:
                        <button onClick={() => handleToggle(relay1, setRelay1, "device1")}>
                            {relay1 ? "ON" : "OFF"}
                        </button>
                    </label>
                </div>
                <div>
                    <label>
                        {devices.device2 || "Relay 2"}:
                        <button onClick={() => handleToggle(relay2, setRelay2, "device2")}>
                            {relay2 ? "ON" : "OFF"}
                        </button>
                    </label>
                </div>
                <div>
                    <label>
                        {devices.device3 || "Relay 3"}:
                        <button onClick={() => handleToggle(relay3, setRelay3, "device3")}>
                            {relay3 ? "ON" : "OFF"}
                        </button>
                    </label>
                </div>
                <div>
                    <label>
                        {devices.device4 || "Relay 4"}:
                        <button onClick={() => handleToggle(relay4, setRelay4, "device4")}>
                            {relay4 ? "ON" : "OFF"}
                        </button>
                    </label>
                </div>
            </header>
        </div>
    );
};

export default Buttons;
