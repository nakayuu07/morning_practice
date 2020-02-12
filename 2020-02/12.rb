#配列・繰り返し処理

a, b = [1,2]
p a
p b
# 二番目の要素を削除する
a = [1,2,3]
a.delete_at(1) ##戻り値は削除された要素/破壊的
a ## [1, 3]

#divmodは商と余りを配列でかえす
14.divmod(3) ##[4,2]

#delete_if・破壊的
a = [1, 2, 3, 1, 2, 3]
a.delete_if do |n|
  n.odd?
end
a #[2,2]

##フロックを使う配列のメソッド
##map(collect)

nums = [1,2,3,4]
new_nums = nums.map { |n|  n * 10 } #[1,2,3,4]
new_nums = nums.collect { |n|  n * 10 } #[1,2,,3,4]

str_nums = nums.map(&:to_s) #[1,2,3,4]
str_nums = nums.collect(&:to_s)#[1,2,3,4]

##select(find_all)/reject
nums = [1,2,3,4]
even_nums = nums.select { |n| n.even?} #[2,4]
even_nums = nums.select(&:even?) #[2,4]

even_nums = nums.find_all { |n| n.even?} #[2,4]
even_nums = nums.find_all(&:even?) #[2,4]

odd_nums = nums.reject { |n| n.even?} #[1,3]
odd_nums = nums.reject(&:even?)#[1,3]

##find(detect)
nums = [1,2,3,4]
even_num = nums.find { |n| n.even?} #2
even_num = nums.detect { |n| n.even?} #2

##inject(reduce)
numbers = [1,2,3,4]
sum = numbers.inject(0) { |result, n| result + n } #10
sum = numbers.reduce(10) { |result, n| result - n} #0

difference = numbers.reduce(0) { |result, n| result + n } #10
difference = numbers.reduce(10) { |result, n| result - n} #0

product = numbers.inject(1) { |result, n| result * n } #24
p sum