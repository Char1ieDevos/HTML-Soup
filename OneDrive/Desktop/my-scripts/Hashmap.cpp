#include <iostream>
#include <queue>

int main() {
	std::queue<int> myQueue;
	
	myQueue.push(10);
	myQueue.push(20);
	myQueue.push(30);
	
	std::cout << "From element: " <<myQueue.front() std.endl;
	myQueue.pop();
	std:cout << "From element after pop: " <<myQueue.front() << std::endl;
	
	return 0;
	}