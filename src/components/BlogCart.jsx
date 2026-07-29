

const BlogCart = ({Image,Title,Date}) => {
    const newDate=Date.split(" ")
    const Day=newDate[0]
    const Month=newDate[1]
    const Year=newDate[2]
    
    return ( <>

    <div className="w-89.5 h-37.5 md:w-75 md:h-71.25 p-2.5 rounded-2xl bg-white shadow-normal">
      <div className="flex  md:flex-col ">
          {/* Image */}
        <div className="flex justify-center items-center">
            <img className="size-32.5 md:w-70 md:h-46.5 rounded-2xl rounded-bl-4xl" src={Image} alt="" />
        </div>
        <div className="flex flex-col md:flex-row max-sm:pr-2.5 max-sm:pt-2.5 max-sm:pb-1.5 items-center md:pt-3">
            <h4 className="md:font-Dana-Regular font-Dana-Medium md:text-lg text-sm line-clamp-2">
                {Title}
            </h4>
            
            <div className="flex items-center justify-between max-sm:w-full max-sm:border-t max-sm:pt-5 max-sm:mt-5 border-gray-100 md:border-r md:px-5 md:mr-5">
            <div className=" flex md:flex-col  text-teal-600">
            <span className="md:font-Dana-DemiBold font-Dana-Regular md:text-2xl  text-xs">{Day}</span>
            <span className="font-Dana-Regular md:text-sm text-xs">{Month}</span>
            <span className="font-Dana-Regular md:text-sm text-xs">{Year}</span>
            </div>
            <button className="block md:hidden w-17.25 h-5 text-xs font-Dana-Medium bg-orange-200/20 text-orange-300 rounded-md">مطالعه</button>
            </div>
        </div>
    </div>
      </div>
    
    </> );
}
 
export default BlogCart;