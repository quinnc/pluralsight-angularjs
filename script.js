// Code goes here

var work = function() {
	console.log("working hard!");
};

var doWork = function(f) {
	console.log("starting");
	try {
	f();
	} catch(ex) {
		console.log('failed');
	}
	console.log("complete");
};

doWork(work);
