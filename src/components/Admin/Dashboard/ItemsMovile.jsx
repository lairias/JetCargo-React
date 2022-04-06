import { useSelector } from "react-redux";
import { SidebarData } from "../../../service/ServiceItemsDashboard";
import { SubItems } from "./SubItems";
export const ItemsMovile = ({ setShow, show }) => {
  const { permission } = useSelector((state) => state.auth);
  return (
    <>
      {" "}
      <div
        className={
          show
            ? "w-full h-full absolute z-40  transform  translate-x-0 "
            : "   w-full h-full absolute z-40  transform -translate-x-full"
        }
        id="mobile-nav"
      >
        <div
          className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
          onClick={() => setShow(!show)}
        />
        <div className="absolute  z-40 sm:relative w-64  shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              <div className="flex items-center justify-between px-8">
                <div className="h-16 w-full flex items-center">
                  <img
                    src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"
                    alt=""
                  />
                </div>
                <div
                  id="closeSideBar"
                  className="flex items-center justify-center h-10 w-10 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-x"
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
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center  w-full mx-4  ">
                {SidebarData.map((element, Dindex) =>  permission.includes(element.cant) && (
                    <SubItems item={element} Dindex={Dindex} key={Dindex} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
