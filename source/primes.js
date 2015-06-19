var uniq = require('lodash/array/uniq');
var utils = require( './utils' );


/**
 * List all prime numbers less than or equal to a maximum
 * Uses the Sieve of Eratosthenes
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param  {number} max Maximum number to search for inclusive
 * @return {Array.<number>} List all prime numbers <= argument
 */
exports.generatePrimes = function( max ) {
  var i, j, sieve;
  var primes = [];

  if ( !utils.isNumber( max ) ) {
    throw new TypeError( 'Argument must be a number' );
  } else if ( max >= 2 ) {

    // Create list to store if index is prime or not
    sieve = new Array( max + 1 );

    // Initialize list to true
    for ( i = 2; i <= max; i += 1 ) {
      sieve[ i ] = true;
    }

    // Sieve of Eratosthenes
    for ( i = 2; i <= Math.sqrt( max ); i += 1 ) {
      if ( sieve[ i ] === true ) {
        for ( j = Math.pow( i, 2 ); j <= max; j += i ) {
          sieve[ j ] = false;
        }
      }
    }

    for ( i = 2; i <= max; i += 1 ) {
      if ( sieve[ i ] === true ) {
        primes.push( i );
      }
    }
  }

  return primes;
};

/**
 * List all sums of 2 prime numbers less than or equal to a maximum
 * @param  {number} max Maximum number to search for inclusive
 * @return {Array.<number>} List all sums of 2 prime numbers <= argument
 */
exports.generatePrimeSums = function( max ) {
  var sums = [];
  var primes = exports.generatePrimes( max );

  if ( !utils.isNumber( max ) ) {
    throw new TypeError( 'Argument must be a number' );
  } else if ( max >= 2 ) {

    primes.forEach( function( p1 ) {
      primes.forEach( function( p2 ) {
        var sum = p1 + p2;
        if ( sum <= max ) {
          sums.push( sum );
        }
      });
    });

    sums.sort( utils.sortAscendingByValue );
    sums = uniq( sums, true );
  }

  return sums;
};

/**
 * List all products of 2 prime numbers less than or equal to a maximum
 * @param  {number} max Maximum number to search for inclusive
 * @return {Array.<number>} List all products of 2 prime numbers <= argument
 */
exports.generatePrimeProducts = function( max ) {
  var products = [];
  var primes = exports.generatePrimes( max );

  if ( !utils.isNumber( max ) ) {
    throw new TypeError( 'Argument must be a number' );
  } else if ( max >= 2 ) {

    primes.forEach( function( p1 ) {
      primes.forEach( function( p2 ) {
        var product = p1 * p2;
        if ( product <= max ) {
          products.push( product );
        }
      });
    });

    products.sort( utils.sortAscendingByValue );
    products = uniq( products, true );
  }

  return products;
};
