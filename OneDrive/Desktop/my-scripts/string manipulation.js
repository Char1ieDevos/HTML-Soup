function toUppercase(str) {

str.uppercase = str;
return str.toUpperCase();
}

let myString = "hello world";
let upperString = toUppercase(myString);
console.log(upperString);