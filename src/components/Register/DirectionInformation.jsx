import React from 'react'

export const DirectionInformation = () => {
    return (
      <div>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Telefono
            </label>
            <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
          </div>
          <div className="py-2">
            <label className="block text-sm font-medium text-gray-700">
              Ciudad
            </label>
            <select
              className="form-select w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1"
              name=""
              id=""
            >
              <option value="">---</option>
              <option value="">Olancho</option>
            </select>
          </div>
        </div>

        <div className="py-2">
          <label className="block text-sm font-medium text-gray-700">
            Telefono
          </label>
          <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
        </div>
        <div className="py-2">
          <label className="block text-sm font-medium text-gray-700">
            Telefono
          </label>
          <input className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
        </div>
        <div className="py-2">
          <label className="block text-sm font-medium text-gray-700">
            Direccion
          </label>
          <textarea
            id="sintomas"
            className="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"
            name=""
            cols="3"
            rows="3"
          ></textarea>
        </div>
      </div>
    );
}
