/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-08 15:24:52
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-09 16:00:57
 * @FilePath: \my-vue-app\src\routers\moduls\home\index.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
const route = [
  {
    path: "/",
    component: () => import("@/view/home/index.vue"),
    meta: {
      title: "首页",
      KeepAlive: false,
    },
    children: [],
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/view/home/index.vue"),
    meta: {
      title: "首页",
      KeepAlive: false,
    },
    children: [],
  },
  {
    path: "/flow",
    name: "flow",
    component: () => import("@/view/vueflow/index.vue"),
    meta: {
      title: "流程",
      KeepAlive: false,
    },
    children: [],
  },
];

export default route;
