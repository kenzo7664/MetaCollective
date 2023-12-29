import React, { Fragment, useState, useEffect, FunctionComponent } from 'react';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Pagination, Navigation]);

const CarouselUi: FunctionComponent = () => {
  const { width } = useWindowDimensions();
  const [slideVal, setSideVal] = useState(2);

  useEffect(() => {
    checkSlider();
  }, [width]); // eslint-disable-line

  const checkSlider = () => {
    if (width! < 640) {
      setSideVal(1);
      console.log('Slide', slideVal);
    } else {
      setSideVal(3);
    }
    return;
  };

  return (
    <Fragment>
      <div className="bg-[#13111A] max-w-[90%] sm:max-w-[70%] md:max-w-[32%] mx-auto my-5 sm:my-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#F5F5F5]  p-2 text-base tracking-wide lg:text-3xl md:text-xl sm:text-lg font-regular">
          Target Markets
        </h2>
      </div>
      <div className="py-20 bg-[url('/assets/homepage/carousel-background.png')] bg-no-repeat bg-center ">
        <div className="max-w-[90%] mx-auto flex justify-between">
          <Swiper
            slidesPerView={slideVal}
            spaceBetween={5}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/homepage/carousel-1.png"
                  alt="carousel-1.png"
                  className="h-[230px] w-[220px] rounded-[30px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/homepage/carousel-2.png"
                  alt="carousel-2"
                  className="h-[230px] w-[220px] rounded-[30px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/homepage/carousel-3.png"
                  alt="carousel-3"
                  className="h-[230px] w-[220px] rounded-[30px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/homepage/carousel-4.png"
                  alt="carousel-4"
                  className="h-[230px] w-[220px]  rounded-[30px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/homepage/carousel-5.png"
                  alt="carousel-5"
                  className="h-[230px] w-[220px] rounded-[30px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default CarouselUi;
