/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-11 10:01:56
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-11 10:16:07
 * @FilePath: \my-vue-app\src\store\user\index.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    token: "",
    isLogin: false,
    counter: 0,
  }),
  actions: {
    // 登录
    login(data: any) {
      this.user = data.user;
      this.token = data.token;
      this.isLogin = true;
    },
    // 登出
    logout() {
      this.user = {};
      this.token = "";
      this.isLogin = false;
    },
  },
  persist: {
    storage: localStorage
  }
});

export default useUserStore;
