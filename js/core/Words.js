/**********************

Convert a word.html to a JSON containing innerHTMLs

**********************/

window.Words = {};
Words.text = {
	"title": "Climate Commons",
	"subtitle": "Climate Commons is a resource bank to communicate complex sustainability concepts as interactive essays",
	"question": "In the meantime, what sustainability concepts would you like to learn more about?",
	"submit": "Submit",
	"placeholder": "Enter Question Here"
};

Words.get = function(id){
	console.log(id)
	return Words.text[id];
};

Words.convert = function(filepath){

	// Promise
	var deferred = Q.defer();

	// Get dat stuff
	var request = pegasus(filepath);
	request.then(
		
		// success handler
		function(data, xhr) {

			// Convert HTML...
			var words = document.createElement("div");
			words.innerHTML = xhr.response;
			var paragraphs = words.querySelectorAll("p");

			// ...to a JSON
			Words.text = {}; // new one!
			for(var i=0;i<paragraphs.length;i++){
				var p = paragraphs[i];
				var id = p.id;
				var html = p.innerHTML;
				Words.text[id] = html;
			}

			// Fulfil promise!
			deferred.resolve(Words.text);

		},

		// error handler (optional)
		function(data, xhr) {
			alert("AHHHHHHHHHHHH, PROBLEM LOADING WORDS");
			console.error(data, xhr.status)
		}

	);

	// Return Promise
	return deferred.promise;

};