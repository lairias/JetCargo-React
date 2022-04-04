
export default function TrListAdmin ({item}){
    return(
        <tr>
        <td>
          <div className="flex items-center">
            
            <div className="pl-3">
              <div className="flex items-center text-sm leading-none">
                <p className="font-semibold text-gray-800">
                  Apple MacBook Pro 2020
                </p>
                <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
              </div>
              <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">
                15’5. Core i5. FHD. Integrated graphics
              </p>
            </div>
          </div>
        </td>
        <td className="pl-16">
          <div>
            <p className="text-sm font-semibold leading-none text-right text-gray-800">
              $2200
            </p>
            <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
              <p className="text-xs leading-3 text-green-700">
                Shipped
              </p>
            </div>
          </div>
        </td>
      </tr>
    )
}