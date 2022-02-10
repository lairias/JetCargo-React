import { useEffect, useContext} from "react";
import Contex from "../context/users/Permission/PermissionContex"
import { Dashboard } from "../components/Admin/Dashboard/Dashboard";
export const Admin = ({children}) => {
  const {Permission} = useContext(Contex)
  console.log(Permission)
  return (
    <>
      <div
        className="flex h-screen bg-gray-50 dark:bg-gray-900"
        className="{ 'overflow-hidden': isSideMenuOpen}"
      >
        <Dashboard children={children} />
      </div>
    </>
  );
};
