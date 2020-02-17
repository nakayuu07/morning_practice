const arr = [1, 2, 3, 4, 5]
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i])
}

for (const value of arr) {
  console.log(value)
}

for (const value in arr) {
  console.log(arr[value])
}

const userDate = {
  id: 1,
  name: "tanaka",
  age: 28
}

console.log(Object.values(userDate)) // [ 1, 'tanaka', 28 ]
console.log(Object.keys(userDate)) //[ 'id', 'name', 'age' ]
console.log(Object.entries(userDate))//[['id', 1], ['name', 'tanaka'], ['age', 28]]

const { id, name, age } = userDate
id //1
name // "tanaka"
age //28

const date = new Date
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth()) //0から始まるので注意
console.log(date.getDate())
console.log(date.getDay())//曜日 [0: 日曜日,1: 月曜日, ..., 6: 土曜日]
date.getHours()
date.getMinutes()
date.toLocaleDateString() //'2020/2/17'
date.toLocaleString() //'2020/2/17 21:22:43'

Date.now() //タイムスタンプ 1581942265251

