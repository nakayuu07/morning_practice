#メソッドの定義

def add(a, b)
  a + b
end

def 😄
  '楽しい'
end

p 😄

# 変数定義
a,b = 1,2 # a = 1, b = 2
c, d = 10 # c = 10, d = nil
e = f = 100 # a = 100, b = 100

#式展開

name = 'bob'
puts "hello #{name}"

# 数値
a = 1_000_000 #アンスコは無視される
b = 1
-b #負の数になる

#小数点が必要な場合はどっちかに.0をつける
1.0 / 2 
1 / 2.0

n = 1.to_f

# 四則演算

n = 1
n += 1
n -= 1
n *= 2
n /= 2
n ** 2

#真偽値

false #nil or false
true # false以外

#条件分
country = 'japan'

greeting = 
  if country === 'japan'
    'こんにちは'
  elsif country  === 'usa'
    'Hello'
  end

p greeting

#ヒアドキュメント

a = <<TEXT
これはヒアドキュメントです
複数行に渡って文を書くのに便利です。
TEXT

a = <<SQL
SELECT id FROM users;
SQL

p a

##文字列

p 123.to_s
p ["1",0,20,30].join # "102030"
p ?a # 'a'

#条件分と真偽値

1 && 2 && 3  #3
1 && nil && 3 #nil
1 && false && 3　#false

nil || false  #false
false || nil  #nil
nil || false || 2 || 3 #3


##case文
country = 'japan'

greeting = 
  case country
    when 'japan'
      'こんにちは'
    when 'us'
      'Hello'
    else
      '不明'
    end

    p greeting
