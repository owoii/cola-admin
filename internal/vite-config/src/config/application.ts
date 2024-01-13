import { resolve } from 'node:path'

// import dayjs from 'dayjs'
// import { readPackageJSON } from 'pkg-types'
import { defineConfig, loadEnv, mergeConfig, type UserConfig } from 'vite'
import * as process from 'process'


interface DefineOptions {
  /**
   * 这个属性用来重新覆写 vite 的配置,也就是用户配置
   */
  overrides?: UserConfig;
  options?: {};
}


/**
 * 重新封装 Vite 的 defineConfig 方法,并提供一些项目所需的依赖和插件
 * @param defineOptions 配置选项
 */
const defineApplicationConfig = (defineOptions: DefineOptions = {}) => {
  const { overrides = {} } = defineOptions
  return defineConfig(async ({ command, mode }) => {
    const root = process.cwd() // 得到项目启动目录

    const isBuild = command === 'build' // 当前是否为生产命令
    console.log(isBuild)
    // 使用 loadEnv 方法读取环境变量
    const {
      VITE_PUBLIC_PATH,
      VITE_USE_MOCK,
      VITE_BUILD_COMPRESS,
      VITE_ENABLE_ANALYZE
    } = loadEnv(mode, root)

    const defineData = await createDefineData(root)
    const plugins = []

    const pathResolve = (pathname: string) => resolve(root, '.', pathname)
    const timestamp = new Date().getTime()

    const applicationConfig: UserConfig = {
      base: VITE_PUBLIC_PATH,
      resolve: {
        alias: []
      }
    }

    return mergeConfig({}, overrides)
  })
}


const createDefineData = async (root: string) => {
}

export { defineApplicationConfig }
