/*
 * @Author: Yongxin Donald
 * @Date: 2024-07-03 10:43:01
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-11 11:54:50
 * @FilePath: \my-vue-app\vite.config.ts
 * @Description:
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 代理
  server: {
    host: "0.0.0.0",
    port: 3009,
    open: true,
    cors: true,
    proxy: {
      "/api": {
        target: process.env.ViTER_PROXY,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
