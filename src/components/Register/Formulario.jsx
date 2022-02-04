import { PeopleInformation } from "./PeopleInformation";
import { DirectionInformation } from "./DirectionInformation";
import { useNavigate } from "react-router-dom";
import axios from "axios"

import Logo from "../../img/login-office-dark.jpeg";
import { useState } from "react";
import { Fooder } from "./Fooder";
import toast, { Toaster } from "react-hot-toast";
import { UserInfromation } from "./UserInfromation";
import { Stepper, Step, StepLabel } from "@mui/material";
import { Register_email, Register_password, Register_Identificacion, Register_typeDocumentacion, Register_nombre, Register_segundoNombre, Register_Apellido, Register_fechaNacimiento, Register_Nacimiento, Register_telefono,Register_Area,Register_Descripcion,Register_Pais,Register_ciudad,Register_departamento } from "../validations/index"


export const Formulario = () =>
{
  ///*********************Instancia de los States********************** */
  //States de secciones
  const [ParteOne, set_ParteOne] = useState(0);
  //States de inputs
  const [DatosCuente, set_DatosCuente] = useState({ email: "", password: "", confirpassword: "" })
  const [DatosPersonales, set_DatosPersonales] = useState({ identificacion: "", tipodocumento: "", nombre: "", segundoNombre: "", apellido: "", fechaNacimiento: "", añoNacimiento: 0 })
  const [Datoslocalizacion, set_Datoslocalizacion] = useState({
    telefono: "",
    area: "",
    direccion: "",
    País: "",
    departamento: "",
    ciudad: "",
    validado: false,
  });
  ///*********************Instancia de las variables********************** */
  const steps = [
    "Igresar los datos le localización",
    "Ingresar los datos personales ",
  ];
  const history = useNavigate()
  ///*********************Instancia de las Funciones********************** */
  const handleUserInformation = async _ =>
  {
    const DataEmail = await Register_email.validate({ email: DatosCuente.email }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });
    const DataPassword = await Register_password.validate({ password: DatosCuente.password }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });
    // eslint-disable-next-line eqeqeq
    if (DatosCuente.password ===  DatosCuente.confirpassword){
      if (DataEmail && DataPassword) set_ParteOne(ParteOne + 1);
    }else{
      toast.error(`Contraeñas no coinciden `, { duration: 2000 }); 
    }
  }
  const handlePeopleInformation = async _ =>
  {
    const DataIdentificacion = await Register_Identificacion.validate({ identificacion: DatosPersonales.identificacion }).catch(function (err)
    {
      toast.error(`${err.errors}`, {
        duration: 2000, style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    });
    const DataDocumentacion = await Register_typeDocumentacion.validate({ tipodocumento: DatosPersonales.tipodocumento }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

    const DataNombre = await Register_nombre.validate({ nombre: DatosPersonales.nombre }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

    const DataSegundoNombre = await Register_segundoNombre.validate({ segundoNombre: DatosPersonales.segundoNombre }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

    const DataApellido = await Register_Apellido.validate({ apellido: DatosPersonales.apellido }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

    const DataFechaNacimiento = await Register_fechaNacimiento.validate({ fechaNacimiento: DatosPersonales.fechaNacimiento }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

    const DataNacimiento = await Register_Nacimiento.validate({ añoNacimiento: DatosPersonales.añoNacimiento }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

    if (DataIdentificacion && DataDocumentacion && DataNombre && DataSegundoNombre && DataApellido && DataFechaNacimiento && DataNacimiento) return set_ParteOne(ParteOne + 1); set_Datoslocalizacion({ ...Datoslocalizacion, validado: true })
  }
  const handleDirectionInformation = async _ =>
  {
    const DataTelefono = await Register_telefono.validate({ telefono: Datoslocalizacion.telefono }).catch(function (err)
    { toast.error(`${err.errors}`, {
        duration: 2000, style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    });
  const DataArea = await Register_Area.validate({ area: Datoslocalizacion.area }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

  const DataDesscripcion = await Register_Descripcion.validate({ desDireccion: Datoslocalizacion.direccion }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

  const DataPais = await Register_Pais.validate({ pais: Datoslocalizacion.País }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

  const DataDepartemento = await Register_departamento.validate({ departamento: Datoslocalizacion.departamento }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

  const DataFechaCiudad = await Register_ciudad.validate({ ciudad: Datoslocalizacion.ciudad }).catch(function (err) { toast.error(`${err.errors}`, { duration: 2000 }); });

    if (DataArea && DataDesscripcion && DataPais && DataDepartemento && DataFechaCiudad && DataTelefono) {
    try{
      const Data = async _ =>{
        return axios.post("http://localhost:4000/api/auth/signup", {
          ID: DatosPersonales.identificacion,
          TIP_DOCUMENT: DatosPersonales.tipodocumento,
          FRISTNAME: DatosPersonales.nombre,
          MIDDLENAME: DatosPersonales.segundoNombre,
          LASTNAME: DatosPersonales.apellido,
          AGE: DatosPersonales.añoNacimiento,
          EMAIL: DatosCuente.email,
          PAS_USER: DatosCuente.password,
          ROL: 1,
          DAT_BIRTH: DatosPersonales.fechaNacimiento,
          COD_COUNTRY: Datoslocalizacion.País,
          COD_STATE: Datoslocalizacion.departamento,
          COD_CITY: Datoslocalizacion.ciudad,
          DES_ADDRESS: Datoslocalizacion.direccion,
          NUM_AREA: Datoslocalizacion.area,
          NUM_PHONE: Datoslocalizacion.telefono,
          USR_ADD: "Registro",
        });
      }
      const resultado = await  Data();
      console.log(resultado)
      if (!resultado.data.token)
      {
        toast.error(`${resultado.data.message}`, { duration: 3000 });
      } else
      {
        toast
          .promise(Data(), {
            loading: "Loading",
            success: "Correo enviado",
          })
          .then((_) =>
          {
            setTimeout(() =>
            {
              history("/admin");
            }, 2000);
          });
      }
    }catch (error){

    }
    }
  }
  return (
    <>
      <Toaster
        position="top-left"
        reverseOrder={true}

      />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row  ">
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
                src="https://jetcargo.vip/wp-content/uploads/2021/11/avion2000x800-1024x410.png"
                alt="Office"
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 relative">

              <div className="w-full">
                {ParteOne === 0 ? (
                  <>
                    <UserInfromation title="Crea una cuenta" DatosCuente={DatosCuente} set_DatosCuente={set_DatosCuente} />
                  </>
                ) : (
                  ""
                )}
                {ParteOne === 1 ? (
                  <>
                    {" "}
                    <PeopleInformation title="Te damos la bienvenida a JetCargo" DatosPersonales={DatosPersonales} set_DatosPersonales={set_DatosPersonales} />
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

                    onClick={handleUserInformation}
                    className="block w-full px-4  py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Crear cuenta

                  </button>
                ) : (
                  <div className="flex justify-between  pt-5">
                    <button
                      onClick={_ =>
                      {
                        set_Datoslocalizacion({ ...Datoslocalizacion, validado: false })
                        set_ParteOne(ParteOne - 1);

                      }}
                      className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"

                    >
                      <i className="fas fa-angle-double-left"></i>
                    </button>
                    <button
                      onClick={_ =>
                      {
                        if (ParteOne === 1)
                        {
                          handlePeopleInformation()

                        } else if (ParteOne === 2)
                        {
                          handleDirectionInformation()
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

                      <Stepper className="bg-gray-600  rounded py-1" activeStep={ParteOne - 1} alternativeLabel>
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel >
                              {label}
                            </StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                        <span className="absolute inset-x-0 bottom-0 text-center  dark:text-gray-400 text-sm ">
                            Tu información personal es {" "}
                            <span className="underline">privada y está protegida </span>
                          </span>
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
