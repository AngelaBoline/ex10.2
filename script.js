$("document").ready(function() {
	$("[data-type='vitamin']").css("background-color", "#12500F");
	$("[data-type='mineralwater']").css("background-color", "#2982D0");
	$("[data-type='proteinbar']").css("background-color", "#4E0F50");

	/** addEventListeners added to each of the checkboxes to listen for the change event.
	Event is fired when the checked status of the checkbox changes. The event 
	handler function then calls the function updateProductView 

	updateProductView takes two arguments
		- type of the product 
		- checked state of the checkbox
	**/

	document.querySelector("#cbVitamins").addEventListener("change", function (evt) {
		updateProductView("vitamins", evt.target.checked);
	});

	document.querySelector("#cbMineralWater").addEventListener("change", function (evt) {
		updateProductView("mineralwater", evt.target.checked);
	});

	document.querySelector("#cbProtein").addEventListener("change", function (evt) {
		updateProductView("proteinbar", evt.target.checked);
	});


/** 

I understood what was happening until we got to this part

To change the visibility of the parent list item tag that contains each product write a jQuery selector 
that will find all of the list item tags, but will narrow the scope only to those item tags that have an H2 
with a particular value in the data-type attribute. Based on the value of the product type, my code then defines 
a string variable that will contain a selector.


Showing and hiding li tags

**/

function updateProductView(categoryName, bVisible) {
 
    var dataSelectorVal = ""; //based on the value of the product type, the code defines a string variable that contains a selector
    switch (categoryName) {
    case "vitamins":
        dataSelectorVal = "h2[data-type='vitamin']"; //sub selector 
        break;
    case "mineralwater":
        dataSelectorVal = "h2[data-type='mineralwater']";
        break;
    case "proteinbar":
        dataSelectorVal = "h2[data-type='proteinbar']";
        break;
    }

/**
Write a selector to select all the elements that have the CSS class of product-item which will give me all 
of the list item tags

Then call the 'has' function to narrow selection to each list item that has the selector h2[data-type...]}
**/ 

    $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
}

}
	);

