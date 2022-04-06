import { IoIosArrowUp,IoIosArrowDown} from "react-icons/io";
export const SidebarData = [
  {
    title: "Inicio",
    icon: "",
    cant: "dasboard.inicio",
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        title: "Casilleros",
        path: "/admin/",
        icon: "",
        cant: "",
      },
    ],
  },
  {
    title: "Recepción",
    cant: "dasboard.seguimiento",
    icon: "",
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        title: "Miami",
        path: "/admin/reception/country/2",
        icon: "",
      },
      {
        title: "Honduras",
        path: "/admin/reception/country/3",
        icon: "",
      },
    ],
  },
  {
    title: "Roles",
    cant: "dasboard.roles",
    icon: "",
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Roles administrativos",
        path: "/admin/roles",
        icon: "",
      },
    ],
  },
  {
    title: "Categorias",
    cant: "dasboard.categorias",
    icon: "",
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
    icon: "",
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
  {
    title: "Paypal",
    cant: "home.view",
    icon: "",
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: "fa-solid fa-user-group-crown",
      },
    ],
  },
  {
    title: "Usuarios",
    cant: "dasboard.usurario",
    icon: "",
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,

    subNav: [
      {
        title: "Clientes",
        path: "/overview/users",
        icon: "fa-solid fa-user-group-crown",
      },
      {
        title: "personas",
        path: "/overview/revenue",
        icon: "fa-solid fa-user-robot",
      },
    ],
  },
  {
    title: "Casilleros",
    cant: "dasboard.lockers",
    icon: "",
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
  {
    title: "Paquetes",
    cant: "dasboard.packages",
    icon: "",
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
