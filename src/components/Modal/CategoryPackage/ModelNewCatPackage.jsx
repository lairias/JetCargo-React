import { useForms } from "../../../hooks/useForms";
import { useDispatch, useSelector } from "react-redux";
import { PostCategoryPackage } from "../../../actions/categorypackageAction";
import { Toaster } from "react-hot-toast";

export default function ModalNewCatPackage({ handleShoModal }) {
  /********************************Variables de State */
  const [{ NAM_CATPACKAGE, DES_CATPACKAGE }, handleInputChange] = useForms({
    NAM_CATPACKAGE: "",
    DES_CATPACKAGE: "",
  });
  /************************************************** */

  /********************************Variables de Hooks */
  const dispatch = useDispatch();
  /************************************************** */

  /********************************Variables de Funciones*/
  const { name } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostCategoryPackage(NAM_CATPACKAGE, DES_CATPACKAGE, name));
  };
  /************************************************** */
  return (
    <>
      <Toaster />
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">
                  Nueva categoria de paquetes
                </p>
                <button onClick={handleShoModal} className="focus:outline-none">
                  X
                </button>
              </div>
              <div className="px-4 md:px-10  md:pb-4 pb-7">
                <form className="mt-11" onSubmit={handleSubmit}>
                  <div className=" md:justify-between md:flex w-full md:px-2">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Nombre de categoria
                      </span>
                      <input
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Nombre del paquete"
                        name="NAM_CATPACKAGE"
                        value={NAM_CATPACKAGE}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="mt-8">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Descripcion de categoria
                      </span>
                      <textarea
                        name="DES_CATPACKAGE"
                        onChange={handleInputChange}
                        placeholder="Descripción"
                        className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"
                        defaultValue={DES_CATPACKAGE}
                      />
                    </label>
                  </div>
                </form>
                <div className="flex items-center justify-between mt-9">
                  <button
                    onClick={handleShoModal}
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
