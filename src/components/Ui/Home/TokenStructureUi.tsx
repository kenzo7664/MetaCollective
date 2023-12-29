import React, { Fragment } from 'react';

const TokenStructureUi = () => {
  return (
    <Fragment>
      <div className="px-4 my-20">
        <div className="max-w-[90%] md:max-w-[32%] mx-auto my-20 px-4 sm:px-6 lg:px-8 text-lg sm:text-2xl text-center">
          <h2 className="text-base lg:text-3xl md:text-xl sm:text-lg p-2 font-regular tracking-wide">
            The Dual Token Structure
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-10 justify-center md:justify-between max-w-[100%] sm:max-w-[90%] mx-auto">
          <div className="max-w-[95%] order-last md:max-w-[50%] flex justify-start">
            <img
              className="w-full"
              src="/assets/homepage/structure-img.png"
              alt="structure.png"
            />
          </div>
          <div className="max-w-[95%] flex flex-col order-1 md:max-w-[50%] md:absolute md:right-20 bg-[#E8E8E8]  self-center h-[60%] py-4 sm:py-24 sm:px-4">
            <div className="p-4">
              <h3 className="text-xl text-center sm:text-left">
                Structure Heading
              </h3>
            </div>
            <div className="p-4 text-justify">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis aliquam, facilis quae molestias quam sequi aspernatur,
                alias animi sed hic pariatur eos beatae, optio tempore repellat
                labore. Laborum, magnam illum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TokenStructureUi;
