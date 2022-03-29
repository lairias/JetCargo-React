import "../../css/OrdenCaptureSucces.css";
import { useNavigate } from "react-router-dom";
import {  useEffect } from "react";
export default function EmailVery() {
  const history = useNavigate();
  useEffect(() => {
      setTimeout(() => {
        history("/admin/");
      }, 5000);
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pt-52 h-full">
          <div className="w-full max-w-sm">
            <div className="bg-gray-100 shadow-sm hover:shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
              <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-center mt-4">
                      <h1 className="text-lg font-semibold">
                        ¡Tu cuenta ha sido verificada!
                        
                      </h1>

                      <p className="text-gray-600 text-base">
                        Tu cuenta ha sido verifiada exitosamente, ahora puedes
                        iniciar sesión.
                      </p>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
