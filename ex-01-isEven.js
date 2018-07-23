/**
 * Ex-02: isEven()
 *
 * Write a function called isEvent that takes an integer and returns
 * true or false based on whether that integer is odd or even
 *
**/


// ++ YOUR CODE HERE
function isEven(integer){
    
  var value;

  if(integer%2===0){
    value = true;
  } else {
   value = false;
  }

 return value;
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-01');
  console.log('%cFunction: isEven', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Function should return boolean `false` for odd values
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(isEven(1) === false )
console.assert(isEven(3) === false )
console.assert(isEven(7) === false )
console.assert(isEven(11) === false )
console.assert(isEven(17) === false )
console.assert(isEven(33) === false )
console.assert(isEven(101) === false )


/* ----------------------- TEST-2  ----------------------- */
// Function should return boolean `true` for even falues
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert(isEven(2) === true )
console.assert(isEven(4) === true )
console.assert(isEven(10) === true )
console.assert(isEven(14) === true )
console.assert(isEven(42) === true )
console.assert(isEven(100) === true )

console.log('\n\n');
