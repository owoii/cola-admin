// 一个简单的加法计算函数,用于测试编译导入的方法
export const add = (...args: number[]) => {
  return args.reduce((previousVal, currentVal) => previousVal + currentVal, 0)
}