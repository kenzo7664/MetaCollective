import { Fragment, FunctionComponent } from 'react';
import Header from '../Header/Header';

const Hero: FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <div className="mx-auto flex flex-wrap items-left h-[55vh] mb-20">
          <div className="flex flex-col items-center w-full">
            <main className="px-4 mx-auto mt-10 sm:max-w-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="bg-[#13111A] text-center">
                <h1 className="text-3xl text-[#FFFFFF] font-normal sm:text-5xl">
                  Your gateway on the
                </h1>
                <h1 className="m-4 text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0F52BA] to-[#FA8072] sm:text-5xl">
                  Solana ecosystem
                </h1>
              </div>
              <div className="text-center">
                <p className="mt-3 text-[#E5E5E5]  sm:mt-5 text-sm sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam aliquam quam viverra purus tellus purus. Convallis
                  fusce
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
