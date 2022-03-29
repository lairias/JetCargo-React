import { SpinerLoader } from "../../../Spinners/Loader";
import CardLtEdit from "../../../Admin/TypeUsers/components/CardLtEdit";
import { useTypeUser } from "../../../../hooks/useTypeUser";
import { usePermissionUser } from "../../../../hooks/usePermission";
import { useCallback, useEffect, useState } from "react";
export default function ModalEditTypeUser({ handleShoweditModal, _id }) {
  //variables de States
  const [selecChecked, setselectChecked] = useState([]);
  //----------------------------------------------------
  //variables de dispach
  //----------------------------------------------------
  //variables de Hooks
  const [TodosPermisos, cargando] = usePermissionUser();
  const { typeUsesState, loading } = useTypeUser(_id);

  useEffect(() => {
    if (loading) {
      typeUsesState.permisosmap((element) =>
        setselectChecked((data) => [...data, element.COD_PERMISO])
      );
    }
  }, [setselectChecked, typeUsesState, loading, cargando]);
  //----------------------------------------------------
  //Variables de funciones

  //----------------------------------------------------

  return (
    <div className="z-50 fixed w-full flex h-screen justify-center inset-0">
      <div className="w-full  bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
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
                X
              </button>
            </div>
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
              <div
                className={`w-full 
              ${loading && cargando ? "h-96" : "h-auto"}
              overflow-x-scroll xl:overflow-x-hidden`}
              >
                <table className="min-w-full bg-white ">
                  <thead>
                    <tr className="w-full h-16  dark:border-gray-200 border-b py-8">
                      <th className=" dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        Campo de selección
                      </th>

                      <th className=" dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        Descripcion Permiso
                      </th>
                      <th className=" dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        Tipo Permiso
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading && cargando ? (
                      TodosPermisos &&
                      TodosPermisos.PermissionUser.map((element) => (
                        <CardLtEdit
                          key={element.COD_PERMISO}
                          typeUsesState={typeUsesState}
                          element={element}
                          selecChecked={selecChecked}
                          setselectChecked={setselectChecked}
                        />
                      ))
                    ) : (
                      <SpinerLoader />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
              <button className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Guardar cambios <span className="ml-2">+</span>
              </button>
              <button className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Cancelar <span className="ml-2">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
