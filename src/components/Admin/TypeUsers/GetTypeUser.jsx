import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Startgetpermision } from "../../../actions/permissionAction";
import { GetItemPermission } from "../../../service/ServiceItemPermisso";
import { SpinerLoader } from "../../Spinners/Loader";
import CardLt from "./components/CardLt";

export default function GetTypeUser() {
  //Contantes State
  const [search, setsearch] = useState("");
  const [searchcard, setsearchcard] = useState("");
  //-----------------------------------------------------
  //Contantes Dispatch
  const dispatch = useDispatch();
  const { COD_TYPEUSERS } = useParams();
  const { loading, typeUsesState } = useSelector((state) => state.permission);
  //-----------------------------------------------------
  //Contantes Hooks
  useEffect(() => {
    dispatch(Startgetpermision(COD_TYPEUSERS));
  }, [dispatch, COD_TYPEUSERS]);
  //-----------------------------------------------------
  //Contantes Funciones
  const hadleSearch = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };
  const hadleSearchcard = (e) => {
    e.preventDefault();
    setsearchcard(e.target.value);
  };
  //-----------------------------------------------------

  //Eventos console

  return (
    <>
      <Toaster />
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Vista de rol adminsitrativo{" "}
          {loading ? typeUsesState && typeUsesState.role.NOM_TYPE : "cargando "}
        </h2>
      </div>
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
                      value={searchcard}
                      onChange={hadleSearchcard}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full" />

          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            {loading ? (
              typeUsesState &&
              GetItemPermission.filter((element) => {
                if (searchcard === "") {
                  return element;
                } else if (
                  element.name.toLowerCase().includes(searchcard.toLowerCase())
                ) {
                  return element;
                }
              }).map((element) => (
                <CardLt
                  key={element.name}
                  name={element.name}
                  Inicio={element.Inicio}
                  Final={element.Final}
                  search={search}
                  permiso={typeUsesState}
                />
              ))
            ) : (
              <SpinerLoader />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
