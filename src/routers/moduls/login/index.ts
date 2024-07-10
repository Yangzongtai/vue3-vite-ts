const route = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/view/404.vue"),
    meta: {
      title: "404",
      keepAlive: false,
    },
    children: [],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/view/login/index.vue"),
    meta: {
      title: "登录",
      keepAlive: false,
    },
    children: [],
  },
];

export default route;
