/**
 * showStats()
 *
 * Write a function called showStats() that takes a number and an array of numbers
 * it should return an object with 4 properties:
 *    1) count_inputEqualTo: the number of elements in the array that the input number is greater than
 *    2) count_inputGreaterThan: the number of elements in the array that the input is less than
 *    3) count_inputLessThan : the number of elements in the array that the input is equal to.
 *    4) inputArraySize: the quantity of elements in the set (not including input, obvs.)
 *
 *  Ex:   showStats(3, [1,2,3,4,5,6,5,4,3,2,1])
 *   => {
 *     countValuesInputIsEqualTo: 2,
 *	   countValuesInputIsGreaterThan: 4,
 *     countValuesInputIsLessThan: 5,
 *     inputArraySize: 11
 *   }
**/



// ++ YOUR CODE HERE

function showStats (num, arrayOfNumbers) {

	var objOfProps = {};
	var arrayLength = arrayOfNumbers.length;
  	var counterSame = 0;
	var counterSmaller = 0;
	var counterLarger = 0;

	for (var i=0; i<arrayLength; i++) {
		var checkNum = arrayOfNumbers[i];

		if (num === checkNum) {
			counterSame++;
		}
		if (num > checkNum) {
			counterLarger++;
		}
		if (num < checkNum){
			counterSmaller++;
		}
	}
	
	objOfProps["count_inputEqualTo"] = counterSame;
	objOfProps["count_inputGreaterThan"] = counterLarger;
	objOfProps["count_inputLessThan"] = counterSmaller;
	objOfProps["inputArraySize"] = arrayLength;
	
	return objOfProps;
}
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
console.group('ex-08');
  console.log('%cFunction: showStats', 'background-color: green; color: white')
console.groupEnd();


var parkingTicketsCount = [33, 44, 22, 21, 92, 63, 12, 42, 56, 11, 99,
482, 42, 56, 42, 19, 20, 88, 38, 18, 12, 64, 42, 21,
33, 31, 10, 84, 53, 13, 42, 4493, 31, 24, 55, 32, 42, 11, 56]


/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log("TEST-1");
var stats_1  = showStats(42, parkingTicketsCount)

console.assert( typeof stats_1 === 'object'  );

console.assert( stats_1.inputArraySize === 39  );
console.assert( stats_1.countValuesInputIsEqualTo === 6  ) ;
console.assert( stats_1.countValuesInputIsGreaterThan === 19  ) ;
console.assert( stats_1.countValuesInputIsLessThan === 14  ) ;


/* ----------------------- TEST-2  ----------------------- */
// Expected Outputs
/* ------------------------------------------------------ */
console.log("TEST-2");
var stats_2 =  showStats(56, parkingTicketsCount)

// Should return an object
console.assert( typeof stats_2 === 'object'  );

// Should return an object
console.assert( stats_2.inputArraySize === 39  );
console.assert( stats_2.countValuesInputIsGreaterThan === 28 ) ;
console.assert( stats_2.countValuesInputIsLessThan === 8 ) ;
console.assert( stats_2.countValuesInputIsEqualTo === 3 ) ;
