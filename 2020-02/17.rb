#ハッシュ

currencies = {
  japan: "yen",
  us: 'dollar',
  india: 'euro'
}

currencies.each do |key, value|
  puts "#{key}: #{value}"
end

currencies.each do |key_value|
  #キートvalueが配列に格納される
  puts "#{key_value[0]}: #{key_value[1]}"
end

#同値比較

a = {a: 1, b: 2, c: 3}
b = {a: 1, b: 2, c: 3}
a === b #true

#並び順が違くてもtrue
c =  {b: 2, a: 1, c: 3}
a === c # true

#要素数
c.size #3

#削除
a.delete(:a) #戻り値は1 破壊的
