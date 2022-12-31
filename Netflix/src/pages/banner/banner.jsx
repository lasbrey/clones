import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Tv Shows", href: "#", current: false },
  { name: "Movies", href: "#", current: false },
  { name: "New & Popular", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchWorld);
      console.log(request);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * (await request).data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  return (
    <header>
      <div className="bg-black ">
        <section className="relative h-auto  flex items-start flex-col w-full justify-center  ">
          <div className="max-w-3xl mx-10  space-y-2 flex flex-col text-white absolute z-20   ">
            <div className="text-4xl font-bold">
              <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            </div>
            <div className="text-xl hidden  sm:inline-block">
              <h2>{movie?.overview}</h2>
            </div>
            <div className="text-lg hidden  sm:inline-block">
              <button className="py-2 px-10 bg-white text-black rounded-md mr-2 ">
                {" "}
                <span className="float-left pr-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </span>
                Play
              </button>
              <button className="py-2 px-10 bg-gray-500 text-white rounded-md ">
                My List
              </button>
            </div>
          </div>

          <div className=" relative h-full  ">
            <div className="absolute w-full  h-64 ">
              <Disclosure as="nav" className="bg-gradient-to-b from-black ">
                {({ open }) => (
                  <>
                    <div className="mx-auto max-w-[95%] px-2 sm:px-6 lg:px-2 ">
                      <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                          <div className="flex flex-shrink-0 items-center">
                            <img
                              className="block h-8 w-auto lg:hidden"
                              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                              alt="Your Company"
                            />
                            <img
                              className="hidden h-8 w-auto lg:block"
                              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                              alt="Your Company"
                            />
                          </div>
                          <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="px-3 py-2 rounded-md text-sm font-medium text-white"
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                          <div className="mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="#fff"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                              />
                            </svg>
                          </div>
                          <h2 className="text-white mr-4">Kids</h2>
                          <button
                            type="button"
                            className="rounded-md  p-1 text-white"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex rounded-md bg-gray-800 text-sm">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-md"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-white"
                                      )}
                                    >
                                      Your Profile
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-white"
                                      )}
                                    >
                                      Settings
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-white"
                                      )}
                                    >
                                      Sign out
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                      <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "block px-3 py-2 rounded-md text-base font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className=" h-60 bg-gradient-to-t absolute from-black text-white bottom-0 w-full">
              {" "}
            </div>

            <img
              className="z-0 flex w-full object-fit "
              src={`${base_url}${movie?.backdrop_path}`}
            />
          </div>
        </section>
      </div>
    </header>
  );
}

export default Banner;
