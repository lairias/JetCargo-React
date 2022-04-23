import React from 'react'

export const LisOrigenDesino = ({item,Origen}) => {
  console.log(item)
  return (
      <>
      <tr>
         <td>
                        <div className="flex items-center">
                          <div className="bg-gray-100 rounded-sm p-2.5">
                         <img className="w-12 h-12" src={Origen} alt="Origen" />
                          </div>
                          <div className="pl-3">
                            <div className="flex items-center text-sm leading-none">
                              <p className="font-semibold text-gray-800">{item.PaisOrigen} - {item.EstadoOrigen} - {item.CityOrigen} </p>
                                  {item.EstadoInicial === "DELIVERED" ? (
                              <div className="flex items-center justify-center px-5 py-1 mt-2 bg-yellow-100 rounded-full">
                                  <p className="text-xs leading-3 text-black">Enviado</p>
                          </div>
                                  ) : 
                                  item.EstadoInicial === "PENDING" ? (
                                    <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">En proceso</p>
                            </div>
                                  ) :
                                  item.EstadoInicial === "DEVOTED" ? (
                                    <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">Entregado</p>
                            </div>
                                 ) :
                                  item.EstadoInicial === "FAILED" && (
                                    <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">Fallido</p>
                            </div>
                                ) }

                            </div>
                            <div className="flex items-center text-sm leading-none">
                            <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">
                            {item.PaisDestino} - {item.EstadoDestino} - {item.CityDestino}</p>
                            {item.Estadofinal === "DELIVERED" ? (
                              <div className="flex items-center justify-center px-5 py-1 mt-2 bg-yellow-100 rounded-full">
                                  <p className="text-xs leading-3 text-black">Enviado</p>
                          </div>
                                  ) : 
                                  item.Estadofinal === "PENDING" ? (
                                    <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">En proceso</p>
                            </div>
                                  ) :
                                  item.Estadofinal === "DEVOTED" ? (
                                    <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">Entregado</p>
                            </div>
                                 ) :
                                  item.Estadofinal === "FAILED" && (
                                    <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">Fallido</p>
                            </div>
                                ) }
                          </div> 
                          </div>
                        </div>
                      </td>
                    </tr>
      </>
  )
}
