import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

export const CardList = ({ handleShoModal }) => {
  return (
    <>
      <div className="w-full  mb-4 my-6  shadow sm:px-10 px-4 py-6 bg-white rounded-md">
        <p className="text-xl text-gray-800 font-semibold mb-4">
          Mis metodos de pago
        </p>
        <div className="flex justify-between my-2">
          <p className="text-sm text-bold text-gray-800 font-semibold mb-2">
            Tarjetas
          </p>
          <button
            onClick={handleShoModal}
            className="flex items-center justify-between w-1/4  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            Nueva Tarjeta +
          </button>
        </div>
        <div className="flex bg-sky-600 rounded-md relative">
          <div className="flex">
            <div className="px-4 py-6 border-r border-white">
              <div className="h-10 w-10">
                <img
                  src="https://mi.tigo.com.hn/assets/credit-card-icons/visa.svg"
                  alt
                  className="h-full w-full shadow-xl bg-sh object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center pl-3 py-2 sm:py-0 ">
              <p className="text-sm font-bold text-white pb-1">Jon Harrison</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <p className="text-xl text-white leading-5">
                  ****&nbsp;-3279&nbsp;
                </p>
                <p className="text-xs text-gray-600 leading-5">03/2026</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 m-auto mt-2 sm:mt-4 mr-2 sm:mr-4 sm:right-0 w-5 text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-edit"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1={16} y1={5} x2={19} y2={8} />
            </svg>
          </div>
        </div>
        <p className="text-sm text-bold text-gray-800 font-semibold mb-2 my-4">
          Paypal
        </p>
        <div className="flex bg-sky-600 rounded-md relative">
          <div className="px-4 py-6 border-r border-white">
            <div className="h-10 w-10">
              <img
                src="https://th.bing.com/th/id/R.16d2cde028b057a8f09d731f203192d9?rik=FhAUAbsxGWTKGg&pid=ImgRaw&r=0"
                alt
                className="h-full w-full rounded-full overflow-hidden shadow object-cover"
              />
            </div>
          </div>

          <div className="hidden">
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "1.99",
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
