import "../../css/OrdenCaptureSucces.css"
import { useNavigate, useParams } from "react-router-dom"
import { useFetchToken } from "../../hooks/useFetch";
import { useCallback, useEffect } from "react";
export default function OrdenCaptureSucces (){
    const { NUM_TRACKING } = useParams();
    const [DataNumberTracking, NumberTrackingLoadder] = useFetchToken(`tracking/search/${NUM_TRACKING}`);
    const history = useNavigate();
    useEffect(() => {
        if(NumberTrackingLoadder){
            setTimeout(() => {
                history("/admin/")
            }, 5000);
        }
        }, [NumberTrackingLoadder]);
    return(
        <>
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center pt-52 h-full">
                <div className="w-full max-w-sm">
                    <div className="bg-gray-100 shadow-sm hover:shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex flex-col items-center justify-center">

                        
                    
{NumberTrackingLoadder ?  (<>
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
                                    Orden creada con exito
                                </h1>
                                <p className="text-gray-600 text-base">
                                    Tu orden ha sido creada con exito,
                                    en breve recibiras un correo con los detalles de tu orden
                                </p>
                            </div></>):(<div className="circle-loader">
  <div className="checkmark draw"></div>
</div>)  }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
       

        
    )
}