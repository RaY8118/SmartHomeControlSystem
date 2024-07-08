import React, { useState, useEffect } from "react";
import Forms from "./components/Forms";
import Buttons from "./components/Buttons";
import { db, ref, get } from "../src/firebase";
import "../src/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WifiForm from "./components/wifi";
import { wifiData } from "./writeRelayData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Siderbar";
const ParentComponent = () => {
  const [devices, setDevices] = useState({
    device1: "",
    device2: "",
    device3: "",
    device4: "",
  });

  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchDevices = async () => {
      const snapshot = await get(ref(db, "formValues"));
      if (snapshot.exists()) {
        setDevices(snapshot.val());
      }
    };
    fetchDevices();
  }, []);

  const handleFormSubmit = (formValues) => {
    setDevices(formValues);
  };

  return (
    <div>
      <ToastContainer position="top-center" />

      <Router>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Buttons devices={devices} toggleShow={toggleShow} />}
          />
          <Route path="/form" element={<Forms onSubmit={handleFormSubmit} />} />
          <Route path="/wifi" element={<WifiForm onSubmit={wifiData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default ParentComponent;
