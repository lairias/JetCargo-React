import TbabgeLt from "./TbabgeLt";

export default function CardLt({ permiso, Inicio, Final, search = "", name }) {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded  flex justify-center shadow py-3">
        <div className=" items-center">
          <h3 className="font-normal  text-center leading-4 text-gray-800 dark:text-gray-100 text-base">
            {" "}
            {name}{" "}
          </h3>
          <div className=" mx-auto">
            <div className="block mt-4">
              {permiso.permisos
                .filter((element) => {
                  if (search === "") {
                    return element;
                  } else if (
                    element.NAM_PERMISOS.toLowerCase().includes(
                      search.toLowerCase()
                    )
                  ) {
                    return element;
                  }
                })
                .map(
                  (element) =>
                    element.COD_PERMISO >= Inicio &&
                    element.COD_PERMISO <= Final && (
                      <TbabgeLt
                        key={element.NAM_PERMISOS}
                        NAM_PERMISOS={element.NAM_PERMISOS}
                      />
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
