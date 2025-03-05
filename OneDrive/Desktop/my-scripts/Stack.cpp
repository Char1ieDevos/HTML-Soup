#include <iostream>
#include <stack>

int main() {
	std::stack<int> myStack;
	
	myStack.push(10);
	myStack.push(20);
	myStack.push(30);
	
	std::cout << "Top element: " << myStack.top() << std:: endl;
	myStack.pop();
	std::cout << "Top element after: " myStack.top() << std.endl;
	
	return 0;
	
}