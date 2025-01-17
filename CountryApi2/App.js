import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./app.css";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
      ? JSON.parse(localStorage.getItem("isDarkMode"))
      : false
  );
  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </>
  );
};

export default App;
