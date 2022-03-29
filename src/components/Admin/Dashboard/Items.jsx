import { useSelector } from "react-redux";
import { SidebarData } from "../../../service/ServiceItemsDashboard";
import { SubItems } from "./SubItems";
export const Items = () => {
  const { permission } = useSelector((state) => state.auth);
  return (
    <>
      <div className="absolute  lg:relative w-64 px-11 shadow bg-gray-100 hidden lg:block">
        <div className="h-16 w-full flex items-center px-8">
          <img
            src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start items-center border-b border-gray-600 w-full  ">
          {SidebarData.map(
            (element, Dindex) =>
              permission.includes(element.cant) && (
                <SubItems item={element} key={Dindex} />
              )
          )}
        </div>
      </div>
    </>
  );
};
