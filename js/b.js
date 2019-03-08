// 通过import获取a.js文件的内部变量，{}括号内的变量来自于a.js文件export出的变量标识符。
import {sex,echo} from "./a.js"
console.log(sex)   // boy
echo(sex) // boy