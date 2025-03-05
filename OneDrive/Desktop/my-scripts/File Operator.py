import os

def perform_file_operations(filepath, operation, content=None):
	"""Performs various file operations.
	
	Args:
	filepath: The Path to the operation: The operation to perform ("read", "write", "append", "delete", "rename", "exists").
        content (optional): The content to write or append (for "write" and "append" operations).

    Returns:
        The result of the operation (e.g., file content for "read", True/False for "exists", None otherwise).
        Or raises an exception if there is an error.
    """
	
	try:
		if operation == "read":
			with open(filepath, "r") as f:
				return f.read()
		elif operation == "write":
			with open(filepath, "w") as f:
				if content is not None:
					f.write(content)
		elif operation == "delete":
			os remove(filepath)
		elif operation == "rename":
			new_filepath = input(f"Enter the new filepath for {filepath}: ")
			os.rename(filepath, new_filepath)
		elif operation == "exists":
			return os.path.exists(filepath)
		else: 
			return "Invalid operation"
			
		except FileNotFoundEroor:
			return f"File not found: {filepath}"
		except Exemption as e:
			return f"An error occurred: {e}"
			
	
def main():
	filepath = input ("Enter the filepath: ")
	
	while True:
	print("\nChoose an operation:")
        print("1. Read")
        print("2. Write")
        print("3. Append")
        print("4. Delete")
        print("5. Rename")
        print("6. Exists")
        print("7. Exit")
		
		choice = input ("Enter your choice: ")
		
		if choice == '7':
			break
			
		if choice in ('1', '2', '3'):
			content = None
			if choice in ('2', '3'):
				content = input("Enter the content: ")
				
			if choice == '1':
				operation = "read"
			elif choice == '2':
				operation = "write"
			else:
				operation = "append"
				
			result = perform_file_operations(filepath, operation, content)
			if isinstance(result, str): #Check if result is a string (error message)
                print(result) #Print the error message
            elif result is not None:
                print("File content:")
                print(result)

        elif choice == '4':
            result = perform_file_operations(filepath, "delete")
            if isinstance(result, str): #Check if result is a string (error message)
                print(result) #Print the error message
            else:
                print("File deleted.")

        elif choice == '5':
            result = perform_file_operations(filepath, "rename")
            if isinstance(result, str): #Check if result is a string (error message)
                print(result) #Print the error message
            else:
                print("File renamed.")
        elif choice == '6':
            result = perform_file_operations(filepath, "exists")
            print(f"File exists: {result}")
        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()