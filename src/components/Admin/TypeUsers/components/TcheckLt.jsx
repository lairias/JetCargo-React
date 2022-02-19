import { useState } from "react";

export default function TcheckLt({NAM_PERMISOS,COD_PERMISO}){
    const {selecPermiso, setselecPermiso} = useState({});

    const handleSelectPermiso = (e)=>{
        console.log(e.tager.value)
    };
    return(

        <div className="py-4 flex items-center">
            <div className="bg-white  border rounded-sm border-gray-400  w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" value={COD_PERMISO} 
                onChange={e=> {handleSelectPermiso(e)}}
                />
                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
                </div>
            </div>
            <p className="ml-3 text-base leading-4 font-normal text-gray-800 ">{NAM_PERMISOS} </p>
        </div>
       
    )
}