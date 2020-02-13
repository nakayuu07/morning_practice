let array = [1, 2, 3, 4]
for (const value of array) {
  console.log(value)
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

array.reverse();
let newArray = array.map(a => a * 10)
console.log(newArray)

console.log(array.filter(a => a >= 3))

const userDataList = [
  { name: '鈴木', age: 11 },
  { name: '田中', age: 22 },
  { name: '西中', age: 33 },
  { name: '中村', age: 44 },
  { name: '高橋', age: 55 },
]

userDataList.filter(user => user.age >= 30)

const priceList = [100, 500, 900]

const sum = priceList.reduce((prev, current) => prev + current)
console.log(sum)
const userList = ['田中', '高橋', '鈴木', '吉田']
//reudceとは逆で右から左に処理する
console.log(userList.reduceRight((prev, current) => `${prev}と${current}`))//吉田と鈴木と高橋と田中

myStr = 'hello'
console.log([...myStr]) //[ 'h', 'e', 'l', 'l', 'o' ]

let a, b, c = [1, 2, 3]

for (const value of array) {
  console.log(value)
}