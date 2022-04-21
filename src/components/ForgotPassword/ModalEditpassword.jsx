import { Dialog } from "primereact/dialog";
import {useState } from "react";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../util/fetch";
import { Password } from 'primereact/password';
import { Logout } from "../../actions/authAction";
import { useDispatch } from "react-redux";

export const ModalEditpassword = ({id}) => {
    const dispatch = useDispatch();
  ///*********************UseEfect***********************/
  const [shoModal, setShoModal] = useState(true);
  const [ResData, setResData] = useState({
      ok: false,
  });

  const renderFooter = () => {
    return (
      <div>
        
        <Button
          label="Guardar contraseña"
          icon="pi pi-check"
          onClick={(e) => {
            handleSubmit(e);
          }}
          autoFocus
        />
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      task.PASS_RESET === "" ||
      task.PASS_RESET === " " ||
      task.VERY_PASS_RESET === "" ||
      task.VERY_PASS_RESET === " " 
    ) {
      toast.error("Todos los datos son necesarios");
    } else if( task.PASS_RESET !== task.VERY_PASS_RESET ) {
        toast.error("Los datos no coinciden");
    }else{
        
        const data =async ()=>{
            const data1 = await fetchConToken(`passreset/${id}`,
            {
                PASS_RESET:task.PASS_RESET,
            },
            "PUT");
            const json1 = await data1.json();
            setResData({ok:json1});
        }
        data()
        console.log(ResData.ok)
        if(ResData.ok){
            dispatch(Logout());
        }
    }
  };

  const [task, setTask] = useState({
    PASS_RESET:"",
    VERY_PASS_RESET:"",
  });


  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
  return (
    <>
      <Toaster />

      <Dialog
        header="Reseteo de contraseña"
        visible={shoModal}
        footer={renderFooter()}
      >
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
        
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800 mx-5">Contraseña</span>
          <Password  
            name="PASS_RESET"
            onChange={handleChange}
            value={task.PASS_RESET} />
        </label>
        </div>
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800 mx-6">
            Confirmar 
          </span>
          <Password 
            name="VERY_PASS_RESET"
            onChange={handleChange}
            value={task.VERY_PASS_RESET} feedback={false} />
         
        </label>
        </div>
      </Dialog>
    </>
  );
};
