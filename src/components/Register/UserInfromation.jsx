
export const UserInfromation = ({title}) => {
  
    return (
      <>
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h1>

        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Email</span>
          <input
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="Email"
            type="text"
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Password</span>
          <input
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="***************"
            type="password"
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Confirm password
          </span>
          <input
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="*Confirm password*"
            type="password"
          />
        </label>
        <div className="flex mt-6 text-sm">
          <label className="flex items-center dark:text-gray-400">
            <input
              type="checkbox"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            />
            <span className="ml-2">
              I agree to the
              <span className="underline">privacy policy </span>
            </span>
          </label>
        </div>
      </>
    );
}
