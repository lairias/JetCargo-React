import toast from "react-hot-toast";

export const PeopleInformation = ({
  title,
  DatosPersonales,
  set_DatosPersonales,
}) => {
  const FechaNacimiento = (e) => {
    var hoy = new Date();
    var cumpleanos = new Date(e.target.value);
    var age = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      age--;
    }
    if (age < 18) {
      toast.error("No puede ingresar una persona menor de edad");
      return "";
    }
    return age;
  };

  return (
    <>
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-400">
            Identificación
          </span>
          <input
            onChange={(e) => {
              set_DatosPersonales({
                ...DatosPersonales,
                identificacion: e.target.value,
              });
            }}
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            placeholder="---- ----"
            type="text"
            value={DatosPersonales.identificacion}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Tipo documento
          </span>
          <select
            onChange={(e) => {
              set_DatosPersonales({
                ...DatosPersonales,
                tipodocumento: e.target.value,
              });
            }}
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            value={DatosPersonales.tipodocumento}
          >
            <option value="">-- Seleccione --</option>
            <option value="ID">ID</option>
            <option value="PASSPORT">PASSPORT</option>
            <option value="LICENSE">LICENSE</option>
          </select>
        </label>
      </div>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Nombre</span>
        <input
          onChange={(e) => {
            set_DatosPersonales({ ...DatosPersonales, nombre: e.target.value });
          }}
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          type="text"
          value={DatosPersonales.nombre}
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Segundo Nombre</span>
        <input
          onChange={(e) => {
            set_DatosPersonales({
              ...DatosPersonales,
              segundoNombre: e.target.value,
            });
          }}
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          type="text"
          value={DatosPersonales.segundoNombre}
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Apellido</span>
        <input
          onChange={(e) => {
            set_DatosPersonales({
              ...DatosPersonales,
              apellido: e.target.value,
            });
          }}
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          type="text"
          value={DatosPersonales.apellido}
        />
      </label>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Fecha Nacimiento
          </span>
          <input
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            type="date"
            onChange={(e) => {
              set_DatosPersonales({
                ...DatosPersonales,
                fechaNacimiento: e.target.value,
                añoNacimiento: FechaNacimiento(e),
              });
            }}
            value={DatosPersonales.fechaNacimiento}
          />
        </label>
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-400">Edad</span>
          <input
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            type="text"
            value={DatosPersonales.añoNacimiento}
            readOnly
          />
        </label>
      </div>
    </>
  );
};
