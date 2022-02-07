import { useUser } from "../hooks/useUser";
import { Dashboard } from "../components/Admin/Dashboard/Dashboard";
import { Header } from "../components/Admin/Header/Header";
export const Admin = () => {
  return (
    <>
      <div
        className="flex h-screen bg-gray-50 dark:bg-gray-900"
        class="{ 'overflow-hidden': isSideMenuOpen}"
      >
        <Header />
        <Dashboard />
      </div>
    </>
  );
};
