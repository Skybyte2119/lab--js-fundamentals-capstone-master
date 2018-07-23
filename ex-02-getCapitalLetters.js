/**
 * Ex-03: getCapitalLetters()
 *
 * Write a function called getCapitalLetters()that returns
 * an array of all of the capital letters of a string
 *
 * Hint:
 *  for explorer mode you will need to get the character code
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
**/


// ++ YOUR CODE HERE
function getCapitalLetters(string) {
  var result=[];
 
  for(x=0; x<string.length; x++){
      var array = string[x];
      if(array === array.toUpperCase() && array !== " "){
           result.push(array);
      }
  }
  return result;
}


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
console.group('ex-02');
  console.log('%cFunction: getCapitalLetters', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// Function output should be:  ['I', 'X', 'C', 'S', 'M', 'B', 'F', 'E']
/* ------------------------------------------------------ */
console.log('TEST-1');

var output_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')

console.assert( output_1.length === 8 )
console.assert( output_1.indexOf('I') >= 0 )
console.assert( output_1.indexOf('S') >= 0 )
console.assert( output_1.indexOf('M') >= 0 )
console.assert( output_1.indexOf('B') >= 0 )
console.assert( output_1.indexOf('F') >= 0 )
console.assert( output_1.indexOf('E') >= 0 )



/* ----------------------- TEST-2  ----------------------- */
// Function output should be:  ['T', 'L', 'D', 'R', 'N', 'X']
/* ------------------------------------------------------ */
console.log('TEST-2');

var output_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

console.assert( output_2.length === 7 )
console.assert( output_2.indexOf('T') >= 0 )
console.assert( output_2.indexOf('L') >= 0 )
console.assert( output_2.indexOf('D') >= 0 )
console.assert( output_2.indexOf('X') >= 0 )



/* ----------------------- TEST-3  ----------------------- */
// Explorer Mode: Write the function to make these tests pass
//--------------------------------------------------------
// var output_3 = getCapitalLetters('FYI; Thanksgiving is always on Thursay.')

// console.log('\n');
// console.log('TEST-3');
// console.assert( output_3.length === 5 )
// console.assert( output_3.indexOf('F') >= 0 )
// console.assert( output_3.indexOf('Y') >= 0 )
// console.assert( output_3.indexOf('I') >= 0 )

/* ----------------------- END  ----------------------- */
console.log('\n\n');
