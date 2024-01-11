import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import { defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// 扩展路由类型
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string //缩小 name 的类型,并且是必须要有的属性
  meta: RouteMeta

  fullPath?: string
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
//   props:
}
