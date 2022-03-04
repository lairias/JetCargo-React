import { types } from "../types/types";

export function DataSearInputClient(evento) {
  return async function (dispatch) {
    dispatch(
      DataSearchClient({
        data: evento,
      })
    );
  };
}

const DataSearchClient = (data) => ({
  type: types.DataSearchClient,
  payload: data,
});
