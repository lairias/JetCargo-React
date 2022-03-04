import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { SpinerLoader } from "../../../components/Spinners/Loader";
export const ModalNewPackage = ({ handleShoModal }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategoryPackage());
  }, [dispatch]);

  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );

  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Create New User</p>
                <button onClick={handleShoModal} className="focus:outline-none">
                  X
                </button>
              </div>
              <div className="px-4 md:px-10  md:pb-4 pb-7">
                <form className="mt-11">
                  <div className=" md:justify-between md:flex w-full md:px-2">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Nombre del paquete
                      </span>
                      <input
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Nombre del paquete"
                        name="text"
                      />
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Número de tranking
                      </span>
                      <input
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Numero de tracking"
                        name="text"
                      />
                    </label>
                  </div>
                  <div className="md:justify-between md:flex">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Correo electrónico
                      </span>
                      <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option selected disabled value>
                          Número de Casillero
                        </option>
                        <option>#61801</option>
                        <option>#62804</option>
                      </select>
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Tipo de paquete
                      </span>
                      <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option selected disabled value>
                          --- ---
                        </option>
                        {loading ? (
                          categoryPackage &&
                          categoryPackage.map((category) => (
                            <>
                              Category
                              <option value={category.COD_CATPACKAGE}>
                                {category.NAM_CATPACKAGE}{" "}
                              </option>
                            </>
                          ))
                        ) : (
                          <SpinerLoader />
                        )}
                      </select>
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Tipo de envio
                      </span>
                      <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option selected disabled value>
                          Category
                        </option>
                        <option>Aéreo</option>
                        <option>Maritimo</option>
                        <option>Expres</option>
                      </select>
                    </label>
                  </div>
                  <div className="mt-8">
                    <textarea
                      placeholder="Description"
                      className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"
                      defaultValue={""}
                    />
                  </div>
                </form>
                <div className="flex items-center justify-between mt-9">
                  <button
                    onClick={handleShoModal}
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
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
};
