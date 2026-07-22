import { useState } from "react";

const ProductCart = ({Discount,count,Image,Title,Price}) => {
  const [stars, setStars] = useState([false, false, false, false, false]);

  return (
    <div className=" relative w-43 h-68.25 md:w-75 md:h-116.75 bg-white p-2 md:p-5 shadow-normal rounded-2xl">
      {/* Discount Label */}
      {Discount && (
        <>
          <span className="inline-block text-center py-1 px-2.5 md:py-1.5 md:px-3.5 z-10 absolute top-2 right-2 md:top-6 md:right-6 text-white  bg-orange-300 w-10 h-5 md:w-13.5 md:h-7.5 rounded-full text-xs md:text-base font-Dana-DemiBold">
            <span>{Discount}</span>%
          </span>
        </>
      )}
      {/* Cart Image */}
      <div className="flex justify-center items-center">
        <img
          className="size-32 md:size-65  mb-2 md:mb-5"
          src={Image}
          alt=""
        />
      </div>
      {/* title & price */}
      <div className=" space-y-1.5 md:space-y-2.5">
        {/* title */}
        <h4 className=" font-Dana-Medium md:text-xl text-sm text-zinc-700 line-clamp-2 ">{Title}</h4>
        {/* Price */}
        <div>
          {count === 0 ? (
            <h4 className="text-red-400 text-xl font-Dana-Regular">
              فعلا موجود نیست
            </h4>
          ) : (
            <>
              <span className="font-Dana-DemiBold text-base md:text-xl text-teal-600">
                {Price*(1-Discount/100)}
                <span className="font-Dana-Regular text-xs md:text-sm">
                  تومان
                </span>
              </span>
              {Discount && (
                <span className="font-Dana-Regular mr-2 md:mr-2.5 text-xs md:text-xl text-gray-400 line-through decoration-red-400 ">
                  <span>{Price}</span>
                  <span className="font-Dana-Regular text-sm hidden md:inline">
                    تومان
                  </span>
                </span>
              )}
            </>
          )}
        </div>
      </div>
      {/* Icons */}
      <div className=" pt-2.5 md:pt-4 flex items-center justify-between">
        <div className="flex items-center gap-x-3  ">
          {/* Shopping Cart Icon */}
          <button className="p-1.75 bg-gray-100  text-gray-400 hover:text-white hover:bg-teal-600 transition-colors rounded-full cursor-pointer">
            <svg className="size-4 md:size-5.5 ">
              <use href="./sprite.svg#shopping-cart"></use>
            </svg>
          </button>
          {/* Change Icon */}
          <button>
            <svg className="size-4 md:size-6  text-gray-400 hover:text-teal-600 transition-colors ">
              <use href="./sprite.svg#arrows-right-left"></use>
            </svg>
          </button>
        </div>
        {/* Stars Icon */}
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <button key={i} onClick={() => changeStar(i)}>
              <svg
                className={`size-4 md:size-6 cursor-pointer ${
                  stars[i] ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                <use href="./sprite.svg#star"></use>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
  
  // Stars Icon state Changer

  function changeStar(index) {
    const newStars = [...stars];
    newStars[index] = !newStars[index];
    setStars(newStars);
  }
};

export default ProductCart;
