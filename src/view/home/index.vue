<!--
 * @Author: Yongxin Donald
 * @Date: 2024-07-03 10:43:01
 * @LastEditors: yzt
 * @LastEditTime: 2024-08-28 14:34:14
 * @FilePath: \my-vue-app\src\view\home\index.vue
 * @Description: 
 * Copyright (c) 2024 by Donald/Yongxin, All Rights Reserved.
-->


<template>
    <div class="flex justify-center items-center flex-col">
        <div class="text-3xl font-bold mb-10">i am home page</div>
        <el-form ref="formRef" style="width: 300px" :model="dynamicValidateForm" label-width="auto"
            class="demo-dynamic">
            <el-form-item prop="username" label="账号：" :rules="[
            {
                required: true,
                message: '请输入账号',
                trigger: 'blur',
            }
        ]">
                <el-input v-model="dynamicValidateForm.username" />
            </el-form-item>
            <el-form-item prop="password" label="密码：" :rules="[
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur',
            }
        ]">
                <el-input v-model="dynamicValidateForm.password" type="password" show-password />
            </el-form-item>
        </el-form>
        <el-button :loading="login_loading" type="primary" @click="submitForm(formRef)">登录</el-button>

        <el-button>点击{{ userStore.$state.counter }}</el-button>
        <el-button @click="getUserList">点击获取用户</el-button>
    </div>
</template>

<script setup lang="ts" name="home">
import { onMounted, reactive, ref } from 'vue'
import { UserLogin, GetUserList } from "@/api/user";
import useUserStore from '@/store/user';

// 试试 pinia
const userStore = useUserStore();

onMounted(() => {
    console.log('78999');
    getUserList()
})

const dynamicValidateForm = reactive({ username: '', password: '' })
const formRef = ref(null)
const submitForm = (formEl: any) => {
    if (!formEl) return
    formEl.validate((valid: boolean) => {
        if (valid) {
            console.log('submit!')
            loginHandle()
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const login_loading = ref(false)
const loginHandle = () => {
    const params = {
        username: dynamicValidateForm.username,
        password: dynamicValidateForm.password
    }
    login_loading.value = true
    // 登录
    UserLogin(params).then((res: any) => {
        console.log('res', res)
        const { token } = res.data
        const userInfo = res.data
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        localStorage.setItem('token', token)
    }).catch((err: any) => {
        console.log('err', err)
    }).finally(() => {
        login_loading.value = false
    })
}

// 获取用户
const getUserList = () => {
    GetUserList({page: 1, pagesize: 10}).then((res: any) => {
        console.log('用户res', res)
    }).catch((err: any) => {
        console.log('err', err)
    })
}
</script>

<style scoped lang="scss"></style>
