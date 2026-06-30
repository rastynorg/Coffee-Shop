import { Link, Links } from "react-router-dom";


const HeaderDesktop = () => {
    return ( <>
        {/* Header Nav  */}
    <div className="fixed top-9 right-0 left-0 w-[90%] h-24 rounded-3xl bg-black/50 mx-auto backdrop-blur-md py-5 px-10">
    <div className="w-full flex justify-between items-center font-Dana-Regular">
        {/* Logo & Menu */}
        <div className="flex items-center gap-x-9">
            {/* logo */}
            <img src="./img/app-logo.png" alt="" />
            {/* Menu */}
            <ul className="text-gray-300 flex gap-x-9 *:hover:text-orange-200 transition-colors">
                <li><Link to="#">صفحه اصلی</Link></li>
                <li><Link to="#">فروشگاه</Link></li>
                <li><Link to="#">دیکشنری</Link></li>
                <li><Link to="#">بلاگ</Link></li>
                <li><Link to="#">درباره ما</Link></li>
                <li><Link to="#">تماس با ما</Link></li>
                
            </ul>

        </div>
        {/* Buttons */}
        <div className="flex items-center gap-x-10 text-orange-200">
            {/* Buttons */}
            <div className="flex items center gap-x-6 ">
                  {/* Shopping Button */}
            <div>
                <svg className="size-8 cursor-pointer">
                <use href="./sprite.svg#shopping-cart"/>
            </svg>
            </div>
            {/* dark/light Button */}
            <div>
                <svg className="size-8 cursor-pointer">
                <use href="./sprite.svg#moon"/>
            </svg>
                <svg className="size-8 hidden cursor-pointer">
                <use href="./sprite.svg#sun"/>
            </svg>
            
            </div>
            </div>
            {/*Divider*/}
            <div className="h-14 w-px bg-white/10"></div>
            {/* Login button */}
             <Link to="#" className="flex items-center gap-x-2.5 hover:rounded-[100px] hover:bg-orange-200/10 py-2.5 px-6">
            <svg className="size-8">
                <use href="./sprite.svg#login"/>
            </svg>
            <span>ورود  |  ثبت‌نام</span>
            </Link>
           
      

        </div>
    </div>
    </div>
    </> );
}
 
export default HeaderDesktop;