/**
 * new User()
 *
 * (1) Create a User constructor function that creates new users.
 *      It should accept 2 string arguments: a name and a user-role.
 *      and create an object instance that has 3 properties:
 *      - name (string)
 *      - role (string -- value should be 'visitor', 'member', 'editor', 'admin')
 *      - createdAt should be a number with the value of Date.now()
 *
 *
 * (2) Create a method called `.hasPermissions()`
 *     on the prototype that accepts an array of roles.
 *
 *     The method should check to see if a given user
 *     has permissions -- should return true.
 *
**/


// ++ YOUR CODE HERE
function User(userName,userType) {

	var newObj = {
		name: userName,
		role: userType,
		createdAt: Date.now(),
		hasPermissions : function (checker) {
			if (this.role === checker[0] || this.role === checker[1]) {
				return true;
			} else {
				return false;
			}
		}
	}

	return newObj;
}
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
console.group('ex-09');
  console.log('%cFunction: newUser', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// User should be a function (specifically a constructor function)
/* ------------------------------------------------------ */

console.assert(typeof User === 'function')

/* ----------------------- TEST-2a  ----------------------- */
// Expected Outputs for User('jill88', 'visitor')
//   constructor function
/* ------------------------------------------------------ */
console.log("TEST-2a");

var simpleUser = new User('jill88', 'visitor')

console.assert(simpleUser.name === 'jill88')
console.assert(simpleUser.role === 'visitor')
console.assert(typeof simpleUser.createdAt === 'number' )
console.assert(simpleUser.createdAt <= Date.now() )

/* ----------------------- TEST-2b  ----------------------- */
// .hasPermissions method should return 'true' if
//    string value for `role` property
//    is found method's array input
/* ------------------------------------------------------ */
console.log("TEST-2b");

var contentCreatorList = ['editor', 'admin']
console.assert(simpleUser.hasPermissions(contentCreatorList) === false )



/* ----------------------- TEST-3a  ----------------------- */
// .hasPermissions method should return 'true' if
//    string value for `role` property
//    is found method's array input
/* ------------------------------------------------------ */
console.log("TEST-3a");

var adminUser = new User('jack76', 'admin')

console.assert(adminUser.name === 'jack76')
console.assert(adminUser.role === 'admin')
console.assert(typeof adminUser.createdAt === 'number' )
console.assert(simpleUser.createdAt <= Date.now() )


/* ----------------------- TEST-3b  ----------------------- */
// .hasPermissions method should return 'false' if
//    string value for `role` property
//    is not in the method's array input
/* ------------------------------------------------------ */
console.log("TEST-3b");

var contentCreatorList = ['editor', 'admin']
console.assert(adminUser.hasPermissions(contentCreatorList) === true )
