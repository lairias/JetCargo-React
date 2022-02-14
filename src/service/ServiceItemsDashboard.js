import { IoIosArrowBack,IoIosArrowDown,IoIosAdd} from "react-icons/io";
import { FiPackage} from "react-icons/fi";
import { MdGpsFixed} from "react-icons/md";
import { FaTruckLoading} from "react-icons/fa";
import { SiGooglemaps} from "react-icons/si";


export const SidebarData = [
    {
    title: 'Seguimiento',
    path: '/overview',
    icon: <MdGpsFixed /> ,
    iconClosed:<IoIosArrowDown/>,
    iconOpened:<IoIosArrowBack/> ,
    subNav: [
        {
        title: 'Paketes',
        path: '/admin/packages',
        icon:<FiPackage/>
        },
        {
        title: 'Nuevo Paquete',
        path: '/admin/packages/new',
        accion: "create",
        icon: < IoIosAdd />
        }
      ]
    },
    {
      title: 'Recepción de paquetes',
      path: '/admin',
      icon: <FaTruckLoading />,
      iconClosed:<IoIosArrowDown/> ,
      iconOpened:<IoIosArrowBack/> ,
      subNav: [
        {
          title: 'Miami',
          path: '/admin/reception/country/2',
          icon: <SiGooglemaps />
        },
        {
          title: 'Honduras',
          path: '/admin/reception/country/3',
          icon: <SiGooglemaps />
        }
      ]
    },
    {
      title: 'Overview',
      path: '/overview',
      icon:"fa-solid fa-users",
      iconClosed:<IoIosArrowDown/>,
      iconOpened:<IoIosArrowBack/> ,
  
      subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon:"fa-solid fa-user-group-crown"
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon:"fa-solid fa-user-robot"
        }
      ]
    },
    {
      title: 'Overview',
      path: '/overview',
      icon:"fa-solid fa-users",
      iconClosed:<IoIosArrowDown/>,
      iconOpened:<IoIosArrowBack/> ,
  
      subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon:"fa-solid fa-user-group-crown"
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon:"fa-solid fa-user-robot"
        }
      ]
    },
    {
      title: 'Overview',
      path: '/overview',
      icon:"fa-solid fa-users",
      iconClosed:<IoIosArrowDown/>,
      iconOpened:<IoIosArrowBack/> ,
  
      subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon:"fa-solid fa-user-group-crown"
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon:"fa-solid fa-user-robot"
        }
      ]
    },
  ];