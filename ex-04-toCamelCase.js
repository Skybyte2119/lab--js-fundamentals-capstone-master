
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */



 // ++ YOUR CODE HERE
 function toCamelCase(text){
  var newArray = lowerCaseOut(text);
  var message ="";

  for(var i = 0; i < newArray.length; i++){
      var current = newArray[i];

      if(current === " "){
          newArray[i+1] = newArray[i+1].toUpperCase();
          newArray[i] = "";            
      } 
  }

  for (var j = 0; j < newArray.length; j++){
      message += newArray[j];
  }
  return message;
}

function lowerCaseOut(string){
  var newArray = Array.from(string);
  var final = [];
  for (var i = 0; i < newArray.length; i++){
      final.push(newArray[i].toLowerCase());
  }
  return final
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: toCamelCase', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert( toCamelCase("fetch records") === 'fetchRecords' )
console.assert( toCamelCase("create table row") === 'createTableRow' )
console.assert( toCamelCase("convert to HTML") === 'convertToHtml' )
console.assert( toCamelCase("get user account ID") === 'getUserAccountId' )


/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
