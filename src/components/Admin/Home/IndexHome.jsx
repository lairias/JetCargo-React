import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCasilleroUser } from "../../../actions/lockersAction";
import { useVeryPermisso } from "../../../hooks/useVeryPermission";


export default function IndexHome() {
  /**********************************Variables State */
  const [shoModalconLokers, set_shoModalconLokers] = useState(false);
  const [shoModalsinLokers, set_shoModalsinLokers] = useState(false);
  /*************************************************** */

  /**********************************Variables Hooks */
  //importaciones de permisos
  const { permission, customer } = useSelector((state) => state.auth);
  const {  locker, loadingLokersUser } = useSelector((state) => state.locker);
  const [Crear_ad] = useVeryPermisso(permission, "admin.crear");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCasilleroUser(customer.COD_CUSTOMER));
  }, [dispatch]);
  /***************************************************  */

  /**********************************Variables funciones*/
  const handleModalConLokers = () => { set_shoModalconLokers(!shoModalconLokers);};
  const handleModalSinLokers = () => { set_shoModalsinLokers(!shoModalsinLokers);};
  /***************************************************  */
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">Inicio</h2>
          <div className=" my-6">
            {Crear_ad && loadingLokersUser && (<button
              onClick={
               locker?  (handleModalConLokers) : (handleModalSinLokers)
              }
              className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                {locker ? ("Casilleros"):("Crea tu casillero")}
              
              <span className="ml-2"> + </span>
            </button>)
            
             }
        </div>
      </div>
    </>
  );
}
