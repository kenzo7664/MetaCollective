import React, { Fragment, FunctionComponent } from 'react';

const StripUi: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="relative bg-[#13111A] flex flex-wrap justify-center md:justify-between text-center text-4xl text-white md:flex-nowrap">
        <div className="py-4 rounded-[12px] md:ml-10 px-5 mt-5 flex md:mt-0 flex-col bg-gradient-to-r from-[#0F52BA] to-[#FA8072]">
          <p>25</p>
          <p className="py-3 text-xs sm:mb-3 sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="flex flex-col px-2 invisible py-3 md:visible">
          <img
            src="/assets/homepage/line.png"
            alt="line.png"
            className="h-[100px]"
          />
        </div>
        <div className="py-4 rounded-[12px] px-5 mt-5 flex md:mt-0 flex-col bg-gradient-to-r from-[#0F52BA] to-[#FA8072]">
          <p>49</p>
          <p className="py-3 text-xs sm:mb-3 sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="flex flex-col px-2 invisible py-3 md:visible">
          <img
            src="/assets/homepage/line.png"
            alt="line.png"
            className="h-[100px]"
          />
        </div>
        <div className="py-4 rounded-[12px] md:mr-10 px-5 mt-5 flex mr-4 md:mt-0 flex-col bg-gradient-to-r from-[#0F52BA] to-[#FA8072]">
          <p>36</p>
          <p className="py-3 text-xs sm:mb-3 sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default StripUi;
