import type {AppRouteRecordRaw} from '@/router/types'
import Demo from '@/views/Demo.vue'

export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    component: Demo,
    meta: {
        title: 'Root'
    }
}

const __APP_INFO__ = {
    pkg: {
        name: 1212
    }
}

export const basicRoutes: AppRouteRecordRaw[] = [
    RootRoute
]
