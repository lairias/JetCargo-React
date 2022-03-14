export const SidebarData = [
  {
    title: "Inicio",
    icon: "",
    iconClosed: "",
    iconOpened: "",
    subNav: [
      {
        title: "Casilleros",
        path: "/admin/",
        icon: "",
      },
    ],
  },
  // {
  //   title: "Seguimiento",
  //   icon: "",
  //   iconClosed: "",
  //   iconOpened: "",
  //   subNav: [
  //     {
  //       title: "Paketes",
  //       path: "/admin/packages",
  //       icon: "",
  //     },
  //     {
  //       title: "Nuevo Paquete",
  //       path: "/admin/packages/new",
  //       accion: "create",
  //       icon: "",
  //     },
  //   ],
  // },
  {
    title: "Recepción de paquetes",
    path: "/admin",
    icon: "",
    iconClosed: "",
    iconOpened: "",
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
    path: "/overview",
    icon: "",
    iconClosed: "",
    iconOpened: "",

    subNav: [
      {
        title: "Roles administrativos",
        path: "/admin/roles",
        icon: "",
      },
    ],
  },
  {
    title: "Categorias de paquetes",
    path: "/admin/category/package",
    icon: "",
    iconClosed: "",
    iconOpened: "",

    subNav: [
      {
        title: "Categorias",
        path: "/admin/category/package",
        icon: "",
      },
    ],
  },
  {
    title: "Overview",
    path: "/overview",
    icon: "fa-solid fa-users",
    iconClosed: "",
    iconOpened: "",

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
