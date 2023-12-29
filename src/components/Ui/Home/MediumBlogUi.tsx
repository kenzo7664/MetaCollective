import React, { Fragment, useEffect, useState } from 'react';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Pagination, Navigation]);

const MediumBlogUi = () => {
  const { height, width } = useWindowDimensions();
  const [slideVal, setSideVal] = useState(2);

  useEffect(() => {
    checkSlider();
  }, [width]);

  const checkSlider = () => {
    if (width! < 640) {
      setSideVal(1);
      console.log('Slide', slideVal);
    } else {
      setSideVal(2);
    }
    return;
  };
  return (
    <Fragment>
      <div className="">
        <p className="text-white text-center text-5xl font-semibold sm:py-20 py-10 ">
          Blog
        </p>

        <Swiper
          slidesPerView={slideVal}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={true}
          className="sm:hidden "
        >
          <SwiperSlide>
            <div className="flex flex-col items-center px-4 py-10">
              <div className="relative bg-gradient-to-r from-[#FA8072B2] via-[#0F52BAB2]  to-[#1D1A27] h-36  w-full rounded-t-lg  ">
                <div className="relative top-16   text-center  ">
                  <img
                    className=" sm:block h-36 object-scale-down mx-auto  "
                    src="/assets/homepage/header-logo.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="bg-white h-56 rounded-b-lg w-full  ">
                <p className="font-semibold text-2xl text-center pt-20">
                  DAO by metaCOLLECTIVE
                </p>
                <a href="">
                  <p className="text-right text-xl text-[#67717A] px-4 cursor-pointer py-10">
                    Read more ...
                  </p>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center px-4 py-10">
              <div className="relative bg-gradient-to-r from-[#FA8072B2] via-[#0F52BAB2]  to-[#1D1A27] h-36  w-full rounded-t-lg  ">
                <div className="relative top-16   text-center  ">
                  <img
                    className=" sm:block h-36 object-scale-down mx-auto  "
                    src="/assets/homepage/header-logo.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="bg-white h-56 rounded-b-lg w-full  ">
                <p className="font-semibold text-2xl text-center pt-20">
                  How to vote on the  metaCOLLECTIVE Governance
                </p>
                <a href="">
                  <p className="text-right text-xl text-[#67717A] px-4 cursor-pointer py-1">
                    Read more ...
                  </p>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center px-4 py-10">
              <div className="relative bg-gradient-to-r from-[#FA8072B2] via-[#0F52BAB2]  to-[#1D1A27] h-36  w-full rounded-t-lg  ">
                <div className="relative top-16   text-center  ">
                  <img
                    className=" sm:block h-36 object-scale-down mx-auto  "
                    src="/assets/homepage/header-logo.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="bg-white h-56 rounded-b-lg w-full  ">
                <p className="font-semibold text-2xl text-center pt-20">
                  We are live on devnet!
                </p>
                <a href="">
                  <p className="text-right text-xl text-[#67717A] px-4 cursor-pointer py-10">
                    Read more ...
                  </p>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="hidden sm:grid  sm:grid-cols-3 sm:gap-x-5 sm:px-10 sm:py-20 px-10  mt-12  ">
          <div className="flex-shrink-0">
            <div className="relative bg-gradient-to-r from-[#FA8072B2] via-[#0F52BAB2]  to-[#1D1A27] h-32 rounded-t-lg  ">
              <div className="relative lg:top-16 sm:top-20 text-center  ">
                <img
                  className="hidden sm:block h-24  lg:h-32  object-scale-down mx-auto  "
                  src="/assets/homepage/header-logo.png"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="bg-white h-56 rounded-b-lg  ">
              <p className="font-semibold text-2xl text-center pt-20">
                DAO by metaCOLLECTIVE
              </p>
              <a href="">
                <p className="text-right text-xl text-[#67717A] px-4 cursor-pointer lg:py-14">
                  Read more ...
                </p>
              </a>
            </div>
          </div>
          <div className=" ">
            <div className="relative bg-gradient-to-r from-[#FA8072B2] via-[#0F52BAB2]  to-[#1D1A27] h-32 rounded-t-lg  ">
              <div className="relative lg:top-16 sm:top-20 text-center  ">
                <img
                  className="hidden sm:block h-24  lg:h-32  object-scale-down mx-auto "
                  src="/assets/homepage/header-logo.png"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="bg-white h-56 rounded-b-lg  ">
              <p className="font-semibold text-2xl text-center pt-20 ">
                How to vote on the <br /> metaCOLLECTIVE <br /> Governance
              </p>
              <a href="">
                <p className="text-right text-xl text-[#67717A] px-4 cursor-pointer ">
                  Read more ...
                </p>
              </a>
            </div>
          </div>
          <div className="">
            <div className="relative bg-gradient-to-r from-[#FA8072B2] via-[#0F52BAB2]  to-[#1D1A27] h-32 rounded-t-lg  ">
              <div className="relative lg:top-16 sm:top-20 text-center  ">
                <img
                  className="hidden sm:block h-24  lg:h-32  object-scale-down mx-auto "
                  src="/assets/homepage/header-logo.png"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="bg-white h-56 rounded-b-lg  ">
              <p className="font-semibold text-2xl text-center pt-20">
                We are live on devnet!
              </p>
              <a href="">
                <p className="text-right text-xl text-[#67717A] px-4 cursor-pointer lg:py-14">
                  Read more ...
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MediumBlogUi;
