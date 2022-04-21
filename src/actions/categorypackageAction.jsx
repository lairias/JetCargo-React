import toast from "react-hot-toast";
import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";
import {
  nombre_CategoriPaquete,
  descripcion_CategoriPaquete,
} from "../components/validations";

export function GetAllCategoryPackage(type = false) {
  return async function (dispatch) {
    const data = await fetchConToken("catpackage/ind", {}, "GET");
    const json = await data.json();
    if (type) {
      const DataArray = new Array();
      json.catPackage.forEach((element) => {
        DataArray.push({
          value: element.COD_CATPACKAGE,
          label: element.DES_CATPACKAGE + " - " + element.NAM_CATPACKAGE,
        });
      });
      dispatch(
        GetDataCategoryPackage({
          categoryPackage: DataArray,
        })
      );
    } else {
      if (json.ok) {
        dispatch(
          GetDataCategoryPackage({
            categoryPackage: json.catPackage,
          })
        );
      }
    }
  };
}
export function GetCategoryPackage(IdShoModal) {
  return async function (dispatch) {
    const data = await fetchConToken(`catpackage/${IdShoModal}`, {}, "GET");
    const json = await data.json();
    if (json.ok) {
      dispatch(
        GetDataOneCategoryPackage({
          GetcategoryPackage: json.catPackage,
        })
      );
    }
  };
}
export function PostCategoryPackage(NAM_CATPACKAGE, DES_CATPACKAGE, name) {
  return async function (dispatch) {
    const DataNombre = await nombre_CategoriPaquete
      .validate({ nombre: NAM_CATPACKAGE })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    const DataDescripcion = await descripcion_CategoriPaquete
      .validate({ descripcion: DES_CATPACKAGE })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    if (DataDescripcion && DataNombre) {
      const FetchData = async () => {
        return await fetchConToken(
          "catpackage",
          {
            NAM_CATPACKAGE,
            DES_CATPACKAGE,
            USR_ADD: name,
          },
          "POST"
        );
      };
      const callback = FetchData();
      toast
        .promise(callback, {
          loading: "Enviando",
          success: "Dato guardado",
          error: "Correo electrónico no valido",
        })
        .then((_) => dispatch(PostDataCategoryPackage({})));
    }
  };
}

const PostDataCategoryPackage = () => ({
  type: types.PostCategoryPackage,
});
const GetDataCategoryPackage = (data) => ({
  type: types.GetAllCategoryPackage,
  payload: data,
});
const GetDataOneCategoryPackage = (data) => ({
  type: types.GetCategoryPackage,
  payload: data,
});
