<!--
 * @Author: Yongxin Donald
 * @Date: 2024-07-09 15:59:11
 * @LastEditors: yzt
 * @LastEditTime: 2024-07-10 14:32:55
 * @FilePath: \my-vue-app\src\view\vueflow\index.vue
 * @Description: 
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { VueFlow, useVueFlow, type Node, type Edge, Position } from '@vue-flow/core'
import CustomNode from './components/SpecialNode.vue'
import CustomEdge from './components/SpecialEdge.vue'
import ResizableNode from './components/ResizableNode.vue'
import ToolbarNode from './components/ToolbarNode.vue'

const { onConnect, addEdges } = useVueFlow()

// type Node = { id: string; type?: string; label?: string; position: { x: number; y: number } }
// type: input | output | custom | menu | resizable
// type Edge = { id: string; source: string; target: string; animated?: boolean; label?: string }
const nodes = ref<Node[]>([
    { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },
    { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 100 } },
    { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '200px', height: '200px' }, },
    {
        id: '3a', label: 'Node 3a', parentNode: '3', position: { x: 50, y: 50 }, class: 'light',
        // 可以撑开父节点大小
        expandParent: true,
    },
    {
        id: '3b', label: 'Node 3b', parentNode: '3', position: { x: 60, y: 70 }, class: 'light',
        // 不可以撑开父节点
        extent: 'parent',
    },
    { id: '4', type: 'output', label: 'Node 4', position: { x: 400, y: 300 } },
    {
        id: '5',
        type: 'resizable',
        data: { label: 'NodeResizer' },
        position: { x: 0, y: 0 },
        style: { background: '#fff', border: '2px solid black' },
    },
    {
        id: '6',
        type: 'menu',
        // 工具方位 上下左右
        data: { label: 'toolbar top', toolbarPosition: Position.Top },
        position: { x: 200, y: 0 },
    },
])

const edges = ref<Edge[]>([
    { id: 'e1-2', source: '1', target: '2', type: 'custom', label: '666' },
    { id: 'e1-3', source: '1', target: '3', type: 'default', label: '6666' },
    { id: 'e1-3', source: '3', target: '4', type: 'default', animated: true, label: '66666' },
])

onConnect((params) => {
    console.log('执行一次', params);

    addEdges([params])
})
const gapValue = ref(8)
// 点击添加节点
const addNode = () => {
    nodes.value.push({ id: nodes.value.length + '', label: 'Node ' + nodes.value.length, position: { x: 0, y: 0 } })
}
const submitHandle = () => {
    console.log('nodes', nodes.value)
    console.log('edges', edges.value)
}
</script>

<template>
    <div class="w-100px h-100px">
        <el-button @click="gapValue++">间隔+</el-button>
        <el-button @click="gapValue--">间隔-</el-button>
        <el-button @click="addNode">添加节点</el-button>
        <el-button @click="submitHandle">提交</el-button>
    </div>
    <div style="height: 500px; width: 800px; border: 1px solid black" class="flex justify-end">
        <VueFlow v-model:nodes="nodes" v-model:edges="edges" fit-view-on-init elevate-edges-on-select
            class="vue-flow-basic-example" :default-zoom="1.5" :min-zoom="0.2" :max-zoom="4">
            <Background pattern-color="#aaa" :gap="gapValue" />

            <MiniMap />

            <Controls />

            <template #node-custom="nodeProps">
                {{ nodeProps }}
                <CustomNode v-bind="nodeProps" />
            </template>

            <template #node-resizable="resizableNodeProps">
                <ResizableNode :data="resizableNodeProps.data" />
            </template>

            <template #node-menu="props">
                {{ props }}
                <ToolbarNode :id="props.id" :data="props.data" />
            </template>

            <template #edge-custom="edgeProps">
                {{ edgeProps }}
                <CustomEdge v-bind="edgeProps" />
            </template>
        </VueFlow>
    </div>
</template>

<style>
/* these are necessary styles for vue flow */
/* @import '@vue-flow/core/dist/style.css'; */

/* this contains the default theme, these are optional styles */
/* @import '@vue-flow/core/dist/theme-default.css'; */

.vue-flow__node-toolbar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: #2d3748;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.vue-flow__node-toolbar button {
    background: #4a5568;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
}

.vue-flow__node-toolbar button.selected {
    background: #2563eb;
}

.vue-flow__node-toolbar button:hover {
    background: #2563eb;
}

.vue-flow__node-menu {
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.vue-flow__node-menu.selected {
    box-shadow: 0 0 0 2px #2563eb;
}
</style>