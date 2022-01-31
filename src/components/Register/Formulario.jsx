import { PeopleInformation } from "./PeopleInformation";
import { DirectionInformation } from "./DirectionInformation";

import Logo from "../../img/login-office-dark.jpeg";
import { useState } from "react";
import { Fooder } from "./Fooder";
import toast, { Toaster } from "react-hot-toast";
import { UserInfromation } from "./UserInfromation";
import {  Stepper, Step, StepLabel } from "@mui/material";

export const Formulario = () =>
{
  ///*********************Instancia de los States********************** */
  //States de secciones
  const [ParteOne, set_ParteOne] = useState(0);
//States de inputs
  const [DatosCuente, set_DatosCuente] = useState({ email: "", password: "", confirpassword: ""})
const [DatosPersonales, set_DatosPersonales] = useState({ identificacion:"",  tipodocumento:"", nombre:"",segundoNombre:"", apellido:"", fechaNacimiento:"", añoNacimiento:""})
  const [Datoslocalizacion, set_Datoslocalizacion] = useState({ telefono: "", area: "", direccion: "", pais: "", departamento: "", ciudad: "", validado:false})
  ///*********************Instancia de las variables********************** */
  const steps = [
    "Igresar los datos le localización",
    "Ingresar los datos personales ",
  ];
  
  ///*********************Instancia de las Funciones********************** */
  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    alert("funciona")
  }

  return (
    <>
      <Toaster />
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
                    <UserInfromation title="Datos de la cuenta " DatosCuente={DatosCuente} set_DatosCuente={set_DatosCuente} />
                  </>
                ) : (
                  ""
                )}
                {ParteOne === 1 ? (
                  <>
                    {" "}
                    <PeopleInformation title="Datos Personales " DatosPersonales={DatosPersonales} set_DatosPersonales={set_DatosPersonales} />
                  </>
                ) : (
                  ""
                )}
                {ParteOne === 2 ? (
                  <>
                    <DirectionInformation title="Datos de localización" Datoslocalizacion={Datoslocalizacion} set_Datoslocalizacion={set_Datoslocalizacion} />
                  </>
                ) : (
                  ""
                )}

                {ParteOne === 0 ? (
                  <button
                  
                    onClick={(e) => {
                      if([DatosCuente.email,  DatosCuente.password, DatosCuente.confirpassword].includes("")) {
                         toast.error("Todos los datos son necesarios") 
                      }else{
                        set_ParteOne(ParteOne + 1)
                      } 
                    }}
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Create account
                   
                  </button>
                ) : (
                  <div className="flex justify-between  pt-5">
                    <button
                      onClick={_ => {
                          set_Datoslocalizacion({ ...Datoslocalizacion, validado: false })
                        set_ParteOne(ParteOne - 1);

                      }}
                      className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                      
                    >
                      <i className="fas fa-angle-double-left"></i>
                    </button>
                    <button
                      onClick={e => {
                          if (ParteOne === 1 ){
                            if ([DatosPersonales.identificacion, DatosPersonales.tipodocumento, DatosPersonales.nombre, DatosPersonales.segundoNombre, DatosPersonales.apellido, DatosPersonales.fechaNacimiento, DatosPersonales.añoNacimiento].includes(""))
                            {
                              toast.error("Todos los datos son necesarios")
                            } else
                            {
                              set_ParteOne(ParteOne + 1)
                              set_Datoslocalizacion({ ...Datoslocalizacion, validado: true })
                            } 
                          } else if (ParteOne === 2){
                            if ([Datoslocalizacion.telefono, Datoslocalizacion.area, Datoslocalizacion.direccion, Datoslocalizacion.pais, Datoslocalizacion.ciudad, Datoslocalizacion.departamento].includes(""))
                            {
                              toast.error("Todos los datos son necesarios")
                            }else{
                              handleSubmit(e)
                            }
                          }
                      }}
                      className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    >
                        {Datoslocalizacion.validado ? ("Guardar") : (<i className="fas fa-angle-double-right"></i>)}

                     
                    </button>
                  </div>
                )}


                <div className="mt-10">
                  {ParteOne === 0 ? (
                    <Fooder />
                  ) : (
                    <>
                    
                      <Stepper className="bg-gray-600  rounded py-2"  activeStep={ParteOne - 1} alternativeLabel>
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel >
                              {label}
                            </StepLabel>
                          </Step>
                        ))}
                      </Stepper>
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
