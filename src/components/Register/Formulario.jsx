import { PeopleInformation } from "./PeopleInformation";
import { DirectionInformation } from "./DirectionInformation";

import Logo from "../../img/login-office-dark.jpeg";
import { useState } from "react";
import { Fooder } from "./Fooder";
import { LineTime } from "./Line_time";
import { UserInfromation } from "./UserInfromation";

export const Formulario = () =>
{
  const [ParteOne, set_ParteOne] = useState(0);
  // const [ParteOne, set_ParteOne] = useState(0)
  // const [ParteOne, set_ParteOne] = useState(0)
  // const [ParteOne, set_ParteOne] = useState(0)
  // const [ParteOne, set_ParteOne] = useState(0)
  // const [ParteOne, set_ParteOne] = useState(0)

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={Logo}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={Logo}
                alt="Office"
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                {ParteOne === 0 ? (
                  <>
                    <UserInfromation title="Datos de la cuenta " />
                  </>
                ) : (
                  ""
                )}
                {ParteOne === 1 ? (
                  <>
                    {" "}
                    <PeopleInformation title="Datos Personales " />
                  </>
                ) : (
                  ""
                )}
                {ParteOne === 2 ? (
                  <>
                    <DirectionInformation title="Datos de localizacion " />
                  </>
                ) : (
                  ""
                )}

                {ParteOne === 0 ? (
                  <button
                    onClick={(e) =>
                    {
                      set_ParteOne(ParteOne + 1);
                    }}
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Create account
                  </button>
                ) : (
                  <div className="flex justify-between  ">
                    <button
                      onClick={(e) =>
                      {
                        set_ParteOne(ParteOne - 1);
                      }}
                      className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    >
                      <i class="fas fa-angle-double-left"></i>
                    </button>
                    <button
                      onClick={(e) =>
                      {
                        set_ParteOne(ParteOne + 1);
                      }}
                      className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    >
                      <i class="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                )}
                <div className="mt-10">
                  {ParteOne === 0 ? (
                    <Fooder />
                  ) : (
                    <>
                    
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
