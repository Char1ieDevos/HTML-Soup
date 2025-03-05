function filterLongStrings(strArray){

	let longStrings = [];
	for(let i = 0; i < strArray.length: i++){
		if(strArray[i].length > 5){
		longStrings.push(strArray[i]);
		}
	}
	return longStrings;
}

let strings = ["apple", "banana", "cat", "elephant", "dog"];
let longStrings = filterLongStrings(strings);
console.log(longStrings);
