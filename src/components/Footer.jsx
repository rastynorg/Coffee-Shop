import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 px-4 py-8 md:px-23.5 md:pt-15.5">
        <div className="flex flex-col md:flex-row md:gap-x-28 gap-y-10">
            <div className=" flex flex-col gap-y-6 md:gap-y-4.5 text-gray-300 ">
            <div className="flex gap-x-5 ">
                <svg className="w-14.25 h-13.5">
                    <use href="./sprite.svg#logo"/>
                </svg>
                <svg className="w-34.5 h-13.5">
                    <use href="./sprite.svg#logo-type"/>
                </svg>
            </div>
            <p className="max-w-89.5 md:max-w-151.5 font-Dana-Regular text-lg leading-7 md:text-xl md:leading-12">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
        </div>
        <div className=" flex flex-col gap-y-6 md:gap-y-7">
            <h2 className="font-Dana-DemiBold text-2xl leading-7 text-white">دسترسی سریع</h2>
           <div className="flex gap-x-10 md:gap-x-16  font-Dana-Regular text-base md:text-lg w-full">
  <div className="space-y-5 ">
    <FooterLink to="/q">حریم خصوصی</FooterLink>
    <FooterLink to="/e">عودت کالا</FooterLink>
    <FooterLink to="/t">شرایط استفاده</FooterLink>
    <FooterLink to="/u">ثبت سفارش</FooterLink>
  </div>

  <div className="space-y-5">
    <FooterLink to="/w">پرسش های متداول</FooterLink>
    <FooterLink to="/r">فرصت های شغلی</FooterLink>
    <FooterLink to="/y">ضمانت نامه ها</FooterLink>
    <FooterLink to="/i">ارتباط با ما</FooterLink>
  </div>
</div>
        </div>
        <div className=" flex flex-col ">
            <h2 className="font-Dana-DemiBold text-2xl leading-7 text-white">در تماس باشیم</h2>
            <div className="text-gray-300 flex gap-x-2 md:gap-x-3 mt-6 md:mt-7">
                <svg className="size-5 md:size-6">
                    <use href="./sprite.svg#map-pin"/>
                </svg>
                <p className="font-Dana-Regular text-base leading-6 md:text-xl md:leading-7">بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</p>
                
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-5 text-gray-300 font-Dana-Medium text-base md:text-xl mt-4 md:mt-5">
                <button className="flex gap-x-2 md:gap-x-3">
                    <svg className="size-5 md:size-6">
                        <use href="./sprite.svg#envelope"/>
                    </svg>
                    <span>info@Coffee.com</span>
                </button>
                <div className="flex">
                    <svg className="size-5 md:size-6 ml-2 md:ml-3">
                        <use href="./sprite.svg#phone-btn"/>
                    </svg>
                    <button className=" ml-5 md:ml-6">0902 123 6628</button>
                    <button >021 - 6789012</button>
                </div>
            </div>
            <div className="flex gap-x-1.5 md:gap-x-6 mt-6 md:mt-10">
                <button className="md:w-62 w-44 h-12 border border-orange-200 rounded-xl flex items-center justify-center gap-x-2 text-orange-200">
                    <svg className="size-9.5">
                        <use href="./sprite.svg#instagram"/>
                    </svg>
                    <span className="font-Dana-Medium text-base md:text-xl">golden_coffee</span>
                </button>
                <button className="md:w-62 w-44 h-12 bg-linear-to-r from-orange-200 to-orange-300 rounded-xl flex items-center justify-center gap-x-2 text-zinc-700">
                    <svg className="size-9.5">
                        <use href="./sprite.svg#telegram"/>
                    </svg>
                    <span className="font-Dana-Medium text-base md:text-xl">golden_coffee</span>
                </button>
            </div>

        </div>
        </div>
        <div className="w-full border-t border-white/10 mt-10 md:mt-11 md:py-11 pt-10 pb-8 font-Dana-Medium text-xs md:text-base text-gray-300 flex flex-col md:flex-row justify-between md:items-center gap-y-4">
        <div className="flex items-center gap-x-2.5 md:gap-x-3.75">
             <div className="size-7.5 border border-white/10 rounded-full flex justify-center items-center">
                <div className="size-5 border border-white/10 rounded-full flex justify-center items-center">
                    <div className="size-2.5 bg-orange-300 rounded-full"></div>
                </div>
             </div>
             <p className="leading-5 md:leading-[100%] w-79.5 md:w-full">تمام حقوق این رابط کاربری متعلق به سبزلرن میباشد و دانشجوی این دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.</p>
       
        </div>
        <div>
        <p className="text-end">Copyright © 2023 Golden Coffee. All rights reserved.</p>
        </div>
       
        </div>

    </footer>
    
  );
};

export default Footer;
