import { useParams } from "react-router-dom"
import { useTypeUser } from "../../../hooks/useTypeUser";
import { useUser } from "../../../hooks/useUser";
import { SelectDisplay } from "../Reception/SelectDisplay";

import TbabgeLt from "./components/TbabgeLt"
export default function GetTypeUser (){
const {COD_TYPEUSERS} = useParams();
const {userToken} = useUser();
const {typeUsesState, loading}= useTypeUser(userToken,COD_TYPEUSERS);
    return (
        <>
        <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
            
            Vista de rol adminsitrativo {"-"} 
            {loading ? ( typeUsesState.role.NOM_TYPE) : ("cargando ")}
           
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
                      />
                    </div>
                  </div>
  
                  <div className="py-3 px-4 flex items-center text-sm font-medium leading-none cursor-pointer">
                    <SelectDisplay />
                  </div>
                </div>
              </div>
                <hr className="w-full"/>
                <div className="py-8 w-full">
            <div className="lg:flex items-center justify-center w-full">
                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-800">Dogecoin nerds</p>
                                <p className="text-sm leading-normal pt-2 text-gray-500">36 members</p>
                            </div>
                            <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-2 gap-3 h-full ">
        {loading ? ( typeUsesState.permisos.map((element)=>(
            <TbabgeLt {...element} />
            ))) : ("cargando ")}
            </div>


</div>
</div>
        
    </>
    )
};