import { Link } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <header>
      {/* Header Nav  */}
      <div className="fixed top-9 right-0 left-0 w-[90%] h-24 rounded-3xl bg-black/50 mx-auto backdrop-blur-md py-5 px-10">
        <div className="w-full flex justify-between items-center font-Dana-Regular">
          {/* Logo & Menu */}
          <div className="flex items-center gap-x-9 h-14 ">
            {/* logo */}
            <img src="./img/app-logo.png" alt="" />
            {/* Menu */}
            <ul className="text-gray-300 flex gap-x-9 *:hover:text-orange-200 transition-colors h-full *:leading-14 ">
              <li>
                <Link to="#">صفحه اصلی</Link>
              </li>
              <li className="relative group">
                <Link to="#">فروشگاه</Link>
                <div className="group-hover:visible invisible  absolute w-52 h-68 rounded-2xl bg-white border-t-[3px]  border-orange-300 font-Dana-Regular px-6 py-6 text-base  *:inline-flex space-y-4  text-zinc-700 *:hover:text-orange-300 transition-all delay-100">
                  <Link to="#">قهوه ویژه</Link>
                  <Link to="#">ویژه در سطح جهانی</Link>
                  <Link to="#">قهوه درجه یک</Link>
                  <Link to="#">ترکیبات تجاری</Link>
                  <Link to="#">کپسول قهوه</Link>
                  <Link to="#">قهوه زینو برزیلی</Link>
                </div>
              </li>
              <li>
                <Link to="#">دیکشنری</Link>
              </li>
              <li>
                <Link to="#">بلاگ</Link>
              </li>
              <li>
                <Link to="#">درباره ما</Link>
              </li>
              <li>
                <Link to="#">تماس با ما</Link>
              </li>
            </ul>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-x-10 text-orange-200">
            {/* Buttons */}
            <div className="flex items-center gap-x-6 ">
              {/* Shopping Button */}
              <div className="relative h-14 flex justify-center items-center group ">
                <svg className="size-8 cursor-pointer">
                  <use href="./sprite.svg#shopping-cart" />
                </svg>
                {/* Shopping Cart */}
                <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 transition-all delay-100 absolute top-full left-0 w-100 min-h-77.25 rounded-2xl bg-white border-t-[3px]  border-orange-300 p-5">
                    {/* header */}
                    <div className="flex justify-between items-center font-Dana-Medium text-xs">
                        <span className="text-gray-300">1 مورد</span>
                        <Link to="#" className="flex items-center text-orange-300">
                        <span>مشاهده سبد خرید</span>
                        <svg className="size-5">
                            <use href="./sprite.svg#chevron-left"/>
                        </svg>
                        </Link>

                    </div>
                    {/* body */}
                    <div className="flex mt-5 gap-x-2.5 pb-6 border-b border-gray-300 ">
                        <img className="size-30" src="./img/products/p1.png" alt="" />
                        <div className="flex flex-col justify-between">
                            <h4 className="font-Dana-Medium text-base text-zinc-700 line-clamp-2">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                            <div className="inline-flex flex-col">
                                <span className="text-teal-600 text-xs font-Dana-Medium">14.500 تومان تخفیف</span>
                                <span className="text-zinc-700 text-xl font-Dana-DemiBold">175,000 تومان</span>
                            </div>

                        </div>

                    </div>
                    {/* footer */}
                    <div className="flex justify-between items-center pt-5">
                        <div className="flex flex-col justify-between">
                            <span className="text-xs font-Dana-Medium text-gray-300">مبلغ قابل پرداخت</span>
                            <span className="text-xl font-Dana-DemiBold text-zinc-700 leading-full">350,000 تومان</span>
                        </div>
                        <button className="w-36 h-14 text-xl font-Dana-Regular text-white flex justify-center items-center bg-teal-600 rounded-xl">ثبت سفارش</button>


                    </div>
                </div>
              </div>
              {/* dark/light Button */}
              <div>
                <svg className="size-8 dark:hidden cursor-pointer">
                  <use href="./sprite.svg#moon" />
                </svg>
                <svg className="size-8 hidden dark:block cursor-pointer">
                  <use href="./sprite.svg#sun" />
                </svg>
              </div>
            </div>
            {/*Divider*/}
            <div className="h-14 w-px bg-white/10"></div>
            {/* Login button */}
            <Link
              to="#"
              className="flex items-center gap-x-2.5 hover:rounded-[100px] hover:bg-orange-200/10 py-2.5 px-6"
            >
              <svg className="size-8">
                <use href="./sprite.svg#login" />
              </svg>
              <span>ورود | ثبت‌نام</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
