import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

//Acciones para el login
export function GetCustomerReception(ruta,setTask,) {
  return async function (dispatch) {
    
    const data = await fetchConToken(ruta, {}, "GET");
    const json = await data.json();
    if (json.ok) {

        setTask({ HEIGHT_PACKAGE: json.tracking[0].HEIGHT_PACKAGE === null ? 0 : json.tracking[0].HEIGHT_PACKAGE,
        WIDTH_PACKAGE: json.tracking[0].WIDTH_PACKAGE === null ? 0 : json.tracking[0].WIDTH_PACKAGE,
      WEIGHT_PACKAGE: json.tracking[0].WEIGHT_PACKAGE === null ? 0 : json.tracking[0].WEIGHT_PACKAGE,
      VOL_PACKAGE: json.tracking[0].VOL_PACKAGE === null ? 0 : json.tracking[0].VOL_PACKAGE,
      SERVICE_NAME: json.tracking[0].SERVICE_NAME === null ? "" : json.tracking[0].SERVICE_NAME,
      NOM_PACKAGE: json.tracking[0].NOM_PACKAGE === null ? "" : json.tracking[0].NOM_PACKAGE,
      COD_CATPACKAGE: json.tracking[0].COD_CATPACKAGE === null ? "" : json.tracking[0].COD_CATPACKAGE,
      NUM_TRACKING_: json.tracking[0].NUM_TRACKING === null ? "" : json.tracking[0].NUM_TRACKING,
      COD_SERVICE: json.tracking[0].COD_SERVICE === null ? "" : json.tracking[0].COD_SERVICE,
      RECEIVED_TRACKING_: json.tracking[0].RECEIVED_TRACKING === null ? "" : json.tracking[0].RECEIVED_TRACKING,
      DES_TRACKING: json.tracking[0].DES_TRACKING === null ? "" : json.tracking[0].DES_TRACKING,
      COD_TYPEPACKAGE: json.tracking[0].COD_TYPEPACKAGE === null ? 0 :json.tracking[0].COD_TYPEPACKAGE ,
      COD_TRACKING: json.tracking[0].COD_TRACKING === null ? "" : json.tracking[0].COD_TRACKING,
      IND_TRACKING: json.tracking[0].IND_TRACKING,
      ABBRE_TYPEPACKAGE: json.tracking[0].ABBRE_TYPEPACKAGE,
      COD_PACKAGE:json.tracking[0].COD_PACKAGE,
      PRICE_PACKAGE:json.tracking[0].PRICE_PACKAGE === null ? 0 : json.tracking[0].PRICE_PACKAGE,
      COD_SECTION:json.tracking[0].COD_SECTION === null ? 0 : json.tracking[0].COD_SECTION,
      ALTURA_PACKAGE:json.tracking[0].ALTURA_PACKAGE === null ? 0 : json.tracking[0].ALTURA_PACKAGE,
      ANCHO_PACKAGE:json.tracking[0].ANCHO_PACKAGE === null ? 0 : json.tracking[0].ANCHO_PACKAGE,
      LARGO_PACKAGE:json.tracking[0].LARGO_PACKAGE === null ? 0 : json.tracking[0].LARGO_PACKAGE,
      COD_SHIPPINGCOST:json.tracking[0].COD_SHIPPINGCOST })



        dispatch(
          GetDataCategoryPackage({
            TrackingPendiente: json.tracking[0],
          })
        );
      }
    }
  //   //-----------Validaciones del input de formulario
  //   dispatch(checkingFinish({ modalOrdenPendiente:DataCustomter}));
  // };
  }

const GetDataCategoryPackage =(data)=>({
  type:types.GetOneOrdenByUser,
  payload:data
})




