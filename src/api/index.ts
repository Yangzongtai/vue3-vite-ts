/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-03 10:55:52
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-11 13:40:22
 * @FilePath: \my-vue-app\src\api\index.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
// 创建axios网络请求示例
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: "http://localhost:3000/", // 设置请求的基础地址
  timeout: 5000, // 设置请求超时时间
  // withCredentials: true, // 跨域请求时是否需要使用凭证
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前可以做一些处理，比如添加请求头等
    console.log("我是请求拦截", config);
    config.headers["Content-Type"] = "application/json";
    // 可以在这里添加token等
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      // config.headers["Authorization"] = "Bearer " + token;
      config.headers.set("Authorization", token);
    }
    return config;
  },
  (error: AxiosError) => {
    // 请求错误处理
    console.log("我是请求错误拦截", error);

    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: any) => {
    // 响应成功处理
    console.log("我是响应拦截", response);
    if (response.data.code === 200) {
      return response.data;
    }
    if (response.data.code === 401) {
      // token失效，跳转到登录页
      window.location.href = "/login";
    }
    return Promise.reject(response.data);
  },

  (error: AxiosError) => {
    // 响应错误处理
    console.log("我是响应错误拦截", error);
    return Promise.reject(error);
  }
);

export default service;
