import type {RouteRecordRaw} from 'vue-router'
import type {App} from 'vue'

import {createRouter, createWebHashHistory} from 'vue-router'
import {basicRoutes} from "@/router/routes";


// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];

// 创建路由器,万物皆起源于路由器,传说盘古开天... 🙂
export const router = createRouter({
    history: createWebHashHistory(),
    routes: basicRoutes as RouteRecordRaw[],
    strict: true,
    scrollBehavior: () => ({left: 0, top: 0}),
})


// 配置路由,提供一个简单的方法来设置路由
export const setupRouter = (app: App<Element>) => {
    app.use(router)
}

