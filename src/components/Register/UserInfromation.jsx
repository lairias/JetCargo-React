export const UserInfromation = ({
  title,
  DatosCuente,
  set_DatosCuente,
  onChange,
}) => {
  return (
    <>
      <h1
        className="
        mb-4 text-xl font-semibold text-gray-700 dark:text-gray-800"
      >
        {title}
      </h1>

      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">
          Correo electrónico
        </span>
        <input
          onChange={(e) => {
            set_DatosCuente({ ...DatosCuente, email: e.target.value });
          }}
          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email"
          type="text"
          value={DatosCuente.email}
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">
          Introduce tu contraseña
        </span>
        <input
          onChange={(e) => {
            set_DatosCuente({ ...DatosCuente, password: e.target.value });
          }}
          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="***************"
          type="password"
          value={DatosCuente.password}
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">
          Confirmar contraseña
        </span>
        <input
          onChange={(e) => {
            set_DatosCuente({ ...DatosCuente, confirpassword: e.target.value });
          }}
          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="*Confirm password*"
          type="password"
          value={DatosCuente.confirpassword}
        />
      </label>
      <label className="block mt-4 text-sm"></label>

      <div className="flex mt-6 text-sm"></div>
    </>
  );
};
