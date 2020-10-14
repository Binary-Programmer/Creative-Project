window.onload = loadRecipes;

document.getElementById("search").addEventListener("submit", function(event) {
	event.preventDefault();
	loadRecipes(document.getElementById("ingredients").value);
});

async function loadRecipes(ingredients) {
	let json = await queryRecipes(ingredients);
	let everything = `
		<div id="section1" class="container-fluid table-responsive" style="padding-top:70px;padding-bottom:70px;background-color:white">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Ingredients</th>
						<th>Site</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
					</tr>
		`;
	for(let recipe of json.results) {
		everything += "<tr>";
		everything += ("<td>" + recipe.title + "</td>");
		everything += ("<td>" + recipe.ingredients + "</td>");
		everything += ("<td>" + recipe.href + "</td>");
		everything += "</tr>";
	}
	everything += `
				</tbody>
			</table>
		</div>
	`;
	document.getElementById("searchTable").innerHTML = everything;
}

async function queryRecipes(ingredients) {
	let myurl = "https://cors-anywhere.herokuapp.com";
	myurl += "/http://www.recipepuppy.com/api/?q=dessert&p=1";
	console.log(myurl);
	let result = await fetch(myurl, {mode: 'cors'})
	.then(function(response) {
		return response.json();
	}).then(function(json) {
		return json;
	});
	return result;
}