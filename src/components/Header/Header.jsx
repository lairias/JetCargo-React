//Importanto las librerias de react
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//Importancion de los Hooks
import { useUser } from "../../hooks/useUser";
export const Header = () => {
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const { isLogged, logout } = useUser();
  return (
    <div className="dark:bg-gray-900">
      <div>
        <div className="relative">
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex"
            } bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}
          ></div>
          <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
            <div className="container mx-auto flex items-center justify-between">
              <h1 className="md:w-2/12 cursor-pointer font-bold text-2xl text-gray-800 dark:text-white">
                <NavLink to="/">JetCargo</NavLink>
              </h1>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li></li>
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Furniture
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Lookbook
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Support
                  </NavLink>
                </li>
              </ul>

              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  {isLogged ? (
                    <button
                      onClick={logout}
                      className="dark:text-white text-base rounded-full border-2 w-full px-2 hover:bg-sky-400 transition duration-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Logout
                    </button>
                  ) : (
                    <NavLink
                      to="/login"
                      className="dark:text-white text-base rounded-full border-2 w-full px-2 hover:bg-sky-400 transition duration-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Sing in
                    </NavLink>
                  )}
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Movil */}

          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3">
                {isLogged ? (
                  <button
                    onClick={logout}
                    className="dark:text-white text-base rounded-full border-2 w-full px-2 hover:bg-sky-400 transition duration-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="dark:text-white text-base rounded-full border-2 w-full px-2 hover:bg-sky-400 transition duration-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Sing in
                  </NavLink>
                )}
              </div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Home
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Furniture
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Lookbook
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Support
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
