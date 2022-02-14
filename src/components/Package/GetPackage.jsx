import React from 'react'
import { MapsPackage } from './Maps/MapsPackage'

export const GetPackage = () => {
  return (
    <>
    <div className="container px-6 mx-auto grid">
        <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700"> Seguimiento de paquetes </h2>
        </div>
        {/* Insertar contenido de las paginas **/}
        <MapsPackage />
    </div>
        </>
  )
}
