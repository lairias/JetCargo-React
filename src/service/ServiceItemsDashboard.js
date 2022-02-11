import { IoIosArrowBack,IoIosArrowDown,IoIosAdd} from "react-icons/io";
import { FiPackage} from "react-icons/fi";
import { MdGpsFixed} from "react-icons/md";

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
        path: '/admin/packages/4',
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