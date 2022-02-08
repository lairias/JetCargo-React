export const Formulario = ({ set_resetpass, classreset }) => {
  return (
    <div className="w-full">
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"></h1>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">
          Ingrese Correo Eletrónico
        </span>
        <input
          className={`block w-full mt-1 text-sm  ${
            classreset
              ? "dark:bg-gray-700 focus:border-sky-400"
              : "dark:bg-red-200 border-red-800 handleSubmitborder-red-600"
          }  focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input`}
          placeholder="correo@correo.com"
          onChange={(e) => set_resetpass(e.target.value)}
          type="email"
        />
      </label>
      <button
        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple"
        type="submit"
      >
        Recuperar contraseña
      </button>
    </div>
  );
};
