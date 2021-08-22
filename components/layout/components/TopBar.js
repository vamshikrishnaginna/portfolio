import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const TopBar = () => {
  const links = [
    {
      name: "About",
      description: "About",
      href: "#",
    },
    {
      name: "Presentations",

      href: "#",
    },
    {
      name: "Experience",
      href: "#",
    },
    {
      name: "Events",
      href: "#",
    },
  ];
  return (
    <Popover className="relative bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10 z-50">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="#"
              className="text-3xl font-bold text-white px-1 py-1 rounded-md bg-white text-black"
            >
              AN
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-darker rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blade">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-bold text-white hover:text-pink border-b-2 border-darker hover:border-pink transition duration-500 ease-in-out"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center px-4 py-2  rounded-md shadow-sm text-base font-medium text-black bg-blade hover:bg-bladeHover"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right  md:hidden z-50 "
        >
          <div className="rounded-lg shadow-lg ring-2 ring-white ring-opacity-5 bg-darker divide-y-2  divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <a
                    href="#"
                    className="text-3xl font-bold text-white px-1 py-1 rounded-md bg-white text-black"
                  >
                    AN
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-darker rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blade">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {links.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-bold text-white hover:text-pink border-b-2 border-darker hover:border-pink transition duration-500 ease-in-out"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-black bg-blade hover:bg-bladeHover"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default TopBar;
