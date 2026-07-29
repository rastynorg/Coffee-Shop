

const CategoryCart = ({Image,Title}) => {
    return ( <div className="flex flex-col items-center gap-y-2.5 ">
        <img className="size-25 md:size-50" src={Image} alt="" />
        <h4 className="font-Dana-DemiBold text-sm leading-5 md:text-xl md:leading-7">{Title}</h4>
    </div> );
}
 
export default CategoryCart;