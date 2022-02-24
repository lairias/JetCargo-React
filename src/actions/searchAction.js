import { types } from "../types/types"

export function DataSearInput(evento){
    return async function (dispatch){
        dispatch(DataSearch({
            data: evento
        }))
    }
}

const DataSearch=(data)=>({
    type:types.DataSearch,
    payload: data
})