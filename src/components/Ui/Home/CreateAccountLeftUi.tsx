import React, { Fragment, FunctionComponent } from 'react';

const CreateAccountUi: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="py-12 bg-[#13111A] flex flex-wrap justify-between mt-20 md:flex-nowrap">
        <div className="flex flex-col mx-auto rounded-[12px] bg-gradient-to-r from-[#0F52BA] to-[#FA8072] p-8">
          <img
            className="rounded-[15px] max-h-[300px] sm:max-h-[500px]"
            src="/assets/homepage/account-left.png"
            alt="account-img"
          />
        </div>
        <div className="flex flex-col max-w-[100%] md:max-w-[50%] p-5 m-2 sm:p-10 sm:m-4">
          <h2 className="text-[#F5F5F5] text-lg tracking-wide lg:text-3xl md:text-2xl sm:text-xl font-regular">
            Created by investors for investors
          </h2>
          <div className="mt-5 sm:mt-10">
            <p className="text-sm text-justify text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae recusandae harum in sapiente, blanditiis magni sint!
              Velit quisquam quas fugiat? Repellendus.
            </p>
            <div className="flex flex-row mt-8 items-left">
              <img
                src="/assets/homepage/rectangle-1.png"
                alt="rectangle-1"
                className="object-scale-down"
              />
              <div className="text-[#FFFFFF] ml-5">
                <p className="mt-2 sm:mt-0">1 Sec Operations</p>
                <p className="mt-5 ml-0 text-sm text-justify text-slate-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae recusandae harum in sapiente, blanditiis magni sint!
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-8 items-left">
              <img
                src="/assets/homepage/rectangle-2.png"
                alt="rectangle-2"
                className="object-scale-down"
              />
              <div className="text-[#FFFFFF] ml-5">
                <p className="mt-2 sm:mt-0">No Commissions</p>
                <p className="mt-5 ml-0 text-sm text-justify text-slate-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae recusandae harum in sapiente, blanditiis magni sint!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateAccountUi;
