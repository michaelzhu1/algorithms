# Linked Lists

## singly-linked list

### disadvantage
* very similar to array, however, to index an element in the linked list, you have to go though all the elements which may take linear time

### advantage
* insert can take constant time if you just insert to the beginning of the list, takes linear time though if insert to the very end
* delete can take constant time as well if you just delete the first element

#### note
I guess singly linked list does not have access to the tail, only the head


```ruby
class Node
  def initialize(data)
    @data = data
    @next = nil
  end

  def append(data)

  end
end
```

## doubly-linked list
