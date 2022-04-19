import { IoIosArrowUp,IoIosArrowDown} from "react-icons/io";
import SvgCasillero from "../components/svg/SvgCasillero";
import SvgHome from "../components/svg/SvgHome";
import { SvgResection } from "../components/svg/SvgResection";
import { SvgCountry } from "../components/svg/SvgCountry";
import { SvgRoles } from "../components/svg/SvgRoles";
import { SvgCategoria } from "../components/svg/SvgCategoria";
import { SvgPackage } from "../components/svg/SvgPackage";
import { SvgSeguridad } from "../components/svg/SvgSeguridad";
import { SvgPayment } from "../components/svg/SvgPayment";
import { SvgUsers } from "../components/svg/SvgUsers";
import { SvgCasilleros } from "../components/svg/SvgCasilleros";
export const SidebarData = [
  {
    title: "Inicio",
    icon: <SvgHome />,
    cant: "dasboard.inicio",
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        title: "Casilleros",
        path: "/admin/",
        icon: <SvgCasillero />,
        cant: "",
      },
    ],
  },
  {
    title: "Recepción",
    cant: "dasboard.seguimiento",
    icon: <SvgResection />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        title: "Miami",
        path: "/admin/reception/country/2",
        icon: <SvgCountry />,
      },
      {
        title: "Honduras",
        path: "/admin/reception/country/3",
        icon:  <SvgCountry />,
      },
    ],
  },
  {
    title: "Roles",
    cant: "dasboard.roles",
    icon: <SvgRoles />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Roles administrativos",
        path: "/admin/roles",
        cant: "dasboard.roles",
        icon: "",
      },
    ],
  },
  {
    title: "Categorias",
    cant: "dasboard.categorias",
    icon: <SvgCategoria />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Paquetes",
        path: "/admin/category/package",
        icon: "",
      },
    ],
  },
  {
    title: "Seguridad",
    cant: "dasboard.seguridad",
    icon: <SvgSeguridad />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Seguridad",
        path: "/admin/seguridad/",
        icon: "fa-solid fa-user-group-crown",
      },
     
    ],
  },
  {
    title: "Paypal",
    cant: "home.view",
    icon: <SvgPayment />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Users",
        path: "/admin/users/",
        icon: "fa-solid fa-user-group-crown",
      },
    ],
  },
  {
    title: "Usuarios",
    cant: "dasboard.usurario",
    icon: <SvgUsers />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Usuarios",
        path: "/admin/users/",
        icon: "fa-solid fa-user-group-crown",
      },
     
    ],
  },
  {
    title: "Casilleros",
    cant: "dasboard.lockers",
    icon: <SvgCasilleros />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
     
      {
        title: "Casilleros",
        path: "/admin/casilleros/",
        icon: "fa-solid fa-user-robot",
      },
    ],
  },
  {
    title: "Costo de Envio",
    cant: "dasboard.lockers",
    icon: <SvgCasilleros />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
     
      {
        title: "Costo de envios",
        path: "/admin/costoEnvio/",
        icon: "fa-solid fa-user-robot",
      },
    ],
  },
  {
    title: "Paquetes",
    cant: "dasboard.packages",
    icon: <SvgPackage />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

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
