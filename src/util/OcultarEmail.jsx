export const ocultarEmail = (correo) => {
  const parte = correo.split("@");
  const final = correo.split(".");
  return [parte[0] + "@" + parte[1].substring(0, -4) + "****" + final[1]];
};
