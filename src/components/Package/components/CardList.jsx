import { NavLink } from "react-router-dom";

export default function CardList() {
  return (
    <>
      <div className="w-64 p-4  rounded border hover:shadow-lg bg-white">
        <div className="flex justify-center items-center flex-col ">
          <div>
            <img
              src="https://i.ibb.co/4YpPvd8/Mask-Group-2.png"
              alt="avatar-3"
            />
          </div>
          <div className="flex justify-center items-center flex-col mt-3">
            <p className="text-sm font-medium leading-none text-gray-800">
              Amy Jackson
            </p>
            <p className="text-sm font-medium leading-none text-gray-600 mt-1">
              Back End Developer
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="text-xs text-center w-full bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
              Start Date: 22 Jun, 2020
            </div>
            <div className="mt-4 text-center w-full lg:mt-0 text-xs bg-red-200 text-red-500 rounded font-medium p-3">
              End Date: 03 Dec, 2020
            </div>
          </div>
        </div>
        <p className="text-sm leading-none text-center text-gray-600 my-3">
          Projects done
        </p>
        <div className="w-56 h-9">
          <NavLink
            to={"/admin/packages/4"}
            role="button"
            aria-label="message"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200"
          >
            <p className="text-sm font-medium leading-none text-gray-600">
              Seguimiento
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
