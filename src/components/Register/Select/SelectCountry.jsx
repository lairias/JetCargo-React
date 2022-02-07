export const SelectCountry = ({ ApiCountry }) => {
  return ApiCountry.map((item) => (
    <option key={item.COD_COUNTRY} value={item.COD_COUNTRY}>
      {" "}
      {item.NAM_COUNTRY}{" "}
    </option>
  ));
};
