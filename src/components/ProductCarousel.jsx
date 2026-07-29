

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ProductCarousel = ({
  title,
  subTitle,
  products,
  renderItem,
}) => {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const getSlidesPerView = () => {
    if (!swiperRef.current) return 4;

    return Number(swiperRef.current.params.slidesPerView);
  };

  const isPrevDisabled = activeIndex === 0;

  const isNextDisabled =
    activeIndex >= products.length - getSlidesPerView();

  return (
    <div className="container">
      <div className="text-zinc-700">
        <h2 className="font-Morraba-Medium text-2xl leading-8 md:text-5xl md:leading-12 mb-1.5">
          {title}
        </h2>

        <div className="flex justify-between items-center">
          <h4 className="font-Morraba-Light text-lg leading-8 md:text-3xl md:leading-12">
            {subTitle}
          </h4>

          <div className="flex gap-x-3 md:gap-x-4.5">
            <button
              disabled={isPrevDisabled}
              onClick={() => swiperRef.current?.slidePrev()}
              className={`size-9 md:size-11 rounded-full flex justify-center items-center transition-all
              ${
                isPrevDisabled
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-white hover:bg-orange-300"
              }`}
            >
              <svg className="size-5 md:size-6.5">
                <use href="./sprite.svg#chevron-right" />
              </svg>
            </button>

            <button
              disabled={isNextDisabled}
              onClick={() => swiperRef.current?.slideNext()}
              className={`size-9 md:size-11 rounded-full flex justify-center items-center transition-all
              ${
                isNextDisabled
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-white hover:bg-orange-300"
              }`}
            >
              <svg className="size-5 md:size-6.5">
                <use href="./sprite.svg#chevron-left-mini" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mt-5 md:mt-12"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;