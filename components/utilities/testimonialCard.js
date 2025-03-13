"use client";

import { useEffect, useRef } from "react";
import { QuoteLeft, QuoteRight, ArrowRight, ArrowLeft } from "./icons";
import { ttmCardContent } from "@/contents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay} from 'swiper/modules';


const TestimonialCard = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = ".custom-prev";
      swiperInstance.params.navigation.nextEl = ".custom-next";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

    return (
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides= {true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1// view on small screens
            },
            768: {
              slidesPerView: 1.3// view on medium screens
            },
            1024: {
              slidesPerView: 2// view on large screens
            },
            1280: {
              slidesPerView: 2.3// view on very large screens
            },
          }}
        >
          {ttmCardContent.map((item) => (
              <SwiperSlide key={item.name}>
                  <div className="border-4  rounded-xl relative px-4 py-8 md:px-8 md:py-10">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-black-light italic z-10">{item.content}</h3>
                      <p className="text-lg italic font-bold text-black-light">{item.name}</p>
                    </div>
                    <div className="absolute -top-1 -left-1 pr-6 pb-6 bg-white-normal">
                      <QuoteLeft className="text-blue-extraLight size-8"/>
                    </div>
                    <div className="absolute -bottom-1 -right-1 pl-6 pt-6 bg-white-normal">
                      <QuoteRight className="text-blue-extraLight size-8"/>
                    </div>
                  </div>
              </SwiperSlide>
          ))}
        </Swiper>

          {/* Buttons to control slides */}
        <div className="absolute -top-7 right-0 flex gap-2">
          <button className="  custom-prev left-0 top-1/2 -translate-y-1/2 text-white   rounded-full z-10 bg-black-strong text-white-strong">
            <ArrowLeft className="size-9"/>
          </button>
          <button className="  custom-next right-0 top-1/2 -translate-y-1/2 text-white rounded-full z-10 bg-black-strong text-white-strong">
            <ArrowRight className="size-9" />
          </button>
        </div>
      </div>
    )
}

export default TestimonialCard;