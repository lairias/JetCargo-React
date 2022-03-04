import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

//Acciones para el login

//acciones para renovar token
export function GetCasilleroUser(_id) {
  return async function (dispatch) {
    const data = await fetchConToken(`locker/customer/${_id}`, {AddcasilleroCustomers:false}, "GET");
    const json = await data.json();
    if (json.ok) {
      dispatch(
        CasilleroUser({
          lockerUser: json.locker,
        })
      );
    } else {
      dispatch(
        CasilleroUser({
          lockerUser: json.locker,
        })
      ); 
    }
  };
}

export function StarCodLockerRandom() {
  return async function (dispatch, getState) {
    const NumberArray = new Array();
    const data = await fetchConToken(`locker/ind`, {}, "GET");
    const json = await data.json();
    json.lockersInd.forEach(element => {
      NumberArray.push(element.COD_LOCKER);
    });
    const randomIndex = Math.floor(
      Math.random() * NumberArray.length
    );
    const randomLockers = NumberArray[randomIndex];
  // console.log(getState().locker.loadingLokersUser);
    if (json.ok) {
    dispatch(
      StarCodLockerRandomCustomer({
        COD_LOCKER_RANDOM: randomLockers,
        })
      );
    };
  };
}
export function EndAddCasilleroUser() {
  return async function (dispatch, getState) {
    const data = await fetchConToken(`locker/ind`, {}, "GET");
    const json = await data.json();
    console.log(getState())
  // console.log(getState().locker.loadingLokersUser);
    if (json.ok) {
    dispatch(
      EndAddCasilleroUserCustomer({
        
        })
      );
    };
  };
}

const CasilleroUser = (Casellero) => ({
  type: types.GetCasilleroUser,
  payload: Casellero,
});
const AddCasilleroUser = (Casellero) => ({
  type: types.GetCasilleroUser,
  payload: Casellero,
});
const StarCodLockerRandomCustomer = (CaselleroRandom) => ({
  type: types.StartAddCasillerosCustomers,
  payload: CaselleroRandom,
});
const EndAddCasilleroUserCustomer = () => ({
  type: types.EndAddCasillerosCustomers,
});

