import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [isDark, setIsDark] = useContext(ThemeContext);
  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // } dark class dynamically denge
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">Where in the world?</h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;
