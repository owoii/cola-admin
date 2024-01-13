import { add } from './myMath'

/* -- Start -------------------------------------
* 测试对于 console.log 方法的编译
* */
console.log('Hello! I Love Cola ———— !!!')
/* -- End ------------------------------------ */


/* -- Start -------------------------------------
* 测试对于 class 的编译
* */
class Cola {
  name: string
  birthdayYear: number

  constructor(name: string, birthdayYear: number) {
    this.name = name
    this.birthdayYear = birthdayYear
  }

  sayAge = () => {
    const thisYear = new Date().getFullYear()
    console.log(`I'm ${thisYear - this.birthdayYear} years old.`)
  }
}

/* -- End ------------------------------------ */


/* -- Start -------------------------------------
* 测试 new 关键字创建对象以及运行方法
* */
const pepsi = new Cola('PepsiCola', 1886)
pepsi.sayAge()

const coca = new Cola('CocaCola', 1886)
coca.sayAge()

/* -- End ------------------------------------ */

/* -- Start -------------------------------------
* 测试导入的方法编译后的结果
* */
const test1 = add(1, 2)
const test2 = add(1866, 2333)
console.log(add(test1, test2))
/* -- End ------------------------------------ */
