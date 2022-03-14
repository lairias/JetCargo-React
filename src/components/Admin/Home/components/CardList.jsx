import { Link, NavLink } from "react-router-dom";
import Logo from "../../../../img/Tag.svg";

export default function CardList({ item }) {
  return (
    <>
      <div className="w-64 p-4  rounded border hover:shadow-lg bg-white">
        <div className="flex justify-center items-center flex-col ">
          <div>
            <img src={Logo} alt="avatar-3" />
          </div>
          <div className="flex justify-center items-center flex-col my-3">
            <p className="text-sm font-medium leading-none text-gray-800">
              {item.NUM_LOCKER}
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
    </>
  );
}
