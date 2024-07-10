<!--
 * @Author: Yongxin Donald
 * @Date: 2024-07-10 14:29:04
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-10 14:35:15
 * @FilePath: \my-vue-app\src\view\vueflow\components\ToolbarNode.vue
 * @Description: 
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
-->
<script setup lang="ts">
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'

const props = defineProps(['id', 'data'])

const actions = ['👎', '✋', '👍']

const { updateNodeData } = useVueFlow()
</script>

<template>
  <NodeToolbar :is-visible="data.toolbarVisible" :position="data.toolbarPosition">
    <button v-for="action of actions" :key="action" type="button" :class="{ selected: action === data.action }"
      @click="updateNodeData(props.id, { action })">
      {{ action }}
    </button>
  </NodeToolbar>

  <div>
    {{ data.label }}
  </div>

  <Handle type="target" :position="Position.Left" />
  <Handle type="source" :position="Position.Right" />
</template>
