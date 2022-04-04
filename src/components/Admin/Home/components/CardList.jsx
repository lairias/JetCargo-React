import { Link } from "react-router-dom";
import Logo from "../../../../img/Tag.svg";
import { useState } from "react";
import ModalInfoLocker from "../../../Modal/Lockers/ModalInfoLocker";

export default function CardList({ item }) {
  const [shomodal, set_shoModal] = useState(false);

  const handleShoModal = () => {
    set_shoModal(!shomodal);
  };

  return (
    <>
      <div className="w-64 p-4  rounded border hover:shadow-lg bg-white">
        <div className="flex justify-end">
          <button onClick={handleShoModal}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <div>
            <img src={Logo} alt="avatar-3" />
          </div>
          <div className="flex justify-center items-center flex-col my-3">
            <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-800">JetCargo/
            </p>
            <p className="text-sm font-bold  text-gray-800">
              {item.NUM_LOCKER}
            </p>
            </div>
            
            <p className="text-sm font-medium leading-none text-gray-800">
              {item.TYP_LOCKER}
            </p>
            <p className="text-sm font-medium leading-none text-gray-800">
              {item.ADDRES_LOCKER}
            </p>
            <p className="text-sm font-medium leading-none text-gray-800">
              Tel. {item.TEL_LOCKER}
            </p>
          </div>
        </div>
        <div className="w-56 h-9">
          <Link
            to={`/admin/locker/${item.NUM_LOCKER}/${item.COD_LOCKER}/packages/`}
            role="button"
            aria-label="message"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-300 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-500"
          >
            <p className="text-sm font-medium leading-none text-gray-600">
              Seguimiento
            </p>
          </Link>
        </div>
      </div>
      {shomodal && (
        <ModalInfoLocker
          isOpen={shomodal}
          setIsOpen={set_shoModal}
          item={item}
        />
      )}
    </>
  );
}
