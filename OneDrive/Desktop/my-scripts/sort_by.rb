points = [{x: 3, y: 1}, {x: 1, y: 5}, {x: 2, y: 2}]
sorted_points = points.sort_by { |point| point[:x] }

puts "Sorted points by x: #{sorted_points}"