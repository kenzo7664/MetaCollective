import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className=" bg-[#13111A]  sm:flex justify-between px-3 sm:px-24  py-10 border-t border-[#C4C4C41A]">
        <div className="hidden text-[#FFFFFF80] sm:grid grid-row-5 gap-6">
          <p>Home</p>
          <p>Governance</p>
          <p>Analytics</p>
          <p>Projects</p>
          <p>Contacts</p>
          <p>Forum</p>
        </div>
        <div className="my-10">
          <p className="font-semibold text-white text-center text-3xl">
            Subscribe to our newsletter
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 my-6">
            <input
              type="text"
              placeholder="info@example.com"
              className="my-2 w-full px-3 py-4 resize-none rounded-full bg-[#726C8680] placeholder-[#726C8680]"
            />
            <button className="relative px-1   ">
              <button className="absolute sm:inset-0.5 -inset-0.5 bg-gradient-to-r  sm:mx-10 from-[#FA8072] to-[#0F52BA] rounded-full "></button>
              <button className="relative bg-[#13111A] py-5 sm:px-6 w-full sm:w-auto  sm:mx-4 rounded-full text-white ">
                Subscribe
              </button>
            </button>
          </div>
          <p className="text-[#FFFFFF80] text-center">
            We Promise Not to Spam You
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20 sm:grid-cols-1   ">
          <a href="#">
            <img src="/assets/homepage/twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="/assets/homepage/discord.svg" alt="" />
          </a>
          <a href="#">
            <img src="/assets/homepage/twitch.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="sm:flex justify-between bg-[#13111A] py-2 px-20  sm:px-24 border-t border-[#C4C4C41A]">
        <div>
          <img
            className="hidden sm:block h-20 sm:h-16"
            src="/assets/homepage/header-logo.png"
            alt="Workflow"
          />
        </div>
        <div>
          <p className="font-normal text-center text-sm text-[#BDBDBD]  pt-3 ">
            © 2022 METACOLLECTIVE, ALL RIGHTS RESERVED
          </p>
        </div>
        <div className="flex flex-row">
          <img
            className="h-20 sm:h-16"
            src="/assets/homepage/solanaIcon.png"
            alt="Workflow"
          />
          <p className="text-xs text-[#BDBDBD] py-5   ">Powered by Solana</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
