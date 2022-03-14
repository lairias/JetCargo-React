import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";
import { showModal } from "./modal_Locker_Customer";
import toast from "react-hot-toast";

//Acciones para el login

//acciones para renovar token
export function GetCasilleroUser(_id) {
  return async function (dispatch) {
    const data = await fetchConToken(`locker/customer/${_id}`, {}, "GET");
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
    json.lockersInd.forEach((element) => {
      NumberArray.push(element.COD_LOCKER);
    });
    const randomIndex = Math.floor(Math.random() * NumberArray.length);
    const randomLockers = NumberArray[randomIndex];
    if (json.ok) {
      dispatch(
        StarCodLockerRandomCustomer({
          LockerCodRandom: randomLockers,
        })
      );
      dispatch(
        EndAddCasilleroUserCustomer({
          startloadingLoker: true,
        })
      );
    }
  };
}

export function AddLokersCustomers(COD_CUSTOMER, COD_LOCKER) {
  return async function (dispatch, getState) {
    const FRISTNAME = getState().auth.name;
    const LASTNAME = getState().auth.lastname;
    const EMAIL = getState().auth.email;
    const data = await fetchConToken(
      `locker/customer`,
      { COD_CUSTOMER, COD_LOCKER, FRISTNAME, LASTNAME, EMAIL },
      "POST"
    );
    const json = await data.json();
    if (json.ok) {
      const dataFect = async () => {
        const data1 = await fetchConToken(
          `locker/customer/${COD_CUSTOMER}`,
          {},
          "GET"
        );
        return await data1.json();
      };
      const callback = dataFect();
      callback.then((elemento) => {
        if (elemento.ok) {
          dispatch(
            CasilleroUser({
              lockerUser: elemento.locker,
            })
          );
          dispatch(
            EndAddCasilleroUserCustomer({
              startloadingLoker: false,
            })
          );
          dispatch(showModal(false));
          toast.promise(callback, {
            loading: "Enviando",
            success: "Email enviado",
            error: "Error al enviar email",
          });
        }
      });
    }
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

const StarCodLockerRandomCustomer = (data) => ({
  type: types.StartAddCasillerosCustomers,
  payload: data,
});
const EndAddCasilleroUserCustomer = (data) => ({
  type: types.EndAddCasillerosCustomers,
  payload: data,
});
