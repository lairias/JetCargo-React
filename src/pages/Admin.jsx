import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../components/Admin/Dashboard/Dashboard";
import View403 from "../components/Error/403";
import {ModalEditpassword} from "../components/ForgotPassword/ModalEditpassword";
export const Admin = ({ children }) => {
  const { permission,IND_INS,id } = useSelector((state) => state.auth);
  const history = useNavigate();

  return (
    <>
      <div className="flex h-full  bg-gray-50 dark:bg-gray-900">
        {permission.includes("admin.view") ? (
          <Dashboard children={children} />
        ) : (
          <View403 />
        )}
      </div>
      {IND_INS ?(null ):(<ModalEditpassword id={id} />)}
    </>
  );
};
