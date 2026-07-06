import { useState } from "react";

const ProductCart = () => {
  const [stars, setStars] = useState([false, false, false, false, false]);
  const discount = true;
  const count = 1;

  return (
    <div className="w-43 h-68.25 md:w-75 md:h-116.75 bg-white p-2 md:p-5 shadow-normal rounded-2xl">
      <div className="flex justify-center items-center">
        <img
          className="size-32 md:size-65  mb-2 md:mb-5"
          src="./img/products/p1.png"
          alt=""
        />
      </div>
      <div className=" space-y-1.5 md:space-y-2.5">
        <h4 className=" font-Dana-Medium md:text-xl text-sm text-zinc-700 line-clamp-2 ">
          قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
        </h4>
        <div>
          {count === 0 ? (
            <h4 className="text-red-400 text-xl font-Dana-Regular">
              فعلا موجود نیست
            </h4>
          ) : (
            <>
              <span className="font-Dana-DemiBold text-base md:text-xl text-teal-600">
                175,000{" "}
                <span className="font-Dana-Regular text-xs md:text-sm">
                  تومان
                </span>
              </span>
              {discount && (
                <span className="font-Dana-Regular mr-2 md:mr-2.5 text-xs md:text-xl text-gray-400 line-through decoration-red-400 ">
                  <span>175,000</span>
                  <span className="font-Dana-Regular text-sm hidden md:inline">
                    تومان
                  </span>
                </span>
              )}
            </>
          )}
        </div>
      </div>
      <div className=" pt-2.5 md:pt-4 flex items-center justify-between">
        <div className="flex items-center gap-x-3  ">
          <button className="p-1.75 bg-gray-100  text-gray-400 hover:text-white hover:bg-teal-600 transition-colors rounded-full cursor-pointer">
            <svg className="size-4 md:size-5.5 ">
              <use href="./sprite.svg#shopping-cart"></use>
            </svg>
          </button>
          <button>
            <svg className="size-4 md:size-6  text-gray-400 hover:text-teal-600 transition-colors ">
              <use href="./sprite.svg#arrows-right-left"></use>
            </svg>
          </button>
        </div>
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
  function changeStar(index) {
    const newStars = [...stars];
    newStars[index] = !newStars[index];
    setStars(newStars);
  }
};

export default ProductCart;
