require 'byebug'
# Write a method that will sum the digits of a positive integer.
# If it is greater than or equal to 10, sum the digits of the resulting number.
# Keep repeating until there is only one digit in the result.
# The result is called a 'digital root'.
# Do not use string conversion within your method.
def digital_root(number)
  if number > 10
    sum = 0
    until number == 0
      sum += number % 10
      number = number / 10
    end
    return digital_root(sum)
  end
  return number
end

# Write a function that takes a message and an increment amount.
# Output the same letters shifted by that amount in the alphabet.
# Assume lowercase and no punctuation.
# Preserve spaces.
def caesar_cipher(string, shift)
  alphabet = ('a'..'z').to_a
  result = ''
  string.each_char do |char|
    if char == ' '
      result += ' '
      next
    end
    old_index = alphabet.index(char)
    old_index += shift
    result += alphabet[old_index % 26]
  end
  return result
end

# Write a function that takes two strings.
# Return the longest common substring.
def common_substrings(string_one, string_two)
  longest_substring = ''
  start_index = 0
  while start_index < string_one
    len = longest_substring.length + 1
    while start_index + len < string_one.length

    end
  end

end

# Write a function that takes an array of integers and returns their sum.
# Use recursion.
def sum_rec(numbers)
  return numbers.first if numbers.length == 1
  numbers.first + sum_rec(numbers.drop(1))
end

# Write a function that takes n, the length of the sequence.
# Return the first n elements from the fibonnacci sequence as an array.
def fibs(n)
  return [0] if n == 1
  return [0, 1] if n == 2
  fibs(n-1) << fibs(n-2).last + fibs(n-1).last
end

# Write a function that takes a string.
# Return true if the string is a palindrome, otherwise return false.
# It should take less time and memory than reversing the string.
def is_palindrome?(string)
  back_index = string.length - 1
  mid_point = string.length / 2
  i = 0
  while i < mid_point
    if string[i] != string[back_index - i]
      return false
    end
    i += 1
  end
  return true
end

# Write a method that takes a string as input.
# It should return true if the input is a valid IPv4 address.
# Valid IPs are anything between '0.0.0.0' and '255.255.255.255'.
def valid_ip?(string)
  ip = string.split('.')
  return false if ip.length != 4
  ip.all? {|num| num.to_i.between?(0,255)}
end

# Implement the Folding Cipher.
# It folds the alphabet in half and uses the adjacent letter.
# a -> z, b -> y, c -> x, m -> n, etc...
def folding_cipher(string)
  alphabet = ('a'..'z').to_a
  folding_hash = {}
  alphabet.each_with_index do |char, index|
    folding_hash[char] = alphabet[25 - index]
  end
  new_string = string.split("").map do |char|
    folding_hash[char]
  end
  return new_string.join('')
end
# puts folding_cipher('test')

# Write a method that finds all the unique substrings for a word.
def uniq_subs(string)
  result = []
  i = 0
  while i < string.length
    j = i
    while j < string.length
      result.push(string[i..j])
      j += 1
    end
    i += 1
  end
  result.uniq
end

# Given an array of integers find the largest contiguous subsum.
# You can solve this trivially in O(n**2) time by considering all subarrays.
# Try to solve it in O(n) time with O(1) memory.
def lcs(array)
  max = 0
  current_sum = 0
  array.each do |num|
    current_sum += num
    if current_sum > max
      max = current_sum
    end
    if current_sum < 0
      current_sum = 0
    end
  end
  return max
end

# Write a function that takes a year as a four digit integer.
# Returns an array of the 10 closest subsequent silly years.
# A silly year's first two digits plus the last two digits equal the middle two.
def silly_years(year)
  result = []
  year += 1
  until result.length == 10
    if is_silly_year?(year)
      result.push(year)
    end
    year += 1
  end
  return result
end


def is_silly_year?(year)
  str_year = year.to_s
  str_year[0..1].to_i+str_year[2..3].to_i == str_year[1..2].to_i
end


# Take an array of integers, and integer k.
# Return all pairs that sum to k exactly.
# List the pairs in [min, max] order.
# Time complexity: O(n).
# Return a set.
def pair_sum(array, k)
  seen = Set.new
  pairs = Set.new
  array.each do |num|
    target = k - num
    if seen.include?(target)
      pairs.add([num, target].sort)
    end
    seen.add(num)
  end
  pairs
end

# Take a matrix of integers and coordinates.
# The coordinates represent a rectangular region within the matrix
# Find the sum of numbers falling inside the rectangle.
# Time complexity: O(number of rows * number of columns).
def matrix_region_sum(matrix, top_left_coords, bottom_right_coords)

end

# Implement Merge Sort
# Hint: This typically involves a helper function.
def merge_sort(array)
  return array if array.length <= 1
  mid = array.length / 2
  left = merge_sort(array.take(mid))
  right = merge_sort(array.drop(mid))
  merge(left, right)
end

def merge(left, right)
  merged = []
  until left.empty? || right.empty?
    if left[0] <= right[0]
      merged << left.shift
    else
      merged << right.shift
    end
  end
  merged.concat(left)
  merged.concat(right)
  merged
end

# Implement binary search.
# Return nil if the target isn't found.
def binary_search(array, target)
  mid = array.length / 2
  return mid if array[mid] == target
  if array[mid] > target
    binary_search(array[0...mid], target)
  else
    search_result = binary_search(array[(mid+1)..-1], target)
    search_result.nil? ? nil : search_result + mid + 1
  end
end

# You are given a list of numbers in an array.
# Replace all the numbers with the product of all other numbers.
# Do this in O(n) time without using division.
def productify(array)

end

