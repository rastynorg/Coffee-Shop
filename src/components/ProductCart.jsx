const ProductCart = () => {
  return (
    <div className="w-75 h-116.75 bg-white p-5 shadow-normal rounded-2xl">
      <img
        className="size-65 flex justify-center items-center mb-5"
        src="./img/products/p1.png"
        alt=""
      />
      <div className="text-xl space-y-2.5">
        <h4 className=" font-Dana-Medium text-zinc-700 line-clamp-2 ">
        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
      </h4>
      <div>
        <span className="font-Dana-DemiBold text-teal-600">175,000 <span className="font-Dana-Regular text-sm">تومان</span></span>
        <span className="hidden"></span>
      </div>
     
      </div>
       <div className="pt-4 flex items-center justify-between">
        <div className="flex items-center gap-x-3 text-gray-400">
             <button className="p-1.75 bg-gray-100 rounded-full cursor-pointer">
            <svg className="size-5.5">
                <use href="./sprite.svg#shopping-cart"></use>
            </svg>
        </button>
        <button>
            <svg className="size-6">
                <use href="./sprite.svg#arrows-right-left"></use>
            </svg>
        </button>
        </div>
        <div className="flex items-center">
            {Array.from({length:5}).map((_,i)=>(<svg className="size-6 text-gray-300">
            <use key={i} href="./sprite.svg#star"></use>
        </svg>))}
        </div>

       
      </div>
      
    </div>
  );

  
};

export default ProductCart;
