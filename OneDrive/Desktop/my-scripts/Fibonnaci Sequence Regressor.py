def factorial(n):
	if n== 0:
		return 1
	else:
		return n * factorial(n-1)
		
print(factorial(5))
print(factorial(0))
print(factorial(100))

def sum_of_numbers(n):
	if n == 0:
		return 0
	else:
		return n + sum_of_numbers(n-1)
		
print(sum_of_numbers(5))

def fibonnaci(n):
	if <= 1:
		return n-1
	else:
		return fibonnaci(n-1) + fibonacci(n-2)
		
print(fibonacci(10))

reverse_string(s):
	if len(s) == 0L
		return ""
	else:
		return reverse_string(s[1:])+s[0]