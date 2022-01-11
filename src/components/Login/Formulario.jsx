import { NavLink, Navigate} from "react-router-dom";
export const Formulario = ({
  classemail,
  email,
  set_email,
  set_password,
  classpassword,
}) => {
  return (
    <>
      <div className="w-full">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          Login
        </h1>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Email 
          </span>
          <input
            className={`block w-full mt-1 text-sm  ${
              classemail
                ? "dark:bg-gray-700 focus:border-purple-400"
                : "dark:bg-red-200  border-red-600 "
            }  focus:outline-none focus:shadow-outline-purple dark:text-black dark:focus:shadow-outline-gray form-input`}
            placeholder="Email"
            type="text"
            onChange={(e) => {
              set_email(e.target.value);
            }}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Password</span>
          <input
            className={`block w-full mt-1 text-sm  ${
              classpassword
                ? "dark:bg-gray-700 focus:border-purple-400"
                : "dark:bg-red-300 focus:border-red-600 border-red-600"
            }  focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input`}
            placeholder="***************"
            type="password"
            onChange={(e) => {
              set_password(e.target.value);
            }}
          />
        </label>
        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Log in
        </button>
        <hr className="my-8" />
        <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
          <i classname="fab fa-github mx-2" />
          Github
        </button>
        <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
          <i className="fab fa-facebook-square mx " />
          Twitter
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
      </div>
    </>
  );
};
