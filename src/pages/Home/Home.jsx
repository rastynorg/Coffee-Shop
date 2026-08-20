
import ProductCart from "../../components/ProductCart";
import CategoryCart from "../../components/CategoryCart";
import ProductCarousel from "../../components/ProductCarousel";
import BlogCart from "../../components/BlogCart";
import Footer from "../../components/Footer";
import { useProducts } from "../../hooks/products/useProducts";
import { useBlogs } from "../../hooks/blogs/useBlogs";
import ProductCartSkeleton from "../../components/loadingComponent/ProductCartSkeleton";
import BlogCartSkeleton from "../../components/loadingComponent/BlogCartSkeleton";
import NetworkError from "../../components/errorComponent/NetworkError";

const Home = () => {
  const {data:products=[],isLoading:productsloading,error:productsError,isError:productsIsError}=useProducts()
  const { data:blogs=[],isLoading:blogsLoading,error:blogsError,isError:blogsIsError} = useBlogs()

  //const isError=productsIsError || blogsIsError
  //const error=productsError || blogsError
  //isError && error.message.toLowerCase() === "network error" && (<NetworkError/>)
  
   const newProducts=products.filter(product=>product.Newest===true)
  const bestSellerProducts=products.filter(product=>product.BestSeller===true)
     
  

  return (
    <>
      <div id="poster" className="relative h-50 xs:h-auto xs:aspect-2/1  ">
        <div className="container relative h-full md:min-h-screen flex justify-end items-center overflow-hidden ">
          <div className="text-white">
            <h1 className="font-Morraba-Bold text-2xl leading-8 md:text-6xl md:leading-15.5 mb-.5 md:mb-2">
              قهوه عربیکا تانزانیا
            </h1>
            <h2 className="font-Morraba-Light text-xl leading-8 md:text-5xl md:leading-16">
              یک فنجان بالانس !
            </h2>
            <div className="w-25 h-0.5 bg-orange-300 my-3 md:my-8"></div>
            <p className="font-Dana-Regular text-xs leading-4 md:text-2xl md:leading-8 w-50 md:w-115">
              قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
              است که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
          <svg className="absolute right-0 left-0 bottom-0 mx-auto w-25 h-5.5 hidden md:block text-gray-100 dark:text-zinc-800">
            <use href="./sprite.svg#curve"></use>
          </svg>
          <div className="size-7.5 border border-0.5 border-orange-300 rounded-full absolute left-0 right-0 bottom-0 mx-auto  translate-y-[50%] hidden md:flex justify-center items-center dark:text-white">
            <svg className="size-5">
              <use href="./sprite.svg#chevron-down-mini" />
            </svg>
          </div>

          <div className="circle circle-lg circle-main">
            <div className="circle circle-md">
              <div className="circle circle-sm"></div>
            </div>
          </div>
        </div>
        <svg className="absolute right-0 left-0 bottom-0 mx-auto w-25 h-5.5 hidden md:block text-gray-100 dark:text-zinc-800">
          <use href="./sprite.svg#curve"></use>
        </svg>
        <div className="size-7.5 border border-0.5 border-orange-300 rounded-full absolute left-0 right-0 bottom-0 mx-auto  translate-y-[50%] hidden md:flex justify-center items-center dark:text-white">
          <svg className="size-5">
            <use href="./sprite.svg#chevron-down-mini" />
          </svg>
        </div>
      </div>
      {/* NewProduct */}
      <div id="popularProducts">
        <div className="container pt-8 md:pt-38">
          <div className="text-zinc-700">
            <h2 className="font-Morraba-Medium text-2xl leading-8 md:text-5xl md:leading-12 mb-1.5">
              جدیدترین محصولات
            </h2>
            <div className="flex justify-between items-center">
              <h4 className="font-Morraba-Light text-lg leading-8 md:text-3xl md:leading-12">
                فرآوری شده از دانه قهوه
              </h4>
              <div className="text-orange-300 flex items-center gap-x-0 md:gap-x-1">
                <h5 className="font-Dana-Regular text-base md:text-xl">
                  مشاهده همه محصولات
                </h5>
                <svg className="size-5">
                  <use href="./sprite.svg#chevron-left" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-1.5 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">
            
{productsloading === true ? (
  Array.from({ length: 8 }).map((_, index) => (
    <ProductCartSkeleton key={index} />
  ))
) : (
  newProducts.slice(0, 8).map((product) => (
    <ProductCart
      key={product.id}
      Discount={product.Discount}
      count={product.count}
      Image={product.Image}
      Title={product.Title}
      Price={product.Price}
      Id={product.id}
      Rating={product.Rating}
    />
  ))
)}
            
          </div>
          
        </div>
        {/* Categories */}
        <div className="container mt-8 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-5 ">
            <div className="category category-right">
              <h3 className="font-Dana-DemiBold text-2xl md:text-4xl leading-6">
                انواع قهوه
              </h3>
              <h4 className="font-Dana-Regular md:font-Dana-Medium text-base md:text-xl leading-6">
                ترکیبی و تک خاستگاه
              </h4>
            </div>
            <div className="category category-left">
              <h3 className="font-Dana-DemiBold text-2xl md:text-4xl leading-6">
                پودر های فوری
              </h3>
              <h4 className="font-Dana-Regular md:font-Dana-Medium text-base md:text-xl leading-6">
                نسکافه ، هات چاکلت ، ماسالا
              </h4>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-7 md:gap-x-16.25 my-10 md:my-20 ">
            <CategoryCart
              Image="./img/categories/category1.png"
              Title="پک تستر قهوه"
            />
            <CategoryCart
              Image="./img/categories/category1.png"
              Title="پک تستر قهوه"
            />
            <CategoryCart
              Image="./img/categories/category1.png"
              Title="پک تستر قهوه"
            />
            <CategoryCart
              Image="./img/categories/category1.png"
              Title="پک تستر قهوه"
            />
            <CategoryCart
              Image="./img/categories/category1.png"
              Title="پک تستر قهوه"
            />
          </div>
        </div>

        {/* BestSeller Product */}

        <ProductCarousel
          title="محصولات پر فروش"
          subTitle="پیشنهاد قهوه خور ها ..."
          products={bestSellerProducts}
          renderItem={(product) => (
            <ProductCart
              Discount={product.Discount}
              count={product.count}
              Image={product.Image}
              Title={product.Title}
              Price={product.Price}
              Id={product.id}
              Rating={product.Rating}
            />
          )}
        />

        <div className="container">
          <div className="bg-linear-to-r from-emerald-500 to-emerald-600 my-8 md:my-20 py-8 px-3 md:py-5.75 md:px-11 rounded-2xl">
            <div className="w-full flex items-center justify-between flex-wrap gap-y-8.5">
              <div className="flex gap-x-3 md:gap-x-6">
                <img
                  src="./img/club/diamond.png"
                  alt=""
                  className="w-21.75 h-19.5 md:w-27.5 md:h-24.5"
                />
                <div className="flex flex-col items-start gap-y-.5 md:gap-y-2">
                  <h2 className="text-white font-Morraba-Bold text-2xl leading-7 md:text-5xl md:leading-12">
                    کافی کلاب
                  </h2>
                  <h4 className="text-white font-Morraba-Light text-lg leading-7 md:text-2xl md:leading-12">
                    میدونستی میتونی با امتیاز هات قهوه بگیری ؟
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-x-3 md:gap-x-27.5">
                <div className="flex gap-x-2 md:gap-x-5">
                  <button className="bg-white text-emerald-600 size-18 md:size-24.5 rounded-2xl cursor-pointer ">
                    <div className="flex justify-center items-center mt-1.5 md:mt-5">
                      <svg className="size-10 md:size-12">
                        <use href="./sprite.svg#discovery" />
                      </svg>
                    </div>
                    <span className="font-Dana-Regular text-xs md:text-sm justify-self-end text-center mt-0.75 md:mt-1.5">
                      چرخ و بخت
                    </span>
                  </button>
                  <button className="bg-white text-emerald-600 size-18 md:size-24.5 rounded-2xl cursor-pointer ">
                    <div className="flex justify-center items-center mt-1.5 md:mt-5">
                      <svg className="size-10 md:size-12">
                        <use href="./sprite.svg#activity" />
                      </svg>
                    </div>
                    <span className="font-Dana-Regular text-xs md:text-sm justify-self-end text-center mt-0.75 md:mt-1.5">
                      ماموریت ها
                    </span>
                  </button>
                  <button className="bg-white text-emerald-600 size-18 md:size-24.5 rounded-2xl cursor-pointer ">
                    <div className="flex justify-center items-center mt-1.5 md:mt-5">
                      <svg className="size-10 md:size-12">
                        <use href="./sprite.svg#ticket-star" />
                      </svg>
                    </div>
                    <span className="font-Dana-Regular text-xs md:text-sm justify-self-end text-center mt-0.75 md:mt-1.5">
                      جایزه ها
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                  <span className="font-Dana-DemiBold text-2xl md:text-3xl">
                    542
                  </span>
                  <h6 className="font-Dana-Regular text-xs md:text-sm md:mt-1">
                    امتیـــــــاز شما
                  </h6>
                  <button className="flex items-center md:mt-2 py-1 px-1 md:px-2.5 md:py-1.5 bg-linear-to-l from-orange-300 to-orange-200 rounded-full">
                    <span className="font-Dana-Medium text-xs md:text-sm">
                      دریافت جایزه
                    </span>
                    <svg className="size-5 md:size-6">
                      <use href="./sprite.svg#chevron-left-mini" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-Morraba-Medium text-2xl leading-8 md:text-5xl md:leading-12 mb-1.5 text-zinc-700">
              جدیدترین محصولات
            </h2>
            <div className="text-orange-300 flex items-center gap-x-0 md:gap-x-1">
              <h5 className="font-Dana-Regular text-base md:text-xl">
                مشاهده همه محصولات
              </h5>
              <svg className="size-5">
                <use href="./sprite.svg#chevron-left" />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 md:gap-5">
            {blogsLoading === true ? (
  Array.from({ length: 4 }).map((_, index) => (
    <BlogCartSkeleton key={index} />
  ))
) : (
  blogs.slice(0,4).map((blog) => (
              <BlogCart
                Image={blog.Image}
                Title={blog.Title}
                Date={blog.Date}
              />
            ))
)}
            
          </div>
        </div>
        <div className="container">
          <div className="w-full my-28 flex flex-col md:flex-row gap-y-8 md:gap-x-5">
            <img className="w-74 h-76.25 mx-auto" src="" alt="" />
            <div className="text-zinc-700">
              <h1 className="font-Morraba-Medium text-2xl leading-8 md:text-5xl md:leading-12 mb-.5 md:mb-1.5">
                یکی از بهترین قهوه ها !
              </h1>
              <h2 className="font-Morraba-Light text-lg leading-8 md:text-3xl md:leading-12">
                کیفیت قهوه را از ما بخواهید ...
              </h2>
              <div className="flex gap-x-2.5 my-5 md:my-6">
                <span className="size-1 bg-zinc-700 rounded-full"></span>
                <span className="size-1 bg-zinc-700 rounded-full"></span>
                <span className="size-1 bg-zinc-700 rounded-full"></span>
              </div>
              <p className="font-Dana-Regular text-lg leading-7 md:text-2xl md:leading-8">
                فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه
                معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ
                همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد
                ما روز شما را می سازد!
              </p>
              <button className="md:mt-6 mt-5 rounded-full px-6 py-3.5 border border-orange-300 text-orange-300 flex gap-x-2 items-center cursor-pointer">
                <svg className="md:size-8 size-5.5">
                  <use href="./sprite.svg#phone-btn" />
                </svg>

                <span className="font-Dana-Regular text-base md:text-xl">
                  ثبت سفارش تلفنی
                </span>
              </button>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 mb-12 md:mb-36 ">
            <div className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-4 border-b border-l border-gray-200 md:border-0 pb-5 md:pb-0">
              <img src="./img/svgs/services/support.svg" alt="" />
              <div className="text-zinc-700 space-y-1 md:space-y-3.5 max-md:text-center">
                <h2 className="font-Dana-DemiBold text-sm md:text-lg leading-6">پشتیبانی شبانه روزی</h2>
                <h4 className="font-Dana-Regular text-xs md:text-sm leading-6">7 روز هفته ، 24 ساعته</h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-4 border-b border-gray-200 md:border-0 pb-5 md:pb-0">
              <img src="./img/svgs/services/express-delivery.svg" alt="" />
              <div className="text-zinc-700 space-y-1 md:space-y-3.5 max-md:text-center">
                <h2 className="font-Dana-DemiBold text-sm md:text-lg leading-6">امکان تحویل اکسپرس</h2>
                <h4 className="font-Dana-Regular text-xs md:text-sm leading-6">ارسال بسته با سرعت باد</h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-4 border-l border-gray-200 mt-6 md:mt-0">
              <img src="./img/svgs/services/coffee.svg" alt="" />
              <div className="text-zinc-700 space-y-1 md:space-y-3.5 max-md:text-center">
                <h2 className="font-Dana-DemiBold text-sm md:text-lg leading-6">رست تخصصی</h2>
                <h4 className="font-Dana-Regular text-xs md:text-sm leading-6">تازه برشته شده و با کیفیت</h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-4 mt-6 md:mt-0">
              <img src="./img/svgs/services/pitcher.svg" alt="" />
              <div className="text-zinc-700 space-y-1 md:space-y-3.5 max-md:text-center">
                <h2 className="font-Dana-DemiBold text-sm md:text-lg leading-6">اکسسوری قهوه</h2>
                <h4 className="font-Dana-Regular text-xs md:text-sm leading-6">وسایل و ادوات دم آوری</h4>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      
      </div>
    </>
  );
};

export default Home;
