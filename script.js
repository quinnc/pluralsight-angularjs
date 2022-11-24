// Code goes here

// immediately invoked function expression IIFE
// ( function() { ... code ...}() );
(function() {
// "Revealing module pattern"
var createWorker = function() {

	var workCount = 0;

	var task1 = function() {
		workCount += 1;
		console.log("task1 " + workCount);
	};

	var task2 = function() {
		workCount += 2;
		console.log("task2 " + workCount);
	}

	// defines the public API
	return {
		job1: task1,
		job2: task2

	}
};


var worker = createWorker();
worker.job1();
worker.job2();

worker.job2();
worker.job2();
worker.job1();


}());