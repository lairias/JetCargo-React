import { useState } from "react";
import {MyHeaderNav} from "../Header/MyHeaderNav"
import {Items} from "../Dashboard/Items"
import { useLocation } from 'react-router-dom';
import { ItemsMovile } from "./ItemsMovile";
export const Dashboard = ({children}) => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);

  const ruta = useLocation().pathname;
  return (
    <>
      <div className="w-full h-full bg-gray-200 relative">
        <div className="flex flex-no-wrap">
          {/*Desktop responsive */}
          <Items  />
           {/*Mobile responsive sidebar*/}
           <ItemsMovile show={show} setShow={setShow} ruta={ruta} />
          {/* Sidebar ends */}
          <div className="w-full h-full">
            {/* Navigation starts */}
            <nav className="h-16 flex items-center lg:items-stretch justify-between lg:justify-between bg-white shadow relative z-10">
            <MyHeaderNav profile = {profile} setProfile={setProfile} />
              <div
                className="text-gray-600 mr-8 visible lg:hidden relative"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <svg
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu cursor-pointer"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
              <div className="border-t lg:hidden border-gray-300">
                    <div className="w-full flex items-center justify-between px-6 pt-1">
                      <div className="flex items-center">
                        <img
                          alt="profile-pic"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                          className="w-8 h-8 rounded-md"
                        />
                        <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">
                          Jane Doe
                        </p>
                      </div>
                      <ul className="flex">
                        <li className="cursor-pointer text-white pt-5 pb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-messages"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#718096"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                          </svg>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-bell"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#718096"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
            </nav>
            <div className="container h-screen  mx-auto py-1  md:w-4/5 w-11/12 relative ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
