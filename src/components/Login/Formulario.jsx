
export const Formulario = () =>
{
    return (
        <form
            className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 "
            action="#"
            method="POST"
        >
            <div className="py-5">
                <label className="block text-sm font-medium text-gray-700">
                    Número de Casillero
                </label>
                <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300"></input>
            </div>
            <div className="py-2">
                <label className="block text-sm font-medium text-gray-700">
                    Contraseña
                </label>
                <input
                    type="password"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm  focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300"
                ></input>
            </div>

            <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                    >
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:translate-y-1 hover:shadow-2xl   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <i class="fas fa-sign-in-alt"></i>
                    </span>
                    Sign in
                </button>
            </div>
            <div className="flex  justify-end">
                <span className="">Registrate</span>
            </div>
        </form>
    );
}
