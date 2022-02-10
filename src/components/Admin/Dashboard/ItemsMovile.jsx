
import {ArrayItems} from "../../../service/ServiceItemsDashboard"
export const ItemsMovile = ({setShow,show,ruta}) => {
  return (
    <>  <div
    className={
      show
        ? "w-full h-full absolute z-40  transform  translate-x-0 "
        : "   w-full h-full absolute z-40  transform -translate-x-full"
    }
    id="mobile-nav"
  >
    <div
      className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
      onClick={() => setShow(!show)}
    />
    <div className="absolute  h-screen z-40 sm:relative w-64  shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <div className="flex items-center justify-between px-8">
            <div className="h-16 w-full flex items-center">
            <img
      src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"
      alt=""
    />
            </div>
            <div
              id="closeSideBar"
              className="flex items-center justify-center h-10 w-10 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
          <ul className=" py-6">
          {ArrayItems.map((element)=>( 
 <li className={`pl-6 cursor-pointer text-white text-lg leading-4 tracking-normal pb-4 pt-5 ${ruta === element.url ? "text-sky-700 focus:text-sky-500 focus:outline-none": "hover:text-sky-500 text-gray-600 focus:text-gray-900 focus:outline-none"}`}>
 <div className="flex items-center">
   <div>
   <i className={element.icon} ></i>
   </div>
   <span className="ml-2">{element.text} </span>
 </div>
</li>
        ))}
          </ul>
        </div>
        
      </div>
    </div>
  </div></>
  )
}
