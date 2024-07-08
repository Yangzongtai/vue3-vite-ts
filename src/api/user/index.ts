/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-03 11:08:41
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-03 11:54:48
 * @FilePath: \my-vue-app\src\api\user\user.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
// 导入请求
import request from "@/api";

// 定义请求接口
export const UserLogin = (data: {
  username: string;
  password: string;
}): Promise<any> => {
  return request.post("/login/login", data);
};
