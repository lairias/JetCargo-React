import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { GetCasilleroUser } from "../../../actions/lockersAction";
import { showModal } from "../../../actions/modal_Locker_Customer";
import ModalAddLockerCustomers from "../../Modal/Lockers/ModalAddLockerCustomers";
import CardList from "./components/CardList";

export default function IndexHome() {
  /**********************************Variables State */
  const [shoModalconLokers, set_shoModalconLokers] = useState(false);
  /*************************************************** */

  /**********************************Variables Hooks */
  //importaciones de permisos
  const { permission, customer } = useSelector((state) => state.auth);
  const { shoModalLockerCustomer } = useSelector(
    (state) => state.modal_Locker_Customer
  );
  const { lockerUser, loadingLokersUser } = useSelector(
    (state) => state.locker
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCasilleroUser(customer.COD_CUSTOMER));
  }, [dispatch]);
  /***************************************************  */

  /**********************************Variables funciones*/
  const handleModalConLokers = () => {
    set_shoModalconLokers(!shoModalconLokers);
  };
  const handleModalSinLokers = () => {
    dispatch(showModal(!shoModalLockerCustomer));
  };
  /***************************************************  */
  return (
    <>
      <Toaster />
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">Inicio</h2>
        <div className=" my-6">
          {permission.includes("admin.crear") &&
          loadingLokersUser &&
          lockerUser ? (
            ""
          ) : (
            <button
              onClick={lockerUser ? handleModalConLokers : handleModalSinLokers}
              className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              Crea tu casillero
              <span className="ml-2"> + </span>
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center  gap-7  sm:px-6 ">
        {  loadingLokersUser ? (
          lockerUser ? (
            lockerUser.map((item) => (
              <CardList key={item.COD_LOCKER} item={item} />
            ))
          ) : (
            <h2 className="my-6 text-2xl font-semibold text-gray-700">
              No cuenta con casillero
            </h2>
          )
        ) : (
          "Cargando"
        )}
      </div>
      {permission.includes("admin.crear") && shoModalLockerCustomer && (
        <ModalAddLockerCustomers
          isOpen={shoModalLockerCustomer}
          setIsOpen={handleModalSinLokers}
        />
      )}
    </>
  );
}
