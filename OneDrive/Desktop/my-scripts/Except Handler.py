def function_c()
	print("Entering function_c")
	try:
		result = 10/0
		print(result)
	except ZeroDivisionError as e:
		print(f"Handled ZeroDivisionError in function_c: {e}")
	print("Exiting function_c")
def function_b():
	print("Entering function_b")
	try:
		function_c()
	except TypeError as e:
		print(f"Handled TypeHerror in function_b: {e}")
		print("Exiting function_b")
def function_a():
	print("Entering function_a")
	try:
		function_b
	except ZeroDivisionError as e:
		print(f"Handled ZeroDivisionError in function_a: {e}")
	print("Exiting function_a")
	
def main():
	print("Entering main")
	try:
		function_a
	except ZeroDivisionError as e:
		print(f"Handled ZeroDivisionError in main: {e}")
	print("Exiting main")
	
if __name__ == "__main__":
	main()