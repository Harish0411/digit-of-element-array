//count howmany digits in the array

let array = [345, 32, 87, 1234, 66709, 3];
let digit =[];

for(i=0; i<array.length; i++){
     let numOfdigit = array[i].toString().length;
	 digit.push(numOfdigit);
}
console.log(array);
console.log(digit);
