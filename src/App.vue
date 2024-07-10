<!--
 * @Author: Yongxin Donald
 * @Date: 2024-07-03 10:43:01
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-09 16:01:46
 * @FilePath: \my-vue-app\src\App.vue
 * @Description: 
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
-->
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="w-100% h-10 flex items-center justify-around">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/flow">flow</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
