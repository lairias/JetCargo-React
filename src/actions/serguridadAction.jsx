import { fetchConToken } from "../util/fetch";
export function GetSeguridadID(_id,set_seguridadDolar){
  return async function (dispatch) {
  
    const data = await fetchConToken(`seguridad/${_id}`,{}, "GET");
    const json = await data.json();
    console.log(data)
    if(json.ok){
      set_seguridadDolar(json.permiso);
    }
  }
}