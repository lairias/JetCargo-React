import { useTypeUser } from "../../../../hooks/useTypeUser";
import { useUser } from "../../../../hooks/useUser";
import TcheckLt from "../../../Admin/TypeUsers/components/TcheckLt";
import { SpinerLoader } from "../../../Spinners/Loader";

export default function ModalEditTypeUser({ handleShoweditModal, _id }) {
  const { userToken } = useUser();
  const { typeUsesState, loading } = useTypeUser(userToken, _id);
  console.log(typeUsesState);
  return (
    <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
      <div
        onclick="popuphandler(false)"
        className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0"
      />
      <div className="mx-auto container">
        <div className="flex items-center justify-center h-full w-full">
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
            {loading ? (
              <div className="px-4 md:px-10  pt-6 md:pb-4 pb-7  ">
                <form>
                  <div className="flex items-center ">
                    <input
                      placeholder="Nombre Permiso"
                      type="text"
                      value={typeUsesState.role.NOM_TYPE}
                      min={0}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                  <hr className="w-full" />
                  <div className="rounded border-dashed border-2 border-gray-300   ">
                    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5   xl:grid-cols-6 ">
                      {loading
                        ? typeUsesState.permisos.map((element) => (
                            <TcheckLt key={element.COD_PERMISO} {...element}  />
                          ))
                        : "cargando "}
                    </div>
                  </div>
                </form>
                <div className="flex items-center justify-between mt-9 ">
                  <button
                    onClick={handleShoweditModal}
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                    Add User
                  </button>
                </div>
              </div>
            ) : (
              <SpinerLoader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
