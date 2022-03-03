import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

//Acciones para el login



//acciones para renovar token
export function GetCasilleroUser(_id) {
    return async function (dispatch) {
      const data = await fetchConToken(`locker/customer/${_id}`,{},"GET");
      const json = await data.json();
      if(json.ok){
        dispatch(CasilleroUser({
            locker: json.locker
      }));
      }else{
        dispatch(CasilleroUser({
          locker: json.locker
    }));
      }
    };
  }

const CasilleroUser = (Casellero) => ({
  type: types.GetCasilleroUser,
  payload: Casellero,
});
