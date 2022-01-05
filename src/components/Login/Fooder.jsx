import { NavLink } from "react-router-dom";

export const Fooder = () => {
  return (
    <>
      <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
        <i className="fab fa-github mx-2"></i>
        Github
      </button>
      <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
        <i className="fab fa-facebook-square mx-3"></i>
        Facebook
      </button>
      <p className="mt-4">
        <NavLink
          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          to="/reset-password"
        >
          Forgot your password?
        </NavLink>
      </p>
      <p className="mt-1">
        <NavLink
          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          to="/register"
        >
          Create account
        </NavLink>
      </p>
    </>
  );
};
