import { useState } from "react";

export const SelectDisplay = ({ showItem, setswoItem }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-white  flex justify-between border rounded w-40"
        onClick={() => setShow(!show)}
      >
        <p className="px-3 py-3 text-gray-600  text-sm leading-3 tracking-normal font-normal">
          Mostrar
        </p>
        <div className="bg-white  items-center flex rounded-r border-gray-300 border-l">
          <div className="cursor-pointer text-gray-600  mx-3">
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-up"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 15 12 9 18 15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-up"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {show && (
        <ul className="visible transition duration-300 opacity-100 bg-white   shadow rounded mt-2 py-1 w-48 absolute">
          <li
            onClick={(e) => {
              setswoItem({ ...showItem, nombre: !showItem.nombre });
            }}
            className={`cursor-pointer
            ${showItem.nombre ? "text-gray-600" : "text-sky-400 bg-gray-500"}
            text-sm leading-3 tracking-normal py-3  px-3 flex items-center font-normal`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
            <span className="ml-2">Nombre</span>
          </li>
          <li
            onClick={(e) => {
              setswoItem({ ...showItem, Modelo: !showItem.Modelo });
            }}
            className={`cursor-pointer
          ${showItem.Modelo ? "text-gray-600" : "text-sky-400 bg-gray-500"}
          text-sm leading-3 tracking-normal py-3  px-3 flex items-center font-normal`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
            <span className="ml-2">Modedador</span>
          </li>
          <li
            onClick={(e) => {
              setswoItem({ ...showItem, Cantidad: !showItem.Cantidad });
            }}
            className={`cursor-pointer
          ${showItem.Cantidad ? "text-gray-600" : "text-sky-400 bg-gray-500"}
          text-sm leading-3 tracking-normal py-3  px-3 flex items-center font-normal`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
            <span className="ml-2">Cantidad</span>
          </li>
          <li
            onClick={(e) => {
              setswoItem({ ...showItem, Fecha: !showItem.Fecha });
            }}
            className={`cursor-pointer
          ${showItem.Fecha ? "text-gray-600" : "text-sky-400 bg-gray-500"}
          text-sm leading-3 tracking-normal py-3  px-3 flex items-center font-normal`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
            <span className="ml-2">Fecha</span>
          </li>
        </ul>
      )}
    </div>
  );
};
