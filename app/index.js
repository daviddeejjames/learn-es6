//
// Generators
//
function* letterMaker(){
	console.log("=Our Letter Generator/Iterator=");
	yield 'a';
	yield 'b';
	yield 'c';
}

let letterGen = letterMaker();

console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);

function* countMaker(){
	console.log("=Our Counter/ID Generator=");
	let count = 0;
	while (count < 3){
		yield count +=1;
	}
}

let counter = countMaker();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

