/**
 * getWordCount()
 *
 * Write a function called getWordCount() that takes a string of text as input and returns
 * an object which stores the frequency of each word in the string.
 *
 * Note that your counts should NOT be case-sensitive.
 *
**/


// ++ YOUR CODE HERE

function getWordCount(inpuText) {
	var newArray = "";
	var objWithCounters = {};

	for (var i=0; i<inpuText.length; i++) {
		var char = inpuText[i];
		if (char !== "," && char !== "." && char !== "?" && char !== "!") {
			newArray += char;
		} else {
			newArray += "";
		}
	}

	newArray = newArray.toLowerCase();

	newArray = newArray.split(" ");

	for (var i=0; i<newArray.length; i++) {
		var word = newArray[i];
		var counter = 0;

		for (var j = newArray.length -1; j>=0; j--) {
			if (word === newArray[j]) {
				counter++;
			}
		}

		objWithCounters[word] = counter;

	}

	return objWithCounters;



// EXPLORER MODE - PART 2 - Strip the Punctuation
//-----------------------------
console.log("[4] Should return 4 for 'needy'");
console.log("====================================");
console.log();

console.log("[5] Should return 6 for 'caw'");
console.log("====================================");
console.log();

console.log("[6] Should return 2 for 'dead'");
console.log("====================================");
console.log();


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-07');
  console.log('%cFunction: getWordCount', 'background-color: green; color: white')
console.groupEnd();


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var sampleText = `I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had.
I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight.
I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land.
Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C.`

var moreText = ``

var wordFrequencyObject = getWordCount(sampleText)

/* ----------------------- TEST-1  ----------------------- */
// Function returns an object
/* ------------------------------------------------------ */
console.log('TEST-1');
console.assert( typeof wordFrequencyObject === "object" )


/* ----------------------- TEST-2  ----------------------- */
// Function returns word counts on the returned object.
//    The word is the property, and the count is the value.
/* ------------------------------------------------------ */
console.log('TEST-2');

// Should return 3 for word 'be' ('be' is found 3 times in sentenceString)
console.assert( wordFrequencyObject.be === 3 )
console.assert( wordFrequencyObject.need === 3 )
console.assert( wordFrequencyObject.you === 9 )
console.assert( wordFrequencyObject.not === 4 )
console.assert( wordFrequencyObject.only === 2 )
console.assert( wordFrequencyObject.in === 4 )

/* ----------------------- TEST-3  ----------------------- */
// Tests function with other sentence string as input
/* ------------------------------------------------------ */
console.log('TEST-3');

var sentence2 = "You need not be worried, you are not in danger"
var otherWordFreqObj = getWordCount(sentence2)

console.assert( otherWordFreqObj.be === 1 )
console.assert( otherWordFreqObj.need === 1 )
console.assert( otherWordFreqObj.you === 2 )
console.assert( otherWordFreqObj.not === 2 )
console.assert( otherWordFreqObj.in === 1 )





/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n')
