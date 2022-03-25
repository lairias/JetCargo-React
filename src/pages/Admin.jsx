import { useSelector } from "react-redux";
import { Dashboard } from "../components/Admin/Dashboard/Dashboard";
import { useVeryPermisso } from "../hooks/useVeryPermission";
import View403  from "../components/Error/403";
export const Admin = ({ children }) => {
  const { permission } = useSelector((state) => state.auth);
  const [dato] = useVeryPermisso(permission, "admin.view");
  if (!dato) {
    return <View403 />;
  }

  return (
    <>
      <div className="flex h-full  bg-gray-50 dark:bg-gray-900">
 <Dashboard children={children} />
      </div>
    </>
  );
};
