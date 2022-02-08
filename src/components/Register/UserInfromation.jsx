export const UserInfromation = ({ title, DatosCuente, set_DatosCuente }) => {
  return (
    <>
      <h1
        className="
  
        
        mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
      >
        {title}
      </h1>

      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">
          Correo electrónico
        </span>
        <input
          onChange={(e) => {
            set_DatosCuente({ ...DatosCuente, email: e.target.value });
          }}
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          placeholder="Email"
          type="text"
          value={DatosCuente.email}
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">
          Introduce tu contraseña
        </span>
        <input
          onChange={(e) => {
            set_DatosCuente({ ...DatosCuente, password: e.target.value });
          }}
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          placeholder="***************"
          type="password"
          value={DatosCuente.password}
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">
          Confirmar contraseña
        </span>
        <input
          onChange={(e) => {
            set_DatosCuente({ ...DatosCuente, confirpassword: e.target.value });
          }}
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          placeholder="*Confirm password*"
          type="password"
          value={DatosCuente.confirpassword}
        />
      </label>
      <div className="flex mt-6 text-sm"></div>
    </>
  );
};
