
import Logo from "../../img/JetCargo-Logo.jpg";
import {Formulario} from './Formulario'

export const Header = () => {
    return (
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <Formulario />
       
        </div>
      </div>
    )
}
