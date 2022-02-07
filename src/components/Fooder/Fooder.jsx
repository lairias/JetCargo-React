import { Link } from "react-router-dom";
import logo from "./../../img/JetCargo-Logo.jpg";
export const Fooder = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="mx-auto container py-8 xl:px-15 lg:px-10 sm:px-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-8 gap-4">
          <div className=" block  flex-shrink-0">
            <img src={logo} alt="" />
            <p className="text-sm leading-none text-gray-800 mt-4">
              <p>
                © {date} JetCargo | by{" "}
                <a href="https://www.appteck.com" rel="designer">
                  Appteck
                </a>
              </p>
            </p>
            <p className="text-sm leading-none text-gray-800 mt-4">
              All rights reserved
            </p>
            <div className="flex items-center gap-x-4 mt-12">
              <div className=" w-8 h-8  jetcargo-color  cursor-pointer  rounded-full flex items-center justify-center">
                <a href="https://www.facebook.com/jetcargohonduras">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
              <div className=" w-8 h-8  jetcargo-color  cursor-pointer  rounded-full flex items-center justify-center">
                <a href="https://www.jetcargo.vip">
                  <i className="fas fa-globe"></i>
                </a>
              </div>
              <div className=" w-8 h-8  jetcargo-color  cursor-pointer  rounded-full flex items-center justify-center">
                <a href="https://www.facebook.com/jetcargohonduras">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold leading-4 text-gray-800">
              Support
            </h2>
            <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
              Legal policy
            </p>
            <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
              Status policy
            </p>
            <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
              Privacy policy
            </p>
            <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
              Terms of service
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
