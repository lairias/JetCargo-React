export const types = {
  //Tipos de acciones en variables estableciedo un reglamento
  //Espera de respuesta del back
  authCheckingFinish: "[Auth] Checking login state",
  //Inici de login
  authLogin: "[Auth] Start login",
  authStartRenewToekn: "[Auth] Start renew token ",
  //solicitud de login
  login: "[Auth] Login",
  logout: "[Auth] Logout",
  //solicitud de renovacion de token
  renewToken: "[Auth] Renew token",

  //Type de los permisos a solicitar
  GetAllPermission: "[Permission] Get All Permission",
  GetAPermission: "[Permission] Get one Permission",
  GetAPermissionEdit: "[Permission] Get one Permission",
  GetAllPermissionRole: "[Permission] Get All Permission Role",

  ///Bucador de datos
  DataSearch: "[DataSearch] DataSearch",

  //Verificacion de token
  forgotPasswordChecking: "[Auth] Checking token for forgot password",

  //Seccion de categorias de paquetes
  GetAllCategoryPackage: "[CategoryPackage] Get All CategoryPackage",
  GetACategoryPackage: "[CategoryPackage] Get one CategoryPackage",
  GetACategoryPackageEdit: "[CategoryPackage] Get one CategoryPackage",
  PostCategoryPackage: "[CategoryPackage] Post CategoryPackage",

  //seccion de customes
  GetAllCustomers: "[Customers] Get All Customers",

  //Seccion de casilleros
  GetAllCasilleros: "[Casilleros] Get All Casilleros",
  AddCasillerosCustomers: "[Casilleros] Add Casilleros Customers",
  StartAddCasillerosCustomers: "[Casilleros] Add Casilleros Customers",
  EndAddCasillerosCustomers: "[Casilleros] Add Casilleros Customers",
  GetCasilleroUser: "[Casilleros] Get one Casillero",

  //secciones de mostar los ModalEditTypeUser
  ShowModalCreateLockerCustomer:
    "[ModalLockerCustomers] Show Modal Create Locker Customer",

  //Seccion de los paquetes de un usuario y casillero
  GetAllPackageLockerUser: "[PackageUserLocker] Get All PackageUserLocker",

  //Seccion de las servicios de enviaremos
  GetAllServices: "[Services] Get All Services",

  //seccion de tracking

  SearcTrackingService: "[Tracking] Search Tracking Service",
  GetAlltracking: "[Tracking] Get All tracking",
  StarSearcTrackingService: "[Tracking] Start Search Tracking Service",
  ShowCreateTracking: "[Tracking] Show Create Tracking",
  StarPostTrackingServiceCustomer:
    "[Tracking] Start Post Tracking Service Customer",
  SaveDataTrackingServiceCustomer:
    "[Tracking] Save Data Tracking Service Customer",
  PostTrackingServiceCustomer: "[Tracking] Post Tracking Service Customer",

  //Seciones de las typos de Paquetes
  GetAllTypePackage: "[TypePackage] Get All TypePackage",

  //Secciones de las seguridad
  GetAllSeguridad: "[Seguridad] Get All Seguridad",



  //seciones de ordenes de envio
  GetOneOrdenByUser: "[Orden] Get All Orden",
  EndAddTrackinRecived: "[Orden] Status Orden By User",

  //seccion de informacion de ubicacion de tracking
  GetAllUbicationTracking: "[UbicationTracking] Get All UbicationTracking",
  GetAllUbicationTrackingByTracking: "[UbicationTracking] Get All UbicationTracking",
};
