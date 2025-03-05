my_queue = []

my_queue.push(10)
my_queue.push(20)
my_queue.push(30)

puts "Front element: #{my_queue.first}"
my_queue.shift # Removes and returns the first element
puts "Front element after shift: #{my_queue.first}"
