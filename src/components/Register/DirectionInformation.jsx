
export const DirectionInformation = ({title}) => {
    return (
      <>
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h1>
        <div className=" md:justify-between md:flex  ">
          <label className="block mt-4 text-sm mx-1">
            <span className="text-gray-700 dark:text-gray-400">
              Número teléfonico
            </span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
              placeholder="---- ----"
              type="password"
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Área</span>
            <select className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input">
              <option value="">-- Seleccione --</option>
              <option value="">+504</option>
              <option value="">+503</option>
            </select>
          </label>
        </div>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Dirección</span>
          <textarea
            cols="3"
            rows="3"
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          ></textarea>
        </label>
        <div className=" md:justify-between md:flex  ">
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Ciudad</span>
            <select className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input">
              <option value="">-- Seleccione --</option>
              <option value="">+504</option>
              <option value="">+503</option>
            </select>
          </label>
          <label className="block mt-4 text-sm mx-1">
            <span className="text-gray-700 dark:text-gray-400">País</span>
            <select className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input">
              <option value="">-- Seleccione --</option>
              <option value="">+504</option>
              <option value="">+503</option>
            </select>
          </label>
        </div>
      </>
    );
}
