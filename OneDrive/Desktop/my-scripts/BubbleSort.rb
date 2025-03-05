def bubble_sort(arr)
	n = arr.length
	(n-1).times do
		(n-1).times do |j|
			if arr[j] > arr[j + 1]
				arr[j], arr[j + 1] = arr[j + 1], arr[j]
			end
		end
	end
	arr
end

numbers = [64,34,25,12,22,11,90]
sorted_numbers = bubble_sort(numbers)
puts "Sorted array: #{sorted_numbers.join(' ')}"
	
	