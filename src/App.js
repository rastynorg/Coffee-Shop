import { useEffect, useState } from "react";

import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";

import Home from "./pages/Home/Home";
import "swiper/css";






const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  

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
      <HeaderDesktop SetDark={setDarkMode} />
      <HeaderMobile SetDark={setDarkMode} />
      <Home/>

     
      
      
      
      
      
      
      

     
    </>
  );
};

export default App;
