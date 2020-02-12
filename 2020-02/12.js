let fruits = ["りんご", "みかん", "なし"]

for (const value of fruits) {
  console.log(value)
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// unshift・push
//バナナを先頭に追加
fruits.unshift('バナナ')
console.log(fruits)
//いちごを最初に追加
fruits.push('いちご')

//pop・shift
//最初の要素を削除
fruits.shift()
//最後の要素を削除
fruits.pop()

const array1 = []
console.log(array1.pop()) //undefined

//配列の結合
let array2 = [1, 2, 3]
let array3 = [4, 5, 6]
let array4 = array2.concat(array3)
console.log(array4)
array4 = [...array2, ...array3]
console.log(array4)

//find・findIndex
let users = ["田中", "高橋", "中村", "伊藤"]
let correctUser = users.find(user => user === '田中')
console.log(correctUser) //田中

correctUserIndex = users.findIndex(user => user === '田中')
console.log(correctUserIndex) //0

const nums = [1, 3, 3, 2, 4, 5]
let sortNums = nums.sort((a, b) => {
  return a - b
})
console.log(sortNums)

const strs = ['orange', 'apple', 'banana']
newStrs = strs.sort((a, b) => a.localeCompare(b))
console.log(newStrs)