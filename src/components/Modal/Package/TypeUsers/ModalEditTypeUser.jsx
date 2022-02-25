import { SpinerLoader } from "../../../Spinners/Loader";
import { GetItemPermission } from "../../../../service/ServiceItemPermisso";
import CardLtEdit from "../../../Admin/TypeUsers/components/CardLtEdit";
import { useState } from "react";
import {useTypeUser} from "../../../../hooks/useTypeUser";
export default function ModalEditTypeUser({ handleShoweditModal, _id }) {
  //variables de States
  const [searchcard, setsearchcard] = useState("");
  //----------------------------------------------------
  //variables de dispach
  //----------------------------------------------------
  //variables de Hooks
  const {typeUsesState,loading} = useTypeUser(_id);
  //----------------------------------------------------
  //Variables de funciones
  const hadleSearchcard = (e) => {
    e.preventDefault();
    setsearchcard(e.target.value)
  }
  //----------------------------------------------------
  console.log(typeUsesState)

  return (
    <div id="popup" className="z-50 fixed w-full flex h-screen justify-center inset-0">
      <div
      
        className="w-full  bg-gray-500 bg-opacity-50 z-0 absolute inset-0"
      />
      <div className="mx-auto container ">
        <div className="flex items-center justify-center h-full w-full ">
          <div className="bg-white rounded-md shadow fixed overflow-x-auto sm:h-auto w-10/12 md:w-8/12 lg:w-2/3 xl:w-2/3">
            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
              <p className="text-base font-semibold">
                Editar rol -{" "}
                {loading ? typeUsesState.role.NOM_TYPE : <SpinerLoader />}{" "}
              </p>
              <button
                onClick={handleShoweditModal}
                className="focus:outline-none"
              >
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L7 21"
                    stroke="#A1A1AA"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7L21 21"
                    stroke="#A1A1AA"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
       
           
          </div>
        </div>
      </div>
    </div>
  );
}

// {loading ? (typeUsesState && (
//   <div className="px-4 md:px-10  pt-6 md:pb-4 pb-7   ">
//          <div className="block  mb-6">
//         <input
//           placeholder="Nombre Permiso"
//           type="text"
//           value={typeUsesState.role.NOM_TYPE}
//           min={0}
//           className="w-full mb-3 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
//         />
//         <div className="relative ">
//       <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="icon icon-tabler icon-tabler-search"
//           width={16}
//           height={16}
//           viewBox="0 0 24 24"
//           strokeWidth={1}
//           stroke="#A0AEC0"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path stroke="none" d="M0 0h24v24H0z" />
//           <circle cx={10} cy={10} r={7} />
//           <line x1={21} y1={21} x2={15} y2={15} />
//         </svg>
//       </div>
//       <input
//         className=" mb-3 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-3"
//         type="text"
//         placeholder="Search"
//         value={searchcard}
//         onChange={hadleSearchcard}
//       />
//     </div>
//       </div>
//     <form className="overflow-y-scroll max-h-80">
    
//       <hr className="w-full" />
//         <div className="w-full overflow-y-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
         
//             {loading
//   ?
//   GetItemPermission.filter(element => {
//     if(searchcard === ""){
//       return element
//     }else if (element.name.toLowerCase().includes(searchcard.toLowerCase())){
//       return element;
//     }else{
      
//     }
//   }).map((element)=>(
//     <CardLtEdit key={element.id} name={element.name} Inicio={element.Inicio} Final={element.Final}  permiso={typeUsesState} /> 
//   )
//     )
  
//   : <SpinerLoader />}

//         </div>
//     </form>
//     <div className="flex items-center justify-between mt-9 ">
//       <button
//         onClick={handleShoweditModal}
//         className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
//       >
//         Cancel
//       </button>
//       <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
//         Add User
//       </button>
//     </div>
//   </div>
// )) : (
//   <SpinerLoader />
// )}