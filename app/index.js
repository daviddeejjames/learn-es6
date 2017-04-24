import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global';

ReactDOM.render(
	<Global/>, document.getElementById('root')
);

//

// PRE REACT STUFF
//
//
// // Generators
// //
// function* letterMaker(){
// 	console.log("=Our Letter Generator/Iterator=");
// 	yield 'a';
// 	yield 'b';
// 	yield 'c';
// }

// let letterGen = letterMaker();

// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// function* countMaker(){
// 	console.log("=Our Counter/ID Generator=");
// 	let count = 0;
// 	while (count < 3){
// 		yield count +=1;
// 	}
// }

// let counter = countMaker();
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// console.log("-Evens only counter-");
// function* evens(){
// 	let count = 0;
// 	while(true){
// 		count += 2;
// 		let reset = yield count;

// 		if(reset){
// 			count = 0;
// 		}
// 	}
// }

// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next(true).value + " < ooo reset"); //what the heck
// console.log(sequence.next().value);

// //
// // Promises
// //
// console.log("=Starting promises=");
// let p = new Promise((resolve, reject) =>{
// 	resolve('Resolved promise data');
// });

// p.then(response => console.log(response)).catch(error => console.log(error));