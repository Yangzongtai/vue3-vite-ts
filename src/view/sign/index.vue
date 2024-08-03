<!--
 * @Author: Yongxin Donald
 * @Date: 2024-07-03 10:43:01
 * @LastEditors: yzt
 * @LastEditTime: 2024-08-03 14:43:55
 * @FilePath: \my-vue-app\src\view\sign\index.vue
 * @Description: 
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
-->

<template>
  <div class="flex justify-center items-center flex-col">
    <div class="text-3xl font-bold mb-10">i am sign name page{{ count }}</div>
    <div class="w-600 h-200">
      <canvas id="canvas" width="600" height="200"></canvas>
    </div>
    <div class="mt-10">
      <el-button @click="clearSign">Clear</el-button>
      <el-button @click="saveSign">Save</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="sign">
import { onMounted, ref, nextTick } from 'vue'

// 签名的canvas
const canvas = ref(null)
const drawing = ref(false) // 是否正在签名
const lastY = ref(0) // 上一次的y坐标
const lastX = ref(0) // 上一次的x坐标
onMounted(() => {
  const canvasEl = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvasEl.getContext('2d')
  // 添加背景
  ctx!.fillStyle = '#eee'
  ctx!.fillRect(0, 0, canvasEl.width, canvasEl.height)

  canvasEl.addEventListener('mousedown', (e) => {
    drawing.value = true
    lastY.value = e.offsetY
    lastX.value = e.offsetX
  })

  canvasEl.addEventListener('mousemove', (e) => {
    if (drawing.value) {
      ctx!.beginPath()
      ctx!.moveTo(lastX.value, lastY.value)
      ctx!.lineTo(e.offsetX, e.offsetY)
      ctx!.stroke()
      lastY.value = e.offsetY
      lastX.value = e.offsetX
    }
  })

  canvasEl.addEventListener('mouseup', () => {
    drawing.value = false
  })

  // 超出边界自动清除
  canvasEl.addEventListener('mouseout', () => {
    drawing.value = false
  })
})

const clearSign = () => {
  const canvasEl = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvasEl.getContext('2d')
  ctx!.clearRect(0, 0, canvasEl.width, canvasEl.height)
  // 清空画布后添加背景
  ctx!.fillStyle = '#eee'
  ctx!.fillRect(0, 0, canvasEl.width, canvasEl.height)
}

const saveSign = () => {
  const canvasEl = document.getElementById('canvas') as HTMLCanvasElement
  const dataURL = canvasEl.toDataURL('image/png')
  // console.log(dataURL)
  // 点击保存后实现 下载
  const link = document.createElement('a')
  link.href = dataURL
  link.download = 'sign.png'
  link.click()
  // 删除标签
  nextTick(() => {
    link.remove()
  })
}

const count = ref(0)

</script>

<style scoped lang="scss"></style>
