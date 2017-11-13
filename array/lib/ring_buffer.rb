require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @store = StaticArray.new(0)
    @length = 0
    @capacity = 8
    @start_idx = 0
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[(@start_idx + index) % @capacity]
  end

  # O(1)
  def []=(index, val)
    check_index(index)
    @store[(@start_idx + index) % @capacity] = val
  end

  # O(1)
  def pop
    unless @length >= 0
      raise "index out of bounds"
    end
    val = @store[@length - 1]
    @length -= 1
    val
  end

  # O(1) ammortized
  def push(val)
    @length += 1
    resize! if @length == @capacity
    @store[@length - 1] = val
  end

  # O(1)
  def shift
    raise "index out of bounds" if @length == 0
    val = @store[0]
    @store[0] = nil
    @start_idx = (@start_idx + 1) % @capacity
    @length -= 1
    val
  end

  # O(1) ammortized
  def unshift(val)
    @length += 1
    resize! if @length == @capacity
    @store[0] = val
    @start_idx = (@start_idx - 1) % @capacity
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    unless index >= 0 && index < @length
      raise "index out of bounds"
    end
  end

  def resize!
    # @capacity = @capacity * 2
    # old_store = @store
    # @store = StaticArray.new(@capacity)
    # @length.times { |i| @store[i] = old_store[i] if old_store[i]}
    # @start_idx = 0
    new_capacity = capacity * 2
    new_store = StaticArray.new(new_capacity)
    length.times { |i| new_store[i] = self[i] }

    self.capacity = new_capacity
    self.store = new_store
    self.start_idx = 0
  end
end
