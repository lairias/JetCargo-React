import { SelectDisplay } from "../Reception/SelectDisplay";
import TbodyTd from "./components/TbodyTd";
import { SpinerLoader } from "../../Spinners/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Startgetallpermission } from "../../../actions/permissionAction";
import { useState } from "react";

export default function GetTypeUsers() {
  const dispatch = useDispatch()
  const [search, setsearch] = useState("");

  useEffect(()=>{
    dispatch(Startgetallpermission())
  }, [dispatch]);
  
  const {loading, role} = useSelector((state) => state.permission);

  const hadleSearch = (e) => {
    e.preventDefault();
    setsearch(e.target.value)
  }

//
  return (
    <>
      <div>
        <div className="sm:px-6 ">
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="block lg:flex xl:flex md:block items-center justify-between">
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
                      value={search}
                      onChange={hadleSearch}
                    />
                  </div>
                </div>

                <div className="py-3 px-4 flex items-center text-sm font-medium leading-none cursor-pointer">
                  <SelectDisplay />
                </div>
              </div>
            </div>

            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap ">
                <thead>
                  <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      <div className="text-gray-600 dark:text-gray-400 opacity-0 cursor-default relative w-10">
                        <div className="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs">
                          3
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-file"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Invoice Number
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Client
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Company Contact
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Amount
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Date
                    </th>

                    <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                      More
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    role.filter(element => {
                      if(search === ""){
                        return element
                      }else if (element.NOM_TYPE.toLowerCase().includes(search.toLowerCase())){
                        return element;
                      }
                    }).map((element) => (
                      <>
                        <TbodyTd key={element.COD_TYPEUSERS} element={element} />
                      </>
                    ))
                  ) : (
                    <SpinerLoader />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <style>
          {` .checkbox:checked + .check-icon {
                      display: flex;
                  }`}
        </style>
      </div>
    </>
  );
}
