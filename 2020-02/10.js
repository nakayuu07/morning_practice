//  複合代入演算子

let a = 10
let b = 10

a += b // a = a + b
a -= b // a = a - a
a *= b // a = a * b
a /= b // a = a / b
a %= b // a = a % b

// 関数
function myFunc(a) {
  return a * 2
}

let myFunc2 = (a) => {
  return a * 2
}

let myFunc3 = a => a * 2

let myFunc4 = (a, b) => a * b

// swich文
// switchの比較は === である

const myFruit = 'りんご'

switch (myFruit) {
  case 'りんご':
    console.log('りんごです')
    break;
  case 'みかん':
    console.log('みかんです')
  case '梨':
    console.log('梨です')
    break;
  default:
    console.log('その他です')
    break;
}

// for分

for (let i = 0; i < 10; i++) {
  console.log(i)
}

for (let i = 1; i < 10; i *= 2) {
  console.log(i)
}

for (let i = 10; i >= 1; i /= 2) {
  console.log(i)
}

// while文

let num = 0
while (num < 10) {
  console.log(num)
  num += 1
}

// continue

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // iを2で割った余りが0ならこれ以降はスキップされる
    continue
  }

  console.log(i)
}