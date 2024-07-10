<!--
 * @Author: Yongxin Donald
 * @Date: 2024-07-10 14:10:14
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-10 14:17:32
 * @FilePath: \my-vue-app\src\view\vueflow\components\ResizableNode.vue
 * @Description: 
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
-->
<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import { NodeResizer } from '@vue-flow/node-resizer'

defineProps(['data'])
</script>

<template>
  <NodeResizer :min-width="100" :min-height="30" />

  <Handle type="target" :position="Position.Left" />
  <div style="padding: 10px">{{ data.label }}</div>
  <Handle type="source" :position="Position.Right" />
</template>
