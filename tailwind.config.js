/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-10 17:34:56
 * @LastEditors: yzt
 * @LastEditTime: 2024-08-03 14:45:52
 * @FilePath: \my-vue-app\tailwind.config.js
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    // 内边距
    padding: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    // 外边距
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    // 圆角
    borderRadius: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    extend: {
      // 宽度
      width: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`;
        return map;
      }, {}),
      // 宽度
      height: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`;
        return map;
      }, {}),
      // 宽度
      fontSize: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`;
        return map;
      }, {}),
      // 宽度
      lineHeight: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`;
        return map;
      }, {}),
    },
  },
  plugins: [],
};
