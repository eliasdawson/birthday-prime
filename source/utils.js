/**
 * Is n a number?
 * @param  {*} n The item to test
 * @return {Boolean} True iff n is a number
 */
exports.isNumber = function ( n ) {
  return ( typeof n === 'number' && !isNaN( n ) );
};

/**
 * Is n an integer?
 * @param  {*} n The item to test
 * @return {Boolean} True iff n is an integer
 */
exports.isInteger = function ( n ) {
  return ( exports.isNumber( n ) && n % 1 === 0 );
};

/**
 * Generate an array of integers between two numbers, inclusive
 * @param  {number} first first number in the list, must be integer
 * @param  {number} last last number in the list, must be integer
 * @return {Array<number}> List of integers from first to last
 */
exports.generateArrayOfIntegers = function( first, last ) {
  var i;
  var list = [];

  if ( !exports.isInteger( first ) ) {
    throw new TypeError( 'first number must be an integer' );
  }

  if ( !exports.isInteger( last ) ) {
    throw new TypeError( 'last number must be an integer' );
  }

  if ( first <= last ) {
    for ( i = first; i <= last; i += 1 ) {
      list.push(i);
    }
  } else {
    for ( i = first; i >= last; i -= 1 ) {
      list.push(i);
    }
  }

  return list;
};

/**
 * Pass to native Array.sort method to sort array of numbers
 * in ascending order by value.
 * @param  {number} a number to compare
 * @param  {number} b number to compare
 * @return {number}   sort relationship
 */
exports.sortAscendingByValue = function ( a, b ) {
  return a - b;
};
