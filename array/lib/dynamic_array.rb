require_relative "static_array"
require 'byebug'
class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new(0)
    @length = 0
    @capacity = 8
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" unless @length > 0
    val = @store[@length - 1]
    @length -= 1
    val
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    if @length >= @capacity
      resize!
    end
    @length += 1
    @store[@length - 1] = val
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length == 0
    value = @store[0]
    index = 0
    while index < @length
      @store[index] = @store[index + 1]
      index += 1
    end
    @length -= 1
    value

  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    if @length >= @capacity
      resize!
    end
    @length += 1
    index = @length - 1
    while index > 0
      @store[index] = @store[index - 1]
      index -= 1
    end
    @store[0] = val
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    if index >= @length || index < 0
      raise "index out of bounds"
    end

  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    old_store = @store
    @capacity = @capacity * 2
    index = 0
    while index < @length
      @store[index] = old_store[index] if old_store[index]
      index += 1
    end
  end
end
