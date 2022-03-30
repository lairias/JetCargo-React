import { types } from "../types/types";

//Acciones para el login
export function GetCustomerReception(DataCustomter) {
  return async function (dispatch) {
    //-----------Validaciones del input de formulario
    dispatch(checkingFinish({ modalOrdenPendiente:DataCustomter}));
  };
}

const checkingFinish = (reception) => ({
  type: types.GetOneOrdenByUser,
  payload: reception,
});


