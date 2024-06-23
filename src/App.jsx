import React, { useState, useEffect } from "react";
import Forms from "./components/Forms";
import Buttons from "./components/Buttons";
import { db, ref, get } from "../src/firebase";
import "../src/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ParentComponent = () => {
  const [devices, setDevices] = useState({
    device1: "",
    device2: "",
    device3: "",
    device4: ""
  });

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
      <Forms onSubmit={handleFormSubmit} />
      <Buttons devices={devices} />
    </div>
  );
};

export default ParentComponent;
