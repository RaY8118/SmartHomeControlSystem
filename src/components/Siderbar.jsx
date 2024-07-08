import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaWifi } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";

const Sidebar = () => {
  const navigateTo = useNavigate();
  const goToHome = () => {
    navigateTo("/");
  };
  const goToWifi = () => {
    navigateTo("/wifi");
  };
  const goToForm = () => {
    navigateTo("/form");
  };
  return (
    <>
      <nav style={{ display: "flex" }} className={"sidebar"}>
        <div className="links">
          <TiHome onClick={goToHome} />
          <FaWifi onClick={goToWifi} />
          <FaWpforms onClick={goToForm} />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
