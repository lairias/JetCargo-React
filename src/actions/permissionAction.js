import {types} from "../types/types";
import {fetchConToken} from "../util/fetch";

export function Startgetallpermission(){
    return async function (dispatch) {
        const data = await fetchConToken('roles',{},'GET');
        const json = await data.json();
        if(json.ok){
            dispatch(GetAllPermission({
                role: json.role
            }));
        }else{
            console.log("error dentro del proceso")
        }
    }
}

const GetAllPermission =(permisos)=>({
    type:types.GetAllPermission,
    payload: permisos
})
