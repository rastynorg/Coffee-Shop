const NetworkError = ()=>{
  return(<>
  <div className="w-full bg-orange-300/80 rounded-2xl flex flex-col  justify-center items-center mt-1.5 md:mt-28 py-10 shadow-normal">
    <svg className="size-30 text-red-700">
      <use href="./sprite.svg#error"/>
      
    </svg>
    <h1 className="text-zinc-700 font-Morraba-Medium text-xl leading-8 md:text-5xl md:leading-12 mb-1.5">لطفا وضعیت اتصال اینترنت خود را بررسی کنید</h1>
      <h2 className="text-zinc-700 font-Morraba-Medium text-lg leading-8 md:text-3xl md:leading-12">سپس صفحه را رفرش کنید</h2>

  </div>
  </>)
}

export default NetworkError;