import {  useEffect, useState } from "react";
import BlogCart from "./components/BlogCart";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import ProductCart from "./components/ProductCart";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
  console.log("darkMode:", darkMode);
  console.log(document.documentElement.className);
}, [darkMode]);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <header id="main" className="min-h-screen mw-480 ]">
        <HeaderDesktop SetDark={setDarkMode} />
        <HeaderMobile SetDark={setDarkMode}/>
      </header>
    </>
  );
};

export default App;
