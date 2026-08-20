const ProductCartSkeleton = () => {
  return (
    <div className="relative w-43 h-68.25 md:w-75 md:h-116.75 bg-white p-2 md:p-5 shadow-normal rounded-2xl animate-pulse">
      
      {/* Product Image */}
      <div className="flex justify-center items-center">
        <div className="size-34 md:size-65 mb-2 md:mb-5 bg-gray-200 rounded-xl" />
      </div>

      {/* Title & Price */}
      <div className="space-y-1.5 md:space-y-2.5">

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 md:h-6 w-4/5 bg-gray-200 rounded" />
          <div className="h-4 md:h-6 w-3/5 bg-gray-200 rounded" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 pt-1">
            <div className="mx-1 md:mx-2 h-3 md:h-5 w-17 md:w-22 bg-gray-200 rounded" />
        </div>

      </div>

      {/* Icons & Rating */}
      <div className="pt-2.5 md:pt-4 flex items-center justify-between">

        {/* Left Icons */}
        <div className="flex items-center gap-x-3">
          <div className="size-7 md:size-9 bg-gray-200 rounded-full" />
          <div className="size-5 md:size-6 bg-gray-200 rounded" />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5" dir="ltr">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="size-4 md:size-5 bg-gray-200 rounded"
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default ProductCartSkeleton;