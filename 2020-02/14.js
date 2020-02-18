//オブジェクトの複製

const person = {
  id: 1,
  name: "鈴木",
  age: 28,
}

const obj = {
  list: [1, 2, 3],
  subObject: { id: 1, name: '鈴木' },
  method: () => {
    return 'メソッド実行'
  }
}

obj.method()
person

const object = {}

person.id = 2
person.name = '畠山'
person

const object1 = {
  result: true,
  members: [
    { id: 1, name: "鈴木", admin: false },
    { id: 2, name: "田中", admin: false },
    { id: 3, name: "高橋", admin: false },
  ]
}

//オブジェクトのコピー
const copiedObject1 = Object.assign({}, object1)
copiedObject1

//オブジェクトのコピー
const copiedObject2 = { ...object1 }
copiedObject2

object1.result = false
copiedObject1.result

const action = { admin: true }
const copiedObject4 = { ...object1.members, object1['members'][0]: { ...action } }
console.log(copiedObject4)
//keyがあるかどうかの確認
object1.hasOwnProperty('members')
// console.log('id' in person)
