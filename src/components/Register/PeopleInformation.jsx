export const PeopleInformation = () =>
{
    return (
      <>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Primer Nombre
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Segundo Nombre
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Primer Apellido
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Segundo Apellido
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Identificación
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              RTN
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
        </div>

      </>
    );
};
