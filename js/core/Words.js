/**********************

Convert a word.html to a JSON containing innerHTMLs

**********************/

window.Words = {};
Words.text = {
	"title": "Climate Commons",
	"subtitle": "With Climate Commons, we aim to communicate complex climate issues in interactive ways. <br /> <br /> We&apos;re launching soon! In the meantime, we&apos;re curious about the topics you&apos;d vibe with :)",
	"question": "",
	"submit": "Submit",
	"placeholder": "Enter Question Here",
	"thankyou": "Thank you!"
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