function calculateSalesTax(amount, taxRate) {

	const salesTax = amount * taxRate;
	return salesTax;
	
const purchaseAmount = 100
const salesTaxRate = 0.07;
const taxAmount = calculateSalesTax(purchaseAmount, salesTaxRate);

console.log("Sales Tax:", taxAmount);