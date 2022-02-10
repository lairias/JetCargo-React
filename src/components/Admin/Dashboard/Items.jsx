
import {ArrayItems} from "../../../service/ServiceItemsDashboard"
import {NavLink} from "react-router-dom"
export const Items = ({ruta}) => {
  return (
    <>  <div className="absolute  lg:relative w-64  shadow bg-gray-100 hidden lg:block">
    <div className="h-16 w-full flex items-center px-8">
    <img
      src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"
      alt=""
    />
    </div>
    <ul  className=" py-6">
        {ArrayItems.map((element)=>( 
<NavLink to= {element.url} >
<li className={`pl-6 cursor-pointer text-white text-lg leading-4 tracking-normal pb-4 pt-5 ${ruta === element.url ? "text-sky-700 focus:text-sky-500  focus:outline-none": "text-gray-600 focus:text-gray-900 focus:outline-none"}`}>
 <div className="flex items-center hover:text-sky-700">
   <div>
   <i className={element.icon} ></i>
   </div>
   <span className="ml-2">{element.text} </span>
 </div>
</li>
</NavLink>
        ))}
    </ul>
  </div></>
  )
}
