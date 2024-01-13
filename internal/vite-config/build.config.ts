import { defineBuildConfig } from 'unbuild'


export default defineBuildConfig({
  clean: true,
  entries: ['src/index'],
  declaration: true,
  rollup: {
    //关闭 cjs 编译,全项目使用 ES Module规范
    emitCJS: false,
  }
})