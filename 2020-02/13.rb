#range
range = 1..5
p range.include?(1) #true

# 1..5.include?(1) #演算子の優先度の関係でerror 
(1..5).include?(1)

a = [1,2,3,4,5]
p a[1..3] #2,3,4

##配列
a[1,3] #[2,3,4]
p a.values_at(0,2,4) #[1,3,5]
a = [1]
b = [2,3]
p a.concat(b) #1,2,3

#集合
a = [1,2,3]
b = [3,4,5]

a | b #[1,2,3,4,5]
a - b #[1,2] 左の配列から右の配列に含まれる要素を引く
a & b #[3] 二つの配列に共通する要素を返す

a = [1]
b = [2,3]
# p a.push(b) #[1,[2,3]]
p a.push(*b) #[1,2,3]

p "ruby".chars #["r", "u", "b", "y"]

Array.new() #[]
Array.new(5,0) # [0,0,0,0,0]
Array.new(5) #[nil, nil, nil, nil, nil]
p Array(nil) #[]

a = ["a", "b", "c"]
a.each.with_index(1) {|b, i| p "#{i}番目は#{b}"}

dimensions = [
  [10,20],
  [20,30],
  [30,40],
]

areas = []
dimensions.each do |dimension|
  length = dimension[0]
  width = dimension[1]
  areas << length * width
end
p areas

dimensions.each.with_index do |(length,width), i|
  areas << length * width
end

p areas