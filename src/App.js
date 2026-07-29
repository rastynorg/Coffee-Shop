import { useEffect, useState } from "react";
import BlogCart from "./components/BlogCart";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import ProductCart from "./components/ProductCart";
import Home from "./components/Home";
import ProductProvider from "./components/ProductProvider";
import "swiper/css";
import BlogProvider from "./components/BlogProvider";


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
      <BlogProvider>
        <ProductProvider>
        <Home/>
      </ProductProvider>
      </BlogProvider>
      
      
      

     
    </>
  );
};

export default App;
