import { useState } from "react";
import { NavLink,useLocation } from "react-router-dom";

const HeaderMobile = () => {
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [isOpen,setIsOpen] = useState(false);
  const location = useLocation();
  const isShopActive = location.pathname.startsWith("/Shop");
  return (
    <>
      <div className="md:hidden flex justify-between items-center h-16 px-4 fixed right-0 left-0 bg-white">
        {/* Nav Menu button */}
        <button onClick={() => setActiveSidebar("nav")}>
          <svg className="size-6">
            <use href="./sprite.svg#bars-3"></use>
          </svg>
        </button>
        {/* Logo */}
        <div>
          <svg className="text-orange-300 w-25 h-10">
            <use href="./sprite.svg#logo-type" />
          </svg>
        </div>
        {/* ShoppingCart button */}
        <button onClick={() => setActiveSidebar("cart")}>
          <svg className="size-6">
            <use href="./sprite.svg#shopping-cart"></use>
          </svg>
        </button>
      </div>
      {/* Nav Menu */}
      <div
        className={`w-64 min-h-screen fixed inset-y-0 right-0 px-4 pt-3 z-20 bg-white transition-all duration-300 ${activeSidebar === "nav" ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Logo */}
        <div className="flex justify-center items-center gap-x-3.5 border-b pb-5 mb-6 border-gray-100">
          <svg className="size-10">
            <use href="./sprite.svg#logo" />
          </svg>
          <svg className="w-25 h-10 text-orange-300">
            <use href="./sprite.svg#logo-type" />
          </svg>
        </div>
        {/* Menu */}
        <ul className="flex flex-col gap-y-4 font-Dana-Regular text-base text-zinc-700 ">
          <li>
            <NavLink to="/Home" className={({isActive})=>`item ${isActive ? "active-item":""}`}>
              <svg className="size-5">
                <use href="./sprite.svg#home" />
              </svg>
              <span>صفحه اصلی</span>
            </NavLink>
          </li>
          <li >
            <div className={`item flex items-center justify-between ${isShopActive ? "active-item" : ""}`}>
                <NavLink to="/Shop" className="flex gap-x-2">
                <svg className="size-5">
                <use href="./sprite.svg#shopping-bag" />
              </svg>
              <span>فروشگاه</span>
              
            </NavLink>
            <span className="cursor-pointer" onClick={()=>setIsOpen(prev=>!prev)}>
                <svg className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180":""}`}>
                    <use href="./sprite.svg#chevron-down"/>
                </svg>
            </span>
            </div>
            <div className={`max-h-0 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60":"" } flex flex-col gap-y-3 mt-1 px-9.5`}>
              <NavLink to="#" className={({isActive})=>``}>قهوه ویژه</NavLink>
              <NavLink to="#" className={({isActive})=>``}>ویژه در سطح جهانی</NavLink>
              <NavLink to="#" className={({isActive})=>``}>قهوه درجه یک</NavLink>
              <NavLink to="#" className={({isActive})=>``}>ترکیبات تجاری</NavLink>
              <NavLink to="#" className={({isActive})=>``}>کپسول قهوه</NavLink>
              <NavLink to="#" className={({isActive})=>``}>قهوه زینو برزیلی</NavLink>
            </div>
            
          </li>
          <li>
            <NavLink to="/Dictionary" className={({isActive})=>`item ${isActive ? "active-item":""}`}>
              <svg className="size-5">
                <use href="./sprite.svg#chat" />
              </svg>
              <span>دیکشنری</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/About-Us" className={({isActive})=>`item ${isActive ? "active-item":""}`}>
              <svg className="size-5">
                <use href="./sprite.svg#briefcase" />
              </svg>
              <span>درباره ما</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className={({isActive})=>`item ${isActive ? "active-item":""}`}>
              <svg className="size-5">
                <use href="./sprite.svg#document-text" />
              </svg>
              <span>بلاگ</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/call" className={({isActive})=>`item ${isActive ? "active-item":""}`}>
              <svg className="size-5">
                <use href="./sprite.svg#phone" />
              </svg>
              <span>تماس با ما</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Shopping */}
      <div
        className={`w-64 min-h-screen fixed inset-y-0 left-0 z-20 bg-white transition-all duration-300 ${activeSidebar === "cart" ? "translate-x-0" : "-translate-x-full"}`}
      ></div>
      {/* OverLay */}
      <div
        onClick={() => setActiveSidebar(null)}
        className={`overlay bg-black/40 w-full h-screen z-10 backdrop-blur-xs transition-all duration-300 ${activeSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      ></div>
    </>
  );
};

export default HeaderMobile;
