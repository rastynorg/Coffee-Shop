import { useState } from "react";

const HeaderMobile = () => {
    const[activeSidebar,setActiveSidebar]=useState(null)
    return ( <>

    <div className="md:hidden flex justify-between items-center h-16 px-4 fixed right-0 left-0 bg-white">
        <button onClick={()=>setActiveSidebar("nav")}>
            <svg className="size-6">
            <use href="./sprite.svg#bars-3"></use>
        </svg></button>
        <div>
            <svg className="text-orange-300 w-25 h-10">
                <use href="./sprite.svg#logo-type"/>
            </svg>
        </div>
        <button onClick={()=>setActiveSidebar('cart')}>
            <svg className="size-6">
            <use href="./sprite.svg#shopping-cart"></use>
        </svg>
        </button>
    </div>
    <div className={`w-64 min-h-screen fixed inset-y-0 right-0 z-20 bg-white transition-all duration-300 ${activeSidebar==="nav"?"translate-x-0":"translate-x-full"}`}>
        

    </div>
    <div className={`w-64 min-h-screen fixed inset-y-0 left-0 z-20 bg-white transition-all duration-300 ${activeSidebar==="cart" ?"translate-x-0":"-translate-x-full"}`}>
        

    </div>
    <div onClick={()=>setActiveSidebar(null)} className={`overlay bg-black/40 w-full h-screen z-10 backdrop-blur-xs transition-all duration-300 ${activeSidebar ?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}></div>
    </> );
}
 
export default HeaderMobile;