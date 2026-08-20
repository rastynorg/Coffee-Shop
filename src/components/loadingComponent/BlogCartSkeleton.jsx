const BlogCartSkeleton = () => {
  return (
    <div className="w-89.5 h-37.5 md:w-75 md:h-71.25 p-2.5 rounded-2xl bg-white shadow-normal animate-pulse">
      
      <div className="flex md:flex-col">

        {/* Image Skeleton */}
        <div className="flex justify-center items-center shrink-0">
          <div className="size-32.5 md:w-70 md:h-46.5 rounded-2xl rounded-bl-4xl bg-gray-200" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row max-sm:pr-2.5 max-sm:pt-2.5 max-sm:pb-1.5 items-center md:pt-3 flex-1">

          {/* Title Skeleton */}
          <div className="flex flex-col gap-2 w-full md:flex-1">
            <div className="h-3.5 md:h-5 w-full bg-gray-200 rounded-md" />
            <div className="h-3.5 md:h-5 w-4/5 bg-gray-200 rounded-md" />
          </div>

          {/* Date Skeleton */}
          <div className="flex items-center justify-between max-sm:w-full max-sm:border-t max-sm:pt-5 max-sm:mt-5 border-gray-100 md:border-r md:px-5 md:mr-5">
            
            <div className="flex md:flex-col gap-2">
              <div className="h-4 md:h-7 w-7 md:w-9 bg-gray-200 rounded-md" />
              <div className="h-3 md:h-4 w-8 md:w-10 bg-gray-200 rounded-md" />
              <div className="h-3 md:h-4 w-10 md:w-12 bg-gray-200 rounded-md" />
            </div>

            {/* Mobile Button */}
            <div className="block md:hidden w-17.25 h-5 bg-gray-200 rounded-md" />

          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogCartSkeleton;