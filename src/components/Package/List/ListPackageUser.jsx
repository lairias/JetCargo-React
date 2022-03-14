export default function ListPackageUser({ showInvoice, setshoInvoice }) {
  const handleShowInvoice = () => {
    setshoInvoice(!showInvoice);
  };
  return (
    <>
      <div className="w-full">
        <div className="border rounded-xl bg-white pb-6 mb-6">
          <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row items-center border-b border-gray-200 justify-center md:justify-between xl:justify-between lg:justify-between px-6 py-3">
            <div className="my-6 basis-1/1">
              <button
                onClick={handleShowInvoice}
                className="flex items-center justify-between w-full  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                {" "}
                Factura <span className="ml-2"></span>
              </button>
            </div>
            <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">
              Product Sales
            </p>
            <div className="flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
              <p className="text-xs md:text-sm leading-none text-gray-600">
                Filter by: Latest
              </p>
            </div>
          </div>
          <div className="px-3 pt-6 ">
            <table className="w-full overflow-x-auto ">
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <div className="bg-gray-100 rounded-sm p-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M13.5613 8.42567C12.5393 8.42567 10.9573 7.26367 9.29134 7.30567C7.09334 7.33367 5.07734 8.57967 3.94334 10.5537C1.66134 14.5157 3.35534 20.3677 5.58134 23.5877C6.67334 25.1557 7.96134 26.9197 9.66934 26.8637C11.3073 26.7937 11.9233 25.7997 13.9113 25.7997C15.8853 25.7997 16.4453 26.8637 18.1813 26.8217C19.9453 26.7937 21.0653 25.2257 22.1433 23.6437C23.3893 21.8237 23.9073 20.0597 23.9353 19.9617C23.8933 19.9477 20.5053 18.6457 20.4633 14.7257C20.4353 11.4497 23.1373 9.88167 23.2633 9.81167C21.7233 7.55767 19.3573 7.30567 18.5313 7.24967C16.3753 7.08167 14.5693 8.42567 13.5613 8.42567ZM17.2013 5.12167C18.1113 4.02967 18.7133 2.50367 18.5453 0.991669C17.2433 1.04767 15.6753 1.85967 14.7373 2.95167C13.8973 3.91767 13.1693 5.47167 13.3653 6.95567C14.8073 7.06767 16.2913 6.21367 17.2013 5.12167Z"
                            fill="#6B7280"
                          />
                        </svg>
                      </div>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
