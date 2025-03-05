try:

	result = 10/0
	print(result)
except ZeroDivisionError:

	print("Cannot divide by zero!")
	
try:

	value = int(input("Enter an integer: "))
	result = 10/value
	print(result)
except ZeroDivisionError:
	print("Cannot divide by zero.")
except ValueError:
	print("Invalid input. Please enter an integer.")
except Exception as e:
	print(f"An unexpected error occurred: {e}")
	
print("Program continues.")