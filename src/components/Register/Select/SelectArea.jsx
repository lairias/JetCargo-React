export const SelectArea = ({ ApiCountry }) => {
  return ApiCountry.map((item) => (
    <option key={item.COD_COUNTRY} value={item.AREA_COUNTRY}>
      {" "}
      + {item.AREA_COUNTRY}{" "}
    </option>
  ));
};
