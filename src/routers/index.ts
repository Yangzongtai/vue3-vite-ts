/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-08 14:34:14
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-08 16:50:58
 * @FilePath: \my-vue-app\src\routers\index.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */

import routes from "./moduls";
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import { useUserStore } from '@/store/user'
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

router.beforeEach((to, from, next) => {
  //   const userStore = useUserStore()
  NProgress.start();

  setTimeout(() => {
    next();
  }, 500);
});

router.onError((error) => {
  NProgress.done();
  console.log(error);
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
