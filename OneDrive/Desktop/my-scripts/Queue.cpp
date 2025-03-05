#include <iostream>
#include <vector>

int main() {
	std:vector<int> numbers = {1,2,3,4,5}; //using a vector dynamic array
	
	// Function to calculate sum of elements
	int sum = 0;
	for (int num: numbers) {
		sum += num;
	}
	
	std:: cout << "Sum of numbers: " << std::endl;
	return 0;
}
