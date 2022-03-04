import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PaginationTable from "./PaginationTable";
import { NavLink } from "react-router-dom";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import TrTable from "./components/TrTable";
export const GetCategoryPackage = () => {
  /****************************************Variables State */
  /******************************************* */

  /****************************************Variables Hooks*/
  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategoryPackage());
  }, [dispatch]);
  /******************************************* */

  /****************************************Variables Funciones*/
  /******************************************* */
  return (
    <>
      <div>
        <div className="sm:px-6 ">
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="block lg:flex xl:flex md:block items-center justify-between">
              <div className="flex items-center">
                <NavLink
                  to={"/admin/reception/country/2"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-700 rounded-full bg-indigo-100"
                      : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full"
                  }
                >
                  <div className="py-2 px-4  ">
                    <p>All</p>
                  </div>
                </NavLink>
                <NavLink
                  to={"/admin/reception/country/2"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-700 rounded-full bg-indigo-100"
                      : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full"
                  }
                >
                  <div className="py-2 px-4  ml-4 sm:ml-8">
                    <p>Done</p>
                  </div>
                </NavLink>
                <NavLink
                  to={"/admin/reception/country/2"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-700 rounded-full bg-indigo-100"
                      : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full"
                  }
                >
                  <div className="py-2 px-4  mr-4  sm:ml-8">
                    <p>Pending</p>
                  </div>
                </NavLink>
                <div className="py-3 px-4 flex items-center text-sm font-medium leading-none cursor-pointer"></div>
              </div>
              <div className="flex justify-between">
                <div className="py-3 md:w-full lg:w-full xl:w-full w-1/2   flex items-center  text-sm font-medium leading-none cursor-pointer">
                  <div className="relative w-full">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                      </svg>
                    </div>
                    <input
                      className=" focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>

                <div className="py-3 px-4 flex items-center text-sm font-medium leading-none cursor-pointer"></div>
              </div>
            </div>

            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap ">
                <thead>
                  <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                    <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Nombre del producto
                    </th>

                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Fecha
                    </th>

                    <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                      More
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {loading &&
                    categoryPackage &&
                    categoryPackage.map((elemento) => (
                      <TrTable elemento={elemento} />
                    ))}
                </tbody>
              </table>
            </div>
            {/* <PaginationTable /> */}
          </div>
        </div>
      </div>
    </>
  );
};
