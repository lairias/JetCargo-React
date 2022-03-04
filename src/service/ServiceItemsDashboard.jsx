import { IoIosArrowBack, IoIosArrowDown, IoIosAdd } from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { MdGpsFixed, MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaTruckLoading } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

export const SidebarData = [
  {
    title: "Seguimiento",
    icon: <MdGpsFixed />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowBack />,
    subNav: [
      {
        title: "Paketes",
        path: "/admin/packages",
        icon: <FiPackage />,
      },
      {
        title: "Nuevo Paquete",
        path: "/admin/packages/new",
        accion: "create",
        icon: <IoIosAdd />,
      },
    ],
  },
  {
    title: "Recepción de paquetes",
    path: "/admin",
    icon: <FaTruckLoading />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowBack />,
    subNav: [
      {
        title: "Miami",
        path: "/admin/reception/country/2",
        icon: <SiGooglemaps />,
      },
      {
        title: "Honduras",
        path: "/admin/reception/country/3",
        icon: <SiGooglemaps />,
      },
    ],
  },
  {
    title: "Roles",
    path: "/overview",
    icon: <RiAdminFill />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowBack />,

    subNav: [
      {
        title: "Roles administrativos",
        path: "/admin/roles",
        icon: <MdOutlineAdminPanelSettings />,
      },
    ],
  },
  {
    title: "Categorias de paquetes",
    path: "/admin/category/package",
    icon: <MdCategory />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowBack />,

    subNav: [
      {
        title: "Categorias",
        path: "/admin/category/package",
        icon: <BiCategoryAlt />,
      },
    ],
  },
  {
    title: "Overview",
    path: "/overview",
    icon: "fa-solid fa-users",
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowBack />,

    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: "fa-solid fa-user-group-crown",
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: "fa-solid fa-user-robot",
      },
    ],
  },
];
