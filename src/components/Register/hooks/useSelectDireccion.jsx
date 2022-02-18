import { useState } from "react";

export const useSelectDireccion = (label, opciones, view) => {
  const [state, set_state] = useState("");
  const selectDireccion = () => (
    <>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">{label} </span>
        <select
          disabled={view ? false : true}
          onChange={({ target }) => {
            set_state(target.value);
          }}
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          name={label}
        >
          <option>-- Seleccione --</option>

          {opciones.map((item) => (
            <option key={item.COD} value={item.COD}>
              {item.NAME}
            </option>
          ))}
        </select>
      </label>
    </>
  );
  return [state, selectDireccion];
};
