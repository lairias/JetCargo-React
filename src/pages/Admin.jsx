import { useSelector } from "react-redux";
import { Dashboard } from "../components/Admin/Dashboard/Dashboard";
import View403  from "../components/Error/403";
export const Admin = ({ children }) => {
  const { permission } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex h-full  bg-gray-50 dark:bg-gray-900">
      {permission.includes("admin.view") ? (<Dashboard children={children} /> ) :( <View403 />)}
      </div>
    </>
  );
};
