def merge_sort(arr)
	return arr if arr.length <= 1
	
	mid = arr.length/2
	left = arr[0..mid]
	right = arr[mid...arr.length]
	
	merge(merge_sort(left), merge_sort(right))
end

def merge(left, right)
	sorted = []
	
	until left.empty? || right.empty?
		if left.first <= right.first
			sorted << left.shift
		else
			sorted << right.shift
		end
	end
end

numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = merge_sort(numbers)
puts "Sorted array: #{Sorted_numbers.join(' ')}"
	
en
