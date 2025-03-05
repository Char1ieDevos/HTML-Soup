function performOperations(num1, num2) {

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

return {
	sum: sum,
	difference: difference
	product: product,
	quotient: quotient,
		};
	}
	
let result = performOperations(10,5);
console.log(result);