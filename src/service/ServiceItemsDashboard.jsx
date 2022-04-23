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
import SvgCategoriaPago from "../components/svg/SvgCatagoriaPago";
import SvgRolItems from "../components/svg/SvgRolItems";
import SvgSeguridadItems from "../components/svg/SvgSeguridadItems";
import SvgOrdenesItems from "../components/svg/SvgOrdenesItems";
import { SvgUserItems } from "../components/svg/SvgUserItems";
import { SvgCasillerosItems } from "../components/svg/SvgCasillerosItems";
import { SvgCostoItems } from "../components/svg/SvgCostoItems";
import { SvgError } from "../components/svg/SvgError";
import { SvgDireciones } from "../components/svg/SvgDireciones";
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
    ],
  },
  {
    title: "Roles",
    cant: "dasboard.roles",//
    icon: <SvgRoles />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Roles administrativos",
        path: "/admin/roles",
        cant: "dasboard.roles",
        icon: <SvgRolItems />,
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
        icon: <SvgRolItems />,
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
        icon: <SvgSeguridadItems />,
      },
    ],
  },
  {
    title: "Ordenes",
    cant: "dasboard.orden",
    icon: <SvgPayment />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Ordenes",
        path: "/admin/users/",
        icon: <SvgOrdenesItems />,
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
        icon: <SvgUserItems />,
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
        icon: <SvgCasillerosItems />,
      },
    ],
  },
  {
    title: "Trackin Usuarios",
    cant: "dasboard.lockers",
    icon: <SvgCasilleros />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        title: "Casilleros",
        path: "/admin/trackin_usuarios/",
        icon: <SvgCasillerosItems />,
      },
    ],
  },
  {
    title: "Trackin Lockers",
    cant: "dasboard.lockers",
    icon: <SvgCasilleros />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        title: "Casilleros",
        path: "/admin/casilleros/",
        icon: <SvgCasillerosItems />,
      },
    ],
  },
  {
    title: "Costo de Envio",
    cant: "dasboard.costos",
    icon: <SvgCategoriaPago />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
     
      {
        title: "Costo de envios",
        path: "/admin/costoEnvio/",
        icon: <SvgCostoItems />,
      },
    ],
  },
  {
    title: "Direcciones",
    cant: "dasboard.costos",
    icon: <SvgCategoriaPago />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
     
      {
        title: "Paises",
        path: "/admin/paises/",
        icon: <SvgDireciones />,
      },
      {
        title: "Departamentos",
        path: "/admin/departamentos/",
        icon: <SvgDireciones />,
      },
      {
        title: "Ciudades",
        path: "/admin/ciudades/",
        icon: <SvgDireciones />,
      },
    ],
  },
  {
    title: "Errores",
    cant: "dasboard.costos",
    icon: <SvgError />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
     
      {
        title: "Errores registrados",
        path: "/admin/errores/",
        icon: <SvgDireciones />,
      },
    ],
  },

];
