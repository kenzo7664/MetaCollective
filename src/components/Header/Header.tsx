import { Fragment, FunctionComponent } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Governance', href: '#' },
  { name: 'Analytics', href: '#' },
  { name: 'Forum', href: '#' },
  { name: 'Projects', href: '#' },
];

const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <Popover>
          <div className="relative px-2 pt-10 sm:px-6 lg:px-8 lg:pt-10">
            <nav
              className="relative mx-4 text-[#FFFFFF] flex items-center justify-between sm:h-10 lg:justify-between"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-20 sm:h-16"
                      src="/assets/homepage/header-logo.png"
                      alt="Workflow"
                    />
                  </a>
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="bg-[#13111A] rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FA8072]">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-2 md:pr-8 md:space-x-4 lg:ml-5 lg:pr-20 lg:space-x-16">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium hover:text-[#FA8072]"
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  type="button"
                  className="relative rounded-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-orange-400 via-pink-500 to-indigo-500 group-hover:from-indigo-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-10 rounded-full py-2.5 text-white transition-all ease-in duration-75 bg-[#13111A] dark:bg-gray-900 group-hover:bg-opacity-0">
                    Contact
                  </span>
                </button>
              </div>
            </nav>
          </div>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="rounded-lg shadow-md bg-[#13111A] ring-1 ring-white ring-opacity-10 overflow-hidden">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="w-auto h-8"
                      src="/assets/homepage/header-logo.png"
                      alt="hero-logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-[white] rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FA8072]">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 text-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-200 hover:bg-[#FA8072]"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    type="button"
                    className="relative rounded-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-orange-400 via-pink-500 to-indigo-500 group-hover:from-indigo-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-5 rounded-full py-2.5 text-white transition-all ease-in duration-75 bg-[#13111A] dark:bg-gray-900 group-hover:bg-opacity-0">
                      Contact
                    </span>
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </Fragment>
  );
};

export default Header;
