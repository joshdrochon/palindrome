let word = prompt("Enter a word").toLowerCase();
let alteredWord = word.split(" ").join("");

let newArray = alteredWord.split("");
let emptiedArray = newArray.slice(); //this array will be emptied, and original will remain intact
let newArrayReversed = [];

for(let i = newArray.length; i > 0; i--){
	let extractedLetter = emptiedArray.pop([i]);

  newArrayReversed.push(extractedLetter);
}

if(newArray.toString() == newArrayReversed.toString()){
	console.log("It's a flippin palindrome!");
}else{
	console.log("Sorry, mate, tough break.");
}
