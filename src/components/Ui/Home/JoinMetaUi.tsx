import React, { Fragment } from 'react';

const JoinMetaUi = () => {
  return (
    <Fragment>
      <div className="">
        <div className=" sm:flex justify-around py-40 mt-8 sm:mt-10 lg:mt-32 px-10  lg:px-28 ">
          <div className="">
            <div className="bg-[#1D1A27] p-8 rounded-lg shadow-[-10px_-9px_121px_-12px] shadow-[#FA8072]  ">
              <img
                src="/assets/homepage/cmeta.png"
                className="object-cover md:object-scale-down  "
                alt="cmeta"
              />
            </div>
          </div>

          <div className="mt-16 lg:max-w-[32%] md:max-w-[39%]">
            <div className=" my-4 sm:my-20">
              <p className="text-2xl text-white  ">
                Join metaCOLLECTIVE as investor
              </p>

              <div className=" my-2  sm:my-5">
                <p className="text-gray-400  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Malesuada sit feugiat etiam risus, massa sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:flex sm:justify-around  px-10 ">
          <div className=" my-4 sm:my-40 lg:max-w-[32%] md:max-w-[42%] ">
            <p className="p-2 text-2xl  text-white text-left sm:max-w-[100%] mx-auto ">
              Join metaCOLLECTIVE as a contributor
            </p>

            <div className=" my-2  sm:my-5">
              <p className="text-gray-400 text-left p-2 my-2  sm:my-5 sm:max-w-[100%] mx-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada sit feugiat etiam risus, massa sit.
              </p>
            </div>
          </div>
          <div className="py-16">
            <div className="bg-[#1D1A27] p-8 rounded-lg shadow-[-10px_-9px_121px_-12px] shadow-[#0F52BA]   ">
              <img
                src="/assets/homepage/vmeta.png"
                className="object-cover md:object-scale-down  "
                alt="cmeta"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JoinMetaUi;
