import React from 'react'

export const Blank = ({titulo_header, button = null, pathModal }) => {
  return (
    <div>
    
 <div className="container px-6 mx-auto grid">
     <div className="flex justify-between">
  <h2 className="my-6 text-2xl font-semibold text-gray-700">
    Hola
  </h2>
  <div className="px-6 my-6">
  <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"> Crear <span className="ml-2" aria-hidden="true">+</span></button>
  </div>
  </div>
    </div>
      </div>
  )
}
