var primes = require( '../source/primes' );

describe( 'Primes', function () {

  var noop = function() {};

  describe( 'generatePrimes', function () {

    it( 'should generate all prime numbers up to the specified maximum', function () {
      expect( primes.generatePrimes( 2 ) ).toEqual( [ 2 ] );
      expect( primes.generatePrimes( 3 ) ).toEqual( [ 2, 3 ] );
      expect( primes.generatePrimes( 10 ) ).toEqual( [ 2, 3, 5, 7 ] );
    });

    it( 'should generate an empty list if the argument is < 2', function () {
      expect( primes.generatePrimes( 1 ) ).toEqual( [] );
      expect( primes.generatePrimes( 0 ) ).toEqual( [] );
      expect( primes.generatePrimes( -10 ) ).toEqual( [] );
    });

    it( 'should throw a type error if argument is not a number', function () {
      expect( function() {
        primes.generatePrimes( null );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimes( NaN );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimes( {} );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimes( [ 1 ] );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimes( '1' );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimes( true );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimes( noop );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimes( undefined );
      }).toThrowError( TypeError );
    });

  });

  describe( 'generatePrimeSums', function () {

    it( 'should generate all sums of 2 prime numbers up to the specified maximum', function () {
      expect( primes.generatePrimeSums( 3 ) ).toEqual( [] );
      expect( primes.generatePrimeSums( 10 ) ).toEqual( [ 4, 5, 6, 7, 8, 9, 10 ] );
    });

    it( 'should throw a type error if argument is not a number', function () {
      expect( function() {
        primes.generatePrimeSums( null );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeSums( NaN );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeSums( {} );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeSums( [ 1 ] );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeSums( '1' );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeSums( true );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeSums( noop );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeSums( undefined );
      }).toThrowError( TypeError );
    });

  });

  describe( 'generatePrimeProducts', function () {

    it( 'should generate all sums of 2 prime numbers up to the specified maximum', function () {
      expect( primes.generatePrimeProducts( 3 ) ).toEqual( [] );
      expect( primes.generatePrimeProducts( 10 ) ).toEqual( [ 4, 6, 9, 10 ] );
    });

    it( 'should throw a type error if argument is not a number', function () {
      expect( function() {
        primes.generatePrimeProducts( null );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeProducts( NaN );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeProducts( {} );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeProducts( [ 1 ] );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeProducts( '1' );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeProducts( true );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeProducts( noop );
      }).toThrowError( TypeError );

      expect( function() {
        primes.generatePrimeProducts( undefined );
      }).toThrowError( TypeError );
    });

  });

});
