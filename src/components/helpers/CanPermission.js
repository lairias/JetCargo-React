export default async function CanPermission(Permisos, permiso) {
  await Permisos.find((element) => {
    if (element.NAM_PERMISOS === permiso) {
      return true;
    }
    return false;
  });
}
