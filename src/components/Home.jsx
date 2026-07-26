

const Home = () => {
    return ( <>
     <div id="poster" className="relative h-50 xs:h-auto xs:aspect-2/1 ">
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
            <use href="./sprite.svg#chevron-down" />
          </svg>
        </div>
      </div>
    </> );
}
 
export default Home;