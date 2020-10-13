document.getElementById("search").addEventListener("submit", function(event) {
	event.preventDefault();
	let myurl = "https://cors-anywhere.herokuapp.com";
	myurl += "/http://www.recipepuppy.com/api/?q=dessert&p=1";
	console.log(myurl);
	fetch(myurl, {mode: 'cors'})
	.then(function(response) {
		return response.json();
		}).then(function(json) {
		console.log(json);
	});	
});
