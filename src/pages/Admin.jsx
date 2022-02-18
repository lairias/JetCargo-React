import { Dashboard } from "../components/Admin/Dashboard/Dashboard";
import { useUser } from "../hooks/useUser";
import { useVeryPermisso } from "../hooks/useVeryPermission";
export const Admin = ({ children }) => {
  const { permission } = useUser();
  const [dato]= useVeryPermisso(permission, "admin.view");
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {dato ? ( <Dashboard children={children} />): (<h1 >No permitido </h1> )}
        
      </div>
    </>
  );
};
