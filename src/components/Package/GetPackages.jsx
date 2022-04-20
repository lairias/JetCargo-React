import { NavLink } from "react-router-dom";
import box from "../../img/box-1299001_1280.png";
import moment from "moment";
export const GetPackages = ({ items }) => {
  return (
    <>
      <div className="w-64 p-4  rounded border hover:shadow-lg bg-white">
        <div className="flex justify-center">
          {items.RECEIVED_TRACKING === "PENDING" ? (
            <div className="py-2.5 px-5 my-2 bg-red-100 rounded-full w-full text-xs leading-3 text-red-500  sm:w-auto text-center">
              Pendiente
            </div>
          ) : items.RECEIVED_TRACKING === "RECEIVED" ? (
            <div className="py-2.5 px-5 bg-red-100 rounded-full w-full text-xs leading-3 text-yellow-500  sm:w-auto text-center">
              Recibido
            </div>
          ) : items.RECEIVED_TRACKING === "IN_PROGRESS" ? (
            <div className="py-2.5 px-5 bg-red-100 rounded-full w-full text-xs leading-3 text-sky-500  sm:w-auto text-center">
              En progreso
            </div>
          ) : (
            items.RECEIVED_TRACKING === "DELIVERED" && (
              <div className="py-2.5 px-5 bg-red-100 rounded-full full text-xs leading-3 text-green-500  sm:w-auto text-center">
                Entregado
              </div>
            )
          )}
        </div>
        <div className="flex justify-center items-center flex-col ">
          <div>
            <img height="150" width="150" src={box} alt="avatar-3" />
          </div>
          <div className="flex justify-center items-center flex-col mt-3">
            <p className="text-sm font-medium leading-none text-gray-800">
              Número Tracking
            </p>
            <p className="text-sm font-medium leading-none text-gray-600 mt-1">
              {items.NUM_TRACKING}
            </p>
          </div>
        </div>
        <div className="md:flex items-center text-center md:justify-between mt-8">
          <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between">
            <div className="text-xs text-center  bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
              {moment(items.DAT_ADD).subtract(10, "days").calendar()}
            </div>
            <div className="mt-4 text-center w-full lg:mt-0 text-xs bg-red-200 text-red-500 rounded font-medium p-3">
            {moment(items.DAT_ADD).subtract(10, "days").calendar()}
            </div>
          </div>
        </div>
        <p className="text-sm leading-none text-center text-gray-600 my-3">
          #{items.NUM_PACKAGE}
        </p>
        <div className="w-56 h-9">
          {items.RECEIVED_TRACKING === "PENDING" ? (
            ""
          ) : items.RECEIVED_TRACKING === "RECEIVED" ? (
            <NavLink
              to={`/admin/locker/${items.NUM_LOCKER}/${items.COD_LOCKER}/packages/pay/${items.COD_PACKAGE}/${items.COD_TRACKING}`}
              role="button"
              aria-label="message"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200"
            >
              <p className="text-sm font-medium leading-none text-gray-600">
                Pago
              </p>
            </NavLink>
          ) : items.RECEIVED_TRACKING === "IN_PROGRESS" ? (
            <NavLink
              to={`/admin/locker/${items.NUM_LOCKER}/${items.COD_LOCKER}/packages/${items.COD_PACKAGE}/${items.COD_TRACKING}`}
              role="button"
              aria-label="message"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200"
            >
              <p className="text-sm font-medium leading-none text-gray-600">
                Seguimiento
              </p>
            </NavLink>
          ) : (
            items.RECEIVED_TRACKING === "DELIVERED" && (
              <p className="text-sm font-medium leading-none text-gray-600">
                Entregado
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
};
