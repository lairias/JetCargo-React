import { useState } from "react";
import { NavLink } from "react-router-dom";
export const SubItems = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <button
        onClick={item.subNav && showSubnav}
        className="focus:outline-none focus:text-sky-400  text-gray-700 flex justify-between items-center w-full py-5 space-x-14  "
      >
        <div className="flex justify-between w-60">
          {item.icon}
          <p className="text-sm leading-5  uppercase"> {item.title} </p>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </button>
      <div
        id="menu1"
        className={`${
          showSubnav ? "flex" : "hidden"
        } justify-start  flex-col w-full md:w-auto items-start pb-1 `}
      >
        {subnav &&
          item.subNav.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex justify-start items-center space-x-6 mb-1 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-sky-700 text-gray-400 rounded px-3 py-2 w-60 "
            >
              {item.icon}
              <p className="text-base leading-4"> {item.title} </p>
            </NavLink>
          ))}
      </div>
    </>
  );
};
