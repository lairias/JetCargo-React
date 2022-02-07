export const SelectState = ({ ApiState }) => {
  return ApiState.map((item) => (
    <option key={item.COD_STATE} value={item.COD_STATE}>
      {item.NAM_STATE}
    </option>
  ));
};
