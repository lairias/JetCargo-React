export default function TcheckLt({ NAM_PERMISOS, COD_PERMISO }) {
  return (
    <div className="py-4 flex items-center">
      <div className="form-check">
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <p className=" text-base  font-normal text-white ">{NAM_PERMISOS} </p>
      </div>
    </div>
  );
}
