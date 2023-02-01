import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useRef } from "react";
import { AiOutlineDownload as DownloadIcon } from "react-icons/ai";
import { useRouter } from "next/router";
import { logEvent } from "../../../utils/analytics";
import cx from "classnames";

const TopBar = () => {
  const { pathname } = useRouter();

  const buttonRef = useRef();
  const resumeLink =
    "https://drive.google.com/file/d/1IygTH99vSZuMAnecgD9C0WedsSnPDcPE/view";

  let links = [
    {
      name: "Home",
      href: "/",
      linkActive: "text-dracula-pink border-dracula-pink",
      linkInactive: "hover:text-dracula-pink",
    },
    {
      name: "Projects",
      href: "/projects",
      linkActive: "text-dracula-green-main border-dracula-green-main",
      linkInactive: "hover:text-dracula-green-main",
    },
    {
      name: "Gallery",
      href: "/gallery",
      linkActive: "text-dracula-cyan border-dracula-cyan",
      linkInactive: "hover:text-dracula-cyan",
    },
    {
      name: "About",
      href: "/about",
      linkActive: "text-dracula-purple border-dracula-purple",
      linkInactive: "hover:text-dracula-purple",
    },
  ];

  return (
    <Popover className="fixed z-50 block w-full bg-dracula-darker md:relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="z-50 flex items-center justify-between py-4 md:space-x-10 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="rounded-md bg-white px-1 py-1 text-3xl font-bold text-black">
                AN
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-dracula-darker hover:bg-dracula-dark hover:text-gray-500 focus:ring-dracula-green-main focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden items-center justify-end space-x-8 md:flex md:flex-1 lg:w-0">
            {links.map((item) => {
              return (
                <Link key={item.name} href={item.href}>
                  <a
                    className={cx(
                      "text-lg font-medium border-b-2 transition duration-500 ease-in-out",
                      pathname === item.href
                        ? item.linkActive
                        : item.linkInactive + " border-dracula-darker",
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}

            <a
              href={resumeLink}
              onClick={() =>
                logEvent({
                  action: "downloaded_resume",
                  params: {},
                })
              }
              target="_blank"
              className="ml-8 inline-flex items-center justify-center rounded-md px-4 py-2 text-base font-medium text-black shadow-sm bg-dracula-green-main hover:bg-dracula-green-dark"
              rel="noreferrer"
            >
              <DownloadIcon className={"mr-2"} size={18} /> Resume
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
          className="fixed absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-2 ring-white ring-opacity-5 bg-dracula-darker divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a
                      className={
                        "rounded-md bg-white px-1 py-1 text-3xl font-bold text-black"
                      }
                    >
                      AN
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-dracula-darker hover:bg-dracula-dark hover:text-gray-500 focus:ring-dracula-green-main focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only" ref={buttonRef}>
                      Close menu
                    </span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {links.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      onClick={() => buttonRef.current?.click()}
                      className={
                        "text-lg font-medium border-b-2 border-dracula-darker transition duration-500 ease-in-out" +
                        (pathname === item.href
                          ? ` text-${item.color}`
                          : ` hover:text-${item.color}`)
                      }
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <a
                  href={resumeLink}
                  onClick={() =>
                    logEvent({
                      action: "downloaded_resume_mobile",
                      params: {},
                    })
                  }
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-md px-4 py-2 text-base font-bold text-black shadow-sm bg-dracula-green-main hover:bg-dracula-green-dark"
                  rel="noreferrer"
                >
                  <DownloadIcon className={"mr-2"} size={18} /> Resume
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
