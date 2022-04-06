export default function CardLtEdit({
  element,
  permisos,
  setselectChecked,
  selecChecked,
}) {
  const handleSelect = (e) => {
    const datos = selecChecked.filter(
      (element) => element !== parseInt(e.target.value)
    );
    setselectChecked(datos);
  };

  return (
    <>
      <tr className="h-12  dark:border-gray-200 border-b">
        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm  dark:text-gray-800 tracking-normal leading-4">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-sky-500 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value={element.COD_PERMISO}
            onChange={handleSelect}
            defaultChecked={permisos.some(
              (element2) => element2.COD_PERMISO === element.COD_PERMISO
            )}
          />
        </td>
        <td className="text-sm pr-6 whitespace-no-wrap  dark:text-gray-800 tracking-normal leading-4">
          {element.NAM_PERMISOS}
        </td>
        <td className="text-sm pr-6 whitespace-no-wrap  dark:text-gray-800 tracking-normal leading-4">
          {element.DES_PERMISOS}
        </td>
      </tr>
    </>
  );
}
