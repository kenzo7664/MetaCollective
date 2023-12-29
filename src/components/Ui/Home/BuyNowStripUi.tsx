import React, { Fragment } from 'react';

const BuyNowStripUi = () => {
  return (
    <Fragment>
      <div className=" w-full sm:p-32  ...">
        <div className="relative">
          <div className="absolute inset-0 sm:-inset-0.5 bg-gradient-to-r from-[#FA8072] to-[#0F52BA] rounded-xl blur-md"></div>
          <div className="relative bg-[#13111A] md:flex justify-around sm:p-14 border border-[#13111A] rounded-xl ">
            <p className="text-4xl text-white text-center my-8">
              Buy vMETA or cMETA <br /> NOW
            </p>
            <div className="px-10 lg:flex lg:flex-row">
              <p className="bg-white text-center rounded-full text-2xl p-6 lg:p-10  my-4 lg:mx-6 cursor-pointer ">
                Get in Touch
              </p>
              <p className="text-white text-center border border-white rounded-full text-2xl md:p-8 lg:p-10 p-6 my-4 cursor-pointer  ">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyNowStripUi;