# Write a function that takes an array and returns all of its subsets.
def subsets(array) # O(2^n)
  return [[]] if array.empty? #set up the base case to return an array of empty array
  first_val = array[0] #grab the first value to later concat it to prev_subsets
  prev_subsets = subsets(array[1..-1]) #get all the subsets without the first value
  new_sub = prev_subsets.map{|sub| sub + [first_val]} #map the first value to each element in the
  #previous subset, there is major difference between concat and + in array:
  #concat: modify the array that's being concated. ex: a = [1,2], b = [3,4]
  # a.concat(b) a => [1,2,3,4]
  # a + b a => [1,2]
  # a.concat(b) is the same as a = a + b
  prev_subsets + new_sub #concat the previous subsets to the new_sub
  #to get all the subsets with and with out this first value
end

# Return the indices of the start/end of the longest palindrome in the string.
# You could reverse the string and compare it to the original, but that is slow.
# Instead, you should be able to solve the problem with O(1) memory.
def longest_palindrome(string)

end

# Given two arrays, find the intersection of both sets.
# It should be trivial to write an O(n**2) solution.
# Use sorting to solve in O(nlog(n)).
# Next, improve this to O(n) time (maybe use a non-array datastructure).
def fast_intersection(array_one, array_two)

end

# Write a function that takes two arrays of integers
# Returns an array with all the subsets commmon to both arrays.
# Don't generate all subsets of both arrays, which would be exponential time.
# Instead, directly generate the subsets of both.
def common_subsets(array_one, array_two)

end

# You are given an array and index.
# Find if it's possible to reach 0 by starting at the index.
# You can only move left or right by the distance found at array[index].
def can_win?(array, index)

end

# Assume an array of length n, containing the numbers 1..n in jumbled order.
# "Sort" this array in O(n) time.
# Hint: You should be able to do this without looking at the input.
def sort1(array)

end

# Assume an array of length n with numbers in the range 1..N (N >= n).
# Sort this array in O(n + N) time.
# You may use O(N) memory.
def sort2(array, max_value)

end

# Say I give you an array of n strings, each of length k.
# Merge sort can sort this in O(knlog(n)).
# Sort the strings in O(kn).
# Hint: Do not compare any two strings.
# All strings contain only lowercase letters without whitespace or punctuation.
def sort3(array, length)

end

# Given an array, write a function that will return a random index of the array.
# The chance of returning a given index will vary with the value of the element.
# Probability of i should be the ith element divided by the sum of all elements.
def weighted_random_index(array)

end

# Given an array, move all zeros to the end.
# The order of non-zero elements does not matter.
# Try to accomplish this in O(n) time and O(1) space.
def move_zeros(array)

end

# Implement the 'look and say' function.
#'Look and say' takes an input array and outputs an array.
# The output describes the count of the elements in the input.

def look_and_say(array)
  current_counter = 1
  result = []
  new_array = array[1..-1] || []
  current_num = array[0]
  new_array.each do |num|
    if current_num == num
      current_counter += 1
    else
      result << [current_counter, current_num]
      current_num = num
      current_counter = 1
    end
  end
  result << [current_counter, current_num]
  result
end

# I give you a scrambled list of n unique integers between 0 and n.
# Tell me what number is missing?
# How could you solve the problem in O(n), and also O(1) space?
def sum_upon_sums(array)

end

# Implement a stack with a max method that returns the maximum value.
# It should run in O(1) time.
class MaxStack

end

# Implement a queue using stacks.
# That is, write enqueue and dequeue using only push and pop operations.
# In terms of performance, enqueue should be O(1).
# Dequeue may be worst-case O(n).
# In terms of ammortized time, dequeue should be O(1).
# Prove that your solution accomplishes this.
class StackQueue

end

# Take an array, and a window size w.
# Find the maximum max - min within a range of w elements.
# First solve MaxStack.
# Write a MinMaxStack to track both the min and the max in a stack.
# Next, solve StackQueue.
# Write a MinMaxStackQueue which tracks both the min and max.
# Last, use MinMaxStackQueue to solve the problem.
class MinMaxStack

end

class MinMaxStackQueue

end

def windowed_max_range(array, w)

end

# Suppose a hash representing a directory.
# All keys are strings with names for either folders or files.
# Keys that are folders point to nested hashes.
# Keys that are files point to "true".
# Write a function that takes such a hash.
# Return an array of strings with the path to each file in the hash.
def file_list(hash)

end

# Assume an array of non-negative integers.
# A second array is made by shuffling the first and deleting a random element.
# Given these two arrays, find which element is missing in the second array.
# Do this in linear time with constant memory use.
def find_missing_number(array_one, array_two)

end

# Create a function that takes three strings.
# Return whether the third is an interleaving of the first two.
# Interleaving means it contains the same characters and preserves their order.
def is_shuffle?(string_one, string_two, string_three)

end

# Write a function that takes an integer and returns it in binary form.
def binary(integer)
  return '0' if integer <= 0
  result = ''
  until integer == 0
    digit = integer % 2
    # byebug
    result = digit.to_s + result
    integer = integer / 2
  end
  result
end
p '----------------------------------'
puts binary(8)
puts binary(16)
puts binary(32)
puts binary(31)
p '----------------------------------'

# Write a recursive function that takes a number and returns its factorial.
def recursive_factorial(number)
  return 1 if number <= 0
  return number if number <= 2
  number * recursive_factorial(number - 1)
end

# Write an iterative function that takes a number and returns its factorial.
def iterative_factorial(number)
  sum = 1
  number.downto(1) {|num| sum*=num}

end

# Write a method that takes an array and returns all its permutations.
def permutations(array)

end
