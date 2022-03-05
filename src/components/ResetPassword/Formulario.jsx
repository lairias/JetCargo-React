export const Formulario = ({ set_resetpass }) => {
  return (
    <div className="w-full">
      <label className="block mt-4 text-sm">
        <span className="text-gray-800 dark:text-gray-800">
          Ingrese Correo Eletrónico
        </span>
        <input
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="correo@correo.com"
          onChange={(e) => set_resetpass(e.target.value)}
          type="email"
        />
      </label>
      <button
        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-800 focus:outline-none focus:shadow-outline-purple"
        type="submit"
      >
        Recuperar contraseña
      </button>
    </div>
  );
};
