/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-11 09:54:39
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-11 10:00:07
 * @FilePath: \my-vue-app\src\store\index.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
import { createPinia } from "pinia";
// 持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
