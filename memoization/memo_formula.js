'use strict';
//desired result is a version of the input recursive function that will
// 'cache' or memoize intermediate results.  the recursive function
//  should be just a simple function that takes a simple
//

GLOBAL.arb = 'arb';

GLOBAL.memoize = (function(){
  var memoized_formula = function(formula_function){
  	var memo = [];
  };
  
  var memoized_fibonacci = function(fib){
  	var memo = [0,1,1];
  
  	var fib_alt = function(fib){
  		if(!(memo[fib] === null || memo[fib] === undefined)){
  			return memo[fib];
  		}
  		if(memo[fib - 1] === null || memo[fib - 1] === undefined){
  			memo[fib -1] = fib_alt(fib - 1);
			console.log(memo[fib-1]);
  		}
  		return fib_alt(fib - 1) + memo[fib-2];
  	};
  	return fib_alt(fib);
  };
  
  var fibonacci = function(fib){
  	if(fib === 0) {return 0;}
	if(fib === 1 || fib === 2) {return 1;}
  	return fibonacci(fib - 1) + fibonacci(fib -2);
  };

  return {
   fibonacci : fibonacci,
   memoized_fibonacci : memoized_fibonacci
  };

}());
