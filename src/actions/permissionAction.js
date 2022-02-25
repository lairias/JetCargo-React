import toast from "react-hot-toast";
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
export function Startgetpermision(COD_TYPEUSERS){
    return async function (dispatch) {
        const data = await fetchConToken(`roles/${COD_TYPEUSERS}`,{},'GET');
        const json = await data.json();
        if(json.ok){

            dispatch(GetPermission({
                typeUsesState: json,
            }));
        }else{
            toast.error(`Error de peticion`, { duration: 3000 });
        }
    }
}
export function Starteditpermision(COD_TYPEUSERS){
    return async function (dispatch) {
        debugger
        const data = await fetchConToken(`roles/${COD_TYPEUSERS}`,{},'GET');
        const json = await data.json();
        console.log(json)
        debugger
        if(json.ok){
            
            dispatch(GetPermissionEdit({
                typeUsesEditState: json,
            }));
            debugger
        }else{
            toast.error(`Error de peticion`, { duration: 3000 });
        }
    }
}

const GetAllPermission =(permisos)=>({
    type:types.GetAllPermission,
    payload: permisos
})
const GetPermission =(permisos)=>({
    type:types.GetAPermission,
    payload: permisos
})
const GetPermissionEdit =(permisos)=>({
    type:types.GetAPermissionEdit,
    payload: permisos
})
