/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-03 10:43:01
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-15 14:38:38
 * @FilePath: \my-vue-app\src\main.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
import { createApp } from "vue";
import router from "./routers";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import pinia from './store'

// 引入全局样式
// import "@/styles/index.scss";

createApp(App).use(ElementPlus).use(router).use(pinia).mount("#app");
