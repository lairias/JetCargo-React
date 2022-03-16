import { fetchConToken } from "../util/fetch";

export async function GetSeguridadID(_id,set_seguridadDolar) {
  
    const data = await fetchConToken(`seguridad/${_id}`, {}, "GET");
    const json = await data.json();

    console.log(json);
    if (json.ok){
        set_seguridadDolar(data.permiso)
    }
  
}

