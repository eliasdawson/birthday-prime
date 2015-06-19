var utils = require( '../source/utils' );

describe( 'Utilties', function () {

  var noop = function() {};

  describe( 'isNumber', function () {

    it( 'should return true if the argument is a number', function () {
      expect( utils.isNumber( 1 ) ).toBe( true );
      expect( utils.isNumber( 1.5 ) ).toBe( true );
      expect( utils.isNumber( -1 ) ).toBe( true );
      expect( utils.isNumber( 0 ) ).toBe( true );
    });

    it( 'should return false if the argument is not a number', function () {
      expect( utils.isNumber( NaN ) ).toBe( false );
      expect( utils.isNumber( {} ) ).toBe( false );
      expect( utils.isNumber( [ 1 ] ) ).toBe( false );
      expect( utils.isNumber( '1' ) ).toBe( false );
      expect( utils.isNumber( true ) ).toBe( false );
      expect( utils.isNumber( noop ) ).toBe( false );
      expect( utils.isNumber( null ) ).toBe( false );
      expect( utils.isNumber( undefined ) ).toBe( false );
    });

  });

  describe( 'isInteger', function () {

    it( 'should return true if the argument is an integer', function () {
      expect( utils.isInteger( 1 ) ).toBe( true );
      expect( utils.isInteger( 0 ) ).toBe( true );
      expect( utils.isInteger( -1 ) ).toBe( true );
    });

    it( 'should return false if the argument is an integer', function () {
      expect( utils.isInteger( 1.5 ) ).toBe( false );
      expect( utils.isInteger( -0.25 ) ).toBe( false );
      expect( utils.isInteger( NaN ) ).toBe( false );
      expect( utils.isInteger( {} ) ).toBe( false );
      expect( utils.isInteger( [ 1 ] ) ).toBe( false );
      expect( utils.isInteger( '1' ) ).toBe( false );
      expect( utils.isInteger( true ) ).toBe( false );
      expect( utils.isInteger( noop ) ).toBe( false );
      expect( utils.isInteger( null ) ).toBe( false );
      expect( utils.isInteger( undefined ) ).toBe( false );
    });

  });

  describe( 'generateArrayOfIntegers', function () {

    it( 'should include all integers between the arguments', function () {
      expect( utils.generateArrayOfIntegers( 1, 3 ) ).not.toBe( [ 1, 2, 3 ] );
    });

    it( 'should include the numbers passed', function () {
      var list = utils.generateArrayOfIntegers( 1, 10 );
      expect( list.indexOf( 1 ) ).not.toBe( -1 );
      expect( list.indexOf( 10 ) ).not.toBe( -1 );
    });

    it( 'should start with the first number passed', function () {
      var list = utils.generateArrayOfIntegers( 1, 10 );
      expect( list.indexOf( 1 ) ).toBe( 0 );
    });

    it( 'should start end the last number passed', function () {
      var list = utils.generateArrayOfIntegers( 1, 10 );
      expect( list.indexOf( 10 ) ).toBe( list.length - 1 );
    });

    it( 'should respect order of arguments', function () {
      expect( utils.generateArrayOfIntegers( 1, 3 ) ).not.toBe( [ 1, 2, 3 ] );
      expect( utils.generateArrayOfIntegers( 3, 1 ) ).not.toBe( [ 3, 2, 1 ] );
    });

    it( 'should not duplicate first and last numbers if identical', function () {
      expect( utils.generateArrayOfIntegers( 1, 1 ).length ).toBe( 1 );
    });

    it( 'should throw type error if either argument is not an integer', function () {
      expect( function() {
        utils.generateArrayOfIntegers( 1.5, 3 );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( 1, 3.1 );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( null, 1 );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( 1, NaN );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( {}, 1 );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( 1, [ 1 ] );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( '1', 1 );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( 1, true );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( noop, 1 );
      }).toThrowError( TypeError );

      expect( function() {
        utils.generateArrayOfIntegers( 1, undefined );
      }).toThrowError( TypeError );

    });

  });

  describe( 'sortAscendingByValue', function () {

    it( 'should return a negative number if a < b', function () {
      expect( utils.sortAscendingByValue( 1, 2 ) ).toBeLessThan( 0 );
    });

    it( 'should return a positive number if a > b', function () {
      expect( utils.sortAscendingByValue( 2, 1 ) ).toBeGreaterThan( 0 );
    });

    it( 'should return 0 if a equals b', function () {
      expect( utils.sortAscendingByValue( 1, 1 ) ).toBe( 0 );
    });

    it( 'should function when passed to Array.sort', function () {
      expect( [ 2, 1, 3 ].sort( utils.sortAscendingByValue ) ).toEqual( [ 1, 2, 3 ] );
    });

  });

});
