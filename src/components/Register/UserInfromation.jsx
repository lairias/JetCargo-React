
export const UserInfromation = () => {
    return (
      <div>
        <div className="py-2">
          <label className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
        </div>
        <div className="grid gap-5 grid-cols- md:grid-cols-2 lg:grid-cols-2">
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Contaseña
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Confirmar Contaseña
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
        </div>
      </div>
    );
}
