// JavaScript for TP7

// function to load a file from the URL "fromFile" into the object identified by "whereTo"
function brownBeagle(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
	
	this.recipeName = recipeName;
	this.contributor = contributorName;
	this.imageURL = imageURL;
	this.ingredients = ingredientsURL;
	this.equipment = equipmentURL;
	this.directions = directionsURL;
	
	this.displayRecipe = function() {
		
		document.querySelector("#header h1").innerHTML = this.recipeName;
		document.querySelector("#contributor").innerHTML = this.contributor;
		document.querySelector("#header").style.backgroundImage = "url(" + this.imageURL + ")";
		loadFileInto(this.ingredients, "#ingredients ul");
		loadFileInto(this.equipment, "#equipment ul");
		loadFileInto(this.directions, "#directions ol");
		
	}
	
}


Guac = new Recipe(
	"Guacamole", 
	"Doug", 
	" ", 
	"ingredients.html", 
	"equipment.html", 
	"directions.html"
);


window.onload = function() {
  
  document.querySelector("firstRecipe").onclick = function() {
    Guac.displayrecipe();
  }
  
  
  
  
}
