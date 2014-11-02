'use strict';
var chainCallBacks = (function(){

	var doStuffThenCont = function(cont){
		console.log('do stuff');
		cont();
	};

	var dos2 = function(cont1){
		doStuffThenCont(function(){
			console.log('cont');
		});
		cont1();
	};

	var dos3 = function(cont2){
		dos2(function(){
			console.log('cont1');
		});
		cont2();
	};

	var doAndCont = function(n,cont){
		console.log('n ' + n);
		cont();
	};

	var doAndContN = function(n){
		var i = 0;
		var cont = function(){console.log('end');};
		for(i; i <= n; i++){
			cont = semWorkaround(i,cont);
		}
		return cont;
	};
	
	var doAndContNRecusive = function(max,n,cont){
		if(n === max){
			console.log(' base, n ' + n + ' cont ' + cont);
			cont();
		}
		else {
			console.log('max ' + max + ' n ' + n + ' cont ' + cont);
			doAndContNRecusive(max,n+1,function(){
				  console.log('n ' + n);
				  cont();
			});
		}
	};

	//so we don't have to make functions with function literals in a loop body
	var semWorkaround = function(i,func){
		return function(){doAndCont(i,func);};
	};

	return {
		//make_callbackchain:make_callbackchain
		dos3:dos3,
	        doAndCont: doAndCont,
                doAndContN:doAndContN,
		doAndContNRecusive:doAndContNRecusive
	};
})();

//chainCallBacks.dos3(function(){console.log('cont2');});
//chainCallBacks.doAndCont(1, function(){
//			chainCallBacks.doAndCont(2, function(){
//				chainCallBacks.doAndCont(3, function(){
//					chainCallBacks.doAndCont(4,function(){
//						console.log('end');
//					});
//				});
//			});
//});
//chainCallBacks.doAndContN(6)();
chainCallBacks.doAndContNRecusive(5,0,function(){console.log('end');});
//console.log(' p ' + p);

