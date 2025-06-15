"use client";

import { useEffect, useRef } from "react";
import { teamCardItems } from "@/contents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay} from 'swiper/modules';


const TeamCard = () => {

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
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={-90}
          slidesPerView={1.3}
          centeredSlides= {false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1.3// view on small screens
            },
            768: {
              slidesPerView: 1.5// view on medium screens
            },
            1024: {
              slidesPerView: 2.3// view on large screens
            },
            1280: {
              slidesPerView: 2.3// view on very large screens
            },
          }}
        >
          {teamCardItems.map((item) => (
              <SwiperSlide key={item.name}>
                  <div className="text-black-strong font-montserrat text-sm lg:text-lg w-3/4 mx-auto">
                        <div className="flex flex-col">
                            <div className="w-full mx-auto aspect-square overflow-hidden border-2 border-white-normal rounded-2xl">
                                <img src={item.image} alt={item.name} width={100} height={100} className="w-full h-auto object-cover"/>
                            </div>
                            <h3 className="font-semibold mt-2 mb-1">{item.name}</h3>
                            <p>{item.title}</p>
                        </div>
                  </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
}

export default TeamCard;