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


function* evens(){
	let count = 0;
	while(true){
		count += 2;
		let reset = yield count;

		if(rest){
			count = 0;
		}
	}
}

let sequence = evens();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next(true).value);
console.log(counter.next().value);