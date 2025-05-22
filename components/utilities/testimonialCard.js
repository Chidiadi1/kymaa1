"use client";

import { useEffect, useRef } from "react";
import { QuoteLeft, AngleArrow, AngleArrowL } from "./icons";
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
      <div className="w-full">
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
                  <div className="px-2 py-10 lg:py-20 md:px-8">
                    <div className="flex flex-col gap-4">
                      <div className="pb-3">
                        <QuoteLeft className="text-black-strong size-14"/>
                      </div>
                      <h3 className="text-black-strong font-montserrat text-sm italic">{item.content}</h3>
                      <p className="text-lg font-italiana italic font-bold text-black-strong">{item.name}</p>
                    </div>
                  </div>
              </SwiperSlide>
          ))}
        </Swiper>

          {/* Buttons controlling slides */}
        <div className="flex mt-2 gap-4 w-full justify-center">
          <button className="custom-prev p-4 rounded-full bg-white-normal text-black-strong">
            <AngleArrowL className="text-xl hover:text-blue-light"/>
          </button>
          <button className="custom-next  p-4 rounded-full bg-white-normal text-black-strong">
            <AngleArrow className="text-xl hover:text-blue-light" />
          </button>
        </div>
      </div>
    )
}

export default TestimonialCard;