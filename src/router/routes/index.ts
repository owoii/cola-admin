import type { AppRouteRecordRaw } from '@/router/types'

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  meta: {
    title: 'Root'
  }
}

const __APP_INFO__ = {
  pkg: {
    name: 1212
  }
}

export const basicRoutes: AppRouteRecordRaw[] = []
