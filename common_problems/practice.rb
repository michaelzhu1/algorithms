require 'byebug'

def balance_brackets(expression)
  stack = []
  result = true
  opposite = {'}'=>'{', ')'=>'(', ']'=>'['}
  expression.each_char do |ch|
    case ch
    when '(','{','['
      stack.push(ch)
    when ')','}',']'
      popped = stack.pop()
      if popped != opposite[ch]
        result = false
        break
      end
    end
  end
  if stack.length == 0 && result
    puts 'YES'
  else
    puts 'NO'
  end
end

balance_brackets('{[()]}')
balance_brackets('{[(])}')
balance_brackets('{{[[(())]]}}')
