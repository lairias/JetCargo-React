export const SelectCity = ({ ApiCities }) => {
  return ApiCities.map((item) => (
    <option key={item.COD_CITY} value={item.COD_CITY}>
      {item.NAM_CITY}
    </option>
  ));
};
